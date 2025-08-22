import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our database
export interface ChatMessage {
  id?: string
  session_id: string
  character_id: string
  role: 'user' | 'assistant'
  content: string
  created_at?: string
}

export interface ChatSession {
  id?: string
  session_id: string
  character_id: string
  last_message_at?: string
  created_at?: string
}
