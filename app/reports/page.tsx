'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { characters } from '@/types/characters';
import Image from 'next/image';
import { createClient } from '@/lib/supabase-client';
import AuthModal from '@/components/auth-modal';
import { useRouter } from 'next/navigation';

export default function ReportsPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    checkUserAndSubscription();
  }, []);

  const checkUserAndSubscription = async () => {
    try {
      // Check if user is signed in
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setLoading(false);
        return;
      }

      setUser(user);

      // Check subscription status
      const { data: subscriptionData, error } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_email', user.email)
        .eq('status', 'active')
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
        console.error('Error fetching subscription:', error);
      }

      setSubscription(subscriptionData);
      setLoading(false);
    } catch (error) {
      console.error('Error checking user and subscription:', error);
      setLoading(false);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    checkUserAndSubscription();
  };

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="magical-sparkle">🔄</div>
          <h1 className="storybook-title text-2xl mb-4">Loading...</h1>
          <div className="magical-spinner"></div>
        </div>
      </main>
    );
  }

  // If user is not signed in, show sign-in prompt
  if (!user) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="storybook-card page-turn p-8 text-center">
          <div className="magical-sparkle text-4xl mb-6">🔐</div>
          <h1 className="storybook-title text-3xl mb-4">Sign In to Access Reports</h1>
          <div className="storybook-divider mb-6"></div>
          <p className="storybook-subtitle text-lg mb-6">
            You need to be signed in to access the detailed fairy tale personality reports.
          </p>
          <button 
            onClick={() => setIsAuthModalOpen(true)}
            className="magical-button magical-glow text-lg px-8 py-4"
          >
            🔐 Sign In
          </button>
          <div className="mt-6">
            <Link href="/">
              <button className="magical-button text-lg px-6 py-3">
                🏠 Back to Home
              </button>
            </Link>
          </div>
        </div>

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      </main>
    );
  }

  // If user is signed in but no active subscription, show upgrade prompt
  if (!subscription) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="storybook-card page-turn p-8 text-center">
          <div className="magical-sparkle text-4xl mb-6">🗝️</div>
          <h1 className="storybook-title text-3xl mb-4">Upgrade to Access Reports</h1>
          <div className="storybook-divider mb-6"></div>
          <p className="storybook-subtitle text-lg mb-6">
            You need an active subscription to access the detailed fairy tale personality reports.
          </p>
          <Link href="/subscription">
            <button className="magical-button magical-glow text-lg px-8 py-4">
              🗝️ View Subscription Plans
            </button>
          </Link>
          <div className="mt-6">
            <Link href="/">
              <button className="magical-button text-lg px-6 py-3">
                🏠 Back to Home
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // User is signed in and has active subscription - show reports
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
        <h1 className="storybook-title text-4xl mb-6">Select Your Report</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-lg mb-8">
          Explore the full collection of fairy tale personality reports and find the detailed analysis that speaks to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="magical-button magical-glow">
              🏠 Back to Home
            </button>
          </Link>
          <Link href="/quiz">
            <button className="magical-button magical-glow">
              🧙‍♀️ Take the Quiz
            </button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {characters.map((character) => (
          <Link 
            key={character.id} 
            href={`/reports/${character.id}`} 
            className="storybook-card page-turn block overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <div className="relative w-full h-56">
              <Image src={character.image} alt={character.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-center font-['Playfair_Display']">{character.name}</h3>
              <p className="text-lg text-gray-700 text-center leading-relaxed">{character.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
