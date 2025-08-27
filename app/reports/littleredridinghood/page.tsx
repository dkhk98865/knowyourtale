'use client';

import Link from 'next/link';
import ReportAccessGate from '@/components/report-access-gate';
import Image from 'next/image';

export default function LittleRedRidingHoodReportPage() {
  return (
    <ReportAccessGate characterId="littleredridinghood">
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Little Red Riding Hood – The Curious Explorer</h2>
        <div className="magical-sparkle text-2xl">🧺❤️</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/littleredridinghood.png" 
              alt="Little Red Riding Hood" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Little Red Riding Hood</h3>
          <p className="text-gray-600 text-lg">The Curious Explorer</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-red-50 to-rose-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Little Red Riding Hood, the Curious Explorer</strong>. Your story is about curiosity, daring, and the lessons learned when stepping into the unknown. You are driven by an adventurous spirit and a hunger to experience the world firsthand. Though your boldness can lead you into danger, it is also the key to your growth—teaching you discernment, resilience, and courage. You remind others that every journey through the woods is also a journey into wisdom.
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
                <div className="text-red-500 text-xl">🔥</div>
                <span className="text-gray-700">Bold and adventurous</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-red-500 text-xl">⚡</div>
                <span className="text-gray-700">Spirited and energetic</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-red-500 text-xl">🔍</div>
                <span className="text-gray-700">Curious and open to discovery</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-red-500 text-xl">🌸</div>
                <span className="text-gray-700">Innocent yet daring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-red-500 text-xl">📚</div>
                <span className="text-gray-700">Learns through experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-red-50 to-pink-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🏆</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Strengths</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              At your best, you embody <strong>the vitality of curiosity and courage</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">🌲 Adventurous Spirit</h4>
                <p className="text-gray-700">You seek out new experiences with enthusiasm.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">🦁 Bravery</h4>
                <p className="text-gray-700">You face uncertainty head-on, even when others hesitate.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">💫 Inspiration</h4>
                <p className="text-gray-700">Your daring encourages others to be more courageous.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">🔄 Adaptability</h4>
                <p className="text-gray-700">You learn quickly from mistakes and challenges.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that growth comes from venturing into the unknown.
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
              Your adventurous spirit also carries risks:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🚀 Impulsiveness</h4>
                <p className="text-gray-700">Leaping before looking can expose you to harm.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🫧 Naïveté</h4>
                <p className="text-gray-700">You may trust too easily, especially when charmed by appearances.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">⚠️ Recklessness</h4>
                <p className="text-gray-700">Adventure without foresight can lead to danger.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: Curiosity is powerful when tempered by wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-green-800 mb-4">&ldquo;Lessons in the Woods.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story reflects the truth that journeys into shadow and uncertainty are often where we grow the most.
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
              People see you as lively, curious, and fearless—sometimes reckless, but always authentic. To some, you may appear too trusting, yet many admire your ability to embrace life wholeheartedly.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-green-50 to-emerald-50">
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
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">1. ⏸️ Pause Before Acting</h4>
                <p className="text-gray-700">Let excitement be guided by foresight.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">2. 🧠 Trust Your Intuition</h4>
                <p className="text-gray-700">Your instincts can protect you when appearances deceive.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">3. 📚 Learn from Each Step</h4>
                <p className="text-gray-700">See mistakes as lessons, not failures.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">4. ⚖️ Balance Adventure with Care</h4>
                <p className="text-gray-700">You don&apos;t need to lose your daring spirit to be wise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-rose-50 to-red-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💌</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-rose-800 italic">&ldquo;Curiosity leads you into the woods—and out stronger.&rdquo;</h4>
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
              <p className="text-gray-700">The Wolf — the danger of being consumed by reckless desire.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">Gretel — her cleverness complements your daring.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🧺 Life Symbol</h4>
              <p className="text-gray-700">The red hood — courage, individuality, and the fire of exploration.</p>
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
              Like Little Red Riding Hood, your path is not about avoiding the forest, but learning to walk through it wisely. Your curiosity is a gift—it pushes you beyond limits and opens doors others fear to enter. When you combine your adventurous spirit with discernment, you become not just a wanderer, but a guide—showing others how to face the woods and emerge stronger.
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
