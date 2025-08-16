import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Sparkles, BookOpen, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-amber-700" />
          <span className="text-2xl font-bold text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
            Know Your Tale
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-amber-700 hover:text-amber-900 transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors storybook-shadow">
                Get Started
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/characters" className="px-4 py-2 text-amber-700 hover:text-amber-900 transition-colors">
              Characters
            </Link>
            <Link href="/profile" className="px-4 py-2 text-amber-700 hover:text-amber-900 transition-colors">
              Profile
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Sparkles className="h-16 w-16 text-amber-500 animate-pulse" />
              <div className="absolute inset-0 h-16 w-16 text-yellow-400 animate-ping opacity-20">
                <Sparkles className="h-full w-full" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 enchanted-text" style={{ fontFamily: 'Playfair Display' }}>
            What Type of Fairy Tale Character Are You?
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-800 mb-12 leading-relaxed max-w-3xl mx-auto">
            Step into a magical world where you can chat with beloved fairy tale characters. 
            Discover your inner character and engage in enchanting conversations powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-lg font-semibold rounded-full hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 storybook-shadow">
                  <MessageCircle className="h-5 w-5" />
                  <span>Start Your Journey</span>
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="px-8 py-4 border-2 border-amber-600 text-amber-700 text-lg font-semibold rounded-full hover:bg-amber-50 transition-colors">
                  Continue Your Tale
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/characters">
                <button className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-lg font-semibold rounded-full hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 storybook-shadow">
                  <MessageCircle className="h-5 w-5" />
                  <span>Choose Your Character</span>
                </button>
              </Link>
            </SignedIn>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl storybook-shadow">
              <div className="h-12 w-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                Discover Your Character
              </h3>
              <p className="text-amber-700">
                Choose from classic fairy tale characters like Cinderella, Red Riding Hood, and Prince Charming.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl storybook-shadow">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                AI-Powered Conversations
              </h3>
              <p className="text-amber-700">
                Engage in realistic, immersive chats with characters that truly understand their personalities.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl storybook-shadow">
              <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                Your Personal Storybook
              </h3>
              <p className="text-amber-700">
                Save your conversations and build relationships with your favorite fairy tale friends.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-amber-600">
        <p>&copy; 2024 Know Your Tale. Made with magic and code.</p>
      </footer>
    </div>
  );
}
