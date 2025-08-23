// app/story/[id]/page.tsx

import { characters } from '@/types/characters';
import { notFound } from 'next/navigation';

import Image from 'next/image';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ quiz?: string }>;
};

export default async function StoryPage({ 
    params,
    searchParams,
  }: Props) {
    const { id } = await params;
    const { quiz } = await searchParams;
    const character = characters.find((a) => a.id === id);

    if (!character) {
      return notFound();
    }

    // Chat functionality is maintained (only auth was removed)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="parchment-content">
        <div className="magical-sparkle">📖</div>
        <h1 className="storybook-title text-5xl text-center mb-8">{character.name}</h1>
        <div className="storybook-divider mb-8"></div>
        <div className="magical-sparkle">✨</div>
        
        {/* Quiz Completion Banner */}
        {quiz === 'true' && (
          <div className="storybook-card page-turn p-6 mb-8 border-2 border-accent-gold bg-gradient-to-r from-yellow-50 to-amber-50">
            <div className="text-center">
              <div className="magical-sparkle text-4xl mb-4">🎉</div>
              <h2 className="storybook-subtitle text-2xl mb-4 text-accent-gold">Your Fairy Tale Personality Revealed!</h2>
              <p className="text-gray-700 mb-4">
                Congratulations! Our magical quiz has determined that <strong>{character.name}</strong> best represents your fairy tale personality type.
              </p>
              <p className="text-gray-800 text-xl font-semibold mb-4 bg-white/80 px-4 py-2 rounded-lg border border-accent-gold">
                {character.description}
              </p>
              <p className="text-gray-700">
                Start a conversation below to connect with your fairy tale spirit and discover what wisdom {character.name} has to share with you!
              </p>
              <div className="magical-sparkle text-2xl mt-4">✨</div>
            </div>
          </div>
        )}
        
        <div className="space-y-8 mb-8">
          {/* Character Image - Now Larger */}
          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-6">
              <div className="magical-sparkle">🖼️</div>
              <h2 className="storybook-subtitle text-xl mb-3">Character Portrait</h2>
              <div className="magical-sparkle">✨</div>
            </div>
            <div className="relative w-full max-w-md mx-auto h-96 rounded-lg overflow-hidden mb-6">
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
          
          {/* Character Description - Dedicated Section */}
          <div className="storybook-card page-turn p-6 mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-accent-brown">
            <div className="text-center">
              <div className="magical-sparkle text-2xl mb-3">🌟</div>
              <h2 className="storybook-subtitle text-xl mb-3 text-accent-brown">Your Personality Type</h2>
              <p className="text-gray-700 text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
                {character.description}
              </p>
              <div className="magical-sparkle text-xl mt-3">✨</div>
            </div>
          </div>
          
          {/* Character Story */}
          <div className="storybook-card page-turn p-6">
            <div className="text-center mb-6">
              <div className="magical-sparkle">🎭</div>
              <h2 className="storybook-subtitle text-xl mb-3">Character Story</h2>
              <div className="magical-sparkle">🌟</div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">{character.story}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
