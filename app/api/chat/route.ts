import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // or your preferred model
      messages,
    });

    return NextResponse.json({ result: completion.choices[0].message });
  } catch (error) {
    console.error('OpenAI error:', error);
    return NextResponse.json({ error: 'OpenAI request failed' }, { status: 500 });
  }
}
