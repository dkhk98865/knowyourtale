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
      .eq('user_email', userEmail)
      .order('created_at', { ascending: false });

    // Check webhook_logs for recent events
    const { data: webhookLogs, error: webhookError } = await supabase
      .from('webhook_logs')
      .select('*')
      .eq('user_email', userEmail)
      .order('created_at', { ascending: false })
      .limit(10);

    return NextResponse.json({
      userEmail,
      subscriptions: {
        data: subscriptions,
        error: subscriptionsError,
        count: subscriptions?.length || 0
      },
      webhookLogs: {
        data: webhookLogs,
        error: webhookError,
        count: webhookLogs?.length || 0
      }
    });

  } catch (error) {
    console.error('Error in debug subscription:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
