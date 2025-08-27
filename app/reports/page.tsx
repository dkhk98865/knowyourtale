'use client';

import Link from 'next/link';
import { characters } from '@/types/characters';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';

export default function ReportsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [userAccess, setUserAccess] = useState<{ hasAccess: boolean; accessType: string | null; characterId?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());

  const checkAccess = async (email: string) => {
    try {
      const response = await fetch('/api/check-report-access', {
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
        console.error('Error checking access:', response.statusText);
        setUserAccess({ hasAccess: false, accessType: null });
      }
    } catch (error) {
      console.error('Error checking user access:', error);
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
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Debug Banner - Added back for troubleshooting */}
      {user && (
        <div className="max-w-7xl mx-auto mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
          <h3 className="text-lg font-bold text-red-800 mb-2">🔍 DEBUG BANNER - Troubleshooting Second Purchase</h3>
          <div className="text-sm text-red-700 space-y-1">
            <p><strong>User Email:</strong> {user.email}</p>
            <p><strong>User Access:</strong> {JSON.stringify(userAccess)}</p>
            <p><strong>Has Access:</strong> {userAccess?.hasAccess ? 'Yes' : 'No'}</p>
            <p><strong>Access Type:</strong> {userAccess?.accessType || 'None'}</p>
            <p><strong>Character ID:</strong> {userAccess?.characterId || 'None'}</p>
          </div>
        </div>
      )}

      <section className="text-center mb-16 parchment-content">
        <h1 className="storybook-title text-4xl mb-6">Your Reports</h1>
        <div className="storybook-divider"></div>
        
        {!user ? (
          <>
            <p className="storybook-subtitle text-lg mb-8">
              Sign in to access your purchased personality reports and unlock detailed insights.
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
              You haven&apos;t purchased any reports yet. Take the quiz to discover your personality type and purchase reports!
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
              {userAccess.accessType === 'allReports' 
                ? 'You have access to all personality reports! Explore the full collection below.'
                : `You have access to the ${characters.find(c => c.id === userAccess.characterId)?.name} report. Click on it to view your full personality analysis!`
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

      {/* Show all character cards with different access states */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {characters.map((character) => {
          // Determine if user has access to this specific character
          const hasAccessToCharacter = userAccess?.hasAccess && (
            userAccess.accessType === 'allReports' || 
            (userAccess.accessType === 'single' && userAccess.characterId === character.id)
          );

          return (
            <div key={character.id} className="relative">
              {hasAccessToCharacter ? (
                // User has access - show clickable card
                <Link 
                  href={`/reports/${character.id}`} 
                  className="storybook-card page-turn block overflow-hidden hover:scale-105 transition-transform duration-200"
                >
                  <div className="relative w-full h-56">
                    <Image src={character.image} alt={character.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Access indicator */}
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      ✓ Access
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-center font-['Playfair_Display']">{character.name}</h3>
                    <p className="text-lg text-gray-700 text-center leading-relaxed">{character.description}</p>
                  </div>
                </Link>
              ) : (
                // User doesn't have access - show locked card
                <div className="storybook-card page-turn block overflow-hidden opacity-75">
                  <div className="relative w-full h-56">
                    <Image src={character.image} alt={character.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Lock overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-3xl mb-2">🔒</div>
                        <div className="text-sm font-semibold">Locked</div>
                      </div>
                    </div>
                    {/* Lock indicator */}
                    <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      🔒 Locked
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-center font-['Playfair_Display']">{character.name}</h3>
                    <p className="text-lg text-gray-700 text-center leading-relaxed">{character.description}</p>
                    {user ? (
                      <div className="text-center mt-4">
                        <Link href="/quiz">
                          <button className="magical-button text-sm px-4 py-2">
                            🧙‍♀️ Take Quiz
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div className="text-center mt-4">
                        <Link href="/auth">
                          <button className="magical-button text-sm px-4 py-2">
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
    </main>
  );
}
