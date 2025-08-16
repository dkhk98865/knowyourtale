'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { BookOpen, MessageCircle, Heart, Sparkles } from 'lucide-react'
import { Character } from '@/types/database'
import { motion } from 'framer-motion'

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchCharacters()
  }, [])

  const fetchCharacters = async () => {
    try {
      const response = await fetch('/api/characters')
      if (!response.ok) {
        throw new Error('Failed to fetch characters')
      }
      const data = await response.json()
      setCharacters(data)
    } catch (err) {
      console.error('Error fetching characters:', err)
      setError('Failed to load characters. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const startChat = (characterId: string) => {
    router.push(`/chat?character=${characterId}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="h-16 w-16 text-amber-500 animate-spin mx-auto mb-4" />
          <p className="text-xl text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
            Loading magical characters...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl storybook-shadow">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchCharacters}
            className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-amber-700" />
          <span className="text-2xl font-bold text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
            Know Your Tale
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link href="/profile" className="px-4 py-2 text-amber-700 hover:text-amber-900 transition-colors">
            Profile
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 enchanted-text" style={{ fontFamily: 'Playfair Display' }}>
            Choose Your Character
          </h1>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Select a fairy tale character to begin your magical conversation. Each character has their own unique personality and story to share.
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl storybook-shadow hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => startChat(character.id)}
            >
              <div className="relative h-64 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                {/* Placeholder for character image */}
                <div className="text-6xl">
                  {character.name === 'Cinderella' && '👑'}
                  {character.name === 'Red Riding Hood' && '🧺'}
                  {character.name === 'Prince Charming' && '🤴'}
                  {character.name === 'Snow White' && '🍎'}
                  {character.name === 'Goldilocks' && '🐻'}
                  {character.name === 'The Fairy Godmother' && '🧚‍♀️'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Heart className="h-6 w-6 text-white/80 hover:text-red-400 transition-colors" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  {character.name}
                </h3>
                <p className="text-amber-700 mb-4 text-sm leading-relaxed">
                  {character.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-amber-600 mb-2 font-semibold">Story Origin:</p>
                  <p className="text-sm text-amber-700">{character.story_origin}</p>
                </div>

                {character.personality_traits && character.personality_traits.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-amber-600 mb-2 font-semibold">Personality:</p>
                    <div className="flex flex-wrap gap-1">
                      {character.personality_traits.slice(0, 3).map((trait, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs"
                        >
                          {trait}
                        </span>
                      ))}
                      {character.personality_traits.length > 3 && (
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                          +{character.personality_traits.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <button 
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full hover:from-amber-700 hover:to-orange-700 transform group-hover:scale-105 transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    startChat(character.id)
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Start Chatting</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {characters.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-xl text-amber-700">No characters available at the moment.</p>
          </div>
        )}
      </main>
    </div>
  )
}
