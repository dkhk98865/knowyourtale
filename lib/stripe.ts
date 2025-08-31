import Stripe from 'stripe';

// Create a mock Stripe client for development when keys aren't set
const createMockStripe = () => {
  return {
    checkout: {
      sessions: {
        create: async () => ({
          id: 'mock_session_id',
          url: 'https://example.com/mock-checkout'
        })
      }
    },
    webhooks: {
      constructEvent: async () => ({ type: 'mock.event' })
    },
    customers: {
      retrieve: async () => ({ email: 'mock@example.com' })
    },
    billingPortal: {
      sessions: {
        create: async () => ({
          id: 'mock_portal_session_id',
          url: 'https://example.com/mock-portal'
        })
      }
    },
    subscriptions: {
      update: async () => ({
        id: 'mock_subscription_id',
        status: 'active',
        current_period_end: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60), // 30 days from now
        cancel_at_period_end: false
      }),
      retrieve: async () => ({
        id: 'mock_subscription_id',
        items: {
          data: [{ id: 'mock_item_id' }]
        }
      })
    }
  } as unknown as Stripe;
};

export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-07-30.basil',
      typescript: true,
    })
  : createMockStripe();

// Define your subscription plans
export const SUBSCRIPTION_PLANS = {
  single: {
    name: 'Single Report',
    price: 499, // $4.99 in cents
    priceId: process.env.STRIPE_SINGLE_PRICE_ID,
    features: [
      'Single personality analysis report'
    ]
  },
  monthly: {
    name: 'Monthly Plan',
    price: 799, // $7.99 in cents
    priceId: process.env.STRIPE_MONTHLY_PRICE_ID,
    features: [
              'Weekly prompts in journal section',
      'Access to Know Your Tale journaling',
      'Community board access'
    ]
  },
  allReports: {
    name: 'All Reports',
    price: 999, // $9.99 in cents
    priceId: process.env.STRIPE_ALL_REPORTS_PRICE_ID,
    features: [
      'All 12 personality analysis reports'
    ]
  }
};
