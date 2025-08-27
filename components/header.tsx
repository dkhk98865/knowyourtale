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
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        console.log('Header: Initial session check:', { session, error });
        if (error) {
          console.error('Header: Session error:', error);
          setUser(null);
        } else {
          setUser(session?.user ?? null);
        }
      } catch (err) {
        console.error('Header: Session check exception:', err);
        setUser(null);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: { user: User | null } | null) => {
        console.log('Header: Auth state change:', event, session);
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
      console.log('Current user state:', user);
      
      // First check if we actually have a valid session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      console.log('Current session check:', { session, sessionError });
      
      if (sessionError) {
        console.error('Session check error:', sessionError);
        alert('Session error: ' + sessionError.message);
        return;
      }
      
      if (!session) {
        console.log('No active session found, clearing local state');
        setUser(null);
        alert('No active session found. You are already signed out.');
        return;
      }
      
      // Check if the session is actually valid by testing the access token
      if (session.access_token) {
        try {
          // Test if the token is valid by making a simple API call
          const { data: userData, error: userError } = await supabase.auth.getUser(session.access_token);
          console.log('Token validation result:', { userData, userError });
          
          if (userError) {
            console.log('Token is invalid, clearing session locally');
            setUser(null);
            // Clear any stored tokens
            await supabase.auth.setSession({ access_token: '', refresh_token: '' });
            alert('Your session has expired. You have been signed out.');
            window.location.reload();
            return;
          }
        } catch (tokenError) {
          console.log('Token validation failed, clearing session locally');
          setUser(null);
          await supabase.auth.setSession({ access_token: '', refresh_token: '' });
          alert('Session validation failed. You have been signed out.');
          window.location.reload();
          return;
        }
      }
      
      // Now try to sign out
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Signout error:', error);
        
        // If we get a session missing error, clear the local state anyway
        if (error.message.includes('Auth session missing')) {
          console.log('Session missing error, clearing local state');
          setUser(null);
          await supabase.auth.setSession({ access_token: '', refresh_token: '' });
          alert('Session was invalid. You have been signed out.');
          window.location.reload();
          return;
        }
        
        alert('Failed to sign out: ' + error.message);
      } else {
        console.log('Successfully signed out');
        setUser(null);
        // Force a page refresh to ensure state is cleared
        window.location.reload();
      }
    } catch (err) {
      console.error('Signout exception:', err);
      
      // If we get any error, try to clear the session locally
      try {
        setUser(null);
        await supabase.auth.setSession({ access_token: '', refresh_token: '' });
        alert('Signout failed, but your session has been cleared locally.');
        window.location.reload();
      } catch (clearError) {
        console.error('Failed to clear session locally:', clearError);
        alert('Failed to sign out. Please refresh the page and try again.');
      }
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
              
              {/* Session refresh button */}
              <button
                onClick={async () => {
                  console.log('Refreshing session...');
                  const { data: { session }, error } = await supabase.auth.getSession();
                  console.log('Session refresh result:', { session, error });
                  alert(`Session: ${session ? 'Valid' : 'None'}\nError: ${error ? error.message : 'None'}`);
                }}
                className="bg-yellow-500 text-white px-4 py-2 text-sm rounded ml-2"
                style={{ position: 'relative', zIndex: 1000 }}
              >
                🔄 Session
              </button>
              
              {/* Force sign out button */}
              <button
                onClick={async () => {
                  console.log('Force sign out clicked...');
                  try {
                    setUser(null);
                    await supabase.auth.setSession({ access_token: '', refresh_token: '' });
                    alert('Session cleared locally. Refreshing page...');
                    window.location.reload();
                  } catch (err) {
                    console.error('Force sign out error:', err);
                    alert('Failed to clear session. Please refresh the page manually.');
                  }
                }}
                className="bg-orange-500 text-white px-4 py-2 text-sm rounded ml-2"
                style={{ position: 'relative', zIndex: 1000 }}
              >
                ⚡ Force Out
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
