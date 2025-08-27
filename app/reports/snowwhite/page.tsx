import Link from 'next/link';
import Image from 'next/image';

export default function SnowWhiteReportPage() {
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Snow White – The Innocent Healer</h2>
        <div className="magical-sparkle text-2xl">🌟</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/snowwhite.png" 
              alt="Snow White" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Snow White</h3>
          <p className="text-gray-600 text-lg">The Innocent Healer</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Snow White, the Innocent Healer</strong>. Your story is one of purity, compassion, and the resilience of innocence. Wherever you go, you bring harmony, reminding others of the beauty in kindness. Though your gentle nature can leave you vulnerable, your heart has the rare power to awaken life itself—turning despair into joy.
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
                <div className="text-green-500 text-xl">🌹</div>
                <span className="text-gray-700">Gentle and nurturing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">🕊️</div>
                <span className="text-gray-700">Innocent yet resilient</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">💝</div>
                <span className="text-gray-700">Empathetic and compassionate</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✨</div>
                <span className="text-gray-700">Bringer of joy and renewal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">🌱</div>
                <span className="text-gray-700">Restorative and life-giving</span>
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
              At your best, you embody <strong>the restorative power of innocence and compassion</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🌿 Healing Presence</h4>
                <p className="text-gray-700">Your kindness soothes wounds and unites people.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🤝 Trust Builder</h4>
                <p className="text-gray-700">Your openness draws others in, inspiring loyalty.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">☀️ Unshakable Optimism</h4>
                <p className="text-gray-700">You persist in seeing the good, even through darkness.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that goodness is a strength, not a weakness.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">⚡</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Challenges & Shadow Side</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              Your gentleness carries risks:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">⚠️ Over-Trusting</h4>
                <p className="text-gray-700">You may be deceived or manipulated by those with ill intent.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">🚧 Lack of Boundaries</h4>
                <p className="text-gray-700">Your empathy may lead you to give too much.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">💔 Neglect of Self</h4>
                <p className="text-gray-700">In focusing on others, your own needs can go unmet.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: Innocence blossoms fully when protected by wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-purple-800 mb-4">&ldquo;Innocence Triumphant.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your life mirrors the truth that purity of heart, though vulnerable, will always outlast envy, jealousy, and malice.
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
              People see you as refreshing, luminous, and kind—like a spring of water in a dry place. To some, you appear naive, but those who truly know you sense the quiet strength behind your gentle demeanor.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌱</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Growth Path</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              To embody your fullest self, you are invited to:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">1. 🔍 Strengthen Discernment</h4>
                <p className="text-gray-700">Learn to see clearly while keeping your compassion.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">2. 🛡️ Protect Your Energy</h4>
                <p className="text-gray-700">Boundaries preserve your kindness.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">3. ⚖️ Balance Giving and Receiving</h4>
                <p className="text-gray-700">Allow yourself to be cared for too.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">4. 💎 Embrace Resilient Innocence</h4>
                <p className="text-gray-700">Remember that purity does not mean weakness—it means strength without corruption.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💌</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-pink-800 italic">&ldquo;Your kindness awakens others to life.&rdquo;</h4>
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
              <p className="text-gray-700">The Jealous Queen — the danger of letting envy poison your spirit.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">Hansel — his protective loyalty safeguards your innocence.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🍎 Life Symbol</h4>
              <p className="text-gray-700">The red apple — both temptation and triumph, symbol of life restored.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Chapter Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-violet-50 to-purple-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">✨</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Your Next Chapter</h3>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Like Snow White, your journey is not just about surviving envy or betrayal—it is about restoring life, wherever you go. Your power lies in your ability to awaken goodness in others, to turn coldness into warmth, and to carry innocence into maturity. Your kindness is not fragility—it is resilience, radiant enough to bring the world back to life.
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
