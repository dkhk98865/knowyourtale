'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase-client';
import { JournalEntry, WeeklyPrompt } from '@/types/journal';
import { characters } from '@/types/characters';
import Link from 'next/link';

export default function JournalPage() {
  const [journals, setJournals] = useState<JournalEntry[]>([]);
  const [prompts, setPrompts] = useState<WeeklyPrompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filters, setFilters] = useState({
    character_tags: '',
    entry_type: '',
    search: ''
  });

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    checkUser();
    fetchJournals();
    fetchPrompts();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const fetchJournals = async () => {
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
  };

  const fetchPrompts = async () => {
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
  };

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

  if (!user) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="text-6xl mb-6">🔐</div>
          <h1 className="storybook-title text-4xl mb-6">Sign In Required</h1>
          <p className="storybook-subtitle text-xl mb-8">
            Please sign in using the button in the top right corner to access your fairy tale journal.
          </p>
          <div className="magical-sparkle">✨</div>
          <Link href="/">
            <button className="magical-button magical-glow mt-6">
              🏠 Return Home
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
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

      {/* Weekly Prompts Section */}
      {prompts.length > 0 && (
        <section className="mb-12">
          <div className="storybook-card page-turn p-6">
            <h2 className="storybook-subtitle text-2xl mb-4">🌟 Weekly Journaling Prompts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {prompts.slice(0, 4).map((prompt) => {
                const character = characters.find(c => c.id === prompt.character_id);
                return (
                  <div key={prompt.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-blue-800 bg-blue-100 px-2 py-1 rounded">
                        {character?.name || 'Unknown Character'}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{prompt.prompt_text}</p>
                    <button
                      onClick={() => {
                        setShowCreateForm(true);
                        // You could pre-populate the form with this prompt
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      ✍️ Write about this →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Journal Entries Section */}
      <section>
        <div className="storybook-card page-turn p-6">
          <h2 className="storybook-subtitle text-2xl mb-6">Your Journal Entries</h2>
          
          {filteredJournals.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No journal entries yet</h3>
              <p className="text-gray-600 mb-6">Start your fairy tale journey by creating your first journal entry!</p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="magical-button magical-glow"
              >
                ✍️ Create Your First Entry
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJournals.map((journal) => (
                <div key={journal.id} className="bg-white/60 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{journal.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        {new Date(journal.created_at).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => router.push(`/journal/${journal.id}`)}
                        className="text-accent-gold hover:text-accent-gold-dark text-sm font-medium"
                      >
                        ✏️ Edit
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {journal.content.length > 200 
                      ? `${journal.content.substring(0, 200)}...` 
                      : journal.content
                    }
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
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
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {journal.entry_type.replace('_', ' ')}
                      </span>
                    </div>
                    
                    {journal.mood_rating && (
                      <div className="text-sm text-gray-600">
                        Mood: {journal.mood_rating}/10
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Create Journal Entry Modal */}
      {showCreateForm && (
        <CreateJournalModal
          onClose={() => setShowCreateForm(false)}
          onSuccess={() => {
            setShowCreateForm(false);
            fetchJournals();
          }}
          prompts={prompts}
        />
      )}
    </main>
  );
}

// Create Journal Modal Component
function CreateJournalModal({ onClose, onSuccess, prompts }: { 
  onClose: () => void; 
  onSuccess: () => void; 
  prompts: WeeklyPrompt[];
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
