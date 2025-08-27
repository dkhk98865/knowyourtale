import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase-server';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = headers().get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = createClient();

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        const { plan, characterId } = session.metadata;
        
        if (plan === 'single' || plan === 'allReports') {
          // Handle one-time report purchases
          const customerEmail = session.customer_details?.email;
          
          if (customerEmail) {
            // Get user ID from email
            const { data: userData } = await supabase.auth.admin.getUserByEmail(customerEmail);
            
            if (userData?.user) {
              // Create user access record
              const { error: insertError } = await supabase
                .from('user_report_access')
                .insert({
                  user_id: userData.user.id,
                  user_email: customerEmail,
                  access_type: plan,
                  character_id: characterId || null,
                  stripe_payment_intent_id: session.payment_intent,
                  status: 'active',
                  expires_at: plan === 'single' ? null : null, // Single reports don't expire, all reports are permanent
                });

              if (insertError) {
                console.error('Error creating user access record:', insertError);
              }
            }
          }
        } else if (plan === 'monthly') {
          // Handle monthly subscription (existing logic)
          const customerEmail = session.customer_details?.email;
          
          if (customerEmail) {
            const { error: insertError } = await supabase
              .from('user_subscriptions')
              .insert({
                user_email: customerEmail,
                stripe_subscription_id: session.subscription,
                plan: 'monthly',
                status: 'active',
                current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
              });

            if (insertError) {
              console.error('Error creating subscription record:', insertError);
            }
          }
        }
        break;

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        const subscription = event.data.object;
        const subscriptionEmail = subscription.metadata?.email;
        
        if (subscriptionEmail) {
          const { error: upsertError } = await supabase
            .from('user_subscriptions')
            .upsert({
              user_email: subscriptionEmail,
              stripe_subscription_id: subscription.id,
              plan: subscription.metadata?.plan || 'monthly',
              status: subscription.status,
              current_period_end: new Date(subscription.current_period_end * 1000),
            }, {
              onConflict: 'stripe_subscription_id'
            });

          if (upsertError) {
            console.error('Error upserting subscription:', upsertError);
          }
        }
        break;

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object;
        const deletedEmail = deletedSubscription.metadata?.email;
        
        if (deletedEmail) {
          const { error: updateError } = await supabase
            .from('user_subscriptions')
            .update({
              status: 'canceled',
              updated_at: new Date().toISOString(),
            })
            .eq('stripe_subscription_id', deletedSubscription.id);

          if (updateError) {
            console.error('Error updating deleted subscription:', updateError);
          }
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
