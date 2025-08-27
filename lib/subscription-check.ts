import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function checkMonthlySubscription(userEmail: string): Promise<boolean> {
  try {
    const supabase: SupabaseClient = await createClient();
    
    const { data, error } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_email', userEmail)
      .eq('status', 'active')
      .eq('plan', 'monthly')
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking subscription:', error);
      return false;
    }

    return !!data && data.status === 'active';
  } catch (error) {
    console.error('Error checking subscription:', error);
    return false;
  }
}

export async function requireMonthlySubscription(userEmail: string): Promise<{ hasAccess: boolean; error?: string }> {
  const hasAccess = await checkMonthlySubscription(userEmail);
  
  if (!hasAccess) {
    return {
      hasAccess: false,
      error: 'Monthly subscription required to access this feature'
    };
  }

  return { hasAccess: true };
}
