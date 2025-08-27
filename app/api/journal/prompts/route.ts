import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';
import { requireMonthlySubscription } from '@/lib/subscription-check';

export async function GET(request: NextRequest) {
  try {
    const supabase: SupabaseClient = await createClient();
    
    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check subscription access
    const subscriptionCheck = await requireMonthlySubscription(user.email);
    if (!subscriptionCheck.hasAccess) {
      return NextResponse.json({ error: subscriptionCheck.error }, { status: 403 });
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const character_id = searchParams.get('character_id');
    const week_number = searchParams.get('week_number');
    const year = searchParams.get('year');

    // Build query
    let query = supabase
      .from('weekly_prompts')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    // Apply filters
    if (character_id) {
      query = query.eq('character_id', character_id);
    }

    if (week_number) {
      query = query.eq('week_number', parseInt(week_number));
    }

    if (year) {
      query = query.eq('year', parseInt(year));
    }

    const { data: prompts, error } = await query;

    if (error) {
      console.error('Error fetching prompts:', error);
      return NextResponse.json({ error: 'Failed to fetch prompts' }, { status: 500 });
    }

    return NextResponse.json({ prompts });
  } catch (error) {
    console.error('Error in prompts GET:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
