-- Fix weekly prompts RLS issues
-- Run this in your Supabase SQL editor

-- Add missing INSERT policy for user_prompt_progress
DROP POLICY IF EXISTS "Users can insert own prompt progress" ON user_prompt_progress;
CREATE POLICY "Users can insert own prompt progress" ON user_prompt_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Temporarily disable RLS for user_prompt_progress to allow initialization
ALTER TABLE user_prompt_progress DISABLE ROW LEVEL SECURITY;

-- Grant necessary permissions
GRANT SELECT, INSERT, UPDATE ON user_prompt_progress TO authenticated;
GRANT ALL ON user_prompt_progress TO service_role;
