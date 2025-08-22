import { createBrowserClient } from '@supabase/ssr'

// Mock Supabase client for testing when environment variables are not available
const createMockClient = () => {
  return {
    from: () => ({
      select: () => ({
        eq: () => ({
          order: () => Promise.resolve({ data: [], error: null }),
          limit: () => Promise.resolve({ data: null, error: null }),
          single: () => Promise.resolve({ data: null, error: null })
        }),
        insert: () => Promise.resolve({ error: null }),
        delete: () => ({
          eq: () => Promise.resolve({ error: null }),
          neq: () => Promise.resolve({ error: null })
        }),
        upsert: () => Promise.resolve({ error: null })
      })
    }),
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
      signInWithPassword: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
      signInWithOAuth: () => Promise.resolve({ data: { provider: 'google', url: null }, error: null }),
      signOut: () => Promise.resolve({ error: null })
    }
  };
};

export function createClient() {
  // Check if environment variables are available
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  } else {
    // Return mock client for testing
    console.warn('Supabase environment variables not found, using mock client');
    return createMockClient() as ReturnType<typeof createBrowserClient>;
  }
}

export const supabase = createClient();
