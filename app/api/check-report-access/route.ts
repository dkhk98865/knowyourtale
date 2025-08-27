import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  try {
    const { userEmail, characterId } = await request.json();
    
    if (!userEmail) {
      return NextResponse.json(
        { error: 'User email is required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    
    // Check for all reports access first
    const { data: allReportsAccess } = await supabase
      .from('user_report_access')
      .select('*')
      .eq('user_email', userEmail)
      .eq('access_type', 'allReports')
      .eq('status', 'active')
      .single();

    if (allReportsAccess) {
      return NextResponse.json({ 
        hasAccess: true, 
        accessType: 'allReports' 
      });
    }

    // If no all reports access, check for specific character access
    if (characterId) {
      const { data: singleReportAccess } = await supabase
        .from('user_report_access')
        .select('*')
        .eq('user_email', userEmail)
        .eq('access_type', 'single')
        .eq('character_id', characterId)
        .eq('status', 'active')
        .single();

      if (singleReportAccess) {
        return NextResponse.json({ 
          hasAccess: true, 
          accessType: 'single', 
          characterId 
        });
      }
    }

    return NextResponse.json({ 
      hasAccess: false, 
      accessType: null 
    });

  } catch (error) {
    console.error('Error checking report access:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
