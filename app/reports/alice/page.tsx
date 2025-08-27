import Link from 'next/link';
import Image from 'next/image';

export default function AliceReportPage() {
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
        <h2 className="storybook-subtitle text-3xl mb-4 text-accent-gold">Alice – The Curious Dreamer</h2>
        <div className="magical-sparkle text-2xl">🐇</div>
      </section>

      {/* Character Portrait */}
      <section className="max-w-2xl mx-auto mb-12">
        <div className="storybook-card page-turn p-6 text-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
            <Image 
              src="/images/aliceinwonderland.png" 
              alt="Alice (Alice in Wonderland)" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <h3 className="storybook-subtitle text-2xl mb-3">Alice</h3>
          <p className="text-gray-600 text-lg">The Curious Dreamer</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🌹</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Overview</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            You are <strong>Alice, the Curious Dreamer</strong>. Your story is one of wonder, imagination, and the fearless questioning of reality. You are drawn to explore what lies beyond the ordinary, often venturing into strange and unpredictable realms. While your curiosity sometimes leads you into chaos, it is also the force that awakens creativity and discovery in yourself and others. You remind the world that childlike wonder is not a weakness—it is a gateway to transformation.
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
                <div className="text-purple-500 text-xl">🔍</div>
                <span className="text-gray-700">Curious and inquisitive</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-purple-500 text-xl">🌈</div>
                <span className="text-gray-700">Imaginative and playful</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-purple-500 text-xl">🦁</div>
                <span className="text-gray-700">Brave in unfamiliar spaces</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-purple-500 text-xl">🌍</div>
                <span className="text-gray-700">Adventurous and open-minded</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-purple-500 text-xl">✨</div>
                <span className="text-gray-700">Whimsical yet resilient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-violet-50 to-purple-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">🏆</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Strengths</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 text-center">
              At your best, you embody <strong>the magic of wonder and discovery</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-violet-200">
                <h4 className="font-semibold text-violet-800 mb-2">🌟 Boundless Imagination</h4>
                <p className="text-gray-700">You see possibilities that others overlook.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-violet-200">
                <h4 className="font-semibold text-violet-800 mb-2">🔍 Fearless Curiosity</h4>
                <p className="text-gray-700">You step into the unknown with courage.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-violet-200">
                <h4 className="font-semibold text-violet-800 mb-2">🎭 Playful Spirit</h4>
                <p className="text-gray-700">Your lightheartedness brings joy to those around you.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-violet-200">
                <h4 className="font-semibold text-violet-800 mb-2">🦋 Adaptability</h4>
                <p className="text-gray-700">You adjust quickly, even in chaotic environments.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              At your best, you remind others that wonder has the power to reshape the world.
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
              Your adventurous curiosity can also bring struggles:
            </p>
            <div className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg border border-pink-200">
                <h4 className="font-semibold text-pink-800 mb-2">🌪️ Aimlessness</h4>
                <p className="text-gray-700">You may wander without direction or grounding.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-pink-200">
                <h4 className="font-semibold text-pink-800 mb-2">🌈 Naïve Idealism</h4>
                <p className="text-gray-700">Believing too much in fantasy while ignoring reality.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-pink-200">
                <h4 className="font-semibold text-pink-800 mb-2">🦋 Distraction</h4>
                <p className="text-gray-700">Difficulty focusing, always chasing the next &ldquo;wonder.&rdquo;</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 text-center italic">
              Your lesson: Curiosity becomes wisdom when anchored by purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Life Theme Section */}
      <section className="mb-12">
        <div className="storybook-card page-turn p-8 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="text-center mb-6">
            <div className="magical-sparkle text-3xl mb-3">📖</div>
            <h3 className="storybook-subtitle text-2xl mb-4">Life Theme</h3>
            <div className="magical-sparkle text-xl">✨</div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-indigo-800 mb-4">&ldquo;Wonder in Chaos.&rdquo;</h4>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Your story reflects the truth that strangeness and disorder can be teachers of creativity, growth, and resilience.
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
              People see you as playful, curious, and imaginative. To some, you may seem whimsical or impractical, but others are deeply inspired by your openness to new ideas and your courage to step outside the ordinary.
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
                <h4 className="font-semibold text-teal-800 mb-2">1. ⚓ Anchor Imagination in Reality</h4>
                <p className="text-gray-700">Use your creativity to make real change.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">2. 🎯 Channel Curiosity with Focus</h4>
                <p className="text-gray-700">Choose adventures that truly enrich your growth.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">3. ⚖️ Balance Play with Purpose</h4>
                <p className="text-gray-700">Keep your wonder alive while embracing responsibility.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">4. 🛤️ Trust Your Journey</h4>
                <p className="text-gray-700">Even when paths are strange, they teach you resilience.</p>
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
            <h4 className="text-3xl font-bold text-purple-800 italic">&ldquo;Your wonder reshapes the world around you.&rdquo;</h4>
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
              <p className="text-gray-700">The Lost Child — drifting without focus or grounding.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🤝 Compatibility Match</h4>
              <p className="text-gray-700">Ariel — your shared curiosity creates a partnership of daring exploration.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-accent-gold">
              <h4 className="font-semibold text-accent-gold mb-2">🗝️ Life Symbol</h4>
              <p className="text-gray-700">The key — unlocking new doors of imagination and possibility.</p>
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
              Like Alice, your path is not about escaping reality, but about expanding it. Your curiosity and imagination are gifts that awaken possibility in yourself and others. When you anchor your wonder with purpose, you transform not only your own journey, but the way others see the world—proving that even chaos can hold hidden wisdom.
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
