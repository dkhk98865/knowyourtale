import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: characters, error } = await supabase
      .from('characters')
      .select('*')
      .order('name')

    if (error) {
      console.error('Error fetching characters:', error)
      return NextResponse.json({ error: 'Failed to fetch characters' }, { status: 500 })
    }

    return NextResponse.json(characters)
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
