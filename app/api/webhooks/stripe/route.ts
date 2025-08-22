import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase-client';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
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
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  const supabase = createClient();

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const subscription = event.data.object as any;
        const customerId = subscription.customer as string;
        const plan = subscription.metadata.plan;
        const status = subscription.status;
        const currentPeriodEnd = subscription.current_period_end;

        // Get customer email from Stripe
        const customer = await stripe.customers.retrieve(customerId);
        
        if ('email' in customer && customer.email) {
          const email = customer.email;
          // Update user subscription in Supabase
          const { error } = await supabase
            .from('user_subscriptions')
            .upsert({
              user_email: email,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscription.id,
              plan: plan,
              status: status,
              current_period_end: currentPeriodEnd ? new Date(currentPeriodEnd * 1000).toISOString() : null,
              updated_at: new Date().toISOString()
            });

          if (error) {
            console.error('Error updating subscription in Supabase:', error);
          }
        }
        break;

      case 'customer.subscription.deleted':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const deletedSubscription = event.data.object as any;
        const deletedCustomerId = deletedSubscription.customer as string;

        // Get customer email from Stripe
        const deletedCustomer = await stripe.customers.retrieve(deletedCustomerId);
        
        if ('email' in deletedCustomer && deletedCustomer.email) {
          const deletedEmail = deletedCustomer.email;
          // Update subscription status to cancelled in Supabase
          const { error } = await supabase
            .from('user_subscriptions')
            .update({
              status: 'canceled',
              updated_at: new Date().toISOString()
            })
            .eq('user_email', deletedEmail);

          if (error) {
            console.error('Error updating subscription status in Supabase:', error);
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
