'use client';

import Link from 'next/link';
import { characters } from '@/types/characters';
import { generateCompatibilityIds } from '@/types/compatibility';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';

export default function CompatibilityPage() {
  const [user, setUser] = useState<User | null>(null);
  const [userAccess, setUserAccess] = useState<{ 
    hasAccess: boolean; 
    accessType: string | null; 
    characterId?: string;
    characterIds?: string[];
    compatibilityPairId?: string;
    compatibilityPairIds?: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());

  const compatibilityCombinations = generateCompatibilityIds();

  const handlePurchase = async (compatibilityPairId: string) => {
    if (!user) {
      alert('Please sign in to purchase compatibility reports');
      return;
    }

    try {
      const response = await fetch('/api/create-compatibility-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: 'single_pair',
          compatibilityPairId,
          successUrl: `${window.location.origin}/compatibility/${compatibilityPairId}?session_id={CHECKOUT_SESSION_ID}&plan=single_pair`,
          cancelUrl: `${window.location.origin}/compatibility`,
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

  const handleFullPairsPurchase = async () => {
    if (!user) {
      alert('Please sign in to purchase compatibility reports');
      return;
    }

    try {
      const response = await fetch('/api/create-compatibility-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: 'all_pairs',
          successUrl: `${window.location.origin}/compatibility?session_id={CHECKOUT_SESSION_ID}&plan=all_pairs`,
          cancelUrl: `${window.location.origin}/compatibility`,
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

    const checkAccess = async (email: string) => {
    try {
      const response = await fetch('/api/check-compatibility-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: email }),
      });
      
      if (response.ok) {
        const access = await response.json();
        setUserAccess(access);
      } else {
        console.error('Error checking compatibility access:', response.statusText);
        setUserAccess({ hasAccess: false, accessType: null });
      }
    } catch (error) {
      console.error('Error checking user compatibility access:', error);
      setUserAccess({ hasAccess: false, accessType: null });
    }
  };

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      
      if (session?.user?.email) {
        await checkAccess(session.user.email);
      }
      
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: { user: User | null } | null) => {
        setUser(session?.user ?? null);
        if (session?.user?.email) {
          await checkAccess(session.user.email);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  // Check for recent purchase and refresh access
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    const plan = urlParams.get('plan');
    
    if (sessionId && plan === 'advanced' && user?.email) {
      console.log('🔄 Detected recent advanced plan purchase, refreshing access...');
      
      // Wait a bit for webhook to process, then refresh access
      const timer = setTimeout(async () => {
        if (user?.email) {
          await checkAccess(user.email);
          console.log('✅ Access refreshed after purchase');
        }
      }, 3000); // Wait 3 seconds for webhook to process
      
      return () => clearTimeout(timer);
    }
  }, [user?.email]);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="magical-sparkle text-4xl mb-4">⏳</div>
        <h1 className="storybook-title text-4xl mb-6">Loading...</h1>
        <p className="text-gray-600">Checking your access...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-16 parchment-content">
        <h1 className="storybook-title text-4xl mb-6">Character Compatibility</h1>
        <div className="storybook-divider"></div>
        
        {!user ? (
          <>
            <p className="storybook-subtitle text-lg mb-8">
              Sign in to access detailed compatibility reports between all fairy tale personality types.
            </p>
            <div className="flex justify-center">
              <Link href="/quiz">
                <button className="magical-button magical-glow">
                  🧙‍♀️ Take the Quiz
                </button>
              </Link>
            </div>
          </>
        ) : !userAccess?.hasAccess ? (
          <>
            <p className="storybook-subtitle text-lg mb-8">
              You haven&apos;t purchased any reports yet. Take the quiz to discover your personality type and unlock compatibility insights!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <button className="magical-button magical-glow">
                  🧙‍♀️ Take the Quiz
                </button>
              </Link>
              <Link href="/subscription">
                <button className="magical-button magical-glow">
                  🗝️ View Plans
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="storybook-subtitle text-lg mb-8">
              {userAccess.accessType === 'all_pairs' 
                ? 'You have access to all compatibility reports! Explore how different personality types interact and relate to each other.'
                : userAccess.accessType === 'monthly_compatibility'
                ? 'You have access to all compatibility reports with your monthly compatibility plan! Explore how different personality types interact and relate to each other.'
                : userAccess.accessType === 'multiple_single_pairs'
                ? `You have access to ${userAccess.compatibilityPairIds?.length || 0} compatibility reports! Click on any accessible character combinations below.`
                : `You have access to compatibility reports involving ${characters.find(c => c.id === userAccess.compatibilityPairId)?.name}! Click on any accessible combinations below.`
              }
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
          </>
        )}
      </section>

      {/* Full Pairs Purchase Section - Top */}
      {user && (!userAccess?.hasAccess || (userAccess.accessType !== 'all_pairs' && userAccess.accessType !== 'monthly_compatibility')) && (
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-4xl mb-3">💫</div>
              <h2 className="storybook-subtitle text-2xl mb-3 text-purple-800">Get All Compatibility Reports</h2>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">$24.99</div>
              <div className="text-gray-600 mb-4">One-time purchase for all 78 compatibility reports</div>
              <div className="text-sm text-gray-600 mb-6">
                • Complete relationship insights for all character combinations<br/>
                • Detailed analysis of strengths, challenges, and growth potential<br/>
                • Future compatibility reports included at no extra cost
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleFullPairsPurchase}
                className="magical-button bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold"
              >
                💫 Buy All Pairs $24.99
              </button>
              <Link href="/subscription">
                <button className="magical-button bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 text-lg font-semibold">
                  🗝️ View All Plans
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Show all compatibility combinations */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {compatibilityCombinations.map((combo) => {
          const char1 = characters.find(c => c.id === combo.character1Id);
          const char2 = characters.find(c => c.id === combo.character2Id);
          
          if (!char1 || !char2) return null;

          // Determine if user has access to this specific combination
          const hasAccessToCombo = userAccess?.hasAccess && (
            userAccess.accessType === 'all_pairs' || 
            userAccess.accessType === 'monthly_compatibility' ||
            (userAccess.accessType === 'single_pair' && userAccess.compatibilityPairId === combo.id) ||
            (userAccess.accessType === 'multiple_single_pairs' && userAccess.compatibilityPairIds?.includes(combo.id))
          );

          return (
            <div key={combo.id} className="relative">
              {hasAccessToCombo ? (
                // User has access - show clickable card
                <Link 
                  href={`/compatibility/${combo.id}`} 
                  className="storybook-card page-turn block overflow-hidden hover:scale-105 transition-transform duration-200"
                >
                  <div className="relative w-full h-48">
                    {/* Character 1 image */}
                    <div className="absolute left-0 top-0 w-1/2 h-full">
                      <Image src={char1.image} alt={char1.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    {/* Character 2 image */}
                    <div className="absolute right-0 top-0 w-1/2 h-full">
                      <Image src={char2.image} alt={char2.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    {/* Compatibility symbol */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-2">
                        <div className="text-2xl">💕</div>
                      </div>
                    </div>
                    {/* Access indicator */}
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      ✓ Access
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-center font-['Playfair_Display']">
                      {char1.name} & {char2.name}
                    </h3>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      Compatibility Report
                    </p>
                  </div>
                </Link>
              ) : (
                // User doesn't have access - show locked card
                <div className="storybook-card page-turn block overflow-hidden opacity-75">
                  <div className="relative w-full h-48">
                    {/* Character 1 image */}
                    <div className="absolute left-0 top-0 w-1/2 h-full">
                      <Image src={char1.image} alt={char1.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    {/* Character 2 image */}
                    <div className="absolute right-0 top-0 w-1/2 h-full">
                      <Image src={char2.image} alt={char2.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    {/* Lock overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl mb-1">🔒</div>
                        <div className="text-xs font-semibold">Locked</div>
                      </div>
                    </div>
                    {/* Lock indicator */}
                    <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      🔒 Locked
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-center font-['Playfair_Display']">
                      {char1.name} & {char2.name}
                    </h3>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      Compatibility Report
                    </p>
                    {user ? (
                      <div className="text-center mt-3">
                        <button 
                          onClick={() => handlePurchase(combo.id)}
                          className="magical-button text-xs px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          💕 Buy Report $1.99
                        </button>
                      </div>
                    ) : (
                      <div className="text-center mt-3">
                        <Link href="/auth">
                          <button className="magical-button text-xs px-3 py-1">
                            🔐 Sign In
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Full Pairs Purchase Section - Bottom */}
      {user && (!userAccess?.hasAccess || (userAccess.accessType !== 'all_pairs' && userAccess.accessType !== 'monthly_compatibility')) && (
        <section className="mt-16">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-4xl mb-3">💫</div>
              <h2 className="storybook-subtitle text-2xl mb-3 text-purple-800">Unlock All Compatibility Insights</h2>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">$24.99</div>
              <div className="text-gray-600 mb-4">Complete access to all 78 compatibility reports</div>
              <div className="text-sm text-gray-600 mb-6">
                • Discover how every character combination interacts<br/>
                • Deep insights into relationship dynamics and growth<br/>
                • Access to future compatibility reports included
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleFullPairsPurchase}
                className="magical-button bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold"
              >
                💫 Buy All Pairs $24.99
              </button>
              <Link href="/subscription">
                <button className="magical-button bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 text-lg font-semibold">
                  🗝️ View All Plans
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
