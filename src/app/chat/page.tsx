'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { BookOpen, Send, ArrowLeft, Sparkles } from 'lucide-react'
import { Character, ChatMessage } from '@/types/database'
import { motion, AnimatePresence } from 'framer-motion'

function ChatPageContent() {
  const [character, setCharacter] = useState<Character | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [chatId, setChatId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const router = useRouter()
  const characterId = searchParams.get('character')

  useEffect(() => {
    if (!characterId) {
      router.push('/characters')
      return
    }
    fetchCharacter()
  }, [characterId, router]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const fetchCharacter = async () => {
    try {
      const response = await fetch('/api/characters')
      if (!response.ok) {
        throw new Error('Failed to fetch characters')
      }
      const characters = await response.json()
      const selectedCharacter = characters.find((c: Character) => c.id === characterId)
      
      if (!selectedCharacter) {
        router.push('/characters')
        return
      }
      
      setCharacter(selectedCharacter)
      
      // Add welcome message
      const welcomeMessage: ChatMessage = {
        role: 'assistant',
        content: getWelcomeMessage(selectedCharacter.name),
        timestamp: new Date().toISOString()
      }
      setMessages([welcomeMessage])
      
    } catch (err) {
      console.error('Error fetching character:', err)
      setError('Failed to load character. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const getWelcomeMessage = (characterName: string): string => {
    const welcomeMessages: { [key: string]: string } = {
      'Cinderella': "Hello, dear friend! I'm so delighted to meet you. Please, sit with me by the fireplace and tell me about yourself. I'd love to hear your story! ✨",
      'Red Riding Hood': "Oh, hello there! I was just returning from Grandmother's house through the forest. What brings you to this magical place? I do hope you're staying safe on your journey! 🌲",
      'Prince Charming': "Greetings, noble friend! It's an honor to make your acquaintance. I was just thinking about the importance of following one's heart. What adventures have led you here today? ⚔️",
      'Snow White': "Hello, sweet friend! I'm so happy to meet you! I was just tending to my garden with some woodland friends. Would you like to share what's on your heart today? The birds tell me you seem lovely! 🍎",
      'Goldilocks': "Hi there! I was just exploring this wonderful place - everything here feels 'just right!' I'm so curious to learn about you. What's your favorite adventure you've been on? 🐻",
      'The Fairy Godmother': "Welcome, dear child! ✨ I sense something special about you. The magic in the air tells me you're here for a reason. What dreams are stirring in your heart today? Remember, with a little faith and kindness, anything is possible! 🪄"
    }
    
    return welcomeMessages[characterName] || `Hello! I'm ${characterName}, and I'm delighted to meet you. What would you like to talk about today?`
  }

  const sendMessage = async () => {
    if (!inputMessage.trim() || sending || !character) return

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setSending(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          characterId: character.id,
          chatId: chatId
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date().toISOString()
      }

      setMessages(prev => [...prev, assistantMessage])
      
      if (!chatId && data.chatId) {
        setChatId(data.chatId)
      }

    } catch (err) {
      console.error('Error sending message:', err)
      setError('Failed to send message. Please try again.')
      // Remove the user message on error
      setMessages(prev => prev.slice(0, -1))
    } finally {
      setSending(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="h-16 w-16 text-amber-500 animate-spin mx-auto mb-4" />
          <p className="text-xl text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
            Preparing your magical chat...
          </p>
        </div>
      </div>
    )
  }

  if (error && !character) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl storybook-shadow">
          <p className="text-red-600 mb-4">{error}</p>
          <Link href="/characters">
            <button className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">
              Back to Characters
            </button>
          </Link>
        </div>
      </div>
    )
  }

  if (!character) return null

  const getCharacterEmoji = (name: string) => {
    const emojis: { [key: string]: string } = {
      'Cinderella': '👑',
      'Red Riding Hood': '🧺',
      'Prince Charming': '🤴',
      'Snow White': '🍎',
      'Goldilocks': '🐻',
      'The Fairy Godmother': '🧚‍♀️'
    }
    return emojis[name] || '✨'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6 bg-white/50 backdrop-blur-sm border-b border-amber-200">
        <div className="flex items-center space-x-4">
          <Link href="/characters" className="p-2 hover:bg-amber-100 rounded-full transition-colors">
            <ArrowLeft className="h-6 w-6 text-amber-700" />
          </Link>
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{getCharacterEmoji(character.name)}</div>
            <div>
              <h1 className="text-xl font-bold text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
                {character.name}
              </h1>
              <p className="text-sm text-amber-600">{character.story_origin}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <BookOpen className="h-6 w-6 text-amber-700" />
            <span className="hidden md:block text-amber-800 font-semibold">Know Your Tale</span>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      {/* Chat Messages */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-3 rounded-2xl ${
                  message.role === 'user' 
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' 
                    : 'bg-white/80 backdrop-blur-sm text-amber-800 storybook-shadow'
                }`}>
                  {message.role === 'assistant' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl">{getCharacterEmoji(character.name)}</span>
                      <span className="text-sm font-semibold">{character.name}</span>
                    </div>
                  )}
                  <p className="leading-relaxed">{message.content}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {sending && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white/80 backdrop-blur-sm text-amber-800 storybook-shadow px-4 py-3 rounded-2xl max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">{getCharacterEmoji(character.name)}</span>
                  <span className="text-sm font-semibold">{character.name}</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 md:p-6 bg-white/50 backdrop-blur-sm border-t border-amber-200">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
              {error}
              <button 
                onClick={() => setError(null)}
                className="ml-2 text-red-800 hover:text-red-900 font-semibold"
              >
                ✕
              </button>
            </div>
          )}
          
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Chat with ${character.name}...`}
                className="w-full px-4 py-3 pr-12 rounded-2xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none resize-none bg-white/80 backdrop-blur-sm"
                rows={1}
                disabled={sending}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || sending}
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl hover:from-amber-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 storybook-shadow"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="h-16 w-16 text-amber-500 animate-spin mx-auto mb-4" />
          <p className="text-xl text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
            Preparing your magical chat...
          </p>
        </div>
      </div>
    }>
      <ChatPageContent />
    </Suspense>
  )
}
