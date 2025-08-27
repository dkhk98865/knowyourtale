import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';
import { requireMonthlySubscription } from '@/lib/subscription-check';

export async function GET() {
  try {
    const supabase: SupabaseClient = await createClient();
    
    // For GET requests, we'll allow reading posts but require subscription for full access
    // This allows users to see what's available before subscribing
    
    const { data: posts, error } = await supabase
      .from('community_posts_view')
      .select('*')
      .order('is_pinned', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase: SupabaseClient = await createClient();
    
    // Get user session
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check subscription access for creating posts
    const subscriptionCheck = await requireMonthlySubscription(user.email);
    if (!subscriptionCheck.hasAccess) {
      return NextResponse.json({ error: subscriptionCheck.error }, { status: 403 });
    }

    const { title, content, post_type, character_id } = await request.json();

    if (!title?.trim() || !content?.trim() || !post_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data: post, error } = await supabase
      .from('community_posts')
      .insert({
        title: title.trim(),
        content: content.trim(),
        post_type,
        character_id: character_id || null,
        user_id: user.id,
        user_email: user.email,
        user_name: user.user_metadata?.full_name || user.email?.split('@')[0]
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
