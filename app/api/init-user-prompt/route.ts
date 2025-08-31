import { NextRequest, NextResponse } from 'next/server';
import { UserPromptProgressService } from '@/lib/user-prompt-progress';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log(`Initializing user prompt for email: ${email}`);
    
    // For now, use email as user ID since we're disabling RLS
    // This is a temporary solution until we can properly get the user ID
    const userId = email; // Using email as user ID temporarily
    
    console.log(`Using email as user ID: ${userId}`);
    
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
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
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
    
    // For now, use email as user ID since we're disabling RLS
    const userId = email; // Using email as user ID temporarily
    
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
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
