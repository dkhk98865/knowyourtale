'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';

export default function AuthDebug() {
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    const addDebugInfo = (info: string) => {
      setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${info}`]);
    };

    // Check session every 2 seconds
    const interval = setInterval(async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          addDebugInfo(`Session error: ${error.message}`);
        } else if (session) {
          addDebugInfo(`Session found: ${session.user.email}`);
        } else {
          addDebugInfo('No session found');
        }

        // Check localStorage
        const oauthSuccess = localStorage.getItem('oauth_success');
        const userEmail = localStorage.getItem('user_email');
        if (oauthSuccess || userEmail) {
          addDebugInfo(`localStorage: oauth_success=${oauthSuccess}, user_email=${userEmail}`);
        }
      } catch (error) {
        addDebugInfo(`Error checking session: ${error}`);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [supabase]);

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg max-w-md max-h-64 overflow-y-auto text-xs">
      <h3 className="font-bold mb-2">Auth Debug Info</h3>
      {debugInfo.slice(-10).map((info, index) => (
        <div key={index} className="mb-1">{info}</div>
      ))}
    </div>
  );
}
