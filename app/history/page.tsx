// app/history/page.tsx
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabaseadmin';
import { characters } from '@/types/characters';
import Link from 'next/link';
import { Message } from '@/types/messages';

export default async function HistoryPage() {
  const { userId } = await auth();
  if (!userId) {
    return <div className="p-6 mt-20">Please sign in to view your chat history.</div>;
  }

  const { data, error } = await supabaseAdmin
    .from('messages')
    .select('role, content, character_id, id, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .returns<
      (Message & { character_id: string; id: string; created_at: string })[]
    >();

  if (error) {
    // More useful server logging than console.error(error)
    console.error('Supabase select error:', error.message);
    return <div className="p-6">Error loading messages.</div>;
  }

  const messages = data ?? [];

  // group by character_id
  const grouped = messages.reduce<Record<string, typeof messages>>((acc, m) => {
    (acc[m.character_id] ??= []).push(m);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">Your Chat History</h1>

      {Object.keys(grouped).length === 0 && (
        <p>You have no past conversations yet.</p>
      )}

      {Object.entries(grouped).map(([characterId, msgs]) => {
        const character = characters.find(c => c.id === characterId);

        return (
          <div key={characterId} className="mb-8 border rounded p-4 bg-white shadow">
            <h2 className="text-xl font-semibold mb-4">
              {character?.name ?? 'Unknown Character'}
            </h2>

            <div className="space-y-2 mb-4">
              {msgs.map(m => (
                <div
                  key={m.id}
                  className={`p-2 rounded ${
                    m.role === 'user' ? 'bg-indigo-100 text-right' : 'bg-gray-200 text-left'
                  }`}
                >
                  {m.content}
                </div>
              ))}
            </div>

            <Link
              href={{ pathname: `/story/${characterId}`, query: { fromHistory: 'true' } }}
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Continue Chat
            </Link>
          </div>
        );
      })}
    </div>
  );
}
