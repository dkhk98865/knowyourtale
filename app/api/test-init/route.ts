import { NextRequest, NextResponse } from 'next/server';
import { UserPromptProgressService } from '@/lib/user-prompt-progress';

export async function GET() {
  try {
    console.log('=== TESTING INITIALIZATION API ===');
    
    const testEmail = 'test@example.com';
    const testUserId = testEmail; // Using email as user ID temporarily
    
    console.log(`Testing initialization for email: ${testEmail}`);
    console.log('Environment variables:');
    console.log('- NEXT_PUBLIC_SUPABASE_URL:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('- SUPABASE_SERVICE_ROLE_KEY:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
    
    const promptService = new UserPromptProgressService();
    console.log('Created prompt service');
    
    // Test the getSupabase method directly
    const supabase = await promptService['getSupabase']();
    console.log('Got Supabase client directly');
    
    // Test a simple query first
    console.log('Testing simple query...');
    const { data: testQuery, error: queryError } = await supabase
      .from('user_prompt_progress')
      .select('count')
      .limit(1);
    
    console.log('Test query result:', { testQuery, queryError });
    
    if (queryError) {
      console.error('Test query failed:', queryError);
      return NextResponse.json({ 
        success: false, 
        error: 'Database query failed',
        details: queryError
      }, { status: 500 });
    }
    
    console.log('Test query successful, proceeding with initialization...');
    
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
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json({ 
      success: false, 
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
