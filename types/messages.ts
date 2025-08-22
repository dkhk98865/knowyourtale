export type Message = {
    id?: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    character_id?: string;
    user_id?: string;
    created_at?: string;
  };