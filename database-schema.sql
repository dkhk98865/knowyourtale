-- Database schema for Stripe subscriptions
-- Run this in your Supabase SQL editor

-- Create user_subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT NOT NULL CHECK (plan IN ('single', 'monthly', 'allReports')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'canceled', 'past_due', 'unpaid', 'incomplete')),
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_report_access table to track which reports users can access
CREATE TABLE IF NOT EXISTS user_report_access (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  access_type TEXT NOT NULL CHECK (access_type IN ('single', 'allReports')),
  character_id TEXT, -- For single reports, which character they can access
  stripe_payment_intent_id TEXT, -- To track the specific purchase
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'expired', 'refunded')),
  expires_at TIMESTAMP WITH TIME ZONE, -- For single reports, could have expiration
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_compatibility_access table to track which compatibility reports users can access
CREATE TABLE IF NOT EXISTS user_compatibility_access (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  access_type TEXT NOT NULL CHECK (access_type IN ('single_pair', 'all_pairs', 'monthly_compatibility')),
  compatibility_pair_id TEXT, -- For single pair reports, which pair they can access (e.g., 'snowwhite-cinderella')
  stripe_payment_intent_id TEXT, -- To track the specific purchase
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'expired', 'refunded')),
  expires_at TIMESTAMP WITH TIME ZONE, -- For monthly subscriptions, when access expires
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create webhook_logs table for debugging
CREATE TABLE IF NOT EXISTS webhook_logs (
  id SERIAL PRIMARY KEY,
  event_type VARCHAR(100) NOT NULL,
  stripe_event_id VARCHAR(255),
  user_email VARCHAR(255),
  plan VARCHAR(50),
  character_id VARCHAR(50),
  status VARCHAR(50) NOT NULL,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_prompt_progress table to track individual user progress through 12-week character prompt cycle
CREATE TABLE IF NOT EXISTS user_prompt_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  current_week INTEGER NOT NULL DEFAULT 1 CHECK (current_week >= 1 AND current_week <= 12),
  character_id TEXT NOT NULL, -- Which character's prompt they're on
  last_prompt_date TIMESTAMP WITH TIME ZONE,
  next_prompt_date TIMESTAMP WITH TIME ZONE,
  total_prompts_viewed INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);



-- Create index on user_email for fast lookups
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_email ON user_subscriptions(user_email);

-- Create index on stripe_customer_id
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe_customer ON user_subscriptions(stripe_customer_id);

-- Create index on stripe_subscription_id
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe_subscription ON user_subscriptions(stripe_subscription_id);

-- Create indexes for user_report_access table
CREATE INDEX IF NOT EXISTS idx_user_report_access_user_id ON user_report_access(user_id);
CREATE INDEX IF NOT EXISTS idx_user_report_access_email ON user_report_access(user_email);
CREATE INDEX IF NOT EXISTS idx_user_report_access_character ON user_report_access(character_id);
CREATE INDEX IF NOT EXISTS idx_user_report_access_type ON user_report_access(access_type);
CREATE INDEX IF NOT EXISTS idx_user_report_access_status ON user_report_access(status);

-- Create indexes for user_compatibility_access table
CREATE INDEX IF NOT EXISTS idx_user_compatibility_access_user_id ON user_compatibility_access(user_id);
CREATE INDEX IF NOT EXISTS idx_user_compatibility_access_email ON user_compatibility_access(user_email);
CREATE INDEX IF NOT EXISTS idx_user_compatibility_access_pair ON user_compatibility_access(compatibility_pair_id);
CREATE INDEX IF NOT EXISTS idx_user_compatibility_access_type ON user_compatibility_access(access_type);
CREATE INDEX IF NOT EXISTS idx_user_compatibility_access_status ON user_compatibility_access(status);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_webhook_logs_user_email ON webhook_logs(user_email);
CREATE INDEX IF NOT EXISTS idx_webhook_logs_created_at ON webhook_logs(created_at);

-- Create indexes for user_prompt_progress table
CREATE INDEX IF NOT EXISTS idx_user_prompt_progress_user_id ON user_prompt_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_prompt_progress_email ON user_prompt_progress(user_email);
CREATE INDEX IF NOT EXISTS idx_user_prompt_progress_active ON user_prompt_progress(is_active);
CREATE INDEX IF NOT EXISTS idx_user_prompt_progress_next_date ON user_prompt_progress(next_prompt_date);



