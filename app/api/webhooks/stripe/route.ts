import { NextRequest, NextResponse } from 'next/server';

import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';
import { headers } from 'next/headers';
import { Stripe } from 'stripe';

// This route handles both /api/webhooks/stripe and /api/webhooks/stripe/
// The 308 redirect suggests Next.js is adding trailing slashes automatically
export async function POST(request: NextRequest) {
  try {
    console.log('🔔 Webhook received - starting processing...');
    
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');

    console.log('📝 Webhook signature:', signature ? 'Present' : 'Missing');
    console.log('📊 Webhook body length:', body.length);

    if (!signature) {
      console.error('❌ No signature found in webhook');
      return NextResponse.json({ error: 'No signature' }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-07-30.basil',
    });

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
      console.log('✅ Webhook signature verified successfully');
      console.log('🎯 Event type:', event.type);
      console.log('🆔 Event ID:', event.id);
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const supabase: SupabaseClient = await createClient();
    console.log('🔗 Supabase client created successfully');

    // Test database connection and table access
    console.log('🔍 Testing database connection...');
    const { error: testError } = await supabase
      .from('user_report_access')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.error('❌ Database connection test failed:', testError);
      console.error('❌ This suggests the table might not exist or there are permission issues');
      
      // Log the error to webhook_logs table
      await supabase.from('webhook_logs').insert({
        event_type: 'database_connection_test',
        status: 'failed',
        error_message: JSON.stringify(testError)
      });
    } else {
      console.log('✅ Database connection test successful');
      
      // Log successful connection test
      await supabase.from('webhook_logs').insert({
        event_type: 'database_connection_test',
        status: 'success'
      });
    }

    try {
      switch (event.type) {
        case 'checkout.session.completed':
          console.log('💰 Processing checkout.session.completed event...');
          const session = event.data.object;
          const metadata = session.metadata;
          
          console.log('📋 Session metadata:', metadata);
          console.log('📧 Customer email:', session.customer_details?.email);
          
          // Log the webhook event
          await supabase.from('webhook_logs').insert({
            event_type: 'checkout.session.completed',
            stripe_event_id: event.id,
            user_email: session.customer_details?.email,
            plan: metadata?.plan,
            character_id: metadata?.characterId,
            status: 'processing'
          });
          
          if (metadata && (metadata.plan === 'single' || metadata.plan === 'allReports')) {
            console.log('📊 Processing report purchase:', metadata.plan);
            // Handle one-time report purchases
            const { plan, characterId } = metadata;
            const customerEmail = session.customer_details?.email;
            
            console.log('🎭 Character ID:', characterId);
            console.log('📧 Customer email:', customerEmail);
            
            if (customerEmail) {
              console.log('💾 Attempting to create user access record...');
              console.log('📋 Insert data:', {
                user_email: customerEmail,
                access_type: plan,
                character_id: characterId || null,
                stripe_payment_intent_id: session.payment_intent,
                status: 'active'
              });
              
              // Create user access record
              const { data: insertData, error: insertError } = await supabase
                .from('user_report_access')
                .insert({
                  user_email: customerEmail,
                  access_type: plan,
                  character_id: characterId || null,
                  stripe_payment_intent_id: session.payment_intent,
                  status: 'active'
                })
                .select(); // Add .select() to get the inserted data

              if (insertError) {
                console.error('❌ Error creating user access record:', insertError);
                console.error('❌ Error details:', {
                  code: insertError.code,
                  message: insertError.message,
                  details: insertError.details,
                  hint: insertError.hint
                });
                
                // Log the error to webhook_logs table
                await supabase.from('webhook_logs').insert({
                  event_type: 'user_access_record_creation',
                  stripe_event_id: event.id,
                  user_email: customerEmail,
                  plan: plan,
                  character_id: characterId || null,
                  status: 'failed',
                  error_message: JSON.stringify(insertError)
                });
              } else {
                console.log('✅ User access record created successfully!');
                console.log('✅ Inserted data:', insertData);
                
                // Log the success to webhook_logs table
                await supabase.from('webhook_logs').insert({
                  event_type: 'user_access_record_creation',
                  stripe_event_id: event.id,
                  user_email: customerEmail,
                  plan: plan,
                  character_id: characterId || null,
                  status: 'success'
                });
              }
            } else {
              console.log('⚠️ No customer email found in session');
            }
          } else if (metadata?.plan === 'monthly') {
            console.log('📅 Processing monthly subscription...');
            // Handle monthly subscription (existing logic)
            const customerEmail = session.customer_details?.email;
            
            if (customerEmail) {
              console.log('💾 Attempting to create subscription record...');
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
                console.error('❌ Error creating subscription record:', insertError);
              } else {
                console.log('✅ Subscription record created successfully!');
              }
            }
          } else {
            console.log('⚠️ No valid plan found in metadata:', metadata);
          }
          break;

        case 'customer.subscription.created':
        case 'customer.subscription.updated':
          console.log('📅 Processing subscription event:', event.type);
          const subscription = event.data.object;
          const subscriptionEmail = subscription.metadata?.email;
          
          console.log('📧 Subscription email:', subscriptionEmail);
          console.log('🆔 Subscription ID:', subscription.id);
          
          if (subscriptionEmail) {
            console.log('💾 Attempting to upsert subscription record...');
            const { error: upsertError } = await supabase
              .from('user_subscriptions')
              .upsert({
                user_email: subscriptionEmail,
                stripe_subscription_id: subscription.id,
                plan: subscription.metadata?.plan || 'monthly',
                status: subscription.status,
                current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Default to 30 days from now
              }, {
                onConflict: 'stripe_subscription_id'
              });

            if (upsertError) {
              console.error('❌ Error upserting subscription:', upsertError);
            } else {
              console.log('✅ Subscription record upserted successfully!');
            }
          } else {
            console.log('⚠️ No subscription email found in metadata');
          }
          break;

        case 'customer.subscription.deleted':
          console.log('🗑️ Processing subscription deletion...');
          const deletedSubscription = event.data.object;
          const deletedEmail = deletedSubscription.metadata?.email;
          
          console.log('📧 Deleted subscription email:', deletedEmail);
          console.log('🆔 Deleted subscription ID:', deletedSubscription.id);
          
          if (deletedEmail) {
            console.log('💾 Attempting to update deleted subscription status...');
            const { error: updateError } = await supabase
              .from('user_subscriptions')
              .update({
                status: 'canceled',
                updated_at: new Date().toISOString(),
              })
              .eq('stripe_subscription_id', deletedSubscription.id);

            if (updateError) {
              console.error('❌ Error updating deleted subscription:', updateError);
            } else {
              console.log('✅ Deleted subscription status updated successfully!');
            }
          } else {
            console.log('⚠️ No deleted subscription email found in metadata');
          }
          break;

        default:
          console.log(`ℹ️ Unhandled event type: ${event.type}`);
      }

      console.log('✅ Webhook processing completed successfully');
      return NextResponse.json({ received: true });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json(
        { error: 'Webhook processing failed' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
