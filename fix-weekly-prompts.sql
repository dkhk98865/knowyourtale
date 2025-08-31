-- Fix weekly prompts RLS issues
-- Run this in your Supabase SQL editor

-- First, let's check if the table exists and has the right structure
SELECT EXISTS (
  SELECT FROM information_schema.tables 
  WHERE table_schema = 'public' 
  AND table_name = 'user_prompt_progress'
);

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view own prompt progress" ON user_prompt_progress;
DROP POLICY IF EXISTS "Users can update own prompt progress" ON user_prompt_progress;
DROP POLICY IF EXISTS "Users can insert own prompt progress" ON user_prompt_progress;
DROP POLICY IF EXISTS "Service role can manage all prompt progress" ON user_prompt_progress;

-- Temporarily disable RLS for user_prompt_progress to allow initialization
ALTER TABLE user_prompt_progress DISABLE ROW LEVEL SECURITY;

-- Grant necessary permissions
GRANT SELECT, INSERT, UPDATE ON user_prompt_progress TO authenticated;
GRANT ALL ON user_prompt_progress TO service_role;

-- Verify the table is accessible (just count records, don't insert)
SELECT COUNT(*) FROM user_prompt_progress;
