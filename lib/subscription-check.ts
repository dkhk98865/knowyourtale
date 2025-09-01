import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function checkMonthlySubscription(userEmail: string): Promise<boolean> {
  try {
    const supabase: SupabaseClient = await createClient();
    
    // First check for monthly subscription specifically
    const { data: monthlyData, error: monthlyError } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_email', userEmail)
      .eq('status', 'active')
      .eq('plan', 'monthly')
      .single();

    if (monthlyError && monthlyError.code === 'PGRST116') {
      // No monthly subscription found, check if user has any active subscription
      const { data: anySubscription, error: anyError } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_email', userEmail)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1);

      if (anyError) {
        console.error('Error checking any subscription:', anyError);
        return false;
      }

      // For now, we'll consider any active subscription as having access
      // This can be refined later if needed
      return !!anySubscription && anySubscription.length > 0;
    } else if (monthlyError) {
      console.error('Error checking monthly subscription:', monthlyError);
      return false;
    }

    return !!monthlyData && monthlyData.status === 'active';
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