-- Enable Row Level Security (RLS)
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_report_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_compatibility_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_prompt_progress ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Users can view own subscription" ON user_subscriptions;
DROP POLICY IF EXISTS "Service role can manage all subscriptions" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can view own report access" ON user_report_access;
DROP POLICY IF EXISTS "Users can update own report access" ON user_report_access;
DROP POLICY IF EXISTS "Service role can manage all report access" ON user_report_access;
DROP POLICY IF EXISTS "Users can view own compatibility access" ON user_compatibility_access;
DROP POLICY IF EXISTS "Users can update own compatibility access" ON user_compatibility_access;
DROP POLICY IF EXISTS "Service role can manage all compatibility access" ON user_compatibility_access;
DROP POLICY IF EXISTS "Service role can insert report access" ON user_report_access;
DROP POLICY IF EXISTS "Webhook can insert report access" ON user_report_access;
DROP POLICY IF EXISTS "Users can insert own report access" ON user_report_access;
DROP POLICY IF EXISTS "Users can view own webhook logs" ON webhook_logs;
DROP POLICY IF EXISTS "Service role can insert webhook logs" ON webhook_logs;

-- Drop existing community policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Anyone can view community posts" ON community_posts;
DROP POLICY IF EXISTS "Authenticated users can create posts" ON community_posts;
DROP POLICY IF EXISTS "Users can update own posts" ON community_posts;
DROP POLICY IF EXISTS "Users can delete own posts" ON community_posts;
DROP POLICY IF EXISTS "Anyone can view community replies" ON community_replies;
DROP POLICY IF EXISTS "Authenticated users can create replies" ON community_replies;
DROP POLICY IF EXISTS "Users can update own replies" ON community_replies;
DROP POLICY IF EXISTS "Users can delete own replies" ON community_replies;
DROP POLICY IF EXISTS "Anyone can view community likes" ON community_likes;
DROP POLICY IF EXISTS "Authenticated users can manage own likes" ON community_likes;

-- Drop existing user_prompt_progress policies if they exist
DROP POLICY IF EXISTS "Users can view own prompt progress" ON user_prompt_progress;
DROP POLICY IF EXISTS "Users can update own prompt progress" ON user_prompt_progress;
DROP POLICY IF EXISTS "Service role can manage all prompt progress" ON user_prompt_progress;

-- Create policy to allow users to view their own subscription
CREATE POLICY "Users can view own subscription" ON user_subscriptions
  FOR SELECT USING (auth.jwt() ->> 'email' = user_email);

-- Create policy to allow service role to manage all subscriptions
CREATE POLICY "Service role can manage all subscriptions" ON user_subscriptions
  FOR ALL USING (auth.role() = 'service_role');

-- Note: RLS is disabled for user_report_access, so policies are not needed
-- When RLS is re-enabled, uncomment the following policies:
-- CREATE POLICY "Users can view own report access" ON user_report_access
--   FOR SELECT USING (auth.jwt() ->> 'email' = user_email);
-- CREATE POLICY "Users can update own report access" ON user_report_access
--   FOR UPDATE USING (auth.jwt() ->> 'email' = user_email);
-- CREATE POLICY "Service role can manage all report access" ON user_report_access
--   FOR ALL USING (auth.role() = 'service_role');
-- CREATE POLICY "Users can insert own report access" ON user_report_access
--   FOR INSERT WITH CHECK (auth.jwt() ->> 'email' = user_email);

-- TEMPORARY: Disable RLS for user_report_access to allow webhook inserts
-- Remove this after webhook is working and re-enable with proper policies
ALTER TABLE user_report_access DISABLE ROW LEVEL SECURITY;

-- TEMPORARY: Disable RLS for user_compatibility_access to allow webhook inserts
-- Remove this after webhook is working and re-enable with proper policies
ALTER TABLE user_compatibility_access DISABLE ROW LEVEL SECURITY;

-- TEMPORARY: Disable RLS for user_prompt_progress to allow initialization
-- Remove this after initialization is working and re-enable with proper policies
ALTER TABLE user_prompt_progress DISABLE ROW LEVEL SECURITY;

-- Alternative: Create a very permissive policy that allows all operations
-- CREATE POLICY "Allow all operations temporarily" ON user_report_access
--   FOR ALL USING (true) WITH CHECK (true);

