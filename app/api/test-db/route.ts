import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

export async function GET() {
  try {
    console.log('=== TESTING DATABASE ACCESS ===');
    
    const supabase = await createClient();
    console.log('Created Supabase client');
    
    // Test basic connection
    const { data: testData, error: testError } = await supabase
      .from('user_prompt_progress')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.error('Database connection test failed:', testError);
      return NextResponse.json({ 
        success: false, 
        error: 'Database connection failed',
        details: testError
      }, { status: 500 });
    }
    
    console.log('Database connection successful');
    
    // Test counting records (safe operation)
    const { count, error: countError } = await supabase
      .from('user_prompt_progress')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('Count test failed:', countError);
      return NextResponse.json({ 
        success: false, 
        error: 'Count test failed',
        details: countError
      }, { status: 500 });
    }
    
    console.log('Count test successful, total records:', count);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database tests passed',
      tests: ['connection', 'count'],
      totalRecords: count
    });
    
  } catch (error) {
    console.error('Error in test-db:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
