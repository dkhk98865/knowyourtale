import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  try {
    console.log('🔍 Access check request received...');
    const { userEmail, characterId } = await request.json();
    
    console.log('📧 User email:', userEmail);
    console.log('🎭 Character ID:', characterId);
    
    if (!userEmail) {
      console.log('❌ No user email provided');
      return NextResponse.json(
        { error: 'User email is required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    console.log('🔗 Supabase client created for access check');
    
    // Debug: Check ALL records for this user
    console.log('🔍 DEBUG: Checking ALL records for user email:', userEmail);
    const { data: allUserRecords, error: allUserError } = await supabase
      .from('user_report_access')
      .select('*')
      .eq('user_email', userEmail);
    
    console.log('🔍 DEBUG: All user records found:', { data: allUserRecords, error: allUserError });
    
    // Check for all reports access first
    console.log('🔍 Checking for all reports access...');
    
    const { data: allReportsAccess, error: allReportsError } = await supabase
      .from('user_report_access')
      .select('*')
      .eq('user_email', userEmail)
      .eq('access_type', 'allReports')
      .eq('status', 'active')
      .limit(1); // Changed from .single() to .limit(1)

    console.log('🔍 All reports query result:', { data: allReportsAccess, error: allReportsError });

    if (allReportsError) {
      console.log('⚠️ Error checking all reports access:', allReportsError);
    }

    if (allReportsAccess && allReportsAccess.length > 0) {
      console.log('✅ User has all reports access');
      return NextResponse.json({ 
        hasAccess: true, 
        accessType: 'allReports' 
      });
    }

    // If no all reports access, check for specific character access
    if (characterId) {
      console.log('🔍 Checking for single report access for character:', characterId);
      const { data: singleReportAccess, error: singleReportError } = await supabase
        .from('user_report_access')
        .select('*')
        .eq('user_email', userEmail)
        .eq('access_type', 'single')
        .eq('character_id', characterId)
        .eq('status', 'active')
        .limit(1); // Changed from .single() to .limit(1)

      console.log('🔍 Single report query result:', { data: singleReportAccess, error: singleReportError });

      if (singleReportError) {
        console.log('⚠️ Error checking single report access:', singleReportError);
      }

      if (singleReportAccess && singleReportAccess.length > 0) {
        console.log('✅ User has single report access for character:', characterId);
        return NextResponse.json({ 
          hasAccess: true, 
          accessType: 'single', 
          characterId 
        });
      }
    } else {
      // If no characterId provided, check for ANY single report access
      console.log('🔍 Checking for any single report access...');
      const { data: anySingleReportAccess, error: anySingleError } = await supabase
        .from('user_report_access')
        .select('*')
        .eq('user_email', userEmail)
        .eq('access_type', 'single')
        .eq('status', 'active')
        .limit(1); // Changed from .single() to .limit(1)

      console.log('🔍 Any single report query result:', { data: anySingleReportAccess, error: anySingleError });

      if (anySingleError) {
        console.log('⚠️ Error checking any single report access:', anySingleError);
      }

      if (anySingleReportAccess && anySingleReportAccess.length > 0) {
        console.log('✅ User has single report access for character:', anySingleReportAccess[0].character_id);
        return NextResponse.json({ 
          hasAccess: true, 
          accessType: 'single', 
          characterId: anySingleReportAccess[0].character_id 
        });
      }
    }

    console.log('❌ User has no access to reports');
    return NextResponse.json({ 
      hasAccess: false, 
      accessType: null 
    });

  } catch (error) {
    console.error('💥 Error in access check API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
