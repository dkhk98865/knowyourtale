-- Fix SECURITY DEFINER issue with community_posts_view
-- Run this in your Supabase SQL editor to fix the Security Advisor warning

-- Drop the existing view with SECURITY DEFINER
DROP VIEW IF EXISTS community_posts_view;

-- Recreate the view (defaults to SECURITY INVOKER)
CREATE OR REPLACE VIEW community_posts_view AS
SELECT 
  cp.*,
  COALESCE(cp.user_name, 'Anonymous') as display_name,
  COUNT(cr.id) as actual_replies_count
FROM community_posts cp
LEFT JOIN community_replies cr ON cp.id = cr.post_id
GROUP BY cp.id, cp.user_id, cp.user_email, cp.user_name, cp.title, cp.content, cp.post_type, cp.character_id, cp.likes_count, cp.replies_count, cp.is_pinned, cp.is_locked, cp.created_at, cp.updated_at
ORDER BY cp.is_pinned DESC, cp.created_at DESC;

-- Grant permissions on the view
GRANT SELECT ON community_posts_view TO authenticated;
GRANT ALL ON community_posts_view TO service_role;

-- Verify the view was created successfully
SELECT 
  schemaname,
  viewname,
  definition
FROM pg_views 
WHERE viewname = 'community_posts_view';

-- Show view permissions
SELECT 
  grantee,
  privilege_type
FROM information_schema.role_table_grants 
WHERE table_name = 'community_posts_view';
