import Link from 'next/link';
import Image from 'next/image';

export default function CinderellaReportPage() {
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Cinderella – The Resilient Dreamer</h2>
        <div className="magical-sparkle text-2xl">🌟</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/cinderella.png" 
              alt="Cinderella" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Cinderella</h3>
          <p className="text-gray-600 text-lg">The Resilient Dreamer</p>
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
            You are <strong>Cinderella, the Resilient Dreamer</strong>. Your life is a story of endurance, transformation, and the quiet strength that shines when the world least expects it. Though hardship and neglect may weigh on you, your inner light never dims. You remind others that dignity, hope, and kindness can endure even the harshest trials—and that transformation is possible when you finally claim your own worth.
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
                <span className="text-gray-700">Gentle and kind</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">⏳</div>
                <span className="text-gray-700">Patient and enduring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">🌙</div>
                <span className="text-gray-700">Hopeful and imaginative</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">👑</div>
                <span className="text-gray-700">Quietly dignified</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 text-xl">✨</div>
                <span className="text-gray-700">Inspiring through resilience</span>
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
              At your best, you embody <strong>the power of grace and hope</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">💪 Endurance</h4>
                <p className="text-gray-700">You rise above difficulty without letting it harden your spirit.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🌟 Inspiration</h4>
                <p className="text-gray-700">Your story gives hope to others facing hardship.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🦋 Transformative Energy</h4>
                <p className="text-gray-700">You carry the ability to shift from ashes to radiance, showing others that change is possible.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🕊️ Inner Grace</h4>
                <p className="text-gray-700">Your kindness disarms cruelty and awakens love.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that gentleness and perseverance lead to triumph.
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
              Your gifts also bring risks:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">⏰ Waiting for Rescue</h4>
                <p className="text-gray-700">You may delay action, hoping someone else will recognize your worth.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">🪞 Self-Doubt</h4>
                <p className="text-gray-700">You may undervalue yourself or settle for less than you deserve.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">🙈 Fear of Visibility</h4>
                <p className="text-gray-700">Your quiet nature may make you hesitant to step into the spotlight.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: True transformation begins when you stop waiting and step forward yourself.
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
            <h4 className="text-2xl font-bold text-purple-800 mb-4">&ldquo;From Ashes to Radiance.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story mirrors the truth that trials refine, and that hope can transform suffering into triumph.
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
              To others, you appear gentle, composed, and quietly graceful. Some may underestimate you, mistaking humility for weakness. But those who look closely see the strength in your patience and the unshakable dignity that carries you through difficulty.
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
              To step fully into your destiny, you are invited to:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">1. 🚀 Step into Agency</h4>
                <p className="text-gray-700">Don&apos;t wait for others to validate your worth—own it.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">2. 🛡️ Set Boundaries</h4>
                <p className="text-gray-700">Protect your kindness by recognizing when others take advantage.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">3. 🌟 Claim Visibility</h4>
                <p className="text-gray-700">Dare to show your light, even if it feels uncomfortable.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">4. 🦋 Embrace Transformation</h4>
                <p className="text-gray-700">Recognize that your story is not only survival—it&apos;s the unfolding of brilliance.</p>
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
            <h4 className="text-3xl font-bold text-pink-800 italic">&ldquo;No matter the ashes, your spirit shines bright.&rdquo;</h4>
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
              <p className="text-gray-700">The Stepmother — the danger of bitterness if hope is lost.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">The Beast — your grace helps him reveal his hidden heart.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">👠 Life Symbol</h4>
              <p className="text-gray-700">The glass slipper — unique, unbreakable proof of your true identity.</p>
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
              Like Cinderella, your path is not to remain in the shadows, but to step forward into your own radiance. Your kindness and patience are not meant to keep you hidden, but to prepare you for transformation. When you claim your power and choose visibility, you inspire others to believe in their own ability to rise above hardship and become who they were meant to be.
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
