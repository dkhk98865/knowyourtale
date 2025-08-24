import Link from 'next/link';
import Image from 'next/image';

export default function BelleReportPage() {
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Belle – The Compassionate Visionary</h2>
        <div className="magical-sparkle text-2xl">🌹</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/beautyandthebeast.png" 
              alt="Belle (Beauty and the Beast)" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Belle</h3>
          <p className="text-gray-600 text-lg">The Compassionate Visionary</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Belle, the Compassionate Visionary</strong>. Your story is about love, wisdom, and the power of seeing beyond appearances. You carry an open heart that perceives truth where others see only surface, and you inspire transformation in those around you. Though your compassion runs deep, your greatest challenge is remembering that your own dreams deserve as much attention as those of others.
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
                <div className="text-rose-500 text-xl">💖</div>
                <span className="text-gray-700">Empathetic and kind</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-rose-500 text-xl">🧠</div>
                <span className="text-gray-700">Intelligent and insightful</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-rose-500 text-xl">🦁</div>
                <span className="text-gray-700">Courageous in love and loyalty</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-rose-500 text-xl">📚</div>
                <span className="text-gray-700">Curious and imaginative</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-rose-500 text-xl">✨</div>
                <span className="text-gray-700">Transforms others through compassion</span>
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
              At your best, you embody <strong>the transformative power of compassion and vision</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">👁️ Insightful Heart</h4>
                <p className="text-gray-700">You see hidden value and potential in people and situations.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">💝 Courage in Love</h4>
                <p className="text-gray-700">You love fearlessly, even when others cannot.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🌟 Inspiration</h4>
                <p className="text-gray-700">Your gentleness motivates others to grow and change.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">🦉 Wisdom</h4>
                <p className="text-gray-700">You balance intellect with empathy, making your presence healing.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that compassion can transform even the hardest of hearts.
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
              Your gifts can also carry shadows:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">🎭 Over-Sacrifice</h4>
                <p className="text-gray-700">You may give too much, losing sight of your own needs.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">🌈 Idealism</h4>
                <p className="text-gray-700">You may overlook flaws in others by focusing too much on potential.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">⚖️ Responsibility Overload</h4>
                <p className="text-gray-700">You may feel it is your duty to heal or &ldquo;fix&rdquo; others.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: Love transforms best when it includes yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-pink-800 mb-4">&ldquo;Love&apos;s Transformation.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story reflects the truth that compassion and insight can turn fear into trust, and isolation into connection.
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
              To others, you are gentle, wise, and inspiring. People admire your ability to stay loyal and courageous in relationships, and they often feel seen and understood in your presence.
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
              To live into your fullest story, you are invited to:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">1. ⚖️ Balance Care</h4>
                <p className="text-gray-700">Remember that you deserve as much love as you give.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">2. 🛡️ Set Boundaries</h4>
                <p className="text-gray-700">Compassion is strongest when it has healthy limits.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">3. 🌟 Honor Your Dreams</h4>
                <p className="text-gray-700">Your visions matter as much as those of others.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">4. 🔍 Discern Reality</h4>
                <p className="text-gray-700">See potential, but also acknowledge what is true now.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-violet-50 to-purple-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💌</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-violet-800 italic">&ldquo;Your compassion transforms beasts into allies.&rdquo;</h4>
          </div>
        </div>
      </section>

      {/* Premium Insights Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-accent-gold">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🔮</div>
            <h3 className="storybook-subtitle text-2xl mb-4 text-accent-gold">Bonus Insights (Premium Only)</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">👑 Shadow Archetype</h4>
              <p className="text-gray-700">The Martyr — giving so much you lose yourself.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">The Beast — your compassion awakens his hidden heart.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🌹 Life Symbol</h4>
              <p className="text-gray-700">The enchanted rose — a reminder that love&apos;s beauty and fragility coexist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Chapter Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">✨</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Your Next Chapter</h3>
            <div className="magical-sparkle text-xl">🌟</div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Like Belle, your journey is about balancing compassion with self-respect. Your love and wisdom transform others, but you are also called to nurture your own vision. When you embrace your dreams alongside your care for others, you embody the fullness of your story: a love that is brave, wise, and whole.
            </p>
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
