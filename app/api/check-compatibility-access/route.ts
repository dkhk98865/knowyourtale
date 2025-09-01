import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    console.log('🔍 Compatibility access check request received...');
    const { userEmail, compatibilityPairId } = await request.json();
    
    console.log('📧 User email:', userEmail);
    console.log('💕 Compatibility pair ID:', compatibilityPairId);
    
    if (!userEmail) {
      console.log('❌ No user email provided');
      return NextResponse.json(
        { error: 'User email is required' },
        { status: 400 }
      );
    }

    const supabase: SupabaseClient = await createClient();
    console.log('🔗 Supabase client created for compatibility access check');
    
    // Debug: Check ALL records for this user
    console.log('🔍 DEBUG: Checking ALL compatibility records for user email:', userEmail);
    const { data: allUserRecords, error: allUserError } = await supabase
      .from('user_compatibility_access')
      .select('*')
      .eq('user_email', userEmail);
    
    console.log('🔍 DEBUG: All user compatibility records found:', { data: allUserRecords, error: allUserError });
    
    // Check for all pairs access first
    console.log('🔍 Checking for all pairs access...');
    
    const { data: allPairsAccess, error: allPairsError } = await supabase
      .from('user_compatibility_access')
      .select('*')
      .eq('user_email', userEmail)
      .eq('access_type', 'all_pairs')
      .eq('status', 'active')
      .limit(1);

    console.log('🔍 All pairs query result:', { data: allPairsAccess, error: allPairsError });

    if (allPairsError) {
      console.log('⚠️ Error checking all pairs access:', allPairsError);
    }

    if (allPairsAccess && allPairsAccess.length > 0) {
      console.log('✅ User has all pairs access');
      return NextResponse.json({ 
        hasAccess: true, 
        accessType: 'all_pairs' 
      });
    }

    // Check for monthly compatibility access
    console.log('🔍 Checking for monthly compatibility access...');
    
    const { data: monthlyAccess, error: monthlyError } = await supabase
      .from('user_compatibility_access')
      .select('*')
      .eq('user_email', userEmail)
      .eq('access_type', 'monthly_compatibility')
      .eq('status', 'active')
      .limit(1);

    console.log('🔍 Monthly compatibility query result:', { data: monthlyAccess, error: monthlyError });

    if (monthlyError) {
      console.log('⚠️ Error checking monthly compatibility access:', monthlyError);
    }

    if (monthlyAccess && monthlyAccess.length > 0) {
      console.log('✅ User has monthly compatibility access');
      return NextResponse.json({ 
        hasAccess: true, 
        accessType: 'monthly_compatibility' 
      });
    }

    // If no all pairs or monthly access, check for specific pair access
    if (compatibilityPairId) {
      console.log('🔍 Checking for single pair access for compatibility:', compatibilityPairId);
      const { data: singlePairAccess, error: singlePairError } = await supabase
        .from('user_compatibility_access')
        .select('*')
        .eq('user_email', userEmail)
        .eq('access_type', 'single_pair')
        .eq('compatibility_pair_id', compatibilityPairId)
        .eq('status', 'active')
        .limit(1);

      console.log('🔍 Single pair query result:', { data: singlePairAccess, error: singlePairError });

      if (singlePairError) {
        console.log('⚠️ Error checking single pair access:', singlePairError);
      }

      if (singlePairAccess && singlePairAccess.length > 0) {
        console.log('✅ User has single pair access for compatibility:', compatibilityPairId);
        return NextResponse.json({ 
          hasAccess: true, 
          accessType: 'single_pair', 
          compatibilityPairId 
        });
      }
    } else {
      // If no compatibilityPairId provided, check for ANY single pair access
      console.log('🔍 Checking for any single pair access...');
      const { data: anySinglePairAccess, error: anySingleError } = await supabase
        .from('user_compatibility_access')
        .select('*')
        .eq('user_email', userEmail)
        .eq('access_type', 'single_pair')
        .eq('status', 'active');

      console.log('🔍 Any single pair query result:', { data: anySinglePairAccess, error: anySingleError });

      if (anySingleError) {
        console.log('⚠️ Error checking any single pair access:', anySingleError);
      }

      if (anySinglePairAccess && anySinglePairAccess.length > 0) {
        console.log('✅ User has single pair access for multiple compatibilities:', anySinglePairAccess.length, 'pairs');
        // Return all accessible compatibility pair IDs
        const compatibilityPairIds = anySinglePairAccess.map(record => record.compatibility_pair_id);
        console.log('✅ Accessible compatibility pair IDs:', compatibilityPairIds);
        return NextResponse.json({ 
          hasAccess: true, 
          accessType: 'multiple_single_pairs', 
          compatibilityPairIds: compatibilityPairIds,
          compatibilityPairId: compatibilityPairIds[0] // Keep backward compatibility
        });
      }
    }

    console.log('❌ User has no access to compatibility reports');
    return NextResponse.json({ 
      hasAccess: false, 
      accessType: null 
    });

  } catch (error) {
    console.error('💥 Error in compatibility access check API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
