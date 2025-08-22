'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';

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

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSubscribe = (plan: string) => {
    if (!user) {
      alert('Please sign in to subscribe to a plan');
      return;
    }
    
    // For now, just show an alert. In production, you'd integrate with Stripe/payment processor
    alert(`Subscribing to ${plan} plan - Payment integration coming soon!`);
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
          Unlock the full magical experience with unlimited conversations and exclusive features
        </p>
        <div className="magical-sparkle">✨</div>
      </section>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Essential Plan */}
        <div className="storybook-card page-turn relative overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="magical-sparkle">🌟</div>
              <h2 className="storybook-subtitle text-2xl mb-3">Essential Adventure</h2>
              <div className="magical-sparkle">✨</div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-accent-gold mb-2">$4.99</div>
              <div className="text-gray-600">per month</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <span className="text-gray-700">Access to all fairy tale characters</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <span className="text-gray-700">Unlimited conversations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-400 text-xl">✗</div>
                <span className="text-gray-400">Chat history access</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-400 text-xl">✗</div>
                <span className="text-gray-400">Priority Support</span>
              </div>
            </div>

            <button
              onClick={() => handleSubscribe('Essential')}
              className="w-full magical-button magical-glow"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Start Essential Adventure'}
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="storybook-card page-turn relative overflow-hidden border-2 border-accent-gold">
          {/* Popular badge */}
          <div className="absolute top-4 right-4 bg-accent-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
          
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="magical-sparkle">👑</div>
              <h2 className="storybook-subtitle text-2xl mb-3">Premium Adventure</h2>
              <div className="magical-sparkle">💎</div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-accent-gold mb-2">$9.99</div>
              <div className="text-gray-600">per month</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <span className="text-gray-700">Access to all fairy tale characters</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <span className="text-gray-700">Unlimited conversations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <span className="text-gray-700">Chat history access</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <span className="text-gray-700">Priority support</span>
              </div>
            </div>

            <button
              onClick={() => handleSubscribe('Premium')}
              className="w-full magical-button magical-glow bg-accent-gold hover:bg-yellow-600"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Start Premium Adventure'}
            </button>
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
            Enjoy limited conversations with 3 characters. Perfect for getting started on your magical journey!
          </p>
          <div className="text-sm text-gray-500">
            • 5 conversations per day<br/>
            • Access to 3 featured characters<br/>
            • Basic chat functionality
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
          </div>

          <div className="storybook-card page-turn p-6">
            <h3 className="font-semibold mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-600 text-sm">
              We accept all major credit cards, PayPal, and other secure payment methods through our payment processor.
            </p>
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
              Your privacy and security are our top priorities. All conversations and personal data are encrypted and securely stored.
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
