'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { createClient } from '@/lib/supabase-client';
import { JournalEntry, UpdateJournalEntry } from '@/types/journal';
import { characters } from '@/types/characters';
import Link from 'next/link';
import SubscriptionAccessGate from '@/components/subscription-access-gate';

export default function JournalEntryPage({ params }: { params: Promise<{ id: string }> }) {
  const [journal, setJournal] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<UpdateJournalEntry>({});
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const loadData = async () => {
      const { id } = await params;
      
      const checkUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      };

      const fetchJournal = async (id: string) => {
        try {
          const { data, error } = await supabase
            .from('user_journals')
            .select('*')
            .eq('id', id)
            .single();

          if (error) throw error;
          setJournal(data);
          setFormData({
            title: data.title,
            content: data.content,
            character_tags: data.character_tags,
            entry_type: data.entry_type,
            mood_rating: data.mood_rating
          });
        } catch (error) {
          console.error('Error fetching journal:', error);
          router.push('/journal');
        } finally {
          setLoading(false);
        }
      };

      await checkUser();
      await fetchJournal(id);
    };
    loadData();
  }, [params, supabase, router]);

  const handleSave = async () => {
    if (!journal) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('user_journals')
        .update(formData)
        .eq('id', journal.id);

      if (error) throw error;

      // Update local state
      setJournal({ ...journal, ...formData });
      setEditing(false);
    } catch (error) {
      console.error('Error updating journal:', error);
      alert('Failed to update journal entry. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!journal || !confirm('Are you sure you want to delete this journal entry? This action cannot be undone.')) {
      return;
    }

    setDeleting(true);
    try {
      const { error } = await supabase
        .from('user_journals')
        .delete()
        .eq('id', journal.id);

      if (error) throw error;

      router.push('/journal');
    } catch (error) {
      console.error('Error deleting journal:', error);
      alert('Failed to delete journal entry. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="magical-sparkle text-4xl mb-6">✨</div>
          <h1 className="storybook-title text-4xl mb-6">Loading Journal Entry...</h1>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="text-6xl mb-6">🔐</div>
          <h1 className="storybook-title text-4xl mb-6">Sign In Required</h1>
          <p className="storybook-subtitle text-xl mb-8">
            Please sign in using the button in the top right corner to access your journal entries.
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

  if (!journal) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="storybook-title text-4xl mb-6">Journal Entry Not Found</h1>
          <Link href="/journal">
            <button className="magical-button">
              ← Back to Journal
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <SubscriptionAccessGate user={user} featureName="Know Your Tale Journaling">
      <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/journal" className="text-accent-gold hover:text-accent-gold-dark mb-2 inline-block">
            ← Back to Journal
          </Link>
          <h1 className="storybook-title text-4xl">
            {editing ? 'Edit Journal Entry' : journal.title}
          </h1>
        </div>
        
        <div className="flex space-x-3">
          {!editing ? (
            <>
              <button
                onClick={() => setEditing(true)}
                className="magical-button"
              >
                ✏️ Edit
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 text-red-600 hover:text-red-800 border border-red-300 hover:border-red-400 rounded-lg transition-colors disabled:opacity-50"
              >
                {deleting ? 'Deleting...' : '🗑️ Delete'}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setEditing(false);
                  setFormData({
                    title: journal.title,
                    content: journal.content,
                    character_tags: journal.character_tags,
                    entry_type: journal.entry_type,
                    mood_rating: journal.mood_rating
                  });
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="magical-button magical-glow disabled:opacity-50"
              >
                {saving ? 'Saving...' : '💾 Save'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Journal Content */}
      <div className="storybook-card page-turn p-8">
        {editing ? (
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                required
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                required
                rows={12}
                value={formData.content || ''}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
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
                      checked={formData.character_tags?.includes(character.id) || false}
                      onChange={(e) => {
                        const currentTags = formData.character_tags || [];
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            character_tags: [...currentTags, character.id]
                          });
                        } else {
                          setFormData({
                            ...formData,
                            character_tags: currentTags.filter(tag => tag !== character.id)
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
                  value={formData.entry_type || ''}
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
          </form>
        ) : (
          <div className="space-y-6">
            {/* Entry Metadata */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  Created: {new Date(journal.created_at).toLocaleDateString()}
                </span>
                {journal.updated_at !== journal.created_at && (
                  <span className="text-sm text-gray-500">
                    Updated: {new Date(journal.updated_at).toLocaleDateString()}
                  </span>
                )}
                {journal.mood_rating && (
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Mood: {journal.mood_rating}/10
                  </span>
                )}
              </div>
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {journal.entry_type.replace('_', ' ')}
              </span>
            </div>

            {/* Character Tags */}
            {journal.character_tags.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Related Characters:</h3>
                <div className="flex flex-wrap gap-2">
                  {journal.character_tags.map((tag) => {
                    const character = characters.find(c => c.id === tag);
                    return (
                      <span
                        key={tag}
                        className="text-sm bg-accent-gold/20 text-accent-gold px-3 py-1 rounded-full"
                      >
                        {character?.name || tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Content */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Content:</h3>
              <div className="prose max-w-none">
                <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                  {journal.content}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

            {/* Navigation */}
      <div className="mt-8 text-center">
        <Link href="/journal">
          <button className="magical-button">
            📖 Back to Journal
          </button>
        </Link>
      </div>
      </main>
    </SubscriptionAccessGate>
  );
}
