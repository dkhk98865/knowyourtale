import Link from 'next/link';
import Image from 'next/image';

export default function WendyReportPage() {
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Wendy Darling – The Loyal Nurturer</h2>
        <div className="magical-sparkle text-2xl">🧚‍♀️</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/wendydarling.png" 
              alt="Wendy Darling (Peter Pan)" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Wendy Darling</h3>
          <p className="text-gray-600 text-lg">The Loyal Nurturer</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-sky-50 to-blue-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Wendy, the Loyal Nurturer</strong>. Your story is one of care, devotion, and the longing to protect and guide others. You have a natural gift for creating safety and warmth, and your steady presence helps others grow. Though your loyalty is admirable, your greatest lesson is that you, too, deserve adventure, freedom, and care—not only the role of caretaker. You remind others that love is not just protection—it is also encouragement to fly.
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
                <div className="text-blue-500 text-xl">🤱</div>
                <span className="text-gray-700">Nurturing and empathetic</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">💙</div>
                <span className="text-gray-700">Loyal and dependable</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">🌸</div>
                <span className="text-gray-700">Gentle but strong</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">🌟</div>
                <span className="text-gray-700">Imaginative and playful</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">🛡️</div>
                <span className="text-gray-700">Protective of loved ones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🏆</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Strengths</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              At your best, you embody <strong>the quiet strength of loyalty and care</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🤱 Natural Caregiver</h4>
                <p className="text-gray-700">You make others feel safe, loved, and encouraged.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">💙 Steadfast Loyalty</h4>
                <p className="text-gray-700">Your devotion builds deep bonds of trust.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🌸 Gentle Leadership</h4>
                <p className="text-gray-700">You guide others with compassion rather than control.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🌟 Imagination</h4>
                <p className="text-gray-700">You keep childlike wonder alive even in responsibility.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that love creates the courage to grow.
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
              Your loyalty and caregiving also carry struggles:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">⚖️ Over-Responsibility</h4>
                <p className="text-gray-700">Taking on too much for others.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🫧 Neglect of Self</h4>
                <p className="text-gray-700">Forgetting your own needs and dreams.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🤗 Overprotection</h4>
                <p className="text-gray-700">Holding on too tightly instead of letting others grow.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: Care for others fully, but don&apos;t forget to care for yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-violet-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-purple-800 mb-4">&ldquo;The Caretaker&apos;s Flight.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story reflects the balance between nurturing others and embracing your own adventure.
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
              People see you as loving, dependable, and wise beyond your years. Many turn to you for comfort and guidance, sensing your reliability and warmth. Some may assume you will always give, but your presence also teaches them the true depth of loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-cyan-50 to-sky-50">
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
              <div className="bg-white/60 p-4 rounded-lg border border-cyan-200">
                <h4 className="font-semibold text-cyan-800 mb-2">1. ⚖️ Balance Care with Freedom</h4>
                <p className="text-gray-700">Support others without losing your own path.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-cyan-200">
                <h4 className="font-semibold text-cyan-800 mb-2">2. 🌟 Honor Your Dreams</h4>
                <p className="text-gray-700">Remember your own life is also an adventure.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-cyan-200">
                <h4 className="font-semibold text-cyan-800 mb-2">3. 🛡️ Set Gentle Boundaries</h4>
                <p className="text-gray-700">Protect your energy so you can sustain your care.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-cyan-200">
                <h4 className="font-semibold text-cyan-800 mb-2">4. 🕊️ Let Go When Needed</h4>
                <p className="text-gray-700">Allow others to fly on their own wings.</p>
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
            <h4 className="text-3xl font-bold text-rose-800 italic">&ldquo;Your care gives others the courage to fly.&rdquo;</h4>
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
              <p className="text-gray-700">The Overprotective Mother — stifling rather than freeing.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">Dorothy — her seeking pairs with your loyalty, creating belonging.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🪡 Life Symbol</h4>
              <p className="text-gray-700">The thimble — a token of love and protection freely given.</p>
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
              Like Wendy, your journey is about remembering that loyalty and nurturing are most powerful when they also include yourself. You are called not only to guide, but also to grow—to take flight alongside those you protect. When you balance care with freedom, your love becomes not only a shelter, but a wind beneath the wings of others and yourself.
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
