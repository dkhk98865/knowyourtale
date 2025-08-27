'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';

interface SubscriptionAccessGateProps {
  children: React.ReactNode;
  user: User | null;
  featureName: string;
}

interface Subscription {
  id: string;
  plan: string;
  status: string;
  current_period_end: string;
}

export default function SubscriptionAccessGate({ children, user, featureName }: SubscriptionAccessGateProps) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const checkSubscription = async () => {
      try {
        const { data, error } = await supabase
          .from('user_subscriptions')
          .select('*')
          .eq('user_email', user.email)
          .eq('status', 'active')
          .eq('plan', 'monthly')
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error checking subscription:', error);
        }

        setSubscription(data);
      } catch (error) {
        console.error('Error checking subscription:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, [user, supabase]);

  // Show loading state
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="magical-sparkle text-4xl mb-4">✨</div>
        <p className="text-gray-600">Checking your subscription...</p>
      </div>
    );
  }

  // If no user, show sign-in prompt
  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="text-6xl mb-6">🔐</div>
          <h1 className="storybook-title text-4xl mb-6">Sign In Required</h1>
          <p className="storybook-subtitle text-xl mb-8">
            Please sign in to access {featureName}.
          </p>
          <div className="magical-sparkle">✨</div>
          <Link href="/">
            <button className="magical-button magical-glow mt-6">
              🏠 Return Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // If user has active monthly subscription, show the content
  if (subscription && subscription.status === 'active') {
    return <>{children}</>;
  }

  // If no subscription or inactive, show subscription prompt
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center">
        <div className="text-6xl mb-6">💎</div>
        <h1 className="storybook-title text-4xl mb-6">Premium Access Required</h1>
        <p className="storybook-subtitle text-xl mb-8">
          {featureName} is available exclusively to our monthly subscribers.
        </p>
        
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 max-w-2xl mx-auto mb-8">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📅</div>
            <h2 className="storybook-subtitle text-2xl mb-3">Monthly Plan</h2>
            <div className="text-4xl font-bold text-accent-gold mb-2">$7.99</div>
            <div className="text-gray-600 mb-6">per month</div>
          </div>

          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center space-x-3">
              <div className="text-green-500 text-xl">✓</div>
              <span className="text-gray-700">Weekly emails with prompts</span>
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

          <Link href="/subscription">
            <button className="magical-button magical-glow w-full">
              Subscribe Now
            </button>
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          Already have a subscription? <Link href="/settings" className="text-accent-gold hover:underline">Check your account</Link>
        </div>
      </div>
    </div>
  );
}
