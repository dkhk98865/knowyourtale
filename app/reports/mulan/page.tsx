'use client';

import Link from 'next/link';
import ReportAccessGate from '@/components/report-access-gate';
import Image from 'next/image';

export default function MulanReportPage() {
  return (
    <ReportAccessGate characterId="mulan">
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Mulan – The Brave Warrior</h2>
        <div className="magical-sparkle text-2xl">⚔️</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/mulan.png" 
              alt="Mulan" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Mulan</h3>
          <p className="text-gray-600 text-lg">The Brave Warrior</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Mulan, the Brave Warrior</strong>. Your story is one of courage, honor, and determination in the face of impossible odds. You embody the willingness to fight for those you love and the resilience to stand strong, even when others underestimate you. Though you often carry the weight of responsibility, your bravery reminds the world that true strength comes not from conformity, but from authenticity and devotion.
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
                <div className="text-red-500 text-xl">⚔️</div>
                <span className="text-gray-700">Bold and determined</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-red-500 text-xl">🛡️</div>
                <span className="text-gray-700">Protective and loyal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-red-500 text-xl">💪</div>
                <span className="text-gray-700">Resilient in adversity</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-red-500 text-xl">🎯</div>
                <span className="text-gray-700">Dutiful yet innovative</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-red-500 text-xl">✨</div>
                <span className="text-gray-700">Courageous and self-sacrificing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-amber-50 to-yellow-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🏆</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Strengths</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              At your best, you embody <strong>the spirit of fearless loyalty and resilience</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🔥 Courage Under Fire</h4>
                <p className="text-gray-700">You rise when others shrink from danger.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🛡️ Protective Instinct</h4>
                <p className="text-gray-700">You defend those you love without hesitation.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">💡 Innovation</h4>
                <p className="text-gray-700">You find clever, unexpected ways to overcome obstacles.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🌟 Inspiration</h4>
                <p className="text-gray-700">You lead by example, showing that bravery transcends expectation.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that courage is not the absence of fear, but the choice to face it anyway.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">⚡</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Challenges & Shadow Side</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              Your bravery also brings struggles:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">⚖️ Burden of Responsibility</h4>
                <p className="text-gray-700">You may feel pressured to carry more than your share.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">🎭 Suppressed Vulnerability</h4>
                <p className="text-gray-700">You may hide softness for fear of appearing weak.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">😰 Fear of Failure</h4>
                <p className="text-gray-700">Doubt may creep in when you feel others rely on you too much.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: True strength includes the courage to be authentic, not only unyielding.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-rose-800 mb-4">&ldquo;Courage in Disguise.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story reflects the truth that bravery is not about appearance, but about action—and that authenticity is itself an act of courage.
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
              People see you as strong, capable, and inspiring. To some, you may appear larger than life—always dependable, always courageous. Yet those close to you know the quiet vulnerability beneath your strength, and admire your ability to carry both.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌱</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Growth Path</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              To live into your fullest story, you are invited to:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-2">1. ⚖️ Balance Strength with Vulnerability</h4>
                <p className="text-gray-700">Let others see your full self.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-2">2. 🤝 Share Responsibility</h4>
                <p className="text-gray-700">Trust others to carry part of the burden.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-2">3. 💚 Honor Your Needs</h4>
                <p className="text-gray-700">Your wellbeing matters as much as the battles you fight.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-2">4. 👑 Lead Authentically</h4>
                <p className="text-gray-700">Remember that leadership grows from honesty, not perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-violet-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💌</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-purple-800 italic">&ldquo;Your courage carves paths where none exist.&rdquo;</h4>
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
              <p className="text-gray-700">The Impostor — hiding your true self out of fear of rejection.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">Hansel-type protectors — together, loyalty and bravery form unshakable bonds.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">⚔️ Life Symbol</h4>
              <p className="text-gray-700">The sword — strength tempered by honor.</p>
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
              Like Mulan, your journey is not only about fighting battles for others—it is about embracing the courage to be fully yourself. Your bravery, devotion, and innovation inspire change in those around you, but your destiny also calls you to carry your own heart with honor. When you unite your strength with your authenticity, you embody the warrior who protects, inspires, and transforms.
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
