'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';

export default function SubscriptionPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('Error getting session:', error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: { user: User | null } | null) => {
        setUser(session?.user ?? null);
      }
    );

    // Track page view
    analytics.trackPageView('subscription');

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSubscribe = async (plan: string) => {
    if (!user) {
      alert('Please sign in to subscribe to a plan');
      return;
    }

    try {
      // Track checkout initiation
      analytics.trackCheckoutInitiated(plan.toLowerCase());
      
      // Set different success URLs based on plan
      let successUrl;
      if (plan.toLowerCase() === 'monthly') {
        successUrl = `${window.location.origin}/subscription/success?session_id={CHECKOUT_SESSION_ID}&plan=monthly`;
      } else {
        successUrl = `${window.location.origin}/subscription/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan.toLowerCase()}`;
      }
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: plan.toLowerCase(),
          successUrl: successUrl,
          cancelUrl: `${window.location.origin}/subscription`,
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        alert(`Error: ${error}`);
        return;
      }

      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to create checkout session. Please try again.');
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* Magical floating sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
      </div>

      <section className="text-center mb-16 parchment-content">
        <h1 className="storybook-title text-5xl mb-6">Choose Your Adventure</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-xl mb-8">
          Unlock weekly journaling prompts, exclusive journaling features, and community engagement
        </p>
        <div className="magical-sparkle">✨</div>
        

      </section>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto mb-16">
        {/* Info about personality reports */}
        <div className="storybook-card page-turn p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
          <div className="text-center">
            <div className="magical-sparkle text-3xl mb-3">📊</div>
            <h3 className="storybook-subtitle text-xl mb-3 text-blue-800">Personality Reports</h3>
            <p className="text-gray-700 mb-4">
              Looking for detailed personality analysis reports? Visit any character story page after taking the quiz to purchase individual reports or get all reports at once.
            </p>
            <Link href="/quiz">
              <button className="magical-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                Take the Quiz
              </button>
            </Link>
            
            {/* Non-refundable notice for reports */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                ⚠️ All personality reports are non-refundable once purchased and accessed.
              </p>
            </div>
          </div>
        </div>

        {/* Info about compatibility reports */}
        <div className="storybook-card page-turn p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
          <div className="text-center">
            <div className="magical-sparkle text-3xl mb-3">💕</div>
            <h3 className="storybook-subtitle text-xl mb-3 text-purple-800">Compatibility Reports</h3>
            <p className="text-gray-700 mb-4">
              Discover how different personality types interact and relate to each other. Purchase individual compatibility pairs ($1.99), all pairs ($24.99), or get monthly access ($12.99/mo).
            </p>
            <Link href="/compatibility">
              <button className="magical-button bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">
                View Compatibility
              </button>
            </Link>
            
            {/* Non-refundable notice for compatibility reports */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                ⚠️ All compatibility reports are non-refundable once purchased and accessed.
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Plans Grid */}
        <div className="max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <div className="storybook-card page-turn relative overflow-hidden border-2 border-accent-gold">
            {/* Popular badge */}
            <div className="absolute top-4 right-4 bg-accent-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="magical-sparkle">📅</div>
                <h2 className="storybook-subtitle text-2xl mb-3">Monthly Plan</h2>
                <div className="magical-sparkle">💎</div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-accent-gold mb-2">$7.99</div>
                <div className="text-gray-600">per month</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <span className="text-gray-700">Weekly prompts in journal section</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <span className="text-gray-700">Access to Know Your Tale journaling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <span className="text-gray-700">Community board access</span>
                </div>
              </div>

              <button
                onClick={() => {
                  analytics.trackButtonClick('purchase_monthly_subscription', 'subscription_page');
                  handleSubscribe('Monthly');
                }}
                className="w-full magical-button magical-glow bg-accent-gold hover:bg-yellow-600"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Start Monthly Plan'}
              </button>
              
              {/* Non-refundable notice */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  ⚠️ All subscriptions are non-refundable. You can cancel anytime, but no refunds for partial billing periods.
                </p>
              </div>
            </div>
          </div>
      </div>
      </div>

      {/* Free Plan Info */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="mb-4">
            <div className="magical-sparkle">🆓</div>
            <h3 className="storybook-subtitle text-xl mb-3">Free Experience</h3>
            <div className="magical-sparkle">✨</div>
          </div>
          <p className="text-gray-600 mb-4">
            Start your journey with basic access. Perfect for exploring your fairy tale personality!
          </p>
          <div className="text-sm text-gray-500">
            • Access to character stories and descriptions<br/>
            • Basic personality insights<br/>
            • Quiz to discover your personality type<br/>
            • Limited journaling access<br/>
            • <strong>Personality reports available on character story pages</strong>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="storybook-title text-3xl mb-4">Frequently Asked Questions</h2>
          <div className="storybook-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="storybook-card page-turn p-6">
            <h3 className="font-semibold mb-3">Can I cancel anytime?</h3>
            <p className="text-gray-600 text-sm">
              Yes! You can cancel your subscription at any time. You&apos;ll continue to have access until the end of your billing period.
            </p>
            <p className="text-red-600 text-xs mt-2 font-medium">
              ⚠️ Note: No refunds for partial billing periods
            </p>
          </div>

          <div className="storybook-card page-turn p-6">
            <h3 className="font-semibold mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-600 text-sm mb-3">
              We accept secure payments through Stripe, including:
            </p>
            <div className="text-gray-600 text-xs space-y-1">
              • Credit Cards: Visa, Mastercard, American Express, Discover<br/>
              • Debit Cards: All major debit cards<br/>
              • Digital Wallets: Apple Pay, Google Pay<br/>
              • Bank Transfers: ACH Direct Debit (US), SEPA (Europe)<br/>
              • Buy Now, Pay Later: Klarna, Afterpay/Clearpay<br/>
              • Local Methods: Bancontact, iDEAL, Sofort, and more
            </div>
          </div>

          <div className="storybook-card page-turn p-6">
            <h3 className="font-semibold mb-3">Can I upgrade or downgrade my plan?</h3>
            <p className="text-gray-600 text-sm">
              Absolutely! You can change your plan at any time. Upgrades take effect immediately, downgrades at your next billing cycle.
            </p>
          </div>

          <div className="storybook-card page-turn p-6">
            <h3 className="font-semibold mb-3">Is my data secure?</h3>
            <p className="text-gray-600 text-sm">
              Your privacy and security are our top priorities. All personal data and character information are encrypted and securely stored. Payments are processed securely through Stripe, which is PCI DSS Level 1 certified - the highest level of payment security.
            </p>
          </div>
          
          <div className="storybook-card page-turn p-6">
            <h3 className="font-semibold mb-3">What is your refund policy?</h3>
            <p className="text-gray-600 text-sm">
              All purchases and subscriptions are non-refundable. This includes personality reports ($4.99/$9.99), compatibility reports ($1.99/$24.99), and monthly subscriptions ($7.99/month). You can cancel your monthly subscription anytime, but no refunds are provided for partial billing periods.
            </p>
            <p className="text-red-600 text-xs mt-2 font-medium">
              ⚠️ For detailed refund information, see our <a href="/refund-policy" className="underline">Refund Policy</a>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-16">
        <Link href="/">
          <button className="magical-button magical-glow">
            🏠 Back to Home 🏠
          </button>
        </Link>
      </div>
    </main>
  );
}
