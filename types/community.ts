export interface CommunityPost {
  id: string;
  title: string;
  content: string;
  post_type: 'discussion' | 'question' | 'story' | 'announcement';
  character_id?: string;
  user_id: string;
  user_email: string;
  user_name?: string;
  display_name: string;
  likes_count: number;
  replies_count: number;
  is_pinned: boolean;
  is_locked: boolean;
  created_at: string;
  updated_at: string;
}

export interface CommunityReply {
  id: string;
  post_id: string;
  content: string;
  user_id: string;
  user_email: string;
  user_name?: string;
  likes_count: number;
  created_at: string;
  updated_at: string;
}

export interface CommunityLike {
  id: string;
  user_id: string;
  user_email: string;
  target_type: 'post' | 'reply';
  target_id: string;
  created_at: string;
}

export interface CreatePostRequest {
  title: string;
  content: string;
  post_type: 'discussion' | 'question' | 'story' | 'announcement';
  character_id?: string;
}

export interface CreateReplyRequest {
  post_id: string;
  content: string;
}

export interface CreateLikeRequest {
  target_type: 'post' | 'reply';
  target_id: string;
}

export interface CommunityStats {
  total_posts: number;
  total_replies: number;
  total_likes: number;
  active_users: number;
}
