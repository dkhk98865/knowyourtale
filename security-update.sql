-- Security Update: Enable RLS with proper policies
-- Run this in your Supabase SQL editor to fix Security Advisor warnings

-- Enable RLS on all tables
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_report_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_compatibility_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_prompt_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_logs ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view own subscription" ON user_subscriptions;
DROP POLICY IF EXISTS "Service role can manage all subscriptions" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can view own report access" ON user_report_access;
DROP POLICY IF EXISTS "Users can update own report access" ON user_report_access;
DROP POLICY IF EXISTS "Service role can manage all report access" ON user_report_access;
DROP POLICY IF EXISTS "Users can insert own report access" ON user_report_access;
DROP POLICY IF EXISTS "Users can view own compatibility access" ON user_compatibility_access;
DROP POLICY IF EXISTS "Users can update own compatibility access" ON user_compatibility_access;
DROP POLICY IF EXISTS "Service role can manage all compatibility access" ON user_compatibility_access;
DROP POLICY IF EXISTS "Users can insert own compatibility access" ON user_compatibility_access;
DROP POLICY IF EXISTS "Users can view own webhook logs" ON webhook_logs;
DROP POLICY IF EXISTS "Service role can insert webhook logs" ON webhook_logs;
DROP POLICY IF EXISTS "Users can view own prompt progress" ON user_prompt_progress;
DROP POLICY IF EXISTS "Users can update own prompt progress" ON user_prompt_progress;
DROP POLICY IF EXISTS "Users can insert own prompt progress" ON user_prompt_progress;
DROP POLICY IF EXISTS "Service role can manage all prompt progress" ON user_prompt_progress;

-- Create secure policies for user_subscriptions
CREATE POLICY "Users can view own subscription" ON user_subscriptions
  FOR SELECT USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Service role can manage all subscriptions" ON user_subscriptions
  FOR ALL USING (auth.role() = 'service_role');

-- Create secure policies for user_report_access
CREATE POLICY "Users can view own report access" ON user_report_access
  FOR SELECT USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Service role can manage all report access" ON user_report_access
  FOR ALL USING (auth.role() = 'service_role');

-- Create secure policies for user_compatibility_access
CREATE POLICY "Users can view own compatibility access" ON user_compatibility_access
  FOR SELECT USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Service role can manage all compatibility access" ON user_compatibility_access
  FOR ALL USING (auth.role() = 'service_role');

-- Create secure policies for webhook_logs
CREATE POLICY "Users can view own webhook logs" ON webhook_logs
  FOR SELECT USING (auth.email() = user_email);

CREATE POLICY "Service role can insert webhook logs" ON webhook_logs
  FOR INSERT WITH CHECK (true);

-- Create secure policies for user_prompt_progress
CREATE POLICY "Users can view own prompt progress" ON user_prompt_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own prompt progress" ON user_prompt_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all prompt progress" ON user_prompt_progress
  FOR ALL USING (auth.role() = 'service_role');

-- Verify RLS is enabled on all tables
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename IN (
  'user_subscriptions',
  'user_report_access', 
  'user_compatibility_access',
  'user_prompt_progress',
  'webhook_logs'
)
ORDER BY tablename;
