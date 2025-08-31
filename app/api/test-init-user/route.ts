import { NextRequest, NextResponse } from 'next/server';
import { UserPromptProgressService } from '@/lib/user-prompt-progress';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const promptService = new UserPromptProgressService();
    const result = await promptService.initializeUser(email, email);
    
    if (result) {
      return NextResponse.json({ 
        success: true, 
        message: `User ${email} initialized for weekly prompt cycle`,
        currentPrompt: await promptService.getCurrentPrompt(email)
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: `Failed to initialize user ${email}` 
      });
    }
  } catch (error) {
    console.error('Error initializing user:', error);
    return NextResponse.json(
      { error: 'Failed to initialize user' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }

    const promptService = new UserPromptProgressService();
    const currentPrompt = await promptService.getCurrentPrompt(email);
    const progress = await promptService.getUserProgress(email);
    
    return NextResponse.json({ 
      success: true,
      email,
      currentPrompt,
      progress
    });
  } catch (error) {
    console.error('Error getting user prompt:', error);
    return NextResponse.json(
      { error: 'Failed to get user prompt' },
      { status: 500 }
    );
  }
}
