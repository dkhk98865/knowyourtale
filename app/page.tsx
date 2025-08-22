'use client';

import Link from 'next/link';
import { characters } from '@/types/characters';
import Image from 'next/image';


export default function HomePage() {
  const topFour = characters.slice(0, 4);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="parchment-content text-center mb-16">
        <div className="magical-sparkle">📚</div>
        <h1 className="storybook-title text-5xl mb-6">Know Your Tale</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-xl mb-8">
          Discover the wisdom hidden within classic fairy tales and chat with beloved characters
        </p>
        <div className="magical-sparkle">✨</div>
        
        <div className="mt-8">
          <Link href="/select">
            <button className="magical-button magical-glow text-lg px-8 py-4">
              🗝️ Begin Your Journey 🗝️
            </button>
          </Link>
        </div>
        <div className="magical-sparkle">🌟</div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <div className="magical-sparkle">🎭</div>
          <h2 className="storybook-title text-3xl mb-4">Featured Characters</h2>
          <div className="storybook-divider"></div>
          <p className="storybook-subtitle text-lg">
            Meet some of the magical beings who await your visit
          </p>
          <div className="magical-sparkle">💫</div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topFour.map((character) => (
            <div key={character.id} className="storybook-card page-turn p-6 text-center">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <h3 className="storybook-subtitle text-xl mb-3">{character.name}</h3>
              <p className="text-gray-600 mb-4">{character.description}</p>
              <Link href={`/story/${character.id}`}>
                <button className="magical-button magical-glow">
                  🗣️ Chat Now 🗣️
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="storybook-card page-turn p-8 text-center">
        <div className="magical-sparkle">🔮</div>
        <h2 className="storybook-title text-3xl mb-6">Ready to Begin Your Adventure?</h2>
        <div className="storybook-divider mb-6"></div>
        <p className="storybook-subtitle text-lg mb-8 max-w-2xl mx-auto">
          Choose your character, start a conversation, and let the magic of storytelling guide you on your journey of self-discovery.
        </p>
        <div className="magical-sparkle">✨</div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/select">
            <button className="magical-button magical-glow">
              🎭 Choose Character 🎭
            </button>
          </Link>
          <Link href="/history">
            <button className="magical-button magical-glow">
              📚 View History 📚
            </button>
          </Link>
        </div>
        <div className="magical-sparkle">🌟</div>
      </div>
    </main>
  );
}
