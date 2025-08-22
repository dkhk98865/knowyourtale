import Link from 'next/link';
import { characters } from '@/types/characters';
import Image from 'next/image';

export default function SelectCharacterPage() {

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

      <section className="text-center mb-16 parchment-content">
        <h1 className="storybook-title text-4xl mb-6">Select Your Character</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-lg mb-8">
          Explore the full collection of fairy tale characters and find the story that speaks to you.
        </p>
        <Link href="/">
          <button className="magical-button magical-glow">
            🏠 Back to Home 🏠
          </button>
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {characters.map((character) => (
          <Link 
            key={character.id} 
            href={`/story/${character.id}`} 
            className="storybook-card page-turn block overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image src={character.image} alt={character.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-center font-['Playfair_Display']">{character.name}</h3>
              <p className="text-lg text-gray-700 text-center leading-relaxed">{character.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
