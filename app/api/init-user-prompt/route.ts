import { NextRequest, NextResponse } from 'next/server';
import { UserPromptProgressService } from '@/lib/user-prompt-progress';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log(`Initializing user prompt for email: ${email}`);
    
    const promptService = new UserPromptProgressService();
    const result = await promptService.initializeUser(email, email);
    
    if (result) {
      console.log(`Successfully initialized user: ${email}`);
      return NextResponse.json({ 
        success: true, 
        message: 'User initialized successfully',
        email: email
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
    
    const promptService = new UserPromptProgressService();
    const prompt = await promptService.getCurrentPrompt(email);
    const progress = await promptService.getUserProgress(email);
    
    return NextResponse.json({ 
      success: true,
      email: email,
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
