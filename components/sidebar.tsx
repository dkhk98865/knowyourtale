'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: '🏠 Home', href: '/', icon: '🏠' },
    { name: '🎭 Characters', href: '/select', icon: '🎭' },
    { name: '📚 History', href: '/history', icon: '📚' },
    { name: '⚙️ Settings', href: '/settings', icon: '⚙️' },
    { name: '💌 Contact', href: '/contact', icon: '💌' },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-br from-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-700 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white"
        style={{
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.8), 0 4px 8px rgba(0, 0, 0, 0.3)'
        }}
        aria-label="Toggle sidebar"
      >
        <span className="text-lg font-bold drop-shadow-lg">
          {isOpen ? '✕' : '☰'}
        </span>
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="parchment-bg min-h-screen w-64 p-6 shadow-lg">
          <div className="mb-8">
            <div className="magical-sparkle">📚</div>
            <h1 className="storybook-title text-2xl text-center mb-2">Know Your Tale</h1>
            <div className="storybook-divider"></div>
            <div className="magical-sparkle">✨</div>
          </div>
          
          <nav className="space-y-4">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{page.icon}</span>
                <span className="group-hover:text-accent-brown transition-colors duration-200">{page.name.split(' ').slice(1).join(' ')}</span>
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-8">
            <div className="storybook-divider mb-4"></div>
            <div className="text-center">
              <div className="magical-sparkle">🌟</div>
              <p className="text-sm text-gray-600">Your magical journey awaits</p>
              <div className="magical-sparkle">💫</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
