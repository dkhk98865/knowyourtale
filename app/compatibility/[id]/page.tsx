'use client';

import { characters } from '@/types/characters';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';

type Props = {
  params: Promise<{ id: string }>;
};

export default function CompatibilityReportPage({ params }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [userAccess, setUserAccess] = useState<{ 
    hasAccess: boolean; 
    accessType: string | null; 
    characterId?: string;
    characterIds?: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());
  
  const { id } = use(params);
  const [character1Id, character2Id] = id.split('-');
  
  const character1 = characters.find((c) => c.id === character1Id);
  const character2 = characters.find((c) => c.id === character2Id);

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

  if (!character1 || !character2) {
    return notFound();
  }

  // Check if user has access to this compatibility report
  const hasAccess = userAccess?.hasAccess && (
    userAccess.accessType === 'allReports' || 
    (userAccess.accessType === 'single' && (userAccess.characterId === character1Id || userAccess.characterId === character2Id)) ||
    (userAccess.accessType === 'multiple_single' && (userAccess.characterIds?.includes(character1Id) || userAccess.characterIds?.includes(character2Id)))
  );

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="magical-sparkle text-4xl mb-4">⏳</div>
        <h1 className="storybook-title text-4xl mb-6">Loading...</h1>
        <p className="text-gray-600">Checking your access...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="storybook-card page-turn p-8">
            <div className="magical-sparkle">🔐</div>
            <h1 className="storybook-title text-2xl mb-4">Sign In Required</h1>
            <p className="storybook-subtitle text-lg mb-6">
              Please sign in to access compatibility reports.
            </p>
            <Link href="/auth">
              <button className="magical-button magical-glow">
                🔐 Sign In
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!hasAccess) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="storybook-card page-turn p-8">
            <div className="magical-sparkle">🔒</div>
            <h1 className="storybook-title text-2xl mb-4">Access Required</h1>
            <p className="storybook-subtitle text-lg mb-6">
              You need to purchase reports to access compatibility insights.
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
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="parchment-content">
        {/* Compatibility Header */}
        <div className="text-center mb-8">
          <div className="magical-sparkle text-3xl mb-4">💕</div>
          <h2 className="storybook-subtitle text-2xl mb-3 text-accent-brown">Compatibility Report</h2>
          <h1 className="storybook-title text-5xl mb-4 text-accent-gold">{character1.name} & {character2.name}</h1>
          <div className="storybook-divider mb-4"></div>
          <div className="magical-sparkle text-2xl">✨</div>
        </div>

        {/* Character Images Side by Side */}
        <div className="storybook-card page-turn p-6 mb-8">
          <div className="text-center mb-6">
            <div className="magical-sparkle">🖼️</div>
            <h2 className="storybook-subtitle text-xl mb-3">Character Portraits</h2>
            <div className="magical-sparkle">✨</div>
          </div>
          <div className="flex justify-center space-x-8 mb-6">
            <div className="text-center">
              <div className="relative w-48 h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={character1.image}
                  alt={character1.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{character1.name}</h3>
              <p className="text-gray-600 italic">{character1.description}</p>
            </div>
            <div className="flex items-center">
              <div className="text-4xl">💕</div>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={character2.image}
                  alt={character2.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{character2.name}</h3>
              <p className="text-gray-600 italic">{character2.description}</p>
            </div>
          </div>
        </div>

        {/* Compatibility Analysis Placeholder */}
        <div className="storybook-card page-turn p-6 mb-8 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📊</div>
            <h2 className="storybook-subtitle text-2xl mb-3 text-pink-800">Compatibility Analysis</h2>
            <p className="text-gray-700 mb-6">
              Detailed compatibility insights will be provided here once you supply the content.
            </p>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-pink-200">
              <h3 className="text-xl font-semibold mb-4 text-pink-800">Compatibility Score</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">85%</div>
                <p className="text-gray-600">Excellent Compatibility</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-pink-200">
              <h3 className="text-xl font-semibold mb-4 text-pink-800">Relationship Type</h3>
              <div className="text-center">
                <div className="text-2xl mb-2">🌟</div>
                <p className="text-gray-700">Complementary Partnership</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections Placeholder */}
        <div className="space-y-8">
          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-6">
              <div className="magical-sparkle">💬</div>
              <h2 className="storybook-subtitle text-xl mb-3">Communication Style</h2>
              <div className="magical-sparkle">🌟</div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              [Communication analysis content will be provided here]
            </p>
          </div>

          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-6">
              <div className="magical-sparkle">💝</div>
              <h2 className="storybook-subtitle text-xl mb-3">Emotional Connection</h2>
              <div className="magical-sparkle">🌟</div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              [Emotional connection analysis content will be provided here]
            </p>
          </div>

          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-6">
              <div className="magical-sparkle">🎯</div>
              <h2 className="storybook-subtitle text-xl mb-3">Shared Values & Goals</h2>
              <div className="magical-sparkle">🌟</div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              [Shared values analysis content will be provided here]
            </p>
          </div>

          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-6">
              <div className="magical-sparkle">🌱</div>
              <h2 className="storybook-subtitle text-xl mb-3">Growth Potential</h2>
              <div className="magical-sparkle">🌟</div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              [Growth potential analysis content will be provided here]
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compatibility">
              <button className="magical-button magical-glow">
                🔙 Back to Compatibility
              </button>
            </Link>
            <Link href="/reports">
              <button className="magical-button">
                📊 View Reports
              </button>
            </Link>
            <Link href="/">
              <button className="magical-button">
                🏠 Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
