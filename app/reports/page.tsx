'use client';

import Link from 'next/link';
import { characters } from '@/types/characters';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import { checkUserReportAccess } from '@/lib/supabase-server';

export default function ReportsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [userAccess, setUserAccess] = useState<{ hasAccess: boolean; accessType: string | null; characterId?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      
      if (session?.user?.email) {
        try {
          const access = await checkUserReportAccess(session.user.email);
          setUserAccess(access);
        } catch (error) {
          console.error('Error checking user access:', error);
        }
      }
      
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: { user: User | null } | null) => {
        setUser(session?.user ?? null);
        if (session?.user?.email) {
          try {
            const access = await checkUserReportAccess(session.user.email);
            setUserAccess(access);
          } catch (error) {
            console.error('Error checking user access:', error);
          }
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
        <h1 className="storybook-title text-4xl mb-6">Your Reports</h1>
        <div className="storybook-divider"></div>
        
        {!user ? (
          <>
            <p className="storybook-subtitle text-lg mb-8">
              Sign in to access your purchased personality reports and unlock detailed insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <button className="magical-button magical-glow">
                  🔐 Sign In
                </button>
              </Link>
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
              You haven't purchased any reports yet. Take the quiz to discover your personality type and purchase reports!
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
                : `You have access to the ${characters.find(c => c.id === userAccess.characterId)?.name} report.`
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

      {user && userAccess?.hasAccess && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {userAccess.accessType === 'allReports' 
            ? characters.map((character) => (
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
              ))
            : userAccess.characterId && (
                <div className="col-span-full">
                  <Link 
                    href={`/reports/${userAccess.characterId}`} 
                    className="storybook-card page-turn block overflow-hidden hover:scale-105 transition-transform duration-200 max-w-2xl mx-auto"
                  >
                    <div className="relative w-full h-56">
                      <Image 
                        src={characters.find(c => c.id === userAccess.characterId)?.image || ''} 
                        alt={characters.find(c => c.id === userAccess.characterId)?.name || ''} 
                        fill 
                        className="object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-center font-['Playfair_Display']">
                        {characters.find(c => c.id === userAccess.characterId)?.name}
                      </h3>
                      <p className="text-lg text-gray-700 text-center leading-relaxed">
                        {characters.find(c => c.id === userAccess.characterId)?.description}
                      </p>
                    </div>
                  </Link>
                </div>
              )
          }
        </section>
      )}
    </main>
  );
}
