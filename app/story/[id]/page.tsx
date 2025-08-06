// app/story/[id]/page.tsx

import { characters } from '@/types/characters';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Chat from '@/components/chat';

type Props = {
  params: { id: string };
};

export default function StoryPage({ params }: Props) {
  const character = characters.find((a) => a.id === params.id);

  if (!character) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">{character.name}</h1>
        <p className="text-gray-600">{character.description}</p>
      </div>

      <div className="relative w-full h-190 mb-8 rounded-lg overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>The Tale</h2>
        <p>{character.story}</p>
      </div>

      <div className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">Chat with the Tale</h2>
        {/* Placeholder — this is where we’ll mount the AI chat */}
        <div className="bg-gray-100 rounded-lg p-4 text-gray-600 italic">
          Ask the tale questions about your path, struggle, or dreams...
        <Chat 
          characterName={character.name}
          characterDescription={character.description}/>
        </div>
      </div>
    </div>
  );
}
