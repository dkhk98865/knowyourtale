import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    
    // Get user session
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { target_type, target_id } = await request.json();

    if (!target_type || !target_id) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if like already exists
    const { data: existingLike } = await supabase
      .from('community_likes')
      .select('id')
      .eq('user_email', user.email)
      .eq('target_type', target_type)
      .eq('target_id', target_id)
      .single();

    if (existingLike) {
      return NextResponse.json(
        { error: 'Already liked' },
        { status: 400 }
      );
    }

    const { data: like, error } = await supabase
      .from('community_likes')
      .insert({
        user_id: user.id,
        user_email: user.email,
        target_type,
        target_id
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ like });
  } catch (error) {
    console.error('Error creating like:', error);
    return NextResponse.json(
      { error: 'Failed to create like' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createClient();
    
    // Get user session
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const target_type = searchParams.get('target_type');
    const target_id = searchParams.get('target_id');

    if (!target_type || !target_id) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('community_likes')
      .delete()
      .eq('user_email', user.email)
      .eq('target_type', target_type)
      .eq('target_id', target_id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error removing like:', error);
    return NextResponse.json(
      { error: 'Failed to remove like' },
      { status: 500 }
    );
  }
}
