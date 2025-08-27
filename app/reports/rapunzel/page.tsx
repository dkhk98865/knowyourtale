import Link from 'next/link';
import Image from 'next/image';

export default function RapunzelReportPage() {
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Rapunzel – The Hidden Dreamer</h2>
        <div className="magical-sparkle text-2xl">🌿</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/rapunzel.png" 
              alt="Rapunzel" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Rapunzel</h3>
          <p className="text-gray-600 text-lg">The Hidden Dreamer</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Rapunzel, the Hidden Dreamer</strong>. Your story is one of confinement, imagination, and liberation. Within your solitude, you develop resilience, creativity, and hope. Though you may sometimes feel trapped—by circumstances, fears, or expectations—your true journey is about stepping into freedom and expressing your gifts boldly. You remind others that the spirit cannot be contained, and that even the tallest tower cannot hold back a dreamer&apos;s light.
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
                <div className="text-green-500 text-xl">🌱</div>
                <span className="text-gray-700">Sensitive and imaginative</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">🕊️</div>
                <span className="text-gray-700">Gentle yet resilient</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">🎨</div>
                <span className="text-gray-700">Creative and expressive</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">🌅</div>
                <span className="text-gray-700">Longing for freedom and new horizons</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✨</div>
                <span className="text-gray-700">Compassionate with a radiant inner spirit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-lime-50 to-green-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🏆</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Strengths</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              At your best, you embody <strong>the courage of release and the beauty of creativity</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-lime-200">
                <h4 className="font-semibold text-lime-800 mb-2">🌈 Imagination</h4>
                <p className="text-gray-700">You find beauty and inspiration even in restriction.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-lime-200">
                <h4 className="font-semibold text-lime-800 mb-2">💪 Resilience</h4>
                <p className="text-gray-700">Hardship does not break you—it shapes you.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-lime-200">
                <h4 className="font-semibold text-lime-800 mb-2">🎭 Creativity</h4>
                <p className="text-gray-700">You naturally express yourself in ways that inspire others.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-lime-200">
                <h4 className="font-semibold text-lime-800 mb-2">🌟 Radiance</h4>
                <p className="text-gray-700">Your presence shines even when hidden.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind the world that no barrier is stronger than a free spirit.
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
              Your journey also brings struggles:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">🏰 Isolation</h4>
                <p className="text-gray-700">You may hide in comfort zones, avoiding risk.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">😰 Fear of Change</h4>
                <p className="text-gray-700">Leaving safety can feel overwhelming.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">⏰ Dependency</h4>
                <p className="text-gray-700">You may wait for rescue instead of acting for yourself.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: The tower was never meant to hold you forever—freedom begins with your choice.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-emerald-800 mb-4">&ldquo;Liberation and Growth.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your life reflects the truth that dreams are not meant to remain locked inside—they are meant to be lived.
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
              Others see you as gentle, creative, and radiant. To many, you seem delicate or in need of protection, but those who know you well recognize your inner strength and perseverance.
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
              To fully embody your story, you are invited to:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">1. 🚪 Leave the Tower</h4>
                <p className="text-gray-700">Take steps outside your comfort zone.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">2. 🗣️ Claim Your Voice</h4>
                <p className="text-gray-700">Express yourself boldly without apology.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">3. 🎯 Turn Dreams Into Action</h4>
                <p className="text-gray-700">Use your imagination to create tangible change.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">4. 💪 Trust Your Resilience</h4>
                <p className="text-gray-700">Remember that freedom is within your grasp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-yellow-50 to-amber-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">💌</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Tagline</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-amber-800 italic">&ldquo;Your dreams are the key to your escape.&rdquo;</h4>
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
              <p className="text-gray-700">The Tower — self-imposed walls of fear and comfort.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">Belle — her compassion complements your vision.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">💇‍♀️ Life Symbol</h4>
              <p className="text-gray-700">The long braid — the bridge between confinement and freedom.</p>
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
              Like Rapunzel, your story is about moving from hidden potential to visible brilliance. You are not meant to remain behind walls, but to step boldly into the world, carrying your creativity and hope with you. When you embrace your freedom and share your gifts, you inspire others to climb out of their own towers, too.
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
