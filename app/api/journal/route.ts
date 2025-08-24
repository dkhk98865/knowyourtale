import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import { CreateJournalEntry } from '@/types/journal';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    
    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const character_tags = searchParams.get('character_tags')?.split(',');
    const entry_type = searchParams.get('entry_type');
    const date_from = searchParams.get('date_from');
    const date_to = searchParams.get('date_to');
    const search = searchParams.get('search');

    // Build query
    let query = supabase
      .from('user_journals')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    // Apply filters
    if (character_tags && character_tags.length > 0) {
      query = query.overlaps('character_tags', character_tags);
    }

    if (entry_type) {
      query = query.eq('entry_type', entry_type);
    }

    if (date_from) {
      query = query.gte('created_at', date_from);
    }

    if (date_to) {
      query = query.lte('created_at', date_to);
    }

    if (search) {
      query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`);
    }

    const { data: journals, error } = await query;

    if (error) {
      console.error('Error fetching journals:', error);
      return NextResponse.json({ error: 'Failed to fetch journals' }, { status: 500 });
    }

    return NextResponse.json({ journals });
  } catch (error) {
    console.error('Error in journal GET:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    
    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const journalData: CreateJournalEntry = await request.json();

    // Validate required fields
    if (!journalData.title || !journalData.content || !journalData.entry_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert journal entry
    const { data: journal, error } = await supabase
      .from('user_journals')
      .insert({
        user_id: user.id,
        title: journalData.title,
        content: journalData.content,
        character_tags: journalData.character_tags || [],
        entry_type: journalData.entry_type,
        mood_rating: journalData.mood_rating
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating journal:', error);
      return NextResponse.json({ error: 'Failed to create journal entry' }, { status: 500 });
    }

    return NextResponse.json({ journal }, { status: 201 });
  } catch (error) {
    console.error('Error in journal POST:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
