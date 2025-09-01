'use client';

import { characters } from '@/types/characters';
import { getCompatibilityReport } from '@/lib/compatibility-data';
import CompatibilityPurchase from '@/components/compatibility-purchase';

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
    compatibilityPairId?: string;
    compatibilityPairIds?: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());
  
  const { id } = use(params);
  const [character1Id, character2Id] = id.split('-');
  
  const character1 = characters.find((c) => c.id === character1Id);
  const character2 = characters.find((c) => c.id === character2Id);
  const compatibilityData = getCompatibilityReport(id);

  const checkAccess = async (email: string) => {
    try {
      const response = await fetch('/api/check-compatibility-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: email, compatibilityPairId: id }),
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

  if (!character1 || !character2) {
    return notFound();
  }

  // Check if user has access to this compatibility report
  const hasAccess = userAccess?.hasAccess && (
    userAccess.accessType === 'all_pairs' || 
    userAccess.accessType === 'monthly_compatibility' ||
    (userAccess.accessType === 'single_pair' && userAccess.compatibilityPairId === id) ||
    (userAccess.accessType === 'multiple_single_pairs' && userAccess.compatibilityPairIds?.includes(id))
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
        <CompatibilityPurchase 
          compatibilityPairId={id}
          character1Name={character1.name}
          character2Name={character2.name}
        />
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

        {/* Core Dynamic */}
        <div className="storybook-card page-turn p-6 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌙</div>
            <h2 className="storybook-subtitle text-2xl mb-3 text-blue-800">Core Dynamic</h2>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          {compatibilityData ? (
            <>
              <h3 className="text-center text-xl font-semibold text-blue-800 mb-4">{compatibilityData.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                {compatibilityData.subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mt-4">
                {compatibilityData.summary}
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                When {character1.name} and {character2.name} meet, there&apos;s an immediate recognition of shared sweetness. Both archetypes embody purity and kindness, though expressed differently: {character1.name}&apos;s innocence shines in her trusting heart, while {character2.name}&apos;s endurance shows in her quiet patience under hardship. Together, they create a gentle bond rooted in empathy and compassion.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mt-4">
                Yet, the very similarity that draws them together can also lead to passivity. Each waits for life to happen rather than shaping it boldly. Their relationship flourishes in warmth, but risks becoming stagnant without intentional action.
              </p>
            </>
          )}
        </div>

        {/* Strengths Together */}
        <div className="storybook-card page-turn p-6 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">✨</div>
            <h2 className="storybook-subtitle text-2xl mb-3 text-green-800">Strengths Together</h2>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <ul className="space-y-3 max-w-4xl mx-auto">
            {compatibilityData ? (
              compatibilityData.strengths.map((strength, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">•</div>
                  <div>
                    {strength.includes('→') ? (
                      <>
                        <strong>{strength.split('→')[0]}</strong> → {strength.split('→')[1]}
                      </>
                    ) : (
                      strength
                    )}
                  </div>
                </li>
              ))
            ) : (
              <>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">•</div>
                  <div>
                    <strong>Empathy & Understanding</strong> → Both naturally forgive and comfort each other, avoiding cruelty.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">•</div>
                  <div>
                    <strong>Shared Values</strong> → Loyalty, family, and harmony matter deeply to both.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">•</div>
                  <div>
                    <strong>Mutual Gentleness</strong> → They provide a safe haven where neither fears judgment.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">•</div>
                  <div>
                    <strong>Emotional Healing</strong> → {character2.name} reassures {character1.name}&apos;s fears, while {character1.name} lightens {character2.name}&apos;s burdens.
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Challenges & Tensions */}
        <div className="storybook-card page-turn p-6 mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">⚡</div>
            <h2 className="storybook-subtitle text-2xl mb-3 text-orange-800">Challenges & Tensions</h2>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <ul className="space-y-3 max-w-4xl mx-auto">
            {compatibilityData ? (
              compatibilityData.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="text-orange-500 text-xl mt-1">•</div>
                  <div>
                    {challenge.includes('→') ? (
                      <>
                        <strong>{challenge.split('→')[0]}</strong> → {challenge.split('→')[1]}
                      </>
                    ) : (
                      challenge
                    )}
                  </div>
                </li>
              ))
            ) : (
              <>
                <li className="flex items-start space-x-3">
                  <div className="text-orange-500 text-xl mt-1">•</div>
                  <div>
                    <strong>Over-Passivity</strong> → Both tend to endure rather than confront. They may stay too long in toxic dynamics without pushing for change.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-orange-500 text-xl mt-1">•</div>
                  <div>
                    <strong>Lack of Initiative</strong> → Neither archetype is naturally bold — together they risk &ldquo;waiting for rescue.&rdquo;
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-orange-500 text-xl mt-1">•</div>
                  <div>
                    <strong>Suppressed Frustration</strong> → Their politeness can hide resentment if they avoid tough conversations.
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Advice for Growth */}
        <div className="storybook-card page-turn p-6 mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🧭</div>
            <h2 className="storybook-subtitle text-2xl mb-3 text-purple-800">Advice for Growth</h2>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {compatibilityData ? (
              compatibilityData.advice.map((advice, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-2">{index + 1}. {advice.split('→')[0]}</h3>
                  <p className="text-gray-700">{advice.split('→')[1] || advice}</p>
                </div>
              ))
            ) : (
              <>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-2">1. Practice Small Acts of Boldness</h3>
                  <p className="text-gray-700">Try making decisions without waiting for outside approval — even small choices like planning a trip or starting a project.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-2">2. Balance Care with Courage</h3>
                  <p className="text-gray-700">Kindness is their gift, but courage is their lesson. Supporting each other in taking risks builds strength.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-2">3. Journal Prompts</h3>
                  <p className="text-gray-700 mb-2"><em>{character1.name} types:</em> &ldquo;Where do I avoid action out of fear of conflict?&rdquo;</p>
                  <p className="text-gray-700"><em>{character2.name} types:</em> &ldquo;Where am I waiting for recognition instead of claiming it myself?&rdquo;</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Story Parallel */}
        <div className="storybook-card page-turn p-6 mb-8 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h2 className="storybook-subtitle text-2xl mb-3 text-amber-800">Story Parallel</h2>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
            {compatibilityData ? (
              compatibilityData.storyParallel
            ) : (
              <>
                {character1.name} lay waiting in her glass coffin, and {character2.name} waited for her fairy godmother&apos;s intervention. Both stories highlight external rescue. Yet, their true lesson is in stepping forward themselves: {character1.name} choosing to trust wisely, and {character2.name} embracing her worth before the ball. Together, this pair must learn that kindness paired with courage creates transformation.
              </>
            )}
          </p>
        </div>

        {/* Relationship Outlook */}
        <div className="storybook-card page-turn p-6 mb-8 bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💞</div>
            <h2 className="storybook-subtitle text-2xl mb-3 text-pink-800">Relationship Outlook</h2>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-semibold text-pink-800 mb-2">Friendship</h3>
              <p className="text-gray-700 text-sm">Deeply supportive, nonjudgmental, but needs outside inspiration to stay dynamic.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
              <div className="text-2xl mb-2">💕</div>
              <h3 className="font-semibold text-pink-800 mb-2">Romance</h3>
              <p className="text-gray-700 text-sm">Gentle, affectionate love with lasting loyalty, though prone to inertia.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold text-pink-800 mb-2">Work/Creative</h3>
              <p className="text-gray-700 text-sm">Harmonious and supportive, but needs a proactive third partner to spark bold moves.</p>
            </div>
          </div>
        </div>

        {/* Compatibility Rating */}
        <div className="storybook-card page-turn p-6 mb-8 bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200">
          <div className="text-center">
            <div className="magical-sparkle text-3xl mb-3">✅</div>
            <h2 className="storybook-subtitle text-2xl mb-3 text-indigo-800">Compatibility Rating</h2>
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              {compatibilityData ? (
                <>
                  {'★'.repeat(Math.floor(compatibilityData.compatibilityScore / 20))}
                  {'☆'.repeat(5 - Math.floor(compatibilityData.compatibilityScore / 20))}
                </>
              ) : (
                '★★★★☆'
              )}
            </div>
            <p className="text-gray-700 text-lg mb-2">
              {compatibilityData ? `${compatibilityData.compatibilityScore}/100` : '4/5 Stars'}
            </p>
            <p className="text-gray-600 italic">
              {compatibilityData ? compatibilityData.relationshipType : 'Beautiful harmony, but requires conscious courage to avoid stagnation.'}
            </p>
            <div className="magical-sparkle text-xl mt-4">✨</div>
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
