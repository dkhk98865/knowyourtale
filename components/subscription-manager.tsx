'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';

interface Subscription {
  id: string;
  stripe_subscription_id: string;
  stripe_price_id: string;
  plan: string;
  status: string;
  current_period_end: string;
  canceled_at?: string;
  user_email: string;
}

interface SubscriptionManagerProps {
  user: User;
}

export default function SubscriptionManager({ user }: SubscriptionManagerProps) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState('');
  const supabase = createClient();

  // Plan details
  const plans = {
    monthly: {
      name: 'Monthly Plan',
      price: '$7.99/month',
      priceId: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID,
      features: ['Weekly prompts in journal section', 'Access to Know Your Tale journaling', 'Community board access']
    }
  };

    const fetchSubscription = useCallback(async () => {
    try {
      // Get monthly subscription
      const { data: monthlyData } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_email', user.email)
        .eq('status', 'active')
        .eq('plan', 'monthly')
        .single();

      if (monthlyData) {
        setSubscription(monthlyData);
        setLoading(false);
        return;
      }

      // No active monthly subscription found
      setSubscription(null);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching subscription:', error);
      setLoading(false);
    }
  }, [supabase, user.email]);

  useEffect(() => {
    fetchSubscription();
  }, [fetchSubscription]);

  const getCurrentPlan = () => {
    if (!subscription) return null;
    
    // Use the plan field from the database directly
    return subscription.plan as 'monthly' | null;
  };

  const getUpgradePlan = () => {
    const current = getCurrentPlan();
    if (current === 'monthly') return null; // Monthly is the highest tier now
    return null;
  };

  const handleUpgrade = async () => {
    if (!subscription) return;
    
    const upgradeTo = getUpgradePlan();
    if (!upgradeTo) return;

    setUpdating(true);
    setMessage('');

    try {
      const response = await fetch('/api/update-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionId: subscription.stripe_subscription_id,
          newPriceId: plans[upgradeTo as keyof typeof plans].priceId,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage(`Successfully upgraded to ${plans[upgradeTo as keyof typeof plans].name}!`);
        await fetchSubscription(); // Refresh subscription data
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch {
      setMessage('Failed to upgrade subscription. Please try again.');
    } finally {
      setUpdating(false);
    }
  };

  const handleCancel = async () => {
    if (!subscription) return;

    if (!confirm('Are you sure you want to cancel your subscription? You will lose access at the end of your current billing period.')) {
      return;
    }

    setUpdating(true);
    setMessage('');

    try {
      const response = await fetch('/api/cancel-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionId: subscription.stripe_subscription_id,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Subscription canceled successfully. You will have access until the end of your current billing period.');
        await fetchSubscription(); // Refresh subscription data
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch {
      setMessage('Failed to cancel subscription. Please try again.');
    } finally {
      setUpdating(false);
    }
  };

  const openCustomerPortal = async () => {
    if (!subscription) return;

    try {
      const response = await fetch('/api/create-portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId: subscription.stripe_subscription_id.split('_')[0], // Extract customer ID from subscription ID
        }),
      });

      const result = await response.json();

      if (result.url) {
        window.location.href = result.url;
      } else {
        setMessage('Failed to open customer portal. Please try again.');
      }
    } catch {
      setMessage('Failed to open customer portal. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="magical-sparkle">🔄</div>
        <p>Loading subscription details...</p>
      </div>
    );
  }

  if (!subscription) {
    return (
      <div className="storybook-card page-turn p-6 text-center">
        <div className="magical-sparkle text-3xl mb-4">🗝️</div>
        <h3 className="storybook-subtitle text-xl mb-4">No Active Subscription</h3>
        <p className="text-gray-600 mb-4">
          You don&apos;t have an active subscription. Upgrade to unlock premium features!
        </p>
        <a href="/subscription" className="magical-button magical-glow">
          View Subscription Plans
        </a>
      </div>
    );
  }

  const currentPlan = getCurrentPlan();
  const upgradePlan = getUpgradePlan();

  return (
    <div className="storybook-card page-turn p-6">
      <div className="text-center mb-6">
        <div className="magical-sparkle text-3xl mb-3">📊</div>
        <h3 className="storybook-subtitle text-xl mb-3">Subscription Management</h3>
        <div className="magical-sparkle text-xl">✨</div>
      </div>

      {/* Current Plan Info */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-lg mb-2">Current Plan: {plans[currentPlan as keyof typeof plans]?.name}</h4>
        <p className="text-gray-600 mb-2">
          Next billing date: {new Date(subscription.current_period_end).toLocaleDateString()}
        </p>
        {subscription.canceled_at && (
          <p className="text-orange-600 font-medium">
            ⚠️ Subscription will end on {new Date(subscription.current_period_end).toLocaleDateString()}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-6">
        {upgradePlan && !subscription.canceled_at && (
          <button
            onClick={handleUpgrade}
            disabled={updating}
            className="w-full magical-button magical-glow"
          >
            {updating ? 'Upgrading...' : `Upgrade to ${plans[upgradePlan as keyof typeof plans]?.name}`}
          </button>
        )}

        {!subscription.canceled_at && (
          <button
            onClick={handleCancel}
            disabled={updating}
            className="w-full magical-button bg-red-600 hover:bg-red-700"
          >
            {updating ? 'Canceling...' : 'Cancel Subscription'}
          </button>
        )}

        <button
          onClick={openCustomerPortal}
          className="w-full magical-button"
        >
          Manage Billing & Payment Methods
        </button>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`p-3 rounded-lg mb-4 ${
          message.includes('Error') || message.includes('Failed') 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {message}
        </div>
      )}

      {/* Debug Section */}
      <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
        <h4 className="font-semibold mb-2">🔧 Debug Subscription</h4>
        <p className="text-sm mb-2">Current Plan: {getCurrentPlan() || 'None'}</p>
        <p className="text-sm mb-2">Subscription ID: {subscription?.stripe_subscription_id || 'None'}</p>
        <button 
          onClick={async () => {
            const response = await fetch('/api/debug-subscription', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userEmail: user.email }),
            });
            const data = await response.json();
            console.log('🔧 Subscription debug data:', data);
            alert('Check browser console for subscription debug data');
          }}
          className="magical-button text-xs px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white"
        >
          🔧 Debug Subscription
        </button>
        <button 
          onClick={async () => {
            if (confirm('This will fix your subscription plan. Continue?')) {
              const response = await fetch('/api/fix-subscription', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail: user.email }),
              });
              const data = await response.json();
              console.log('🔧 Fix subscription result:', data);
              if (data.success) {
                alert('Subscription fixed! Refreshing page...');
                window.location.reload();
              } else {
                alert('Failed to fix subscription. Check console for details.');
              }
            }
          }}
          className="magical-button text-xs px-3 py-1 bg-green-600 hover:bg-green-700 text-white ml-2"
        >
          🔧 Fix Subscription
        </button>
      </div>

      {/* Plan Features */}
      <div className="mt-6">
        <h4 className="font-semibold mb-3">Your Current Plan Features:</h4>
        <ul className="space-y-2">
          {plans[currentPlan as keyof typeof plans]?.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="text-green-500">✓</div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Compatibility Access Info */}
      {currentPlan === 'monthly' && (
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <h4 className="font-semibold mb-3 text-purple-800">💕 Compatibility Reports Access:</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="text-gray-400">○</div>
              <span className="text-gray-500">Compatibility reports not included</span>
            </div>
            <div className="mt-3">
              <Link href="/compatibility" className="text-purple-600 hover:text-purple-800 underline">
                View compatibility options →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
