import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}

// Function to check if user has access to a specific report
export async function checkUserReportAccess(userEmail: string, characterId?: string) {
  const supabase = createClient();
  
  // Check for all reports access first
  const { data: allReportsAccess } = await supabase
    .from('user_report_access')
    .select('*')
    .eq('user_email', userEmail)
    .eq('access_type', 'allReports')
    .eq('status', 'active')
    .single();

  if (allReportsAccess) {
    return { hasAccess: true, accessType: 'allReports' };
  }

  // If no all reports access, check for specific character access
  if (characterId) {
    const { data: singleReportAccess } = await supabase
      .from('user_report_access')
      .select('*')
      .eq('user_email', userEmail)
      .eq('access_type', 'single')
      .eq('character_id', characterId)
      .eq('status', 'active')
      .single();

    if (singleReportAccess) {
      return { hasAccess: true, accessType: 'single', characterId };
    }
  }

  return { hasAccess: false, accessType: null };
}
