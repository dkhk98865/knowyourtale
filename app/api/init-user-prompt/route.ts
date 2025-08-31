import { NextRequest, NextResponse } from 'next/server';
import { UserPromptProgressService } from '@/lib/user-prompt-progress';
import { createClient } from '@supabase/supabase-js';

function createServiceRoleClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  );
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log(`Initializing user prompt for email: ${email}`);
    
    // Get the user ID from the email using Supabase admin API
    const supabase = createServiceRoleClient();
    
    // Use the admin API to get user by email
    const { data: { users }, error: userError } = await supabase.auth.admin.listUsers();
    
    if (userError) {
      console.error(`Error fetching users:`, userError);
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch users' 
      }, { status: 500 });
    }
    
    const user = users?.find(u => u.email === email);
    
    if (!user) {
      console.error(`User not found for email: ${email}`);
      return NextResponse.json({ 
        success: false, 
        error: 'User not found' 
      }, { status: 404 });
    }

    const userId = user.id;
    console.log(`Found user ID: ${userId} for email: ${email}`);
    
    const promptService = new UserPromptProgressService();
    const result = await promptService.initializeUser(userId, email);
    
    if (result) {
      console.log(`Successfully initialized user: ${email}`);
      return NextResponse.json({ 
        success: true, 
        message: 'User initialized successfully',
        email: email,
        userId: userId
      });
    } else {
      console.error(`Failed to initialize user: ${email}`);
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to initialize user' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in init-user-prompt:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json({ error: 'Email parameter is required' }, { status: 400 });
    }

    console.log(`Checking user prompt status for email: ${email}`);
    
    // Get the user ID from the email using Supabase admin API
    const supabase = createServiceRoleClient();
    
    // Use the admin API to get user by email
    const { data: { users }, error: userError } = await supabase.auth.admin.listUsers();
    
    if (userError) {
      console.error(`Error fetching users:`, userError);
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch users' 
      }, { status: 500 });
    }
    
    const user = users?.find(u => u.email === email);
    
    if (!user) {
      console.error(`User not found for email: ${email}`);
      return NextResponse.json({ 
        success: false, 
        error: 'User not found' 
      }, { status: 404 });
    }

    const userId = user.id;
    
    const promptService = new UserPromptProgressService();
    const prompt = await promptService.getCurrentPrompt(userId);
    const progress = await promptService.getUserProgress(userId);
    
    return NextResponse.json({ 
      success: true,
      email: email,
      userId: userId,
      hasPrompt: !!prompt,
      prompt: prompt,
      progress: progress
    });
  } catch (error) {
    console.error('Error checking user prompt status:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}
