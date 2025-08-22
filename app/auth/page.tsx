import Auth from '@/components/auth';

export default function AuthPage() {
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
        <h1 className="storybook-title text-4xl mb-6">Authentication</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-lg mb-8">
          Sign in to your account or create a new one to continue your magical journey
        </p>
        <div className="magical-sparkle">✨</div>
      </section>

      <div className="max-w-md mx-auto">
        <Auth />
      </div>
    </main>
  );
}
