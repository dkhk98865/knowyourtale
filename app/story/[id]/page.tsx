// app/story/[id]/page.tsx

'use client';

import { characters } from '@/types/characters';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import AuthModal from '@/components/auth-modal';
import { useState, use } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ quiz?: string }>;
};

export default function StoryPage({ 
    params,
    searchParams,
  }: Props) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const router = useRouter();
    
    const { id } = use(params);
    const { quiz } = use(searchParams);
    const character = characters.find((a) => a.id === id);

    if (!character) {
      return notFound();
    }

    const handleAuthSuccess = () => {
      setIsAuthModalOpen(false);
      router.push('/subscription');
    };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="parchment-content">
        {/* Personality Type Header */}
        <div className="text-center mb-8">
          <div className="magical-sparkle text-3xl mb-4">🌟</div>
          <h2 className="storybook-subtitle text-2xl mb-3 text-accent-brown">Your Fairy Tale Personality Type Is...</h2>
          <h1 className="storybook-title text-6xl mb-4 text-accent-gold">{character.name}</h1>
          <div className="storybook-divider mb-4"></div>
          <div className="magical-sparkle text-2xl">✨</div>
        </div>
        
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
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-lg rounded-lg overflow-hidden">
                <Image
                  src={character.image}
                  alt={character.name}
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
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
          
          {/* Full Report CTA */}
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-accent-gold">
            <div className="text-center">
              <div className="magical-sparkle text-5xl mb-6">📊</div>
              <h2 className="storybook-subtitle text-4xl mb-6 text-accent-gold font-bold">Would you like a full report of the fairy tale personality analysis?</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8 text-left">
                <div className="text-center">
                  <div className="magical-sparkle text-3xl mb-3">🎭</div>
                  <h3 className="font-bold text-xl mb-3 text-accent-brown">Get Access To All Twelve Character Reports</h3>
                  <p className="text-gray-700 text-base font-medium">Discover your connection to every fairy tale personality type</p>
                </div>
                
                <div className="text-center">
                  <div className="magical-sparkle text-3xl mb-3">📧</div>
                  <h3 className="font-bold text-xl mb-3 text-accent-brown">Get Weekly Emails with Prompts</h3>
                  <p className="text-gray-700 text-base font-medium">Reflect on your personality and life with guided prompts</p>
                </div>
                
                <div className="text-center">
                  <div className="magical-sparkle text-3xl mb-3">📖</div>
                  <h3 className="font-bold text-xl mb-3 text-accent-brown">Start a Journal On The Reports</h3>
                  <p className="text-gray-700 text-base font-medium">Track your growth with weekly email prompts & insights</p>
                </div>
              </div>
              
              <div className="magical-sparkle text-3xl mb-6">✨</div>
              
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="magical-button magical-glow text-xl px-10 py-5 inline-block font-bold"
              >
                🗝️ Unlock Full Personality Analysis 🗝️
              </button>
              
              <div className="magical-sparkle text-2xl mt-6">🌟</div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}
