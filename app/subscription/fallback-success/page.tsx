'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { characters } from '@/types/characters';

export default function FallbackSuccessPage() {
  const [recentPurchase, setRecentPurchase] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This page is for users who completed a purchase but didn't get redirected
    // They can manually navigate here to confirm their purchase
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="magical-sparkle">⏳</div>
        <h1 className="storybook-title text-4xl mb-4">Loading...</h1>
        <p className="text-gray-600">Please wait...</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-center relative">
      {/* Magical floating sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
      </div>

      <div className="storybook-card page-turn p-8 mb-8">
        <div className="magical-sparkle text-6xl mb-6">🎉</div>
        <h1 className="storybook-title text-4xl mb-4">Purchase Confirmation</h1>
        <div className="storybook-divider mb-6"></div>
        <p className="storybook-subtitle text-xl mb-6">
          If you completed a purchase but didn't get redirected to the success page, 
          this page will help you access your content.
        </p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800">
            <strong>Apple Pay & Mobile Payment Users:</strong> Sometimes mobile payment methods 
            don't redirect properly, but your purchase is still successful!
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800">
            <strong>Next Steps:</strong> Check your reports page to see your newly unlocked content. 
            If you don't see it immediately, wait a few minutes for the system to process your purchase.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link href="/reports">
          <div className="storybook-card page-turn p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="magical-sparkle text-4xl mb-4">🗝️</div>
            <h3 className="storybook-subtitle text-xl mb-3">Check Your Reports</h3>
            <p className="text-gray-600">See what content you now have access to</p>
          </div>
        </Link>

        <Link href="/quiz">
          <div className="storybook-card page-turn p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="magical-sparkle text-4xl mb-4">🧙‍♀️</div>
            <h3 className="storybook-subtitle text-xl mb-3">Take the Quiz</h3>
            <p className="text-gray-600">Discover your fairy tale personality</p>
          </div>
        </Link>
      </div>

      <div className="space-y-4">
        <Link href="/">
          <button className="magical-button magical-glow">
            🏠 Return to Home
          </button>
        </Link>
        
        <div className="text-sm text-gray-500">
          <p>Need help? Contact us at{' '}
            <a href="mailto:knowyourtale@gmail.com" className="text-accent-brown hover:underline">
              knowyourtale@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
