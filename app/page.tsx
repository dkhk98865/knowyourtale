import Link from 'next/link';
import { characters } from '@/types/characters';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Know Your Tale</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover timeless fairy tale characters and explore the character that resonates with you.
        </p>
        <Link href="#stories">
          <button className="bg-black text-white px-6 py-3 rounded text-lg">
            Browse Characters
          </button>
        </Link>
      </section>

      <section id="stories" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map((character) => (
          <Link key={character.id} href={{ pathname: '/story/[id]', query: { id: character.id } }} as={`/story/${character.id}`} className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
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

      <section className="text-center mt-16">
        <Link href="/selected">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded text-lg hover:bg-indigo-700">
            View My Selected Character
          </button>
        </Link>
      </section>
    </main>
  );
}
