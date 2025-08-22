// app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 relative">
      {/* Magical floating sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
      </div>

      <section className="text-center mb-16 parchment-content">
        <h1 className="storybook-title text-4xl mb-6">Get in Touch</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-lg mb-8">
          Have questions about your magical journey? We&apos;d love to hear from you!
        </p>
        <Link href="/">
          <button className="magical-button magical-glow">
            🏠 Back to Home 🏠
          </button>
        </Link>
      </section>

      <div className="bg-white rounded-lg shadow-lg p-8 storybook-card">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">💌</div>
          <h2 className="storybook-title text-2xl mb-4">Contact Information</h2>
          <div className="storybook-divider"></div>
        </div>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-2xl">📧</span>
              <h3 className="storybook-title text-xl">Email</h3>
            </div>
            <a 
              href="mailto:knowyourtale@gmail.com" 
              className="text-accent-brown hover:text-accent-gold text-lg font-medium transition-colors duration-200 hover:underline"
            >
              knowyourtale@gmail.com
            </a>
            <p className="text-gray-600 mt-2">
              We typically respond within 24 hours
            </p>
          </div>

          <div className="storybook-divider"></div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-2xl">⏰</span>
              <h3 className="storybook-title text-xl">Response Time</h3>
            </div>
            <p className="text-gray-700">
              We&apos;re here to help with any questions about your fairy tale adventures, 
              subscription, or technical support needs.
            </p>
          </div>

          <div className="storybook-divider"></div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-2xl">🌟</span>
              <h3 className="storybook-title text-xl">What We Can Help With</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center space-x-2">
                <span className="text-accent-gold">✓</span>
                <span>Account & Subscription</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent-gold">✓</span>
                <span>Technical Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent-gold">✓</span>
                <span>Feature Requests</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent-gold">✓</span>
                <span>General Questions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <button className="magical-button magical-glow">
              🎭 Start Your Adventure 🎭
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
