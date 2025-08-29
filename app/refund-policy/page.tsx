"use client";

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="parchment-content">
        <div className="text-center mb-12">
          <div className="magical-sparkle">💳</div>
          <h1 className="storybook-title">Refund & Cancellation Policy</h1>
          <div className="storybook-divider"></div>
          <p className="storybook-subtitle">
            Clear guidelines for managing your magical purchases and subscriptions
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

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="text-amber-400 text-xl">⚠️</div>
                </div>
                <div className="ml-3">
                  <p className="text-amber-800 font-medium">
                    <strong>Important Notice:</strong> All purchases and subscription fees are non-refundable except as required by law or in cases of service failure on our part.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="storybook-subtitle text-2xl mb-4">Our Refund Policy</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">General Policy</h3>
            <p className="mb-4">
              Know Your Tale operates on a <strong>non-refundable model</strong> for both one-time purchases and monthly subscriptions. This means that once a payment is processed, we do not provide refunds for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Change of mind or personal preference</li>
              <li>Incomplete usage of purchased reports or subscription period</li>
              <li>Account cancellation or deletion</li>
              <li>Service dissatisfaction (unless due to technical issues on our end)</li>
              <li>Personal circumstances or financial hardship</li>
              <li>Accidental purchases or duplicate orders</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Why We Don&apos;t Offer Refunds</h3>
            <p className="mb-4">
              Our non-refundable policy is designed to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Maintain Service Quality:</strong> Ensure we can provide consistent, high-quality fairy tale personality insights</li>
              <li><strong>Prevent Abuse:</strong> Protect against users who might exploit refund policies</li>
              <li><strong>Support Development:</strong> Allow us to continuously improve our magical features and reports</li>
              <li><strong>Fair Pricing:</strong> Keep costs reasonable for all users</li>
              <li><strong>Intellectual Property Protection:</strong> Protect our proprietary personality analysis content</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Legal Exceptions</h3>
            <p className="mb-4">
              We may provide refunds in the following legally required or exceptional circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Failure:</strong> If our service is completely unavailable for extended periods</li>
              <li><strong>Billing Errors:</strong> If we make an error in charging your account</li>
              <li><strong>Legal Requirements:</strong> As required by consumer protection laws in your jurisdiction</li>
              <li><strong>Technical Issues:</strong> If technical problems prevent you from accessing purchased reports</li>
              <li><strong>Content Delivery Failure:</strong> If purchased reports cannot be delivered due to our technical issues</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Purchase Types and Policies</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">One-Time Report Purchases</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Single Reports ($4.99):</strong> Non-refundable once purchased and accessed</li>
              <li><strong>All Reports Bundle ($9.99):</strong> Non-refundable once purchased and accessed</li>
              <li><strong>Access Duration:</strong> Reports remain accessible indefinitely after purchase</li>
              <li><strong>No Partial Refunds:</strong> Cannot refund individual reports from bundles</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Monthly Subscription Plan</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Monthly Plan ($7.99/month):</strong> Non-refundable for partial billing periods</li>
              <li><strong>Billing Cycle:</strong> Charged monthly on your renewal date</li>
              <li><strong>Access Duration:</strong> Available until the end of your current billing period</li>
              <li><strong>Cancellation:</strong> Can be cancelled at any time, effective at next billing cycle</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Cancellation Policy</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">How to Cancel Monthly Subscription</h3>
            <p className="mb-4">
              You can cancel your monthly subscription at any time through the following methods:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Account Settings:</strong> Go to your account settings and select &ldquo;Cancel Subscription&rdquo;</li>
              <li><strong>Contact Support:</strong> Email us at knowyourtale@gmail.com with your cancellation request</li>
              <li><strong>Customer Portal:</strong> Use the customer portal link provided in your billing emails</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">When Cancellation Takes Effect</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access Until Billing Period End:</strong> You retain access to monthly plan features until your current billing period ends</li>
              <li><strong>No Prorated Refunds:</strong> You will not receive a refund for unused time</li>
              <li><strong>Data Retention:</strong> Your journal entries and preferences are retained for 30 days</li>
              <li><strong>Account Deletion:</strong> After 30 days, your data may be permanently deleted</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">What Happens After Cancellation</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You retain access to monthly plan features until the end of your current billing period</li>
              <li>Your account reverts to free tier limitations</li>
              <li>You can reactivate your monthly subscription at any time</li>
              <li>Your journal entries and community data are preserved for 30 days</li>
              <li>Purchased reports remain accessible indefinitely</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Subscription Management</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Upgrading Your Plan</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You can upgrade to a higher tier at any time</li>
              <li>Upgrades take effect immediately</li>
              <li>You&apos;ll be charged the prorated difference for the current billing period</li>
              <li>Your billing cycle remains the same</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Downgrading Your Plan</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Downgrades take effect at the start of your next billing cycle</li>
              <li>You&apos;ll continue to have access to current tier features until then</li>
              <li>No refunds are provided for the difference</li>
              <li>Your billing amount will be reduced for the next cycle</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Billing and Payment</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Billing Cycles</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Monthly subscriptions are billed on a recurring basis</li>
              <li>Billing occurs automatically on your renewal date</li>
              <li>You will receive email notifications before each billing cycle</li>
              <li>Failed payments may result in service suspension</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Failed Payments</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We will attempt to process your payment multiple times</li>
              <li>You&apos;ll receive email notifications about failed payments</li>
              <li>Service may be suspended after multiple failed attempts</li>
              <li>You can update payment methods in your account settings</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Alternatives to Refunds</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">What We Offer Instead</h3>
            <p className="mb-4">
              While we don&apos;t provide refunds, we do offer several alternatives to ensure your satisfaction:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Credits:</strong> Extended access time for technical issues</li>
              <li><strong>Feature Upgrades:</strong> Temporary access to premium features</li>
              <li><strong>Account Extensions:</strong> Additional time on your subscription</li>
              <li><strong>Priority Support:</strong> Enhanced customer service assistance</li>
              <li><strong>Report Exchanges:</strong> Swap one report for another if technical issues prevent access</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">When to Request Alternatives</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Service interruptions lasting more than 24 hours</li>
              <li>Technical issues preventing access to purchased reports</li>
              <li>Billing problems or account access issues</li>
              <li>Quality of service concerns</li>
              <li>Report delivery failures</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">How to Request Exceptions</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Contact Information</h3>
            <p className="mb-4">
              If you believe you qualify for a refund exception or would like to discuss alternatives, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>Email:</strong> knowyourtale@gmail.com</p>
              <p className="mb-2"><strong>Subject Line:</strong> &ldquo;Refund Exception Request&rdquo;</p>
              <p className="mb-2"><strong>Response Time:</strong> Within 48 hours</p>
              <p><strong>Required Information:</strong> Account details, reason for request, and supporting evidence</p>
            </div>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">What to Include in Your Request</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your account email address</li>
              <li>Detailed description of the issue</li>
              <li>Date and time of the problem</li>
              <li>Screenshots or error messages (if applicable)</li>
              <li>Steps you&apos;ve already taken to resolve the issue</li>
              <li>Purchase details (order number, date, amount)</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Legal Rights and Jurisdictions</h2>
            
            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Consumer Protection Laws</h3>
            <p className="mb-4">
              Your rights may vary based on your location. We comply with applicable consumer protection laws:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>European Union:</strong> 14-day right of withdrawal for distance contracts</li>
              <li><strong>California:</strong> 30-day cancellation rights for certain services</li>
              <li><strong>Other Jurisdictions:</strong> Local consumer protection laws may apply</li>
            </ul>

            <h3 className="storybook-subtitle text-xl mb-3 mt-6">Dispute Resolution</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We encourage direct communication to resolve issues</li>
              <li>If unsatisfied, you may contact your local consumer protection agency</li>
              <li>For payment disputes, contact your payment method provider</li>
              <li>We are committed to fair resolution of legitimate concerns</li>
            </ul>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Q: Can I get a refund if I don&apos;t like the personality report?</h4>
                <p className="text-gray-600">A: No, we do not provide refunds for purchased reports. However, we encourage you to contact us so we can address your concerns and potentially offer alternatives.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Q: What if I accidentally purchased a report?</h4>
                <p className="text-gray-600">A: You cannot get a refund for accidental purchases. We recommend carefully reviewing your selection before confirming any purchase.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Q: Can I pause my monthly subscription?</h4>
                <p className="text-gray-600">A: We do not currently offer subscription pausing. You can cancel and resubscribe when you&apos;re ready to continue.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Q: What happens to my purchased reports if I cancel my subscription?</h4>
                <p className="text-gray-600">A: Your purchased reports remain accessible indefinitely, even after cancelling your monthly subscription. Only the monthly plan features are affected.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Q: Can I share my purchased reports with others?</h4>
                <p className="text-gray-600">A: No, purchased reports are for personal use only and cannot be shared or distributed without authorization.</p>
              </div>
            </div>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this policy or need assistance with your purchases or subscription:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>General Support:</strong> knowyourtale@gmail.com</p>
              <p className="mb-2"><strong>Billing Issues:</strong> knowyourtale@gmail.com</p>
              <p className="mb-2"><strong>Contact Form:</strong> <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></p>
              <p><strong>Response Time:</strong> Within 24-48 hours</p>
            </div>

            <h2 className="storybook-subtitle text-2xl mb-4 mt-8">Policy Updates</h2>
            <p className="mb-4">
              This policy may be updated periodically. We will notify you of any material changes via email or through our website. Continued use of our service after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="magical-sparkle">💎</div>
          <p className="text-gray-600">
            Clear policies ensure a magical experience for all our fairy tale adventurers
          </p>
          <div className="magical-sparkle">✨</div>
        </div>
      </div>
    </div>
  );
}
