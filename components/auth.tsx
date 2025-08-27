'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<User | null>(null);
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
          setMessage('Successfully signed in!');
        } else if (event === 'SIGNED_OUT') {
          setMessage('Successfully signed out!');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setMessage('Check your email for the confirmation link!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

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

  if (user) {
    return (
      <div className="storybook-card page-turn p-6">
        <div className="text-center mb-4">
          <div className="magical-sparkle">🔐</div>
          <h3 className="storybook-subtitle text-xl mb-3">Welcome Back!</h3>
          <div className="magical-sparkle">✨</div>
        </div>
        <div className="text-center mb-4">
          <p className="text-gray-700 mb-2">Signed in as: <strong>{user.email}</strong></p>
          <button
            onClick={handleSignOut}
            className="magical-button magical-glow bg-red-600 hover:bg-red-700"
          >
            🚪 Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="storybook-card page-turn p-6">
      <div className="text-center mb-6">
        <div className="magical-sparkle">🔐</div>
        <h3 className="storybook-subtitle text-xl mb-3">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </h3>
        <div className="magical-sparkle">✨</div>
      </div>

      <form onSubmit={handleAuth} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-accent-brown rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-accent-brown rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full magical-button magical-glow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="magical-spinner"></div>
              <span>{isSignUp ? 'Creating Account...' : 'Signing In...'}</span>
            </div>
          ) : (
            <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
          )}
        </button>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded-lg text-center text-sm ${
          message.includes('error') || message.includes('Error') 
            ? 'bg-red-100 text-red-700 border border-red-200' 
            : 'bg-green-100 text-green-700 border border-green-200'
        }`}>
          {message}
        </div>
      )}

      <div className="mt-4 text-center">
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-accent-gold hover:text-accent-brown transition-colors text-sm underline"
        >
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}
