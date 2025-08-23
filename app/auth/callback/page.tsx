'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase-client';

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const supabase = createClient();
      
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          router.push('/?error=auth_failed');
          return;
        }

        if (data.session) {
          // Successfully authenticated - check if we should redirect to a specific page
          const redirectTo = searchParams.get('redirectTo');
          if (redirectTo) {
            router.push(redirectTo);
          } else {
            router.push('/?success=signed_in');
          }
        } else {
          // No session found
          router.push('/?error=no_session');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        router.push('/?error=auth_failed');
      }
    };

    handleAuthCallback();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="magical-sparkle">🔄</div>
        <h1 className="storybook-title text-2xl mb-4">Completing Sign In...</h1>
        <div className="magical-spinner"></div>
        <p className="storybook-subtitle mt-4">Please wait while we complete your authentication.</p>
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="magical-sparkle">🔄</div>
          <h1 className="storybook-title text-2xl mb-4">Loading...</h1>
          <div className="magical-spinner"></div>
          <p className="storybook-subtitle mt-4">Please wait...</p>
        </div>
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  );
}
