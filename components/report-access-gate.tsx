'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ReportAccessGateProps {
  characterId: string;
  children: ReactNode;
}

export default function ReportAccessGate({ characterId, children }: ReportAccessGateProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userAccess, setUserAccess] = useState<{ hasAccess: boolean; accessType: string | null; characterId?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());

  const checkAccess = async (email: string) => {
    try {
      const response = await fetch('/api/check-report-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: email, characterId }),
      });
      
      if (response.ok) {
        const access = await response.json();
        setUserAccess(access);
      } else {
        console.error('Error checking access:', response.statusText);
        setUserAccess({ hasAccess: false, accessType: null });
      }
    } catch (error) {
      console.error('Error checking user access:', error);
      setUserAccess({ hasAccess: false, accessType: null });
    }
  };

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      
      if (session?.user?.email) {
        await checkAccess(session.user.email);
      }
      
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: { user: User | null } | null) => {
        setUser(session?.user ?? null);
        if (session?.user?.email) {
          await checkAccess(session.user.email);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase, characterId]);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="magical-sparkle text-4xl mb-4">⏳</div>
        <h1 className="storybook-title text-4xl mb-6">Loading...</h1>
        <p className="text-gray-600">Checking your access...</p>
      </main>
    );
  }

  // Check if user has access to this report
  if (!user) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="storybook-card page-turn p-8 max-w-2xl mx-auto">
          <div className="magical-sparkle text-4xl mb-4">🔐</div>
          <h1 className="storybook-title text-3xl mb-4">Authentication Required</h1>
          <p className="text-gray-600 mb-6">
            You need to sign in to access this personality report.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <button className="magical-button magical-glow">
                🔐 Sign In
              </button>
            </Link>
            <Link href="/quiz">
              <button className="magical-button magical-glow">
                🧙‍♀️ Take the Quiz
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!userAccess?.hasAccess) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="storybook-card page-turn p-8 max-w-2xl mx-auto">
          <div className="magical-sparkle text-4xl mb-4">🗝️</div>
          <h1 className="storybook-title text-3xl mb-4">Purchase Required</h1>
          <p className="text-gray-600 mb-6">
            You need to purchase access to view this personality report.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <button className="magical-button magical-glow">
                🧙‍♀️ Take the Quiz
              </button>
            </Link>
            <Link href="/subscription">
              <button className="magical-button magical-glow">
                🗝️ View Plans
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // User has access, render the report content
  return <>{children}</>;
}
