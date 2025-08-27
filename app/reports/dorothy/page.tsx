'use client';

import Link from 'next/link';
import ReportAccessGate from '@/components/report-access-gate';
import Image from 'next/image';

export default function DorothyReportPage() {
  return (
    <ReportAccessGate characterId="dorothy">
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Dorothy – The Seeker of Home</h2>
        <div className="magical-sparkle text-2xl">🌪️</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/dorothygale.png" 
              alt="Dorothy (The Wizard of Oz)" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Dorothy</h3>
          <p className="text-gray-600 text-lg">The Seeker of Home</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Dorothy, the Seeker of Home</strong>. Your story is about longing, courage, and the discovery that what you seek is often within you already. You are drawn to journeys, connections, and the pursuit of belonging. Though storms may sweep you into strange lands, your loyalty and heart bring you back to what truly matters. You remind others that &ldquo;home&rdquo; is not only a place—it is the love, authenticity, and courage we carry with us.
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
                <div className="text-emerald-500 text-xl">💚</div>
                <span className="text-gray-700">Loyal and kind-hearted</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-emerald-500 text-xl">🦁</div>
                <span className="text-gray-700">Brave and adventurous</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-emerald-500 text-xl">🏠</div>
                <span className="text-gray-700">Seeker of belonging</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-emerald-500 text-xl">🤗</div>
                <span className="text-gray-700">Compassionate and caring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-emerald-500 text-xl">✨</div>
                <span className="text-gray-700">Grounded yet hopeful</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🏆</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Strengths</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              At your best, you embody <strong>the strength of loyalty and discovery</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🌪️ Bravery in Strangeness</h4>
                <p className="text-gray-700">You face the unknown with courage.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">💖 Heart-Centered Leadership</h4>
                <p className="text-gray-700">You bring unity to people from all walks of life.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🤝 Loyalty</h4>
                <p className="text-gray-700">You stay true to those you care for, no matter the distance.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🌱 Grounded Hope</h4>
                <p className="text-gray-700">You inspire others to hold onto what matters most.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that home is not lost—it is found within.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">⚡</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Challenges & Shadow Side</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              Your longing for belonging can also create struggles:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🌈 Idealizing Home</h4>
                <p className="text-gray-700">Believing fulfillment lies elsewhere rather than in yourself.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🧭 Dependency</h4>
                <p className="text-gray-700">Relying too much on guidance from others.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🌪️ Restlessness</h4>
                <p className="text-gray-700">Feeling unsettled, always searching.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: The home you seek begins with recognizing your own strength.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-blue-800 mb-4">&ldquo;The Journey Home.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story reflects the truth that storms may displace us, but love and loyalty always lead us back.
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
              People see you as loyal, courageous, and kind. You are someone who brings people together and helps them feel safe and valued. To many, you are a reminder of the importance of friendship, love, and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-teal-50 to-green-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌱</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Growth Path</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              To embody your fullest story, you are invited to:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">1. 🏠 Recognize Inner Home</h4>
                <p className="text-gray-700">Learn that belonging begins with self-acceptance.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">2. ⚖️ Balance Adventure with Presence</h4>
                <p className="text-gray-700">Don&apos;t miss the gifts of now while longing for elsewhere.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">3. 💪 Trust Your Own Strength</h4>
                <p className="text-gray-700">You carry the power you often seek in others.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">4. 🎉 Celebrate Loyalty</h4>
                <p className="text-gray-700">Treasure the bonds you create on your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💌</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-rose-800 italic">&ldquo;Your heart carries home wherever you go.&rdquo;</h4>
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
              <p className="text-gray-700">The Wanderer — endlessly searching without finding.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">Wendy — her nurturing balances your seeking.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">👠 Life Symbol</h4>
              <p className="text-gray-700">The ruby slippers — a reminder that you already have the way home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Chapter Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">✨</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Your Next Chapter</h3>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Like Dorothy, your journey is not only about reaching a place—it is about realizing that home is carried within you. Your loyalty, kindness, and courage make you a unifying force wherever you go. When you accept that you already possess what you seek, you stop wandering and begin truly living in the fullness of home.
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
                <div className="text-green-600 text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-green-800 mb-2">Weekly Emails</h4>
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
    </ReportAccessGate>
  );
}
