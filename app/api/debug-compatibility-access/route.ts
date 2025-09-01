import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const { userEmail } = await request.json();
    
    if (!userEmail) {
      return NextResponse.json(
        { error: 'User email is required' },
        { status: 400 }
      );
    }

    const supabase: SupabaseClient = await createClient();
    
    // Check user_subscriptions table
    const { data: subscriptions, error: subscriptionsError } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_email', userEmail);

    // Check user_compatibility_access table
    const { data: compatibilityAccess, error: compatibilityError } = await supabase
      .from('user_compatibility_access')
      .select('*')
      .eq('user_email', userEmail);

    return NextResponse.json({
      userEmail,
      subscriptions: {
        data: subscriptions,
        error: subscriptionsError
      },
      compatibilityAccess: {
        data: compatibilityAccess,
        error: compatibilityError
      }
    });

  } catch (error) {
    console.error('Error in debug compatibility access:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
