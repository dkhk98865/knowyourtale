import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const { userEmail } = await request.json();
    
    if (!userEmail) {
      return NextResponse.json(
        { error: 'User email is required' },
        { status: 400 }
      );
    }

    const supabase: SupabaseClient = await createClient();
    
    console.log('🔧 Fixing subscription for:', userEmail);
    
    // Update the subscription plan to 'advanced'
    const { data: updateData, error: updateError } = await supabase
      .from('user_subscriptions')
      .update({
        plan: 'advanced',
        updated_at: new Date().toISOString()
      })
      .eq('user_email', userEmail)
      .eq('stripe_subscription_id', 'sub_1S0dnaDvKY96pR0jmL4BduJi')
      .select();

    if (updateError) {
      console.error('❌ Error updating subscription:', updateError);
      return NextResponse.json({
        error: 'Failed to update subscription',
        details: updateError
      }, { status: 500 });
    }

    console.log('✅ Subscription updated successfully:', updateData);

    // Also ensure compatibility access exists
    const { data: compatibilityData, error: compatibilityError } = await supabase
      .from('user_compatibility_access')
      .upsert({
        user_email: userEmail,
        access_type: 'monthly_compatibility',
        status: 'active',
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      }, {
        onConflict: 'user_email,access_type'
      })
      .select();

    if (compatibilityError) {
      console.error('❌ Error creating compatibility access:', compatibilityError);
    } else {
      console.log('✅ Compatibility access created/updated:', compatibilityData);
    }

    // Get the updated subscription data
    const { data: subscriptionData } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_email', userEmail)
      .eq('stripe_subscription_id', 'sub_1S0dnaDvKY96pR0jmL4BduJi')
      .single();

    return NextResponse.json({
      success: true,
      message: 'Subscription plan updated to advanced',
      subscription: subscriptionData,
      compatibilityAccess: compatibilityData
    });

  } catch (error) {
    console.error('Error in fix subscription:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
