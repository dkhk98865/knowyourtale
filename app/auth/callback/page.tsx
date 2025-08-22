'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase-client';

export default function AuthCallbackPage() {
  const router = useRouter();

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
            // Successfully authenticated
            router.push('/?success=signed_in');
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
  }, [router]);

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
