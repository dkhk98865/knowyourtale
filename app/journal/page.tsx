'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase-client';
import { JournalEntry, WeeklyPrompt } from '@/types/journal';
import { characters } from '@/types/characters';
import Link from 'next/link';
import SubscriptionAccessGate from '@/components/subscription-access-gate';
import { User } from '@supabase/supabase-js';
import { UserPromptProgressService, CurrentPrompt } from '@/lib/user-prompt-progress';

export default function JournalPage() {
  const [journals, setJournals] = useState<JournalEntry[]>([]);
  const [prompts, setPrompts] = useState<WeeklyPrompt[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState<CurrentPrompt | null>(null);
  const [userProgress, setUserProgress] = useState<{
    currentWeek: number;
    totalWeeks: number;
    characterName: string;
    isActive: boolean;
    nextPromptDate: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filters, setFilters] = useState({
    character_tags: '',
    entry_type: '',
    search: ''
  });

  const supabase = createClient();

  const fetchJournals = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('user_journals')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJournals(data || []);
    } catch (error) {
      console.error('Error fetching journals:', error);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  const fetchUserPrompt = useCallback(async (userId: string) => {
    try {
      const promptService = new UserPromptProgressService();
      const prompt = await promptService.getCurrentPrompt(userId);
      const progress = await promptService.getUserProgress(userId);
      
      setCurrentPrompt(prompt);
      setUserProgress(progress);
    } catch (error) {
      console.error('Error fetching user prompt:', error);
    }
  }, []);

  const fetchPrompts = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('weekly_prompts')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPrompts(data || []);
    } catch (error) {
      console.error('Error fetching prompts:', error);
    }
  }, [supabase]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (user) {
        fetchUserPrompt(user.id);
      }
    };

    checkUser();
    fetchJournals();
    fetchPrompts();
  }, [supabase, fetchJournals, fetchPrompts, fetchUserPrompt]);

  const filteredJournals = journals.filter(journal => {
    if (filters.character_tags && journal.character_tags.includes(filters.character_tags)) return true;
    if (filters.entry_type && journal.entry_type === filters.entry_type) return true;
    if (filters.search && (journal.title.toLowerCase().includes(filters.search.toLowerCase()) || 
                          journal.content.toLowerCase().includes(filters.search.toLowerCase()))) return true;
    return !filters.character_tags && !filters.entry_type && !filters.search;
  });

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="magical-sparkle text-4xl mb-6">✨</div>
          <h1 className="storybook-title text-4xl mb-6">Loading Your Journal...</h1>
        </div>
      </main>
    );
  }

  // Wrap the main content with subscription access gate
  return (
    <SubscriptionAccessGate user={user} featureName="Know Your Tale Journaling">
      <main className="max-w-6xl mx-auto px-4 py-12 relative">
        {/* Magical floating sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="magical-sparkle"></div>
          <div className="magical-sparkle"></div>
          <div className="magical-sparkle"></div>
          <div className="magical-sparkle"></div>
          <div className="magical-sparkle"></div>
          <div className="magical-sparkle"></div>
        </div>

        {/* Header Section */}
        <section className="text-center mb-16 parchment-content">
          <div className="magical-sparkle text-4xl mb-6">📖</div>
          <h1 className="storybook-title text-5xl mb-6">Your Fairy Tale Journal</h1>
          <div className="storybook-divider mb-6"></div>
          <p className="storybook-subtitle text-xl mb-8">
            Reflect on your personality insights, track your growth, and respond to weekly prompts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowCreateForm(true)}
              className="magical-button magical-glow"
            >
              ✍️ New Journal Entry
            </button>
            <Link href="/">
              <button className="magical-button">
                🏠 Back to Home
              </button>
            </Link>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-12">
          <div className="storybook-card page-turn p-6">
            <h2 className="storybook-subtitle text-2xl mb-4">Filter Your Entries</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Character
                </label>
                <select
                  value={filters.character_tags}
                  onChange={(e) => setFilters({ ...filters, character_tags: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                >
                  <option value="">All Characters</option>
                  {characters.map((character) => (
                    <option key={character.id} value={character.id}>
                      {character.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entry Type
                </label>
                <select
                  value={filters.entry_type}
                  onChange={(e) => setFilters({ ...filters, entry_type: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                >
                  <option value="">All Types</option>
                  <option value="personality_reflection">Personality Reflection</option>
                  <option value="prompt_response">Prompt Response</option>
                  <option value="growth_tracking">Growth Tracking</option>
                  <option value="general">General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search entries..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                />
            </div>
          </div>
        </div>
      </section>

        {/* Current User Prompt Section */}
        {currentPrompt && userProgress && (
          <section className="mb-12">
            <div className="storybook-card page-turn p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="magical-sparkle text-3xl mb-3">🌟</div>
                <h2 className="storybook-subtitle text-2xl mb-2">Your Weekly Character Prompt</h2>
                <div className="text-sm text-gray-600">
                  Week {userProgress.currentWeek} of {userProgress.totalWeeks} • {currentPrompt.characterName}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200 mb-4">
                <div className="flex items-center mb-4">
                  <img 
                    src={characters.find(c => c.id === currentPrompt.characterId)?.image} 
                    alt={currentPrompt.characterName}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{currentPrompt.characterName}</h3>
                    <p className="text-sm text-gray-600">{currentPrompt.description}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border-l-4 border-accent-gold">
                  <h4 className="font-semibold text-gray-800 mb-2">This Week's Reflection Prompt:</h4>
                  <p className="text-gray-700 leading-relaxed">{currentPrompt.prompt}</p>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="magical-button magical-glow bg-accent-gold hover:bg-yellow-600"
                >
                  ✍️ Respond to This Prompt
                </button>
              </div>
              
              {userProgress.nextPromptDate && (
                <div className="text-center mt-4 text-sm text-gray-500">
                  Next prompt available: {new Date(userProgress.nextPromptDate).toLocaleDateString()}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Weekly Prompts Section */}
        {prompts.length > 0 && (
          <section className="mb-12">
            <div className="storybook-card page-turn p-6">
              <h2 className="storybook-subtitle text-2xl mb-4">🌟 All Weekly Journaling Prompts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {prompts.slice(0, 4).map((prompt) => (
                  <div key={prompt.id} className="storybook-card p-4 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200">
                    <h3 className="font-semibold text-gray-800 mb-2">Week {prompt.week_number} Prompt</h3>
                    <p className="text-gray-600 text-sm mb-3">{prompt.prompt_text}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Week {prompt.week_number}</span>
                      <span>{prompt.character_id ? `For ${characters.find(c => c.id === prompt.character_id)?.name || prompt.character_id}` : 'General'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Journal Entries Section */}
        <section>
          <div className="storybook-card page-turn p-6">
            <h2 className="storybook-subtitle text-2xl mb-6">Your Journal Entries</h2>
            
            {filteredJournals.length > 0 ? (
              <div className="space-y-6">
                {filteredJournals.map((journal) => (
                  <div key={journal.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          <Link href={`/journal/${journal.id}`} className="hover:text-accent-gold transition-colors">
                            {journal.title}
                          </Link>
                        </h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <span>{new Date(journal.created_at).toLocaleDateString()}</span>
                          <span className="capitalize">{journal.entry_type.replace('_', ' ')}</span>
                          {journal.mood_rating && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              Mood: {journal.mood_rating}/10
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3 line-clamp-3">
                      {journal.content.length > 200 
                        ? `${journal.content.substring(0, 200)}...` 
                        : journal.content
                      }
                    </p>
                    
                    {journal.character_tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {journal.character_tags.map((tag) => {
                          const character = characters.find(c => c.id === tag);
                          return (
                            <span
                              key={tag}
                              className="text-xs bg-accent-gold/20 text-accent-gold px-2 py-1 rounded-full"
                            >
                              {character?.name || tag}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No journal entries yet</h3>
                <p className="text-gray-500 mb-4">Start your fairy tale journey by creating your first entry!</p>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="magical-button magical-glow"
                >
                  ✍️ Create Your First Entry
                </button>
              </div>
            )}
          </div>
        </section>
        {/* Create Journal Modal */}
        {showCreateForm && (
          <CreateJournalModal
            onClose={() => setShowCreateForm(false)}
            onSuccess={() => {
              setShowCreateForm(false);
              fetchJournals();
            }}
          />
        )}
      </main>
    </SubscriptionAccessGate>
  );

// Create Journal Modal Component
function CreateJournalModal({ onClose, onSuccess }: { 
  onClose: () => void; 
  onSuccess: () => void; 
}) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    character_tags: [] as string[],
    entry_type: 'general' as 'personality_reflection' | 'prompt_response' | 'growth_tracking' | 'general',
    mood_rating: undefined as number | undefined
  });
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('user_journals')
        .insert({
          user_id: user.id,
          ...formData
        });

      if (error) throw error;

      onSuccess();
    } catch (error) {
      console.error('Error creating journal entry:', error);
      alert('Failed to create journal entry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Create New Journal Entry</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                placeholder="Give your entry a meaningful title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                required
                rows={6}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                placeholder="Write your thoughts, reflections, or responses..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Related Characters
              </label>
              <div className="grid grid-cols-3 gap-2">
                {characters.map((character) => (
                  <label key={character.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.character_tags.includes(character.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            character_tags: [...formData.character_tags, character.id]
                          });
                        } else {
                          setFormData({
                            ...formData,
                            character_tags: formData.character_tags.filter(tag => tag !== character.id)
                          });
                        }
                      }}
                      className="rounded border-gray-300 text-accent-gold focus:ring-accent-gold"
                    />
                    <span className="text-sm text-gray-700">{character.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entry Type *
                </label>
                <select
                  required
                  value={formData.entry_type}
                  onChange={(e) => setFormData({ ...formData, entry_type: e.target.value as 'personality_reflection' | 'prompt_response' | 'growth_tracking' | 'general' })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                >
                  <option value="general">General Reflection</option>
                  <option value="personality_reflection">Personality Reflection</option>
                  <option value="prompt_response">Prompt Response</option>
                  <option value="growth_tracking">Growth Tracking</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mood Rating (1-10)
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.mood_rating || ''}
                  onChange={(e) => setFormData({ ...formData, mood_rating: e.target.value ? parseInt(e.target.value) : undefined })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="magical-button magical-glow disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Entry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
}
