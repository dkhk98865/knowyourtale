import { NextRequest, NextResponse } from 'next/server';
import { UserPromptProgressService } from '@/lib/user-prompt-progress';

export async function POST(request: NextRequest) {
  try {
    // Verify the request is authorized
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.WEEKLY_PROMPT_SECRET;
    
    if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const promptService = new UserPromptProgressService();
    
    // Update all users to new prompts for the week
    await promptService.updateAllUsersToNewPrompt();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Weekly prompts updated successfully' 
    });
  } catch (error) {
    console.error('Error updating weekly prompts:', error);
    return NextResponse.json(
      { error: 'Failed to update weekly prompts' },
      { status: 500 }
    );
  }
}

// Allow GET requests for manual testing
export async function GET() {
  try {
    const promptService = new UserPromptProgressService();
    
    // Get users ready for new prompts
    const usersReady = await promptService.getUsersReadyForNewPrompt();
    
    return NextResponse.json({ 
      success: true, 
      usersReady: usersReady.length,
      users: usersReady
    });
  } catch (error) {
    console.error('Error getting users ready for prompts:', error);
    return NextResponse.json(
      { error: 'Failed to get users ready for prompts' },
      { status: 500 }
    );
  }
}
