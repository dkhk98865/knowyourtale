-- Journal System Database Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Journal entries table
CREATE TABLE IF NOT EXISTS user_journals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  character_tags TEXT[], -- Array of fairy tale character IDs
  entry_type VARCHAR(50) CHECK (entry_type IN ('personality_reflection', 'prompt_response', 'growth_tracking', 'general')),
  mood_rating INTEGER CHECK (mood_rating >= 1 AND mood_rating <= 10),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Weekly prompts table (for subscription users)
CREATE TABLE IF NOT EXISTS weekly_prompts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  character_id VARCHAR(50), -- Which character this prompt relates to
  prompt_text TEXT NOT NULL,
  week_number INTEGER,
  year INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_journals_user_id ON user_journals(user_id);
CREATE INDEX IF NOT EXISTS idx_user_journals_character_tags ON user_journals USING GIN(character_tags);
CREATE INDEX IF NOT EXISTS idx_user_journals_entry_type ON user_journals(entry_type);
CREATE INDEX IF NOT EXISTS idx_user_journals_created_at ON user_journals(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_weekly_prompts_character_id ON weekly_prompts(character_id);
CREATE INDEX IF NOT EXISTS idx_weekly_prompts_active ON weekly_prompts(is_active);

-- Enable Row Level Security (RLS)
ALTER TABLE user_journals ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_prompts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_journals
CREATE POLICY "Users can view their own journals" ON user_journals
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own journals" ON user_journals
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own journals" ON user_journals
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own journals" ON user_journals
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for weekly_prompts (read-only for authenticated users)
CREATE POLICY "Authenticated users can view active prompts" ON weekly_prompts
  FOR SELECT USING (auth.role() = 'authenticated' AND is_active = true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_user_journals_updated_at
  BEFORE UPDATE ON user_journals
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample weekly prompts
INSERT INTO weekly_prompts (character_id, prompt_text, week_number, year) VALUES
  ('snowwhite', 'How does your kindness and compassion show up in your daily life? Reflect on a time when your gentle nature helped someone else.', 1, 2024),
  ('cinderella', 'Think about a challenging situation you''ve faced. How did you maintain hope and resilience? What did you learn about yourself?', 1, 2024),
  ('aurora', 'What dreams or visions do you have for your future? How can you take small steps toward making them a reality?', 1, 2024),
  ('ariel', 'What new experiences or adventures are you curious about? What would you like to explore or discover?', 1, 2024),
  ('belle', 'Reflect on a time when you saw beyond someone''s appearance or first impression. What did you discover about their true nature?', 1, 2024),
  ('rapunzel', 'What creative projects or ideas are you working on? How can you nurture and develop your creative gifts?', 1, 2024),
  ('gerda', 'Think about someone you care deeply about. How do you show your loyalty and devotion to them?', 1, 2024),
  ('mulan', 'What challenges are you currently facing that require courage? How can you step into your strength?', 1, 2024),
  ('alice', 'What questions do you have about yourself or the world around you? How does curiosity drive your growth?', 1, 2024),
  ('dorothy', 'What does "home" mean to you? Where do you feel most safe, loved, and authentic?', 1, 2024),
  ('wendy', 'How do you nurture and care for others? What boundaries do you need to set to care for yourself too?', 1, 2024),
  ('littleredridinghood', 'What new experiences are you curious about? How can you balance curiosity with wisdom?', 1, 2024);
