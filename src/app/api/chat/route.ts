import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { openai, DEFAULT_MODEL, SYSTEM_PROMPT_PREFIX } from '@/lib/openai'
import { supabase } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { message, characterId, chatId } = await request.json()

    if (!message || !characterId) {
      return NextResponse.json({ error: 'Message and character ID are required' }, { status: 400 })
    }

    // Get character details
    const { data: character, error: characterError } = await supabase
      .from('characters')
      .select('*')
      .eq('id', characterId)
      .single()

    if (characterError || !character) {
      return NextResponse.json({ error: 'Character not found' }, { status: 404 })
    }

    // Get or create chat history
    let chat
    if (chatId) {
      const { data: existingChat, error: chatError } = await supabase
        .from('chats')
        .select('*')
        .eq('id', chatId)
        .eq('user_id', userId)
        .single()

      if (chatError || !existingChat) {
        return NextResponse.json({ error: 'Chat not found' }, { status: 404 })
      }
      chat = existingChat
    } else {
      // Create new chat
      const newChatId = uuidv4()
      const { data: newChat, error: createError } = await supabase
        .from('chats')
        .insert({
          id: newChatId,
          user_id: userId,
          character_id: characterId,
          messages: [],
          title: `Chat with ${character.name}`
        })
        .select()
        .single()

      if (createError || !newChat) {
        return NextResponse.json({ error: 'Failed to create chat' }, { status: 500 })
      }
      chat = newChat
    }

    // Prepare messages for OpenAI
    const systemPrompt = `${SYSTEM_PROMPT_PREFIX}\n\n${character.system_prompt}`
    const chatMessages = [
      { role: 'system' as const, content: systemPrompt },
      ...chat.messages,
      { role: 'user' as const, content: message }
    ]

    // Get AI response
    const completion = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: chatMessages,
      max_tokens: 500,
      temperature: 0.8,
    })

    const aiResponse = completion.choices[0]?.message?.content
    if (!aiResponse) {
      return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 })
    }

    // Update chat with new messages
    const newMessages = [
      ...chat.messages,
      { role: 'user', content: message, timestamp: new Date().toISOString() },
      { role: 'assistant', content: aiResponse, timestamp: new Date().toISOString() }
    ]

    const { error: updateError } = await supabase
      .from('chats')
      .update({ messages: newMessages })
      .eq('id', chat.id)

    if (updateError) {
      console.error('Error updating chat:', updateError)
      return NextResponse.json({ error: 'Failed to save chat' }, { status: 500 })
    }

    return NextResponse.json({
      response: aiResponse,
      chatId: chat.id
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
