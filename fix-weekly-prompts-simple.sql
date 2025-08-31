-- Simple fix for weekly prompts RLS issue
-- Run this in your Supabase SQL editor

-- Disable RLS for user_prompt_progress table
ALTER TABLE user_prompt_progress DISABLE ROW LEVEL SECURITY;

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON user_prompt_progress TO authenticated;
GRANT ALL ON user_prompt_progress TO service_role;

-- Verify the fix worked
SELECT 'RLS disabled for user_prompt_progress' as status;

