import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { COMPATIBILITY_PLANS } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { plan, compatibilityPairId, successUrl, cancelUrl } = await request.json();

    if (!plan || !successUrl || !cancelUrl) {
      return NextResponse.json(
        { error: 'Plan, successUrl, and cancelUrl are required' },
        { status: 400 }
      );
    }

    // Validate plan
    if (!COMPATIBILITY_PLANS[plan as keyof typeof COMPATIBILITY_PLANS]) {
      return NextResponse.json(
        { error: 'Invalid plan' },
        { status: 400 }
      );
    }

    const compatibilityPlan = COMPATIBILITY_PLANS[plan as keyof typeof COMPATIBILITY_PLANS];

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: compatibilityPlan.priceId,
          quantity: 1,
        },
      ],
      mode: plan === 'monthly_compatibility' ? 'subscription' : 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        plan,
        compatibilityPairId: compatibilityPairId || '',
        type: 'compatibility'
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating compatibility checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
