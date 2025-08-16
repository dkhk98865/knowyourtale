export interface Character {
  id: string
  name: string
  description: string
  image_url: string
  system_prompt: string
  story_origin: string
  personality_traits: string[]
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: string
}

export interface Chat {
  id: string
  user_id: string
  character_id: string
  messages: ChatMessage[]
  created_at: string
  updated_at: string
  title?: string
}

export interface UserFavorite {
  id: string
  user_id: string
  character_id: string
  created_at: string
}

export interface Database {
  public: {
    Tables: {
      characters: {
        Row: Character
        Insert: Omit<Character, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Character, 'id' | 'created_at' | 'updated_at'>>
      }
      chats: {
        Row: Chat
        Insert: Omit<Chat, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Chat, 'id' | 'created_at' | 'updated_at'>>
      }
      user_favorites: {
        Row: UserFavorite
        Insert: Omit<UserFavorite, 'id' | 'created_at'>
        Update: Partial<Omit<UserFavorite, 'id' | 'created_at'>>
      }
    }
  }
}
