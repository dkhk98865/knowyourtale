import { NextRequest, NextResponse } from 'next/server';
import { UserPromptProgressService } from '@/lib/user-prompt-progress';

export async function GET() {
  try {
    console.log('=== TESTING INITIALIZATION API ===');
    
    const testEmail = 'test@example.com';
    const testUserId = testEmail; // Using email as user ID temporarily
    
    console.log(`Testing initialization for email: ${testEmail}`);
    
    const promptService = new UserPromptProgressService();
    console.log('Created prompt service');
    
    const result = await promptService.initializeUser(testUserId, testEmail);
    console.log('Initialization result:', result);
    
    if (result) {
      console.log('Test initialization successful');
      return NextResponse.json({ 
        success: true, 
        message: 'Test initialization successful',
        email: testEmail
      });
    } else {
      console.error('Test initialization failed');
      return NextResponse.json({ 
        success: false, 
        error: 'Test initialization failed' 
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Error in test-init:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
