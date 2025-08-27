'use client';

import { characters } from '@/types/characters';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import AuthModal from '@/components/auth-modal';
import { useState, use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ quiz?: string }>;
};

export default function StoryPage({ 
    params,
    searchParams,
  }: Props) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const [supabase] = useState(() => createClient());
    
    const { id } = use(params);
    const { quiz } = use(searchParams);
    const character = characters.find((a) => a.id === id);

    useEffect(() => {
      // Get initial session
      const getSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      };

      getSession();

      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event: string, session: { user: User | null } | null) => {
          setUser(session?.user ?? null);
        }
      );

      return () => subscription.unsubscribe();
    }, [supabase]);

    if (!character) {
      return notFound();
    }

    const handleAuthSuccess = () => {
      setIsAuthModalOpen(false);
      router.push('/subscription');
    };

    // Stripe checkout functions
    const handleSingleReportCheckout = async () => {
      if (!user) {
        setIsAuthModalOpen(true);
        return;
      }

      try {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: 'single',
            characterId: id,
            successUrl: `${window.location.origin}/subscription/success?session_id={CHECKOUT_SESSION_ID}&plan=single&characterId=${id}`,
            cancelUrl: `${window.location.origin}/story/${id}`,
          }),
        });

        const { url, error } = await response.json();

        if (error) {
          alert(`Error: ${error}`);
          return;
        }

        if (url) {
          window.location.href = url;
        }
      } catch (error) {
        console.error('Error creating checkout session:', error);
        alert('Failed to create checkout session. Please try again.');
      }
    };

    const handleAllReportsCheckout = async () => {
      if (!user) {
        setIsAuthModalOpen(true);
        return;
      }

      try {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: 'allReports',
            successUrl: `${window.location.origin}/subscription/success?session_id={CHECKOUT_SESSION_ID}&plan=allReports`,
            cancelUrl: `${window.location.origin}/story/${id}`,
          }),
        });

        const { url, error } = await response.json();

        if (error) {
          alert(`Error: ${error}`);
          return;
        }

        if (url) {
          window.location.href = url;
        }
      } catch (error) {
        console.error('Error creating checkout session:', error);
        alert('Failed to create checkout session. Please try again.');
      }
    };

    // Social sharing functions
    const shareOnFacebook = (characterName: string, description: string) => {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`I just discovered my fairy tale personality type is ${characterName}! ${description} Take the quiz at Know Your Tale!`);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
    };

    const shareOnTwitter = (characterName: string, description: string) => {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`I just discovered my fairy tale personality type is ${characterName}! ${description} Take the quiz at Know Your Tale!`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    };

    const shareOnLinkedIn = (characterName: string, description: string) => {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(`My Fairy Tale Personality: ${characterName}`);
      const summary = encodeURIComponent(`I just discovered my fairy tale personality type is ${characterName}! ${description}`);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, '_blank');
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
              <p className="text-gray-700 mb-4">
                Share your fairy tale personality type with friends and family!
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <button 
                  onClick={() => shareOnFacebook(character.name, character.description)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>📘</span>
                  <span>Facebook</span>
                </button>
                <button 
                  onClick={() => shareOnTwitter(character.name, character.description)}
                  className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>🐦</span>
                  <span>Twitter</span>
                </button>
                <button 
                  onClick={() => shareOnLinkedIn(character.name, character.description)}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </button>
              </div>
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
          
          {/* Pricing CTAs */}
          <div className="storybook-card page-turn p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-accent-gold">
            <div className="text-center mb-8">
              <div className="magical-sparkle text-5xl mb-6">📊</div>
              <h2 className="storybook-subtitle text-4xl mb-6 text-accent-gold font-bold">Unlock More Fairy Tale Insights</h2>
              <p className="text-gray-700 text-lg mb-8">Choose how you want to explore your fairy tale personality further</p>
              

            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Single Report CTA */}
              <div className="storybook-card page-turn p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                <div className="text-center">
                  <div className="magical-sparkle text-4xl mb-4">🌟</div>
                  <h3 className="storybook-subtitle text-2xl mb-4 text-blue-800">Single Report</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$4.99</div>
                  <p className="text-gray-700 mb-4">Get your detailed personality analysis report for {character.name}</p>
                  
                  <div className="space-y-2 mb-6 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="text-green-500">✓</div>
                      <span className="text-gray-700">Detailed personality insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-green-500">✓</div>
                      <span className="text-gray-700">Character strengths & challenges</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-green-500">✓</div>
                      <span className="text-gray-700">Personal growth recommendations</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleSingleReportCheckout}
                    className="magical-button magical-glow bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold"
                  >
                    Get {character.name} Report
                  </button>
                </div>
              </div>
              
              {/* All Reports CTA */}
              <div className="storybook-card page-turn p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
                <div className="text-center">
                  <div className="magical-sparkle text-4xl mb-4">👑</div>
                  <h3 className="storybook-subtitle text-2xl mb-4 text-purple-800">All Reports</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">$9.99</div>
                  <p className="text-gray-700 mb-4">Discover all twelve fairy tale personality types</p>
                  
                  <div className="space-y-2 mb-6 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="text-green-500">✓</div>
                      <span className="text-gray-700">All 12 personality reports</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-green-500">✓</div>
                      <span className="text-gray-700">Compare different types</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-green-500">✓</div>
                      <span className="text-gray-700">Complete fairy tale journey</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleAllReportsCheckout}
                    className="magical-button magical-glow bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 font-semibold"
                  >
                    Get All Reports
                  </button>
                </div>
              </div>
            </div>
            
            {/* Monthly Plan Option */}
            <div className="text-center">
              <div className="magical-sparkle text-2xl mb-4">💎</div>
              <p className="text-gray-700 mb-4">
                <strong>Want weekly journaling prompts and community access?</strong>
              </p>
              <Link href="/subscription">
                <button className="magical-button text-lg px-6 py-3">
                  View Monthly Plan Options
                </button>
              </Link>
            </div>
            
            <div className="magical-sparkle text-2xl mt-6">🌟</div>
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
