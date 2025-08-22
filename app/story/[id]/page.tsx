// app/story/[id]/page.tsx

import { characters } from '@/types/characters';
import { notFound } from 'next/navigation';
import Chat from '@/components/chat';

import Image from 'next/image';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function StoryPage({ 
    params,
  }: Props) {
    const { id } = await params;
    const character = characters.find((a) => a.id === id);

    if (!character) {
      return notFound();
    }

    // Chat functionality is maintained (only auth was removed)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="parchment-content">
        <div className="magical-sparkle">📖</div>
        <h1 className="storybook-title text-center mb-8">{character.name}</h1>
        <div className="storybook-divider mb-8"></div>
        <div className="magical-sparkle">✨</div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
          {/* Character Image */}
          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-4">
              <div className="magical-sparkle">🖼️</div>
              <h2 className="storybook-subtitle text-xl mb-3">Character Portrait</h2>
              <div className="magical-sparkle">✨</div>
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <p className="text-center text-gray-600 italic">{character.description}</p>
          </div>
          
          {/* Character Story */}
          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-4">
              <div className="magical-sparkle">🎭</div>
              <h2 className="storybook-subtitle text-xl mb-3">Character Story</h2>
              <div className="magical-sparkle">🌟</div>
            </div>
            <p className="text-gray-700 leading-relaxed">{character.story}</p>
          </div>
          
          {/* Start Conversation */}
          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-4">
              <div className="magical-sparkle">🗣️</div>
              <h2 className="storybook-subtitle text-xl mb-3">Start a Conversation</h2>
              <div className="magical-sparkle">💫</div>
            </div>
            <p className="text-gray-700 mb-4">
              Begin your magical journey with {character.name}. Ask questions, share thoughts, or simply chat about their world.
            </p>
            <div className="text-center">
              <div className="magical-sparkle">🔮</div>
            </div>
          </div>
        </div>
        
        <div className="storybook-card page-turn p-6">
          <div className="text-center mb-6">
            <div className="magical-sparkle">💬</div>
            <h2 className="storybook-subtitle text-xl mb-3">Chat with {character.name}</h2>
            <div className="magical-sparkle">✨</div>
          </div>
          <Chat characterId={character.id} characterName={character.name} characterDescription={character.description} />
        </div>
      </div>
    </div>
  );
}
