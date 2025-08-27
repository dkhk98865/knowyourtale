import { NextRequest, NextResponse } from 'next/server';
import { stripe, SUBSCRIPTION_PLANS } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { plan, characterId, successUrl, cancelUrl } = await request.json();
    
    if (!plan || !SUBSCRIPTION_PLANS[plan as keyof typeof SUBSCRIPTION_PLANS]) {
      return NextResponse.json(
        { error: 'Invalid plan specified' },
        { status: 400 }
      );
    }

    const selectedPlan = SUBSCRIPTION_PLANS[plan as keyof typeof SUBSCRIPTION_PLANS];
    
    if (!selectedPlan.priceId) {
      return NextResponse.json(
        { error: 'Price ID not configured for this plan' },
        { status: 500 }
      );
    }
    
    // Determine if this is a subscription or one-time purchase
    const isSubscription = plan === 'monthly';
    
    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        'card',           // Credit/debit cards
        'us_bank_account', // ACH Direct Debit (US)
      ],
      // Explicitly exclude PayPal - it's not included in payment_method_types
      line_items: [
        {
          price: selectedPlan.priceId,
          quantity: 1,
        },
      ],
      mode: isSubscription ? 'subscription' : 'payment',
      success_url: successUrl || `http://localhost:3000/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `http://localhost:3000/subscription`,
      metadata: {
        plan: plan,
        planName: selectedPlan.name,
        characterId: characterId || '', // Add character ID for single reports
      },
      ...(isSubscription && {
        subscription_data: {
          metadata: {
            plan: plan,
            planName: selectedPlan.name,
          },
        },
      }),
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
