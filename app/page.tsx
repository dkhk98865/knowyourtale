'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { characters } from '@/types/characters';
import Image from 'next/image';

function HomePageContent() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="parchment-content text-center mb-16">
        <div className="magical-sparkle">🔮</div>
        <h1 className="storybook-title text-6xl mb-6">What Fairy Tale Personality Type Are You?</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-xl mb-8 max-w-3xl mx-auto">
          Answer 8 quick questions to discover which of the twelve fairy tale personalities your spirit resonates with most.
        </p>
        <div className="magical-sparkle">✨</div>
        
        <div className="mt-8">
          <Link href="/quiz">
            <button className="magical-button magical-glow text-xl px-10 py-5">
              🧙‍♀️ Take the Quiz Now 🧙‍♀️
            </button>
          </Link>
        </div>
        <div className="magical-sparkle">🌟</div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <div className="magical-sparkle">🎭</div>
          <h2 className="storybook-title text-3xl mb-4">All Fairy Tale Personalities</h2>
          <div className="storybook-divider"></div>
          <p className="storybook-subtitle text-lg">
            Discover which of these twelve magical personalities resonates with your spirit
          </p>
          <div className="magical-sparkle">💫</div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character) => (
            <Link key={character.id} href={`/story/${character.id}`} className="block">
              <div className="storybook-card page-turn p-4 text-center hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <h3 className="storybook-subtitle text-lg mb-2">{character.name}</h3>
                <p className="text-gray-600 text-sm">{character.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="storybook-card page-turn p-8 text-center">
        <div className="magical-sparkle">🔮</div>
        <h2 className="storybook-title text-3xl mb-6">Ready to Discover Your Fairy Tale Personality?</h2>
        <div className="storybook-divider mb-6"></div>
        <p className="storybook-subtitle text-lg mb-8 max-w-2xl mx-auto">
          Take our magical personality quiz and unlock the fairy tale character that best represents your spirit. Then dive deeper by exploring your personality match and discovering all the characters.
        </p>
        <div className="magical-sparkle">✨</div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/quiz">
            <button className="magical-button magical-glow">
              🧙‍♀️ Take the Quiz 🧙‍♀️
            </button>
          </Link>
          <Link href="/reports">
            <button className="magical-button magical-glow">
              📊 View All Reports 📊
            </button>
          </Link>
        </div>
        <div className="magical-sparkle">🌟</div>
      </div>
    </main>

    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="magical-sparkle text-4xl mb-6">✨</div>
          <h1 className="storybook-title text-4xl mb-6">Loading...</h1>
        </div>
      </main>
    }>
      <HomePageContent />
    </Suspense>
  );
}