-- Create policies for webhook_logs table
CREATE POLICY "Users can view own webhook logs" ON webhook_logs
  FOR SELECT USING (auth.email() = user_email);

CREATE POLICY "Service role can insert webhook logs" ON webhook_logs
  FOR INSERT WITH CHECK (true);

-- Create policies for user_prompt_progress table
CREATE POLICY "Users can view own prompt progress" ON user_prompt_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own prompt progress" ON user_prompt_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own prompt progress" ON user_prompt_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role can manage all prompt progress" ON user_prompt_progress
  FOR ALL USING (auth.role() = 'service_role');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing triggers if they exist (to avoid conflicts)
DROP TRIGGER IF EXISTS update_user_subscriptions_updated_at ON user_subscriptions;
DROP TRIGGER IF EXISTS update_user_report_access_updated_at ON user_report_access;
DROP TRIGGER IF EXISTS update_user_compatibility_access_updated_at ON user_compatibility_access;
DROP TRIGGER IF EXISTS update_user_prompt_progress_updated_at ON user_prompt_progress;
DROP TRIGGER IF EXISTS update_community_posts_updated_at ON community_posts;
DROP TRIGGER IF EXISTS update_community_replies_updated_at ON community_replies;
DROP TRIGGER IF EXISTS update_reply_count ON community_replies;
DROP TRIGGER IF EXISTS update_like_count ON community_likes;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_user_subscriptions_updated_at
  BEFORE UPDATE ON user_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create trigger for user_report_access table
CREATE TRIGGER update_user_report_access_updated_at
  BEFORE UPDATE ON user_report_access
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create trigger for user_compatibility_access table
CREATE TRIGGER update_user_compatibility_access_updated_at
  BEFORE UPDATE ON user_compatibility_access
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create trigger for user_prompt_progress table
CREATE TRIGGER update_user_prompt_progress_updated_at
  BEFORE UPDATE ON user_prompt_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for active subscriptions
CREATE OR REPLACE VIEW active_subscriptions AS
SELECT 
  user_email,
  plan,
  status,
  current_period_end,
  created_at
FROM user_subscriptions
WHERE status = 'active' AND current_period_end > NOW();

-- Grant necessary permissions
GRANT SELECT ON user_subscriptions TO authenticated;
GRANT ALL ON user_subscriptions TO service_role;
GRANT SELECT ON active_subscriptions TO authenticated;

-- Grant permissions for user_report_access table
GRANT SELECT, UPDATE ON user_report_access TO authenticated;
GRANT ALL ON user_report_access TO service_role;

-- Grant permissions for webhook_logs table
GRANT ALL ON webhook_logs TO authenticated;
GRANT ALL ON webhook_logs TO service_role;

-- Grant permissions for user_prompt_progress table
GRANT SELECT, UPDATE ON user_prompt_progress TO authenticated;
GRANT ALL ON user_prompt_progress TO service_role;

-- Community Board Tables
-- Create community_posts table
CREATE TABLE IF NOT EXISTS community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  user_name TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  post_type TEXT NOT NULL DEFAULT 'discussion' CHECK (post_type IN ('discussion', 'question', 'story', 'announcement')),
  character_id TEXT, -- Optional: related to a specific fairy tale character
  likes_count INTEGER DEFAULT 0,
  replies_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create community_replies table
CREATE TABLE IF NOT EXISTS community_replies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  user_name TEXT,
  content TEXT NOT NULL,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create community_likes table for tracking likes
CREATE TABLE IF NOT EXISTS community_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  target_type TEXT NOT NULL CHECK (target_type IN ('post', 'reply')),
  target_id UUID NOT NULL, -- References either post_id or reply_id
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_email, target_type, target_id)
);

-- Create indexes for community tables
CREATE INDEX IF NOT EXISTS idx_community_posts_user_id ON community_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_community_posts_user_email ON community_posts(user_email);
CREATE INDEX IF NOT EXISTS idx_community_posts_character ON community_posts(character_id);
CREATE INDEX IF NOT EXISTS idx_community_posts_type ON community_posts(post_type);
CREATE INDEX IF NOT EXISTS idx_community_posts_created_at ON community_posts(created_at);
CREATE INDEX IF NOT EXISTS idx_community_posts_pinned ON community_posts(is_pinned);

