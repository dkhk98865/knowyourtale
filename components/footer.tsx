'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 parchment-bg border-t-2 border-accent-brown">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="magical-sparkle">📚</div>
              <h3 className="storybook-title text-xl">Know Your Tale</h3>
              <div className="magical-sparkle">✨</div>
            </div>
            <p className="text-gray-600 text-sm">
              Discover your fairy tale personality type and embark on magical adventures with beloved characters.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="storybook-title text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm">
                🏠 Home
              </Link>
              <Link href="/select" className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm">
                🎭 Characters
              </Link>
              <Link href="/history" className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm">
                📚 History
              </Link>
              <Link href="/subscription" className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm">
                🗝️ Upgrade
              </Link>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="text-center md:text-left">
            <h4 className="storybook-title text-lg mb-4">Contact & Support</h4>
            <div className="space-y-2">
              <Link href="/contact" className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm">
                💌 Contact Us
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm">
                🔒 Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm">
                📜 Terms of Service
              </Link>
              <Link href="/refund-policy" className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm">
                💳 Refund Policy
              </Link>
              <a 
                href="mailto:knowyourtale@gmail.com" 
                className="block text-gray-600 hover:text-accent-brown transition-colors duration-200 text-sm"
              >
                📧 knowyourtale@gmail.com
              </a>
              <p className="text-gray-500 text-xs">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-accent-brown/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} Know Your Tale. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="magical-sparkle">🌟</div>
              <span className="text-gray-500 text-sm">Your magical journey awaits</span>
              <div className="magical-sparkle">💫</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
