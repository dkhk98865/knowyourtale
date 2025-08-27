import Link from 'next/link';
import Image from 'next/image';

export default function AuroraReportPage() {
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Aurora – The Dreamer in Waiting</h2>
        <div className="magical-sparkle text-2xl">🌙</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/sleepingbeauty.png" 
              alt="Aurora (Sleeping Beauty)" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Aurora</h3>
          <p className="text-gray-600 text-lg">The Dreamer in Waiting</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Aurora, the Dreamer in Waiting</strong>. Your story is one of patience, mystery, and hidden potential. You carry a rich inner life filled with dreams, intuition, and visions of what could be. While you may sometimes drift into stillness or waiting, your true journey is not about endless sleep—it is about awakening to your full power at the right moment. You remind others that even in silence, life is preparing something extraordinary.
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
                <div className="text-purple-500 text-xl">🌙</div>
                <span className="text-gray-700">Imaginative and visionary</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-purple-500 text-xl">⏳</div>
                <span className="text-gray-700">Patient and inward-focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-purple-500 text-xl">🕊️</div>
                <span className="text-gray-700">Gentle and serene</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-purple-500 text-xl">🔮</div>
                <span className="text-gray-700">Mystical and intuitive</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-purple-500 text-xl">⏰</div>
                <span className="text-gray-700">Sensitive to timing and destiny</span>
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
              At your best, you embody <strong>the wisdom of patience and imagination</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">🔮 Visionary Insight</h4>
                <p className="text-gray-700">You sense possibilities others overlook, giving you a mystical perspective.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">⏳ Patience</h4>
                <p className="text-gray-700">You trust in timing and can wait when others grow restless.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">🕊️ Calming Presence</h4>
                <p className="text-gray-700">Your serenity comforts those around you.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">🌊 Inner Depth</h4>
                <p className="text-gray-700">You dream richly and think deeply, bringing subtle wisdom to life&apos;s challenges.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that awakening comes in its own season—and brings beauty with it.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">⚡</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Challenges & Shadow Side</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              Your gifts also carry shadows:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-pink-200">
                <h4 className="font-semibold text-pink-800 mb-2">😴 Passivity</h4>
                <p className="text-gray-700">You may wait too long for destiny instead of acting.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-pink-200">
                <h4 className="font-semibold text-pink-800 mb-2">🌌 Escapism</h4>
                <p className="text-gray-700">You may retreat into fantasy instead of engaging reality.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-pink-200">
                <h4 className="font-semibold text-pink-800 mb-2">⏰ Missed Opportunities</h4>
                <p className="text-gray-700">By waiting for the &ldquo;perfect&rdquo; time, chances can slip by.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: Awakening is not something others bring—it begins when you choose it yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-violet-50 to-purple-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-violet-800 mb-4">&ldquo;Awakening the Self.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story mirrors the truth that hidden potential must eventually rise into action.
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
              To others, you appear graceful, dreamy, and mysterious—almost untouchable. People are drawn to your serenity and imagination, sensing something magical about your presence. Yet some may see you as distant or passive, not realizing the depth of your inner world.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-blue-50 to-cyan-50">
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
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">1. 🌅 Awaken Proactively</h4>
                <p className="text-gray-700">Don&apos;t wait for fate—step into your moment.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">2. ⚖️ Balance Rest with Action</h4>
                <p className="text-gray-700">Honor your dreams, but let them inspire real steps.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">3. 🌍 Engage with Life</h4>
                <p className="text-gray-700">Bring your inner vision into the outer world.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">4. ⚡ Claim Your Power</h4>
                <p className="text-gray-700">Trust that you don&apos;t need rescuing—your awakening begins with you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-lavender-50 to-purple-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💌</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-purple-800 italic">&ldquo;Your true self awakens in its own time.&rdquo;</h4>
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
              <p className="text-gray-700">The Curse — surrendering power to fate or others.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">The Beast — his fierce passion can stir your hidden strength.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🕸️ Life Symbol</h4>
              <p className="text-gray-700">The spindle — pain that becomes the spark of transformation.</p>
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
              Like Aurora, your journey is not about eternal waiting, but about awakening. You carry dreams and inner gifts that are meant to shape the world. When you rise and step forward, you show that patience was never passivity—it was preparation. Your awakening is not only your own, but a light for others to awaken as well.
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
  );
}
