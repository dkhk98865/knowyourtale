import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const { subscriptionId, newPriceId } = await request.json();

    if (!subscriptionId || !newPriceId) {
      return NextResponse.json(
        { error: 'Subscription ID and new price ID are required' },
        { status: 400 }
      );
    }

    // Update the subscription with the new price
    const subscription = await stripe.subscriptions.update(subscriptionId, {
      items: [
        {
          id: (await stripe.subscriptions.retrieve(subscriptionId)).items.data[0].id,
          price: newPriceId,
        },
      ],
      proration_behavior: 'create_prorations',
    });

    // Update the database
    const supabase: SupabaseClient = await createClient();
          const { error } = await supabase
        .from('user_subscriptions')
        .update({
          stripe_subscription_id: subscription.id,
          stripe_price_id: newPriceId,
          updated_at: new Date().toISOString(),
        })
        .eq('stripe_subscription_id', subscriptionId);

    if (error) {
      console.error('Error updating database:', error);
    }

    return NextResponse.json({ 
      success: true, 
      subscription: {
        id: subscription.id,
        status: subscription.status,
      }
    });
  } catch (error) {
    console.error('Error updating subscription:', error);
    return NextResponse.json(
      { error: 'Failed to update subscription' },
      { status: 500 }
    );
  }
}