CREATE INDEX IF NOT EXISTS idx_community_replies_post_id ON community_replies(post_id);
CREATE INDEX IF NOT EXISTS idx_community_replies_user_id ON community_replies(user_id);
CREATE INDEX IF NOT EXISTS idx_community_replies_created_at ON community_replies(created_at);

CREATE INDEX IF NOT EXISTS idx_community_likes_user_email ON community_likes(user_email);
CREATE INDEX IF NOT EXISTS idx_community_likes_target ON community_likes(target_type, target_id);

-- Enable Row Level Security for community tables
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_likes ENABLE ROW LEVEL SECURITY;

-- Create policies for community_posts
CREATE POLICY "Anyone can view community posts" ON community_posts
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create posts" ON community_posts
  FOR INSERT WITH CHECK (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Users can update own posts" ON community_posts
  FOR UPDATE USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Users can delete own posts" ON community_posts
  FOR DELETE USING (auth.jwt() ->> 'email' = user_email);

-- Create policies for community_replies
CREATE POLICY "Anyone can view community replies" ON community_replies
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create replies" ON community_replies
  FOR INSERT WITH CHECK (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Users can update own replies" ON community_replies
  FOR UPDATE USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Users can delete own replies" ON community_replies
  FOR DELETE USING (auth.jwt() ->> 'email' = user_email);

-- Create policies for community_likes
CREATE POLICY "Anyone can view community likes" ON community_likes
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage own likes" ON community_likes
  FOR ALL USING (auth.jwt() ->> 'email' = user_email);

-- Create triggers for community tables
CREATE TRIGGER update_community_posts_updated_at
  BEFORE UPDATE ON community_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_community_replies_updated_at
  BEFORE UPDATE ON community_replies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create function to update post reply count
CREATE OR REPLACE FUNCTION update_post_reply_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE community_posts 
    SET replies_count = replies_count + 1 
    WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE community_posts 
    SET replies_count = replies_count - 1 
    WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ language 'plpgsql';

-- Create function to update post like count
CREATE OR REPLACE FUNCTION update_post_like_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.target_type = 'post' THEN
      UPDATE community_posts 
      SET likes_count = likes_count + 1 
      WHERE id = NEW.target_id;
    ELSIF NEW.target_type = 'reply' THEN
      UPDATE community_replies 
      SET likes_count = likes_count + 1 
      WHERE id = NEW.target_id;
    END IF;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    IF OLD.target_type = 'post' THEN
      UPDATE community_posts 
      SET likes_count = likes_count - 1 
      WHERE id = OLD.target_id;
    ELSIF OLD.target_type = 'reply' THEN
      UPDATE community_replies 
      SET likes_count = likes_count - 1 
      WHERE id = OLD.target_id;
    END IF;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ language 'plpgsql';

-- Create triggers for automatic counts
CREATE TRIGGER update_reply_count
  AFTER INSERT OR DELETE ON community_replies
  FOR EACH ROW
  EXECUTE FUNCTION update_post_reply_count();

CREATE TRIGGER update_like_count
  AFTER INSERT OR DELETE ON community_likes
  FOR EACH ROW
  EXECUTE FUNCTION update_post_like_count();

-- Grant permissions for community tables
GRANT SELECT ON community_posts TO authenticated;
GRANT INSERT, UPDATE, DELETE ON community_posts TO authenticated;
GRANT ALL ON community_posts TO service_role;

GRANT SELECT ON community_replies TO authenticated;
GRANT INSERT, UPDATE, DELETE ON community_replies TO authenticated;
GRANT ALL ON community_replies TO service_role;

GRANT SELECT ON community_likes TO authenticated;
GRANT INSERT, UPDATE, DELETE ON community_likes TO authenticated;
GRANT ALL ON community_likes TO service_role;

-- Create a view for community posts with user info
CREATE OR REPLACE VIEW community_posts_view AS
SELECT 
  cp.*,
  COALESCE(cp.user_name, 'Anonymous') as display_name,
  COUNT(cr.id) as actual_replies_count
FROM community_posts cp
LEFT JOIN community_replies cr ON cp.id = cr.post_id
GROUP BY cp.id, cp.user_id, cp.user_email, cp.user_name, cp.title, cp.content, cp.post_type, cp.character_id, cp.likes_count, cp.replies_count, cp.is_pinned, cp.is_locked, cp.created_at, cp.updated_at
ORDER BY cp.is_pinned DESC, cp.created_at DESC;
