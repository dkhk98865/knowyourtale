import { NextRequest, NextResponse } from 'next/server';

import { createWebhookClient } from '@/lib/supabase-webhook';
import { UserPromptProgressService } from '@/lib/user-prompt-progress';
import type { SupabaseClient } from '@supabase/supabase-js';
import { headers } from 'next/headers';
import { Stripe } from 'stripe';
import { analytics } from '@/lib/analytics';

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

    const supabase: SupabaseClient = createWebhookClient();
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
                
                // Track successful purchase in analytics
                try {
                  if (plan === 'single' && characterId) {
                    // For single reports, we need to get the character name
                    // This would require importing the characters data or making a database call
                    analytics.trackSingleReportPurchase(characterId, 'Character Report');
                  } else if (plan === 'allReports') {
                    analytics.trackAllReportsPurchase();
                  }
                } catch (analyticsError) {
                  console.error('⚠️ Analytics tracking failed:', analyticsError);
                }
                
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
          } else if (metadata?.type === 'compatibility' && (metadata.plan === 'single_pair' || metadata.plan === 'all_pairs')) {
            console.log('💕 Processing compatibility purchase:', metadata.plan);
            // Handle one-time compatibility purchases
            const { plan, compatibilityPairId } = metadata;
            const customerEmail = session.customer_details?.email;
            
            console.log('💕 Compatibility pair ID:', compatibilityPairId);
            console.log('📧 Customer email:', customerEmail);
            
            if (customerEmail) {
              console.log('💾 Attempting to create compatibility access record...');
              console.log('📋 Insert data:', {
                user_email: customerEmail,
                access_type: plan,
                compatibility_pair_id: compatibilityPairId || null,
                stripe_payment_intent_id: session.payment_intent,
                status: 'active'
              });
              
              // Create compatibility access record
              const { data: insertData, error: insertError } = await supabase
                .from('user_compatibility_access')
                .insert({
                  user_email: customerEmail,
                  access_type: plan,
                  compatibility_pair_id: compatibilityPairId || null,
                  stripe_payment_intent_id: session.payment_intent,
                  status: 'active'
                })
                .select();

              if (insertError) {
                console.error('❌ Error creating compatibility access record:', insertError);
                console.error('❌ Error details:', {
                  code: insertError.code,
                  message: insertError.message,
                  details: insertError.details,
                  hint: insertError.hint
                });
                
                // Log the error to webhook_logs table
                await supabase.from('webhook_logs').insert({
                  event_type: 'compatibility_access_record_creation',
                  stripe_event_id: event.id,
                  user_email: customerEmail,
                  plan: plan,
                  character_id: compatibilityPairId || null,
                  status: 'failed',
                  error_message: JSON.stringify(insertError)
                });
              } else {
                console.log('✅ Compatibility access record created successfully!');
                console.log('✅ Inserted data:', insertData);
                
                // Track successful compatibility purchase in analytics
                try {
                  if (plan === 'single_pair' && compatibilityPairId) {
                    analytics.trackSingleReportPurchase(compatibilityPairId, 'Compatibility Report');
                  } else if (plan === 'all_pairs') {
                    analytics.trackAllReportsPurchase(); // Reuse this for now
                  }
                } catch (analyticsError) {
                  console.error('⚠️ Analytics tracking failed:', analyticsError);
                }
                
                // Log the success to webhook_logs table
                await supabase.from('webhook_logs').insert({
                  event_type: 'compatibility_access_record_creation',
                  stripe_event_id: event.id,
                  user_email: customerEmail,
                  plan: plan,
                  character_id: compatibilityPairId || null,
                  status: 'success'
                });
              }
            } else {
              console.log('⚠️ No customer email found in session');
            }
          } else if (metadata?.plan === 'monthly') {
            console.log('📅 Processing monthly subscription...');
            // Handle monthly subscription
            const customerEmail = session.customer_details?.email;
            const subscriptionId = session.subscription;
            
            console.log('📧 Customer email:', customerEmail);
            console.log('🆔 Subscription ID:', subscriptionId);
            
            if (customerEmail && subscriptionId) {
              console.log('💾 Attempting to upsert subscription record...');
              
              // Calculate current period end (30 days from now)
              const currentPeriodEnd = new Date();
              currentPeriodEnd.setDate(currentPeriodEnd.getDate() + 30);
              
              const { error: insertError } = await supabase
                .from('user_subscriptions')
                .upsert({
                  user_email: customerEmail,
                  stripe_subscription_id: subscriptionId,
                  plan: 'monthly',
                  status: 'active',
                  current_period_end: currentPeriodEnd.toISOString(),
                }, {
                  onConflict: 'stripe_subscription_id'
                });

              if (insertError) {
                console.error('❌ Error creating subscription record:', insertError);
                
                // Log the error to webhook_logs table
                await supabase.from('webhook_logs').insert({
                  event_type: 'monthly_subscription_creation',
                  stripe_event_id: event.id,
                  user_email: customerEmail,
                  plan: 'monthly',
                  status: 'failed',
                  error_message: JSON.stringify(insertError)
                });
              } else {
                console.log('✅ Subscription record upserted successfully!');
                
                // Track successful monthly subscription in analytics
                try {
                  analytics.trackMonthlySubscriptionPurchase();
                } catch (analyticsError) {
                  console.error('⚠️ Analytics tracking failed:', analyticsError);
                }
                
                // Log the success to webhook_logs table
                await supabase.from('webhook_logs').insert({
                  event_type: 'subscription_upsert',
                  stripe_event_id: event.id,
                  user_email: customerEmail,
                  plan: 'monthly',
                  status: 'success'
                });



                // Initialize user for weekly prompt cycle
                console.log('📝 Initializing user for weekly prompt cycle...');
                const promptService = new UserPromptProgressService();
                // For now, we'll use email as user_id since we don't have the actual user ID from auth
                const promptInitResult = await promptService.initializeUser(customerEmail, customerEmail);
                if (promptInitResult) {
                  console.log('✅ Successfully initialized for weekly prompt cycle');
                } else {
                  console.error('❌ Failed to initialize for weekly prompt cycle');
                }
              }
            } else {
              console.log('⚠️ Missing customer email or subscription ID');
              console.log('📧 Customer email:', customerEmail);
              console.log('🆔 Subscription ID:', subscriptionId);
            }
          } else if (metadata?.type === 'compatibility' && metadata.plan === 'monthly_compatibility') {
            console.log('💕 Processing monthly compatibility subscription...');
            // Handle monthly compatibility subscription
            const customerEmail = session.customer_details?.email;
            const subscriptionId = session.subscription;
            
            console.log('📧 Customer email:', customerEmail);
            console.log('🆔 Subscription ID:', subscriptionId);
            
            if (customerEmail && subscriptionId) {
              console.log('💾 Attempting to create compatibility subscription record...');
              
              // Calculate current period end (30 days from now)
              const currentPeriodEnd = new Date();
              currentPeriodEnd.setDate(currentPeriodEnd.getDate() + 30);
              
              const { error: insertError } = await supabase
                .from('user_compatibility_access')
                .insert({
                  user_email: customerEmail,
                  access_type: 'monthly_compatibility',
                  stripe_payment_intent_id: session.payment_intent,
                  status: 'active',
                  expires_at: currentPeriodEnd.toISOString(),
                });

              if (insertError) {
                console.error('❌ Error creating compatibility subscription record:', insertError);
                
                // Log the error to webhook_logs table
                await supabase.from('webhook_logs').insert({
                  event_type: 'monthly_compatibility_subscription_creation',
                  stripe_event_id: event.id,
                  user_email: customerEmail,
                  plan: 'monthly_compatibility',
                  status: 'failed',
                  error_message: JSON.stringify(insertError)
                });
              } else {
                console.log('✅ Compatibility subscription record created successfully!');
                
                // Track successful monthly compatibility subscription in analytics
                try {
                  analytics.trackMonthlySubscriptionPurchase(); // Reuse this for now
                } catch (analyticsError) {
                  console.error('⚠️ Analytics tracking failed:', analyticsError);
                }
                
                // Log the success to webhook_logs table
                await supabase.from('webhook_logs').insert({
                  event_type: 'monthly_compatibility_subscription_creation',
                  stripe_event_id: event.id,
                  user_email: customerEmail,
                  plan: 'monthly_compatibility',
                  status: 'success'
                });
              }
            } else {
              console.log('⚠️ Missing customer email or subscription ID');
              console.log('📧 Customer email:', customerEmail);
              console.log('🆔 Subscription ID:', subscriptionId);
            }
          } else {
            console.log('⚠️ No valid plan found in metadata:', metadata);
          }
          break;

        case 'customer.subscription.created':
        case 'customer.subscription.updated':
          console.log('📅 Processing subscription event:', event.type);
          const subscription = event.data.object;
          
          // For subscriptions, we need to get the customer email from the customer object
          let customerEmail = subscription.metadata?.email;
          
          // If no email in metadata, try to get it from the customer object
          if (!customerEmail && subscription.customer) {
            try {
              const customer = await stripe.customers.retrieve(subscription.customer as string);
              if (customer && typeof customer === 'object' && 'email' in customer) {
                const customerEmailFromCustomer = (customer as { email?: string }).email;
                if (customerEmailFromCustomer) {
                  customerEmail = customerEmailFromCustomer;
                }
              }
            } catch (error) {
              console.error('❌ Error retrieving customer:', error);
            }
          }
          
          console.log('📧 Subscription email:', customerEmail);
          console.log('🆔 Subscription ID:', subscription.id);
          console.log('📊 Subscription status:', subscription.status);
          
          if (customerEmail) {
            console.log('💾 Attempting to upsert subscription record...');
            
            // Calculate current period end from subscription data
            let currentPeriodEnd = new Date();
            if ((subscription as { current_period_end?: number }).current_period_end) {
              currentPeriodEnd = new Date((subscription as { current_period_end?: number }).current_period_end! * 1000);
            } else {
              // Fallback: 30 days from now
              currentPeriodEnd.setDate(currentPeriodEnd.getDate() + 30);
            }
            
            const { error: upsertError } = await supabase
              .from('user_subscriptions')
              .upsert({
                user_email: customerEmail,
                stripe_subscription_id: subscription.id,
                plan: subscription.metadata?.plan || 'monthly',
                status: subscription.status,
                current_period_end: currentPeriodEnd.toISOString(),
              }, {
                onConflict: 'stripe_subscription_id'
              });

            if (upsertError) {
              console.error('❌ Error upserting subscription:', upsertError);
              
              // Log the error to webhook_logs table
              await supabase.from('webhook_logs').insert({
                event_type: 'subscription_upsert',
                stripe_event_id: event.id,
                user_email: customerEmail,
                plan: subscription.metadata?.plan || 'monthly',
                status: 'failed',
                error_message: JSON.stringify(upsertError)
              });
            } else {
              console.log('✅ Subscription record upserted successfully!');
              
              // Log the success to webhook_logs table
              await supabase.from('webhook_logs').insert({
                event_type: 'subscription_upsert',
                stripe_event_id: event.id,
                user_email: customerEmail,
                plan: subscription.metadata?.plan || 'monthly',
                status: 'success'
              });
            }
          } else {
            console.log('⚠️ No subscription email found');
            
            // Log the missing email to webhook_logs table
            await supabase.from('webhook_logs').insert({
              event_type: 'subscription_upsert',
              stripe_event_id: event.id,
              user_email: 'unknown',
              plan: 'monthly',
              status: 'failed',
              error_message: 'No customer email found'
            });
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
