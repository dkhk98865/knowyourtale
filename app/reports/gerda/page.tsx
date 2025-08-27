'use client';

import Link from 'next/link';
import ReportAccessGate from '@/components/report-access-gate';
import Image from 'next/image';

export default function GerdaReportPage() {
  return (
    <ReportAccessGate characterId="gerda">
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Gerda – The Faithful Heart</h2>
        <div className="magical-sparkle text-2xl">❄️</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/gerda.png" 
              alt="Gerda (The Snow Queen)" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Gerda</h3>
          <p className="text-gray-600 text-lg">The Faithful Heart</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-blue-50 to-sky-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Gerda, the Faithful Heart</strong>. Your story is one of loyalty, courage, and the transformative power of love. Even in the face of icy coldness and endless struggle, your heart remains steadfast. You embody devotion that conquers despair and perseverance that melts even the hardest barriers. Though your journey is long, your faith and love bring you—and those you care for—safely through.
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
                <div className="text-blue-500 text-xl">💙</div>
                <span className="text-gray-700">Loyal and devoted</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">🦁</div>
                <span className="text-gray-700">Courageous and persistent</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">🤗</div>
                <span className="text-gray-700">Compassionate and nurturing</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">💪</div>
                <span className="text-gray-700">Resilient in hardship</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">✨</div>
                <span className="text-gray-700">Guided by love and faith</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🏆</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Strengths</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              At your best, you embody <strong>the triumph of steadfast love and loyalty</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">💎 Unshakable Devotion</h4>
                <p className="text-gray-700">You remain true, even when others falter.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">⚔️ Courage in Adversity</h4>
                <p className="text-gray-700">You bravely confront what others fear.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">🌡️ Healing Presence</h4>
                <p className="text-gray-700">Your love restores warmth and life to those who are frozen by despair.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">🏃‍♀️ Endurance</h4>
                <p className="text-gray-700">You have the strength to keep going when others give up.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that the faithful heart always finds its way through.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">⚡</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Challenges & Shadow Side</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              Your loyalty carries risks:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">🎭 Over-Sacrifice</h4>
                <p className="text-gray-700">You may give too much, even when it harms you.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">🔗 Difficulty Letting Go</h4>
                <p className="text-gray-700">You may hold on too tightly to relationships or ideals.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">💔 Pain from Rejection</h4>
                <p className="text-gray-700">You can suffer deeply when devotion is not returned.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: Love must include devotion to yourself, not only to others.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-cyan-800 mb-4">&ldquo;Love&apos;s Journey Through Ice.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story reflects the truth that persistence in love can melt the coldest barriers and bring life where there was once despair.
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
              People see you as loyal, steadfast, and dependable. To many, you are a quiet but powerful force of courage. Some may underestimate your strength, seeing only gentleness, until your resilience shines in times of crisis.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-teal-50 to-cyan-50">
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
                <h4 className="font-semibold text-teal-800 mb-2">1. ⚖️ Balance Loyalty with Self-Care</h4>
                <p className="text-gray-700">Devotion should not deplete you.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">2. 🔍 Discern Healthy Bonds</h4>
                <p className="text-gray-700">Know when love is mutual and when it is not.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">3. 💪 Value Your Strength</h4>
                <p className="text-gray-700">Recognize the courage it takes to remain faithful.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">4. 🎉 Celebrate Your Journey</h4>
                <p className="text-gray-700">Your perseverance is a victory in itself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-sky-50 to-blue-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💌</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-sky-800 italic">&ldquo;Your love thaws the coldest hearts.&rdquo;</h4>
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
              <p className="text-gray-700">The Frozen Heart — risking emotional numbness after too much sacrifice.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">Snow White — your shared purity and loyalty bring harmony.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🌹 Life Symbol</h4>
              <p className="text-gray-700">The rose in winter — a symbol of devotion that blooms even in hardship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Chapter Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">✨</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Your Next Chapter</h3>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Like Gerda, your journey is not simply about reaching the end—it is about discovering the strength of your own heart along the way. Your love has the power to heal, to restore, and to inspire others to thaw the frozen places in their own lives. When you balance devotion to others with devotion to yourself, your faithful heart becomes not just resilient, but radiant.
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
