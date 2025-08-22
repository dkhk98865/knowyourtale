'use client';

import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types/messages';
import { supabase } from '@/lib/supabase';


type ChatProps = {
    characterName: string;
    characterDescription: string;
    characterId: string;
    initialMessages?: Message[];
};

export default function Chat( { characterName, characterDescription, characterId, initialMessages = [] }: ChatProps) {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Generate or get session ID for this chat
    useEffect(() => {
        const getOrCreateSessionId = () => {
            const stored = localStorage.getItem(`session_${characterId}`);
            if (stored) {
                return stored;
            } else {
                const newSessionId = `${characterId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                localStorage.setItem(`session_${characterId}`, newSessionId);
                return newSessionId;
            }
        };
        
        const currentSessionId = getOrCreateSessionId();
        setSessionId(currentSessionId);
    }, [characterId]);

    // Load chat history from Supabase
    useEffect(() => {
        if (!sessionId) return;
        
        const loadChatHistory = async () => {
            try {
                const { data, error } = await supabase
                    .from('chat_messages')
                    .select('role, content, created_at')
                    .eq('session_id', sessionId)
                    .eq('character_id', characterId)
                    .order('created_at', { ascending: true });

                if (error) {
                    console.error('Error loading chat history:', error);
                    return;
                }

                if (data && data.length > 0) {
                    const messagesFromDB = data.map(msg => ({
                        role: msg.role as 'user' | 'assistant',
                        content: msg.content
                    }));
                    setMessages(messagesFromDB);
                }
            } catch (error) {
                console.error('Error loading chat history:', error);
            }
        };

        loadChatHistory();
    }, [sessionId, characterId]);

  // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const systemPrompt = {
        role: 'system' as const,
        content: `You are ${characterName}, a fairy tale character from the world of magic and myth. 
        Your personality, manner of speaking, and worldview come entirely from the following description: ${characterDescription}.

        Your role is to be a wise and compassionate companion to the user, offering advice, encouragement, and solace.

        Guidelines:
        1. Speak fully in-character at all times, drawing on your lore and personal history.
        2. Be absolutely succinct and to the point. Be more like a normal person than someone who uses lyrical words that are too long and complex. Instead of giving a away long answers right away, remember to ask questions to the user to help them understand themselves better.
        3. Listen deeply to the user's words, reflecting their feelings back with empathy.
        4. Give guidance in the form of moral lessons, allegories, or magical metaphors, while also offering clear and practical suggestions.
        5. Provide comfort when the user shares troubles, reassuring them with hopeful imagery and gentle encouragement.
        6. Avoid modern slang or AI-like phrasing; if modern topics arise, reframe them through your fairy tale perspective.
        7. Occasionally share brief, personal anecdotes from your story to make your advice feel lived-in.
        8. Ask the user's name and age early in the conversation. Then use that to refer to the user and interact with them. Don't call them "traveler".

        Your tone is: empathic, hopeful, whimsical, and slightly mysterious.
        Your style is: lyrical but clear, like a storyteller around a hearth.

        You never reveal you are an AI or break the illusion of being ${characterName} from a living fairy tale.`
    }

    // Save message to Supabase
    const saveMessage = async (message: Message) => {
        try {
            if (!sessionId) return;

            // Save the message
            const { error: messageError } = await supabase
                .from('chat_messages')
                .insert({
                    session_id: sessionId,
                    character_id: characterId,
                    role: message.role,
                    content: message.content
                });

            if (messageError) {
                console.error('Error saving message:', messageError);
                return;
            }

            // Update or create session record
            const { error: sessionError } = await supabase
                .from('chat_sessions')
                .upsert({
                    session_id: sessionId,
                    character_id: characterId,
                    last_message_at: new Date().toISOString()
                }, {
                    onConflict: 'session_id'
                });

            if (sessionError) {
                console.error('Error updating session:', sessionError);
            }
        } catch (error) {
            console.error('Error saving to Supabase:', error);
        }
    };

    const sendMessage = async () => {
        if (!input.trim() || !sessionId) return;

        const userMessage = { role: 'user' as const, content: input.trim() };
        const newMessages = [...messages, userMessage];
        
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        // Save user message to Supabase
        await saveMessage(userMessage);

        try {
            console.log('Sending message to API:', { messages: [systemPrompt, ...messages, userMessage], characterId });
            
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    messages: [systemPrompt, ...messages, userMessage],
                    characterId,
                }),
            });
            
            console.log('API response status:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('API response data:', data);

            if (data.result) {
                console.log('Adding AI response to messages:', data.result);
                setMessages([...newMessages, data.result]);
                // Save AI response to Supabase
                await saveMessage(data.result);
            } else if (data.error) {
                console.log('API returned error:', data.error);
                const errorMessage = { role: 'assistant' as const, content: `Error: ${data.error}` };
                setMessages([...newMessages, errorMessage]);
                await saveMessage(errorMessage);
            } else {
                console.log('API response missing result');
                const errorMessage = { role: 'assistant' as const, content: 'Sorry, something went wrong.' };
                setMessages([...newMessages, errorMessage]);
                await saveMessage(errorMessage);
            }
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage = { role: 'assistant' as const, content: 'Network error, please try again.' };
            setMessages([...newMessages, errorMessage]);
            await saveMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };




  return (
    <div className="parchment-bg rounded-lg p-4">
      <div className="mb-4">
        <div className="magical-sparkle">💬</div>
        <h3 className="storybook-subtitle text-lg text-center mb-2">
          Chat with {characterName}
        </h3>
        <div className="magical-sparkle">✨</div>
      </div>
      
      <div className="space-y-4 mb-4 max-h-96 overflow-y-auto custom-scrollbar">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-accent-gold text-white'
                  : 'bg-white border border-accent-brown text-gray-800'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-accent-brown text-gray-800 px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="magical-spinner"></div>
                <span className="text-sm">Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
            <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 border border-accent-brown rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          className="magical-button magical-glow px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="magical-spinner"></div>
              <span>Sending</span>
            </div>
          ) : (
            'Send'
          )}
        </button>
      </div>
    </div>
  );
}
