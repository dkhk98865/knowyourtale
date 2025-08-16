'use client'

import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { BookOpen, MessageCircle, Heart, ArrowRight } from 'lucide-react'

export default function ProfilePage() {
  const { user } = useUser()

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
          <Link href="/characters" className="px-4 py-2 text-amber-700 hover:text-amber-900 transition-colors">
            Characters
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl storybook-shadow p-8 mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-3xl text-white">
                {user?.firstName?.charAt(0) || user?.emailAddresses[0]?.emailAddress.charAt(0) || '?'}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  {user?.firstName && user?.lastName 
                    ? `${user.firstName} ${user.lastName}` 
                    : user?.emailAddresses[0]?.emailAddress || 'Welcome!'}
                </h1>
                <p className="text-amber-600">Fairy Tale Adventurer</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/characters">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl storybook-shadow p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
                        Start New Chat
                      </h3>
                      <p className="text-amber-600">Choose a character to talk with</p>
                    </div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl storybook-shadow p-6 opacity-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
                      Favorite Characters
                    </h3>
                    <p className="text-amber-600">Coming Soon</p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Chat History Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl storybook-shadow p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Recent Conversations
            </h2>
            
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-xl text-amber-700 mb-4">Your storybook is waiting to be filled!</p>
              <p className="text-amber-600 mb-6">Start chatting with characters to see your conversation history here.</p>
              <Link href="/characters">
                <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-200 storybook-shadow">
                  Begin Your First Tale
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
