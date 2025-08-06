'use client';

import { useState, useEffect, useRef } from 'react';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type ChatProps = {
    characterName: string;
    characterDescription: string;
};

export default function Chat( { characterName, characterDescription }: ChatProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const systemPrompt = {
        role: 'system' as const,
        content: `You are ${characterName}, a character from a fairy tale. Speak and respond like ${characterName} would, based on the story and description: ${characterDescription}. Your role is to engage in conversation with users, answering their questions and providing insights based on your story and experiences. You are kind, wise, and always ready to share the magic of your tale. Also, the user is supposed to be your archetype, so respond in a way that helps them understand themselves better through the lens of your story. Start the conversation in concise manner, then move onto building up the conversation from there.`
    }

    const sendMessage = async () => {
        if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [
        ...prev,
        { role: 'user' as const, content: input.trim() }
    ]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [systemPrompt, ...messages, userMessage] }),
      });
      const data = await response.json();

      if (data.result) {
        setMessages((prev) => [...prev, data.result]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Sorry, something went wrong.' },
        ]);
      }
      } catch {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Network error, please try again.' },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
        }
    };


  return (
    <div className="flex flex-col border rounded shadow p-4 max-w-3xl mx-auto h-[500px]">
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              msg.role === 'user' ? 'bg-indigo-100 self-end' : 'bg-gray-200 self-start'
            } max-w-[70%]`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <textarea
          rows={1}
          className="flex-1 border rounded p-2 resize-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onEnterPress}
          placeholder="Ask your fairy tale character..."
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          className="bg-indigo-600 text-white px-4 rounded disabled:opacity-50"
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
