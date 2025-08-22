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
  essential: {
    name: 'Essential Adventure',
    price: 499, // $4.99 in cents
    priceId: process.env.STRIPE_ESSENTIAL_PRICE_ID,
    features: [
      'Access to all fairy tale characters',
      'Unlimited conversations',
      'Priority chat response',
      'Mobile app access'
    ]
  },
  premium: {
    name: 'Premium Adventure',
    price: 999, // $9.99 in cents
    priceId: process.env.STRIPE_PREMIUM_PRICE_ID,
    features: [
      'Access to all fairy tale characters',
      'Unlimited conversations',
      'Complete chat history access',
      'Advanced conversation features',
      'Priority support',
      'Export conversations',
      'Early access to new characters'
    ]
  }
};
