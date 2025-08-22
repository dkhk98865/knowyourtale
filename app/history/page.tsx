'use client';

import { useState, useEffect } from 'react';
import { characters } from '@/types/characters';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

interface ChatSession {
  character_id: string;
  session_id: string;
  last_message_at: string;
  message_count: number;
  last_message: {
    role: 'user' | 'assistant';
    content: string;
  } | null;
}

export default function HistoryPage() {
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadChatSessions();
  }, []);

  const loadChatSessions = async () => {
    try {
      setIsLoading(true);
      
      // Get all sessions with message counts and last message
      const { data: sessions, error: sessionsError } = await supabase
        .from('chat_sessions')
        .select('session_id, character_id, last_message_at')
        .order('last_message_at', { ascending: false });

      if (sessionsError) {
        console.error('Error loading sessions:', sessionsError);
        return;
      }

      if (!sessions || sessions.length === 0) {
        setChatSessions([]);
        return;
      }

      // Get message counts and last messages for each session
      const sessionsWithDetails = await Promise.all(
        sessions.map(async (session) => {
          // Get message count
          const { count } = await supabase
            .from('chat_messages')
            .select('*', { count: 'exact', head: true })
            .eq('session_id', session.session_id);

          // Get last message
          const { data: lastMessage } = await supabase
            .from('chat_messages')
            .select('role, content')
            .eq('session_id', session.session_id)
            .order('created_at', { ascending: false })
            .limit(1)
            .single();

          return {
            character_id: session.character_id,
            session_id: session.session_id,
            last_message_at: session.last_message_at,
            message_count: count || 0,
            last_message: lastMessage || null
          };
        })
      );

      setChatSessions(sessionsWithDetails);
    } catch (error) {
      console.error('Error loading chat sessions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAllHistory = async () => {
    if (confirm('Are you sure you want to clear all chat history? This cannot be undone.')) {
      try {
        // Clear all messages and sessions
        await supabase.from('chat_messages').delete().neq('id', '00000000-0000-0000-0000-000000000000');
        await supabase.from('chat_sessions').delete().neq('id', '00000000-0000-0000-0000-000000000000');
        
        // Clear localStorage session IDs
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('session_')) {
            localStorage.removeItem(key);
          }
        });
        
        setChatSessions([]);
      } catch (error) {
        console.error('Error clearing history:', error);
        alert('Error clearing history. Please try again.');
      }
    }
  };

  const clearSessionHistory = async (sessionId: string) => {
    if (confirm('Are you sure you want to clear this conversation? This cannot be undone.')) {
      try {
        // Delete all messages for this session
        await supabase
          .from('chat_messages')
          .delete()
          .eq('session_id', sessionId);
        
        // Delete the session
        await supabase
          .from('chat_sessions')
          .delete()
          .eq('session_id', sessionId);
        
        // Remove from localStorage
        const characterId = sessionId.split('_')[0];
        localStorage.removeItem(`session_${characterId}`);
        
        // Reload sessions
        loadChatSessions();
      } catch (error) {
        console.error('Error clearing session:', error);
        alert('Error clearing conversation. Please try again.');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-20">
        <div className="text-center">Loading chat history...</div>
      </div>
    );
  }

  const hasHistory = chatSessions.length > 0;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 relative">
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
        <h1 className="storybook-title text-4xl mb-6">Your Magical Journey</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-lg mb-8">
          Relive your enchanted conversations with fairy tale characters
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <button className="magical-button magical-glow">
              🏠 Back to Home 🏠
            </button>
          </Link>
          {hasHistory && (
            <button 
              onClick={clearAllHistory}
              className="magical-button magical-glow bg-red-600 hover:bg-red-700"
            >
              🗑️ Clear All History 🗑️
            </button>
          )}
        </div>
      </section>

      {!hasHistory ? (
        <section className="text-center">
          <div className="storybook-card page-turn p-8">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="storybook-title text-2xl mb-4">No Conversations Yet</h2>
            <p className="storybook-subtitle text-lg mb-6">
              Start your magical journey by chatting with a character!
            </p>
            <Link href="/select">
              <button className="magical-button magical-glow">
                🎭 Choose a Character 🎭
              </button>
            </Link>
          </div>
        </section>
      ) : (
        <section className="space-y-6">
          {chatSessions.map((session) => {
            const character = characters.find(c => c.id === session.character_id);
            
            if (!character) return null;

            return (
              <div key={session.session_id} className="storybook-card page-turn">
                <div className="flex items-start gap-4 p-6">
                  {/* Character Image */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Character Info and Messages */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="storybook-subtitle text-xl font-semibold">
                        {character.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {session.message_count} message{session.message_count !== 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 italic">
                      {character.description}
                    </p>
                    
                    {/* Last Message Preview */}
                    {session.last_message && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="text-sm text-gray-500 mb-1">
                          Last message:
                        </div>
                        <div className={`text-sm ${session.last_message.role === 'user' ? 'text-blue-700' : 'text-purple-700'}`}>
                          <strong>{session.last_message.role === 'user' ? 'You' : character.name}:</strong>{' '}
                          {session.last_message.content.length > 100 
                            ? session.last_message.content.substring(0, 100) + '...' 
                            : session.last_message.content}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {new Date(session.last_message_at).toLocaleDateString()} at{' '}
                          {new Date(session.last_message_at).toLocaleTimeString()}
                        </div>
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link href={`/story/${session.character_id}?session=${session.session_id}`}>
                        <button className="magical-button magical-glow text-sm px-4 py-2">
                          💬 Continue Chat
                        </button>
                      </Link>
                      <button 
                        onClick={() => clearSessionHistory(session.session_id)}
                        className="bg-red-100 hover:bg-red-200 text-red-700 text-sm px-3 py-2 rounded border border-red-300 transition-colors"
                      >
                        🗑️ Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </main>
  );
}
