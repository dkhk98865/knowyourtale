'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import SubscriptionManager from '@/components/subscription-manager';

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error getting session:', error);
        } else {
          console.log('Settings page - Session found:', session);
          setUser(session?.user ?? null);
        }
      } catch (error) {
        console.error('Error in getSession:', error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: { user: User | null } | null) => {
        console.log('Settings page - Auth state change:', event, session);
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      console.log('Signing out...');
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
      } else {
        console.log('Successfully signed out');
        setUser(null);
      }
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="magical-spinner"></div>
          <p className="mt-4">Loading settings...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 relative">
        <div className="text-center">
          <div className="storybook-card page-turn p-8">
            <div className="magical-sparkle">🔒</div>
            <h1 className="storybook-title text-2xl mb-4">Authentication Required</h1>
            <p className="storybook-subtitle text-lg mb-6">
              You need to be signed in to access settings.
            </p>
            <Link href="/">
              <button className="magical-button magical-glow">
                🏠 Back to Home
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

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
        <h1 className="storybook-title text-4xl mb-6">Settings</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-lg mb-8">
          Manage your account and preferences
        </p>
        <div className="magical-sparkle">✨</div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* User Profile */}
        <div className="storybook-card page-turn p-6">
          <div className="text-center mb-6">
            <div className="magical-sparkle">👤</div>
            <h2 className="storybook-subtitle text-xl mb-3">User Profile</h2>
            <div className="magical-sparkle">✨</div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900">
                {user.email}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User ID
              </label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm font-mono">
                {user.id}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Created
              </label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900">
                {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
              </div>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="storybook-card page-turn p-6">
          <div className="text-center mb-6">
            <div className="magical-sparkle">⚙️</div>
            <h2 className="storybook-subtitle text-xl mb-3">Account Actions</h2>
            <div className="magical-sparkle">✨</div>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleSignOut}
              disabled={loading}
              className="w-full magical-button magical-glow bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="magical-spinner"></div>
                  <span>Signing Out...</span>
                </div>
              ) : (
                <span>🚪 Sign Out</span>
              )}
            </button>
            

            
            <Link href="/">
              <button className="w-full magical-button magical-glow">
                🏠 Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Subscription Management */}
      <div className="max-w-2xl mx-auto">
        <SubscriptionManager user={user} />
      </div>

    </main>
  );
}
