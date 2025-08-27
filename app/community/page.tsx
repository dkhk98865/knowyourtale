'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';
import { characters } from '@/types/characters';
import { CommunityPost, CommunityReply } from '@/types/community';



export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [supabase] = useState(() => createClient());
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null);
  const [replies, setReplies] = useState<CommunityReply[]>([]);
  const [loading, setLoading] = useState(true);
  const [postType, setPostType] = useState<'discussion' | 'question' | 'story' | 'announcement'>('discussion');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [replyContent, setReplyContent] = useState('');

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('community_posts_view')
        .select('*')
        .order('is_pinned', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    getSession();
    fetchPosts();
  }, [supabase]);

  const fetchReplies = async (postId: string) => {
    try {
      const { data, error } = await supabase
        .from('community_replies')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setReplies(data || []);
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  };

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !title.trim() || !content.trim()) return;

    try {
      const { error } = await supabase
        .from('community_posts')
        .insert({
          title: title.trim(),
          content: content.trim(),
          post_type: postType,
          character_id: selectedCharacter || null,
          user_email: user.email,
          user_name: user.user_metadata?.full_name || user.email?.split('@')[0]
        });

      if (error) throw error;

      setTitle('');
      setContent('');
      setSelectedCharacter('');
      setPostType('discussion');
      setShowCreateForm(false);
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const createReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !selectedPost || !replyContent.trim()) return;

    try {
      const { error } = await supabase
        .from('community_replies')
        .insert({
          post_id: selectedPost.id,
          content: replyContent.trim(),
          user_email: user.email,
          user_name: user.user_metadata?.full_name || user.email?.split('@')[0]
        });

      if (error) throw error;

      setReplyContent('');
      fetchReplies(selectedPost.id);
      fetchPosts(); // Refresh post counts
    } catch (error) {
      console.error('Error creating reply:', error);
    }
  };

  const toggleLike = async (postId: string) => {
    if (!user) return;

    try {
      const { data: existingLike } = await supabase
        .from('community_likes')
        .select('id')
        .eq('user_email', user.email)
        .eq('target_type', 'post')
        .eq('target_id', postId)
        .single();

      if (existingLike) {
        await supabase
          .from('community_likes')
          .delete()
          .eq('id', existingLike.id);
      } else {
        await supabase
          .from('community_likes')
          .insert({
            user_email: user.email,
            target_type: 'post',
            target_id: postId
          });
      }

      fetchPosts();
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const openPost = (post: CommunityPost) => {
    setSelectedPost(post);
    fetchReplies(post.id);
  };

  const closePost = () => {
    setSelectedPost(null);
    setReplies([]);
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'discussion': return '💬';
      case 'question': return '❓';
      case 'story': return '📖';
      case 'announcement': return '📢';
      default: return '💬';
    }
  };

  const getCharacterName = (characterId: string) => {
    const character = characters.find(c => c.id === characterId);
    return character?.name || characterId;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <div className="magical-sparkle text-4xl mb-4">✨</div>
          <p className="text-lg text-gray-600">Loading the magical community...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="magical-sparkle text-6xl mb-4">🌟</div>
          <h1 className="storybook-title text-4xl mb-2">Community Board</h1>
          <p className="text-lg text-gray-600">Share your fairy tale journey with fellow adventurers</p>
          <div className="magical-sparkle text-2xl mt-4">✨</div>
        </div>

        {/* Create Post Button */}
        {user && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              {showCreateForm ? 'Cancel' : 'Create New Post'} ✨
            </button>
          </div>
        )}

        {/* Create Post Form */}
        {showCreateForm && user && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl border border-amber-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Share Your Story</h3>
            <form onSubmit={createPost} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Post Type</label>
                  <select
                    value={postType}
                    onChange={(e) => setPostType(e.target.value as 'discussion' | 'question' | 'story' | 'announcement')}
                    className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="discussion">💬 Discussion</option>
                    <option value="question">❓ Question</option>
                    <option value="story">📖 Story</option>
                    <option value="announcement">📢 Announcement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Character (Optional)</label>
                  <select
                    value={selectedCharacter}
                    onChange={(e) => setSelectedCharacter(e.target.value)}
                    className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">No specific character</option>
                    {characters.map((char) => (
                      <option key={char.id} value={char.id}>{char.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your post title..."
                  className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Share your thoughts, questions, or stories..."
                  rows={4}
                  className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Post to Community ✨
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl cursor-pointer ${
                post.is_pinned ? 'border-yellow-400 bg-yellow-50/80' : 'border-amber-200'
              }`}
              onClick={() => openPost(post)}
            >
              {post.is_pinned && (
                <div className="flex items-center mb-3">
                  <span className="text-yellow-600 text-sm font-semibold">📌 Pinned Post</span>
                </div>
              )}
              
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getPostTypeIcon(post.post_type)}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>by {post.display_name}</span>
                      <span>•</span>
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      {post.character_id && (
                        <>
                          <span>•</span>
                          <span className="text-amber-600">📚 {getCharacterName(post.character_id)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(post.id);
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                      user ? 'hover:bg-amber-100' : 'cursor-not-allowed opacity-50'
                    }`}
                    disabled={!user}
                  >
                    <span className="text-lg">❤️</span>
                    <span className="text-sm font-medium">{post.likes_count}</span>
                  </button>
                  <div className="flex items-center space-x-2 px-3 py-2">
                    <span className="text-lg">💬</span>
                    <span className="text-sm font-medium">{post.replies_count}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  {getPostTypeIcon(post.post_type)} {post.post_type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Post Detail Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedPost.title}</h2>
                  <button
                    onClick={closePost}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="mb-6 p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{getPostTypeIcon(selectedPost.post_type)}</span>
                    <span className="text-sm text-gray-600">
                      by {selectedPost.display_name} • {new Date(selectedPost.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{selectedPost.content}</p>
                </div>

                {/* Replies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Replies ({replies.length})</h3>
                  <div className="space-y-4">
                    {replies.map((reply) => (
                      <div key={reply.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800">{reply.user_name || reply.user_email}</span>
                          <span className="text-sm text-gray-500">{new Date(reply.created_at).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700">{reply.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add Reply */}
                {user && (
                  <form onSubmit={createReply} className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Add a Reply</label>
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Share your thoughts..."
                      rows={3}
                      className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                      required
                    />
                    <div className="text-right">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        Reply ✨
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* No Posts Message */}
        {posts.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="magical-sparkle text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts yet</h3>
            <p className="text-gray-500">Be the first to share your fairy tale thoughts!</p>
          </div>
        )}
      </div>
    </div>
  );
}
