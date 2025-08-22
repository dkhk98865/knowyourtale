"use client";

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="parchment-content">
        <div className="text-center mb-12">
          <div className="magical-sparkle">📜</div>
          <h1 className="storybook-title">Terms of Service</h1>
          <div className="storybook-divider"></div>
          <p className="storybook-subtitle">
            The magical rules that guide your fairy tale journey
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

            <h2 className="storybook-subtitle text-2xl mb-4">Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using Know Your Tale (&ldquo;the Service&rdquo;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Description of Service</h2>
            <p className="mb-4">
              Know Your Tale is a fairy tale personality assessment application that provides:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Interactive character selection and personality assessments</li>
              <li>AI-powered chat conversations with fairy tale characters</li>
              <li>Chat history storage and retrieval</li>
              <li>Premium features for enhanced user experience</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">User Accounts and Registration</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Account Creation</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You must be at least 13 years old to create an account</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to accept responsibility for all activities that occur under your account</li>
              <li>You must provide accurate and complete information when creating your account</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Account Security</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>You are responsible for all activities under your account</li>
              <li>We reserve the right to terminate accounts that violate these terms</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Free vs. Premium Features</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Free Tier</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to basic character selection</li>
              <li>Limited chat interactions</li>
              <li>Basic personality assessment features</li>
              <li>Standard customer support</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Premium Features</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to all fairy tale characters</li>
              <li>Unlimited chat conversations</li>
              <li>Chat history storage and retrieval</li>
              <li>Advanced personality insights</li>
              <li>Priority customer support</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Subscription and Payment Terms</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Billing</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Premium subscriptions are billed on a recurring basis</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>Prices may change with 30 days notice to existing subscribers</li>
              <li>Payment is processed securely through our payment providers</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Subscription Management</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You may cancel your subscription at any time</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>No refunds for partial billing periods</li>
              <li>You can upgrade or downgrade your plan at any time</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Payment Processing</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We use secure third-party payment processors</li>
              <li>Your payment information is encrypted and secure</li>
              <li>Failed payments may result in service suspension</li>
              <li>We reserve the right to change payment methods</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Acceptable Use Policy</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Prohibited Activities</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Creating multiple accounts to abuse free features</li>
              <li>Attempting to reverse engineer or hack the service</li>
              <li>Using the service for illegal or harmful purposes</li>
              <li>Sharing account credentials with others</li>
              <li>Attempting to manipulate or abuse the AI chat system</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Content Guidelines</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Keep chat conversations appropriate and respectful</li>
              <li>Do not use the service to generate harmful or inappropriate content</li>
              <li>Respect the fairy tale theme and family-friendly nature</li>
              <li>Do not attempt to extract or misuse personal information</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Intellectual Property Rights</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The Service and its original content, features, and functionality are owned by Know Your Tale</li>
              <li>Fairy tale characters and stories are used under fair use principles</li>
              <li>Your chat conversations and personal data remain your property</li>
              <li>You retain rights to content you create using our service</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Privacy and Data Protection</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Refunds and Cancellations</h2>
            <p className="mb-4">
              For detailed information about our refund and cancellation policies, please review our dedicated <a href="/refund-policy" className="text-blue-600 hover:underline">Refund & Cancellation Policy</a>. This policy outlines our non-refundable subscription model and the exceptions that may apply.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Service Availability and Maintenance</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service</li>
              <li>Scheduled maintenance will be announced in advance when possible</li>
              <li>We are not liable for any service interruptions or data loss</li>
              <li>Service may be temporarily unavailable due to technical issues</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Know Your Tale, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Disclaimers</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties</li>
              <li>We do not guarantee the accuracy of personality assessments</li>
              <li>AI-generated responses are for entertainment purposes only</li>
              <li>We are not responsible for decisions made based on our assessments</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Termination</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We may terminate or suspend your account immediately for violations</li>
              <li>You may terminate your account at any time</li>
              <li>Upon termination, your right to use the Service ceases immediately</li>
              <li>We may retain certain information as required by law</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Governing Law</h2>
            <p className="mb-4">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which Know Your Tale operates, without regard to its conflict of law provisions.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>Email:</strong> knowyourtale@gmail.com</p>
              <p className="mb-2"><strong>Website:</strong> knowyourtale.com</p>
              <p><strong>Contact Form:</strong> <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></p>
            </div>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Acknowledgment</h2>
            <p className="mb-4">
              By using our Service, you acknowledge that you have read these Terms of Service and agree to be bound by them. If you do not agree to these terms, please do not use our Service.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="magical-sparkle">📋</div>
          <p className="text-gray-600">
            Understanding these terms ensures a magical experience for everyone
          </p>
          <div className="magical-sparkle">✨</div>
        </div>
      </div>
    </div>
  );
}
