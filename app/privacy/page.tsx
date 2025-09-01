"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="parchment-content">
        <div className="text-center mb-12">
          <div className="magical-sparkle">🔒</div>
          <h1 className="storybook-title">Privacy Policy</h1>
          <div className="storybook-divider"></div>
          <p className="storybook-subtitle">
            Your privacy is as precious as a fairy tale treasure
          </p>
          <div className="magical-sparkle">✨</div>
        </div>

        <div className="storybook-card page-turn p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to Know Your Tale (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our fairy tale personality assessment application.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Information We Collect</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Personal Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Account Information:</strong> When you create an account, we collect your email address and basic profile information through Supabase authentication services.</li>
              <li><strong>Usage Data:</strong> We collect information about how you interact with our app, including character selections, quiz responses, and feature usage.</li>
              <li><strong>Purchase Data:</strong> When you purchase personality reports or subscribe to our monthly plan, we collect payment information through Stripe.</li>
              <li><strong>Journal Entries:</strong> If you use our journaling features, we store your journal entries and responses to prompts.</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
              <li><strong>Usage Analytics:</strong> Page views, feature usage, and performance metrics through Vercel Analytics</li>
              <li><strong>Cookies and Similar Technologies:</strong> To enhance your experience and remember your preferences</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Provide Services:</strong> To deliver our fairy tale personality assessment and premium features</li>
              <li><strong>Process Purchases:</strong> To handle payments and provide access to purchased reports</li>
              <li><strong>Improve Experience:</strong> To enhance our app&apos;s functionality and user experience</li>
              <li><strong>Customer Support:</strong> To respond to your questions and provide assistance</li>
              <li><strong>Security:</strong> To protect against fraud and ensure account security</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Third-Party Services</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Supabase (Authentication & Database)</h3>
            <p className="mb-4">
              We use Supabase to handle user authentication, account management, and data storage. Supabase processes your login credentials, account information, and stores your quiz responses, journal entries, and purchase history. You can review Supabase&apos;s privacy practices at <a href="https://supabase.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>.
            </p>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Stripe (Payment Processing)</h3>
            <p className="mb-4">
              We use Stripe to process payments for personality reports and monthly subscriptions. Stripe handles your payment information securely and does not share your full payment details with us. You can learn more about Stripe&apos;s data practices at <a href="https://stripe.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>.
            </p>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Vercel (Analytics & Hosting)</h3>
            <p className="mb-4">
              We use Vercel Analytics to understand how users interact with our application and to improve our services. Vercel processes anonymous usage data and does not collect personally identifiable information. You can review Vercel&apos;s privacy practices at <a href="https://vercel.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com/privacy</a>.
            </p>



            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Data Storage and Security</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Data Retention:</strong> We retain your data for as long as your account is active or as needed to provide services</li>
              <li><strong>Data Security:</strong> We implement appropriate security measures to protect your personal information</li>
              <li><strong>Data Location:</strong> Your data may be stored in various locations based on our third-party service providers</li>
              <li><strong>Encryption:</strong> We use industry-standard encryption to protect data in transit and at rest</li>
              <li><strong>Payment Security:</strong> Payment information is processed securely through Stripe and never stored on our servers</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Your Rights and Choices</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access:</strong> You can access and review your personal information through your account settings</li>
              <li><strong>Correction:</strong> You can update or correct your information at any time</li>
              <li><strong>Deletion:</strong> You can request deletion of your account and associated data</li>
              <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> You can opt out of certain data collection and processing activities</li>
              <li><strong>Email Preferences:</strong> You can unsubscribe from marketing emails at any time</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Children&apos;s Privacy</h2>
            <p className="mb-4">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>Email:</strong> knowyourtale@gmail.com</p>
              <p className="mb-2"><strong>Website:</strong> knowyourtale.me</p>
              <p><strong>Contact Form:</strong> <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></p>
            </div>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Legal Basis for Processing (EU Users)</h2>
            <p className="mb-4">
              If you are located in the European Union, we process your personal information based on:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Consent:</strong> When you explicitly agree to our data processing</li>
              <li><strong>Contract Performance:</strong> To provide our services as agreed</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and ensure security</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">California Privacy Rights (CCPA)</h2>
            <p className="mb-4">
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to delete personal information. Please contact us to exercise these rights.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="magical-sparkle">🔐</div>
          <p className="text-gray-600">
            Your privacy journey is as important as your fairy tale adventure
          </p>
          <div className="magical-sparkle">✨</div>
        </div>
      </div>
    </div>
  );
}
