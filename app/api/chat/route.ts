import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages, characterId } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Get the last user message
    const lastUserMessage = messages.filter(msg => msg.role === 'user').pop();
    
    if (!lastUserMessage) {
      return NextResponse.json(
        { error: 'No user message found' },
        { status: 400 }
      );
    }

    // Mock AI response for testing
    const mockResponses = {
      'alice': "Oh, what a curious question! *adjusts her blue dress* I do love exploring new places and meeting interesting people. What brings you to Wonderland today?",
      'cinderella': "My dear friend, I believe in the power of kindness and never giving up on your dreams. What's troubling your heart today?",
      'snow-white': "Hello there! *smiles warmly* I've learned that true beauty comes from within and that friendship can overcome any obstacle. How are you feeling?",
      'beauty': "Greetings, traveler! I've discovered that love and understanding can transform even the most difficult situations. What would you like to discuss?",
      'default': "What a wonderful question! I'd love to hear more about your thoughts and feelings. Tell me, what's on your mind today?"
    };

    const characterKey = characterId?.split('-')[0] || 'default';
    const response = mockResponses[characterKey as keyof typeof mockResponses] || mockResponses.default;

    return NextResponse.json({ 
      result: {
        role: 'assistant',
        content: response
      }
    });
  } catch (error) {
    console.error('Chat API error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
