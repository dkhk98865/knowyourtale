'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import AuthModal from './auth-modal';

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [supabase] = useState(() => createClient());

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
        if (event === 'SIGNED_IN') {
          setIsAuthModalOpen(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    try {
      console.log('Signout button clicked, attempting to sign out...');
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Signout error:', error);
        alert('Failed to sign out: ' + error.message);
      } else {
        console.log('Successfully signed out');
        // Force a page refresh to ensure state is cleared
        window.location.reload();
      }
    } catch (err) {
      console.error('Signout exception:', err);
      alert('Failed to sign out. Please try again.');
    }
  };

  console.log('Header rendering, user:', user);
  
  return (
    <>
      <header className="fixed top-0 right-0 z-50 p-4" style={{ zIndex: 9999 }}>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-700 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full border border-accent-brown/20">
                <span className="font-medium">{user.email}</span>
              </div>
              <button
                onClick={(e) => {
                  console.log('Signout button clicked, event:', e);
                  alert('Signout button clicked!'); // Test if click is working
                  e.preventDefault();
                  e.stopPropagation();
                  handleSignOut();
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm rounded"
                style={{ 
                  position: 'relative', 
                  zIndex: 1000,
                  border: '3px solid red',
                  padding: '8px 16px'
                }}
              >
                🚪 Sign Out
              </button>
              
              {/* Test button to see if any button works */}
              <button
                onClick={() => alert('Test button works!')}
                className="bg-blue-500 text-white px-4 py-2 text-sm rounded ml-2"
                style={{ position: 'relative', zIndex: 1000 }}
              >
                Test
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="magical-button magical-glow px-6 py-3 text-white shadow-lg"
            >
              🔐 Sign In
            </button>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}
