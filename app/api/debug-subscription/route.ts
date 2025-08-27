import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json({ error: 'Email parameter required' }, { status: 400 });
    }

    const supabase = await createClient();
    
    // Check user_subscriptions table
    const { data: subscriptions, error: subError } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_email', email);

    if (subError) {
      console.error('Error fetching subscriptions:', subError);
      return NextResponse.json({ error: 'Failed to fetch subscriptions' }, { status: 500 });
    }

    // Check webhook_logs for this user
    const { data: webhookLogs, error: logError } = await supabase
      .from('webhook_logs')
      .select('*')
      .eq('user_email', email)
      .order('created_at', { ascending: false })
      .limit(10);

    if (logError) {
      console.error('Error fetching webhook logs:', logError);
    }

    return NextResponse.json({
      email,
      subscriptions: subscriptions || [],
      webhookLogs: webhookLogs || [],
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in debug subscription:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
