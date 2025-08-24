// types/journal.ts

export interface JournalEntry {
  id: string;
  user_id: string;
  title: string;
  content: string;
  character_tags: string[];
  entry_type: 'personality_reflection' | 'prompt_response' | 'growth_tracking' | 'general';
  mood_rating?: number;
  created_at: string;
  updated_at: string;
}

export interface WeeklyPrompt {
  id: string;
  character_id: string;
  prompt_text: string;
  week_number: number;
  year: number;
  is_active: boolean;
  created_at: string;
}

export interface CreateJournalEntry {
  title: string;
  content: string;
  character_tags: string[];
  entry_type: 'personality_reflection' | 'prompt_response' | 'growth_tracking' | 'general';
  mood_rating?: number;
}

export interface UpdateJournalEntry {
  title?: string;
  content?: string;
  character_tags?: string[];
  entry_type?: 'personality_reflection' | 'prompt_response' | 'growth_tracking' | 'general';
  mood_rating?: number;
}

export interface JournalFilters {
  character_tags?: string[];
  entry_type?: string;
  date_from?: string;
  date_to?: string;
  search?: string;
}

export interface JournalStats {
  total_entries: number;
  entries_this_month: number;
  favorite_character: string;
  most_common_entry_type: string;
  average_mood: number;
}
