'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { characters } from '@/types/characters';

function SubscriptionSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const plan = searchParams.get('plan'); // Get the plan from URL params
  const characterId = searchParams.get('characterId'); // Get the character ID for single reports
  const [loading, setLoading] = useState(true);
  const [verificationError, setVerificationError] = useState<string | null>(null);

  useEffect(() => {
    // If we have a session ID, verify the purchase
    if (sessionId) {
      verifyPurchase();
    } else {
      // If no session ID, try to verify by checking recent purchases
      checkRecentPurchases();
    }
  }, [sessionId, plan, characterId]);

  const verifyPurchase = async () => {
    try {
      // You could add an API endpoint to verify the session
      // For now, we'll assume it's valid if we have a session ID
      setLoading(false);
    } catch (error) {
      console.error('Error verifying purchase:', error);
      setVerificationError('Failed to verify purchase');
      setLoading(false);
    }
  };

  const checkRecentPurchases = async () => {
    try {
      // Try to verify purchase by checking if user has access
      // This handles cases where redirect didn't work but purchase was successful
      setLoading(false);
    } catch (error) {
      console.error('Error checking recent purchases:', error);
      setVerificationError('Unable to verify recent purchases');
      setLoading(false);
    }
  };

  // Determine what was purchased based on the plan
  const getPlanDetails = () => {
    switch (plan) {
      case 'single':
        const character = characterId ? characters.find(c => c.id === characterId) : null;
        return {
          title: 'Single Report Access Granted!',
          description: character 
            ? `You now have access to your ${character.name} personality report.`
            : 'You now have access to your specific personality report.',
          features: [
            'Access to your specific character report',
            'Detailed personality insights',
            'Life theme and growth path',
            'Core traits and strengths analysis'
          ],
          nextSteps: 'View your report and explore your fairy tale personality!',
          primaryAction: characterId ? `/reports/${characterId}` : '/reports',
          primaryActionText: 'View Your Report',
          secondaryAction: '/quiz',
          secondaryActionText: 'Take Quiz Again'
        };
      case 'allReports':
        return {
          title: 'All Reports Access Granted!',
          description: 'You now have access to all twelve fairy tale personality reports.',
          features: [
            'Access to all 12 character reports',
            'Complete personality insights collection',
            'Compare different fairy tale archetypes',
            'Unlimited exploration of all personalities'
          ],
          nextSteps: 'Explore all the fairy tale personalities and discover your favorites!',
          primaryAction: '/reports',
          primaryActionText: 'View All Reports',
          secondaryAction: '/quiz',
          secondaryActionText: 'Take Quiz Again'
        };
      case 'monthly':
        return {
          title: 'Monthly Plan Activated!',
          description: 'Welcome to your ongoing fairy tale journey with weekly insights and journaling access.',
          features: [
            'Weekly personalized journaling prompts',
            'Access to exclusive journaling tools',
            'Community board access',
            'Ongoing personal growth support'
          ],
          nextSteps: 'Check your email for your first weekly prompt and start journaling!',
          primaryAction: '/journal',
          primaryActionText: 'Start Journaling',
          secondaryAction: '/subscription',
          secondaryActionText: 'Manage Subscription'
        };
      default:
        return {
          title: 'Purchase Successful!',
          description: 'Your purchase has been completed successfully.',
          features: [
            'Access to your purchased content',
            'Secure payment processed',
            'Welcome email sent'
          ],
          nextSteps: 'Check your email for access details and start exploring!',
          primaryAction: '/',
          primaryActionText: 'Go to Home',
          secondaryAction: '/reports',
          secondaryActionText: 'View Reports'
        };
    }
  };

  const planDetails = getPlanDetails();

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="magical-sparkle">⏳</div>
        <h1 className="storybook-title text-4xl mb-4">Processing Your Purchase...</h1>
        <p className="text-gray-600">Please wait while we set up your access!</p>
      </main>
    );
  }

  if (verificationError) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="storybook-card page-turn p-8">
          <div className="magical-sparkle text-6xl mb-6">⚠️</div>
          <h1 className="storybook-title text-4xl mb-4">Purchase Verification</h1>
          <div className="storybook-divider mb-6"></div>
          <p className="storybook-subtitle text-xl mb-6">
            We&apos;re having trouble verifying your purchase. This can happen with Apple Pay or other mobile payment methods.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800">
              <strong>Don&apos;t worry!</strong> If you received a payment confirmation, your purchase was successful. 
              You can access your content from the reports page.
            </p>
          </div>

          <div className="space-y-4">
            <Link href="/reports">
              <button className="magical-button magical-glow">
                🗝️ Check Your Reports
              </button>
            </Link>
            <Link href="/">
              <button className="magical-button">
                🏠 Return to Home
              </button>
            </Link>
          </div>
        </div>
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
        <h1 className="storybook-title text-4xl mb-4">{planDetails.title}</h1>
        <div className="storybook-divider mb-6"></div>
        <p className="storybook-subtitle text-xl mb-6">
          {planDetails.description}
        </p>
        
        {sessionId && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 text-sm">
              <strong>Session ID:</strong> {sessionId}
            </p>
          </div>
        )}

        {/* Apple Pay redirect notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm">
            <strong>Apple Pay Users:</strong> If you used Apple Pay and this page didn&apos;t load automatically, 
            don&apos;t worry - your purchase was successful! You can access your content from the reports page.
          </p>
          <p className="text-blue-700 text-xs mt-2">
            <strong>Having issues?</strong> You can also visit{' '}
            <Link href="/subscription/fallback-success" className="underline hover:text-blue-900">
              our fallback success page
            </Link>{' '}
            for additional help.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {planDetails.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-3">
              <div className="text-green-500 text-xl">✓</div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm">
            <strong>Next Steps:</strong> {planDetails.nextSteps}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link href={planDetails.primaryAction}>
          <div className="storybook-card page-turn p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="magical-sparkle text-4xl mb-4">🚀</div>
            <h3 className="storybook-subtitle text-xl mb-3">{planDetails.primaryActionText}</h3>
            <p className="text-gray-600">Start exploring your new features right away</p>
          </div>
        </Link>

        <Link href={planDetails.secondaryAction}>
          <div className="storybook-card page-turn p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="magical-sparkle text-4xl mb-4">✨</div>
            <h3 className="storybook-subtitle text-xl mb-3">{planDetails.secondaryActionText}</h3>
            <p className="text-gray-600">Continue your fairy tale journey</p>
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
