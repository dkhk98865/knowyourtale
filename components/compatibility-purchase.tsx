'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import { analytics } from '@/lib/analytics';

interface CompatibilityPurchaseProps {
  compatibilityPairId: string;
  character1Name: string;
  character2Name: string;
  onPurchaseComplete?: () => void;
}

export default function CompatibilityPurchase({ 
  compatibilityPairId, 
  character1Name, 
  character2Name, 
  onPurchaseComplete 
}: CompatibilityPurchaseProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [supabase] = useState(() => createClient());

  // Check for user session on component mount
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: { user: User | null } | null) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handlePurchase = async (plan: 'single_pair' | 'all_pairs' | 'monthly_compatibility') => {
    if (!user) {
      alert('Please sign in to purchase compatibility reports');
      return;
    }

    setLoading(true);

    try {
      // Track purchase initiation
      analytics.trackCheckoutInitiated(plan);
      
      const response = await fetch('/api/create-compatibility-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          compatibilityPairId: plan === 'single_pair' ? compatibilityPairId : undefined,
          successUrl: `${window.location.origin}/compatibility/${compatibilityPairId}?session_id={CHECKOUT_SESSION_ID}&plan=${plan}`,
          cancelUrl: `${window.location.origin}/compatibility/${compatibilityPairId}`,
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="storybook-card page-turn p-8">
      <div className="text-center mb-8">
        <div className="magical-sparkle text-4xl mb-4">💕</div>
        <h2 className="storybook-title text-2xl mb-4">Unlock Compatibility Insights</h2>
        <p className="storybook-subtitle text-lg mb-6">
          Discover how {character1Name} and {character2Name} interact and relate to each other
        </p>
        <div className="magical-sparkle text-2xl">✨</div>
      </div>

      {/* Pricing Options */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Single Pair */}
        <div className="storybook-card page-turn p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">💕</div>
            <h3 className="font-semibold text-lg mb-2">Single Pair</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">$1.99</div>
            <p className="text-sm text-gray-600">One-time purchase</p>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              {character1Name} & {character2Name} compatibility
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              Detailed relationship analysis
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              Growth advice & insights
            </li>
          </ul>
          <button
            onClick={() => handlePurchase('single_pair')}
            disabled={loading}
            className="w-full magical-button bg-blue-600 hover:bg-blue-700 text-white"
          >
            {loading ? 'Loading...' : 'Buy This Pair'}
          </button>
        </div>

        {/* All Pairs */}
        <div className="storybook-card page-turn p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 relative">
          <div className="absolute top-4 right-4 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Best Value
          </div>
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">💫</div>
            <h3 className="font-semibold text-lg mb-2">All Pairs</h3>
            <div className="text-3xl font-bold text-purple-600 mb-2">$24.99</div>
            <p className="text-sm text-gray-600">One-time purchase</p>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              All 78 compatibility reports
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              Complete relationship insights
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              Future compatibility reports included
            </li>
          </ul>
          <button
            onClick={() => handlePurchase('all_pairs')}
            disabled={loading}
            className="w-full magical-button bg-purple-600 hover:bg-purple-700 text-white"
          >
            {loading ? 'Loading...' : 'Buy All Pairs'}
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="storybook-card page-turn p-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">🌟</div>
            <h3 className="font-semibold text-lg mb-2">Monthly Plan</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">$12.99</div>
            <p className="text-sm text-gray-600">per month</p>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              All compatibility reports
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              New reports as they're added
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              Cancel anytime
            </li>
          </ul>
          <button
            onClick={() => handlePurchase('monthly_compatibility')}
            disabled={loading}
            className="w-full magical-button bg-green-600 hover:bg-green-700 text-white"
          >
            {loading ? 'Loading...' : 'Start Monthly Plan'}
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">
          All purchases are non-refundable once accessed. See our{' '}
          <a href="/refund-policy" className="underline">refund policy</a> for details.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/compatibility" className="magical-button">
            🔙 Back to Compatibility
          </a>
          <a href="/subscription" className="magical-button">
            🗝️ View All Plans
          </a>
        </div>
      </div>
    </div>
  );
}
