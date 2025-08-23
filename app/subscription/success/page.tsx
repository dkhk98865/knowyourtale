'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SubscriptionSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // You could fetch subscription details here if needed
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="magical-sparkle">⏳</div>
        <h1 className="storybook-title text-4xl mb-4">Processing Your Subscription...</h1>
        <p className="text-gray-600">Please wait while we set up your magical adventure!</p>
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
        <h1 className="storybook-title text-4xl mb-4">Welcome to Your Adventure!</h1>
        <div className="storybook-divider mb-6"></div>
        <p className="storybook-subtitle text-xl mb-6">
          Your subscription has been successfully activated! You now have access to unlimited magical conversations.
        </p>
        
        {sessionId && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 text-sm">
              <strong>Session ID:</strong> {sessionId}
            </p>
          </div>
        )}

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="text-green-500 text-xl">✓</div>
            <span className="text-gray-700">Access to all fairy tale characters</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="text-green-500 text-xl">✓</div>
            <span className="text-gray-700">Unlimited personality insights</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="text-green-500 text-xl">✓</div>
            <span className="text-gray-700">Mobile app access</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm">
            <strong>Next Steps:</strong> Check your email for a welcome message and start exploring your new features!
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link href="/reports">
          <div className="storybook-card page-turn p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="magical-sparkle text-4xl mb-4">📊</div>
            <h3 className="storybook-subtitle text-xl mb-3">View All Reports</h3>
            <p className="text-gray-600">Access detailed reports for all fairy tale personality types</p>
          </div>
        </Link>

        <Link href="/reports">
          <div className="storybook-card page-turn p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="magical-sparkle text-4xl mb-4">📊</div>
            <h3 className="storybook-subtitle text-xl mb-3">Explore All Reports</h3>
            <p className="text-gray-600">Discover all twelve fairy tale personalities and their detailed insights</p>
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

export default function SubscriptionSuccessPage() {
  return (
    <Suspense fallback={
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="magical-sparkle">⏳</div>
        <h1 className="storybook-title text-4xl mb-4">Loading...</h1>
        <p className="text-gray-600">Please wait while we prepare your success page!</p>
      </main>
    }>
      <SubscriptionSuccessContent />
    </Suspense>
  );
}
