import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabaseadmin';

export const runtime = 'nodejs'; // ensure Node runtime

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { messages, characterId } = await req.json();
    if (!characterId) {
      console.error('Missing characterId');
      return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
    }

    const lastUserMsg = messages?.[messages.length - 1];
    if (!lastUserMsg?.content) {
      return NextResponse.json({ error: 'No user message content' }, { status: 400 });
    }

    const { error: insertUserErr } = await supabaseAdmin
      .from('messages')
      .insert({
        user_id: userId,
        character_id: characterId,
        role: 'user',
        content: lastUserMsg.content,
      });

    if (insertUserErr) console.error('Insert user message failed:', insertUserErr.message);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
    });

    const aiText =
      completion.choices?.[0]?.message?.content ??
      'Sorry, I could not generate a response.';

    const { error: insertAIErr } = await supabaseAdmin
      .from('messages')
      .insert({
        user_id: userId,
        character_id: characterId,
        role: 'assistant',
        content: aiText,
      });

    if (insertAIErr) console.error('Insert assistant message failed:', insertAIErr.message);

    return NextResponse.json({ result: { role: 'assistant', content: aiText } });
  } catch (err: any) {
    console.error('Chat route error:', err?.message || err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
