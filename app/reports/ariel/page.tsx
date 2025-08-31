'use client';

import { characters } from '@/types/characters';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ArielReportPage() {
  const character = characters.find((a) => a.id === 'ariel');

  if (!character) {
    return notFound();
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

        {/* Hero Section */}
        <section className="text-center mb-16 parchment-content">
          <div className="magical-sparkle text-4xl mb-6">✨</div>
          <h1 className="storybook-title text-5xl mb-6">Fairy Tale Personality Report</h1>
          <div className="storybook-divider mb-6"></div>
          <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Ariel – The Daring Seeker</h2>
          <div className="magical-sparkle text-2xl">🌊</div>
        </section>

        {/* Character Portrait */}
        <section className="max-w-2xl mx-auto mb-12">
          <div className="storybook-card page-turn p-6 text-center">
            <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
              <Image 
                src="/images/littlemermaid.png" 
                alt="Ariel (The Little Mermaid)" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <h3 className="storybook-subtitle text-2xl mb-3">Ariel</h3>
            <p className="text-gray-600 text-lg">The Daring Seeker</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-cyan-50 to-blue-50">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">🌹</div>
              <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              You are <strong>Ariel, the Daring Seeker</strong>. Your story is one of longing, courage, and the restless desire to explore new worlds. You carry a heart that refuses to be confined, always seeking freedom and discovery. Though your curiosity sometimes pulls you into risky waters, it is also the force that propels you toward transformation. You remind others that true growth comes when we dare to reach beyond what we know.
            </p>
          </div>
        </section>

        {/* Core Traits Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">🌟</div>
              <h3 className="storybook-subtitle text-2xl mb-4">Core Traits</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-cyan-500 text-xl">🌊</div>
                  <span className="text-gray-700">Adventurous and curious</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-cyan-500 text-xl">🦋</div>
                  <span className="text-gray-700">Independent and bold</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-cyan-500 text-xl">💫</div>
                  <span className="text-gray-700">Idealistic and passionate</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-cyan-500 text-xl">🌪️</div>
                  <span className="text-gray-700">Restless and imaginative</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-cyan-500 text-xl">⚡</div>
                  <span className="text-gray-700">Brave in the pursuit of dreams</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-teal-50 to-emerald-50">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">🏆</div>
              <h3 className="storybook-subtitle text-2xl mb-4">Strengths</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg mb-6 text-center">
                At your best, you embody <strong>the fearless spirit of exploration</strong>.
              </p>
              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">🔍 Curiosity</h4>
                  <p className="text-gray-700">You see possibilities others overlook.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">🦁 Courage</h4>
                  <p className="text-gray-700">You are willing to leave comfort for discovery.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">🌟 Inspiration</h4>
                  <p className="text-gray-700">Your hunger for freedom awakens others to their own potential.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">💭 Idealism</h4>
                  <p className="text-gray-700">You believe in what &ldquo;could be&rdquo; and reach for it wholeheartedly.</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg mt-6 text-center italic">
                At your best, you remind the world that daring hearts create new horizons.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-red-50 to-orange-50">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">⚡</div>
              <h3 className="storybook-subtitle text-2xl mb-4">Challenges & Shadow Side</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg mb-6 text-center">
                Your adventurous nature brings risks:
              </p>
              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">⚡ Impulsiveness</h4>
                  <p className="text-gray-700">Acting on desire without foresight can cause loss.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">🌪️ Restlessness</h4>
                  <p className="text-gray-700">Struggling to feel content in the present.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">⚖️ Sacrifice</h4>
                  <p className="text-gray-700">Giving up too much for dreams that may not fully satisfy.</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg mt-6 text-center italic">
                Your lesson: Curiosity becomes wisdom when balanced with patience and discernment.
              </p>
            </div>
          </div>
        </section>

        {/* Life Theme Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">📖</div>
              <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">&ldquo;The Call of the Unknown.&rdquo;</h4>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Your life mirrors the truth that discovery often requires sacrifice, but it also brings freedom and transformation.
              </p>
            </div>
          </div>
        </section>

        {/* How Others See You Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">👀</div>
              <h3 className="storybook-subtitle text-2xl mb-4">How Others See You</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                To others, you appear bold, adventurous, and full of life—sometimes reckless, but always inspiring. Your energy draws people in, and they see you as someone unafraid to dream and to chase those dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Growth Path Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-emerald-50 to-teal-50">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">🌱</div>
              <h3 className="storybook-subtitle text-2xl mb-4">Growth Path</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg mb-6 text-center">
                To step into your destiny, you are invited to:
              </p>
              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">1. ⚖️ Balance Dreaming with Grounding</h4>
                  <p className="text-gray-700">Hold onto vision while staying mindful of the present.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">2. 💎 Value What You Have</h4>
                  <p className="text-gray-700">Treasure the gifts already in your world.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">3. 🎯 Channel Curiosity Wisely</h4>
                  <p className="text-gray-700">Direct your adventurous spirit into meaningful pursuits.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">4. 🕊️ Recognize True Freedom</h4>
                  <p className="text-gray-700">Understand that real liberation comes from within.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-sky-50 to-cyan-50">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">💌</div>
              <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-cyan-800 italic">&ldquo;Your spirit sings of worlds beyond the shore.&rdquo;</h4>
            </div>
          </div>
        </section>

        {/* Premium Insights Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-accent-gold">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">🔮</div>
              <h3 className="storybook-subtitle text-2xl mb-4 text-accent-gold">Bonus Insights (Paid Plans)</h3>
              <div className="magical-sparkle text-xl">✨</div>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
                <h4 className="font-semibold text-accent-gold mb-2">👑 Shadow Archetype</h4>
                <p className="text-gray-700">The Siren — the danger of chasing desire into self-destruction.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
                <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
                <p className="text-gray-700">Alice — your shared curiosity creates a partnership of imagination and wonder.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
                <h4 className="font-semibold text-accent-gold mb-2">🐚 Life Symbol</h4>
                <p className="text-gray-700">The seashell — the voice of longing, echoing the call of the unknown.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Chapter Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-3xl mb-3">✨</div>
              <h3 className="storybook-subtitle text-2xl mb-4">Your Next Chapter</h3>
              <div className="magical-sparkle text-xl">🌟</div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                Like Ariel, your journey is not only about what lies beyond the horizon, but about the courage to pursue it. You are meant to explore, to break barriers, and to inspire others to seek their own freedom. When you balance curiosity with wisdom, your daring spirit doesn&apos;t just chase new worlds—it creates them.
              </p>
            </div>
          </div>
        </section>

        {/* Monthly Plan CTA Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="text-center mb-6">
              <div className="magical-sparkle text-4xl mb-4">📅</div>
              <h3 className="storybook-subtitle text-3xl mb-4 text-green-800">Continue Your Journey with Monthly Plan</h3>
              <div className="magical-sparkle text-xl">💎</div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-gray-700 text-lg mb-6">
                Ready to dive deeper into your fairy tale journey? Subscribe to our Monthly Plan and unlock weekly journaling prompts, exclusive journaling features, and access to our community board.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                                      <div className="text-green-600 text-2xl mb-2">📖</div>
                  <h4 className="font-semibold text-green-800 mb-2">Weekly Prompts</h4>
                  <p className="text-gray-600 text-sm">Personalized prompts for reflection and growth</p>
                </div>
                <div className="text-center">
                  <div className="text-green-600 text-2xl mb-2">📖</div>
                  <h4 className="font-semibold text-green-800 mb-2">Journaling Access</h4>
                  <p className="text-gray-600 text-sm">Track your journey with our exclusive journaling tools</p>
                </div>
                <div className="text-center">
                  <div className="text-green-600 text-2xl mb-2">👥</div>
                  <h4 className="font-semibold text-green-800 mb-2">Community Board</h4>
                  <p className="text-gray-600 text-sm">Connect with fellow fairy tale enthusiasts</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$7.99/month</div>
                <p className="text-gray-600 mb-4">Cancel anytime • No commitment required</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/subscription">
                <button className="magical-button magical-glow bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold">
                  Start Monthly Plan
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/reports">
              <button className="magical-button magical-glow">
                📊 View All Reports
              </button>
            </Link>
            <Link href="/quiz">
              <button className="magical-button magical-glow">
                🧙‍♀️ Take the Quiz
              </button>
            </Link>
          </div>
          <Link href="/">
            <button className="magical-button">
              🏠 Back to Home
            </button>
          </Link>
        </section>
      </main>
  );
}
