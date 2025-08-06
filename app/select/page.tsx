import Link from 'next/link';
import { characters } from '@/types/characters';
import Image from 'next/image';

export default function SelectCharacterPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Select Your Character</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore the full collection of fairy tale characters and find the story that speaks to you.
        </p>
        <Link href="/">
          <button className="bg-black text-white px-6 py-3 rounded text-lg">
            Back to Home
          </button>
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map((character) => (
          <Link key={character.id} href={`/story/${character.id}`} className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative w-full h-48">
              <Image src={character.image} alt={character.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{character.name}</h3>
              <p className="text-sm text-gray-600">{character.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
