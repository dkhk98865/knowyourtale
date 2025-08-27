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

-- Enable Row Level Security (RLS)
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_report_access ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Users can view own subscription" ON user_subscriptions;
DROP POLICY IF EXISTS "Service role can manage all subscriptions" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can view own report access" ON user_report_access;
DROP POLICY IF EXISTS "Users can update own report access" ON user_report_access;
DROP POLICY IF EXISTS "Service role can manage all report access" ON user_report_access;

-- Create policy to allow users to view their own subscription
CREATE POLICY "Users can view own subscription" ON user_subscriptions
  FOR SELECT USING (auth.jwt() ->> 'email' = user_email);

-- Create policy to allow service role to manage all subscriptions
CREATE POLICY "Service role can manage all subscriptions" ON user_subscriptions
  FOR ALL USING (auth.role() = 'service_role');

-- Create policies for user_report_access table
CREATE POLICY "Users can view own report access" ON user_report_access
  FOR SELECT USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Users can update own report access" ON user_report_access
  FOR UPDATE USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Service role can manage all report access" ON user_report_access
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
