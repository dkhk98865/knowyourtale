import { track } from '@vercel/analytics';

// Analytics event tracking utility following Vercel's best practices
export const analytics = {
  // Track purchase events
  trackPurchase: (plan: string, amount: number, currency: string = 'USD', characterId?: string) => {
    track('purchase', {
      plan,
      amount,
      currency,
      characterId,
      timestamp: new Date().toISOString(),
    });
  },

  // Track single report purchase
  trackSingleReportPurchase: (characterId: string, characterName: string) => {
    track('purchase_single_report', {
      plan: 'single',
      amount: 4.99,
      currency: 'USD',
      characterId,
      characterName,
      timestamp: new Date().toISOString(),
    });
  },

  // Track all reports purchase
  trackAllReportsPurchase: () => {
    track('purchase_all_reports', {
      plan: 'allReports',
      amount: 9.99,
      currency: 'USD',
      timestamp: new Date().toISOString(),
    });
  },

  // Track monthly subscription purchase
  trackMonthlySubscriptionPurchase: () => {
    track('purchase_monthly_subscription', {
      plan: 'monthly',
      amount: 7.99,
      currency: 'USD',
      recurring: true,
      timestamp: new Date().toISOString(),
    });
  },

  // Track checkout initiation
  trackCheckoutInitiated: (plan: string, characterId?: string) => {
    track('checkout_initiated', {
      plan,
      characterId,
      timestamp: new Date().toISOString(),
    });
  },

  // Track successful payment
  trackPaymentSuccess: (plan: string, sessionId: string, characterId?: string) => {
    track('payment_success', {
      plan,
      sessionId,
      characterId,
      timestamp: new Date().toISOString(),
    });
  },

  // Track quiz completion
  trackQuizCompletion: (characterId: string, characterName: string) => {
    track('quiz_completed', {
      characterId,
      characterName,
      timestamp: new Date().toISOString(),
    });
  },

  // Track page views
  trackPageView: (page: string, characterId?: string) => {
    track('page_view', {
      page,
      characterId,
      timestamp: new Date().toISOString(),
    });
  },

  // Track user engagement
  trackEngagement: (action: string, details?: Record<string, any>) => {
    track('user_engagement', {
      action,
      details,
      timestamp: new Date().toISOString(),
    });
  },

  // Track button clicks
  trackButtonClick: (buttonName: string, location: string, details?: Record<string, any>) => {
    track('button_click', {
      buttonName,
      location,
      details,
      timestamp: new Date().toISOString(),
    });
  },

  // Track form submissions
  trackFormSubmission: (formName: string, success: boolean, details?: Record<string, any>) => {
    track('form_submission', {
      formName,
      success,
      details,
      timestamp: new Date().toISOString(),
    });
  },

  // Track errors
  trackError: (errorType: string, errorMessage: string, context?: Record<string, any>) => {
    track('error', {
      errorType,
      errorMessage,
      context,
      timestamp: new Date().toISOString(),
    });
  },

  // Track conversion funnel
  trackConversionStep: (step: string, stepNumber: number, totalSteps: number, details?: Record<string, any>) => {
    track('conversion_step', {
      step,
      stepNumber,
      totalSteps,
      details,
      timestamp: new Date().toISOString(),
    });
  },

  // Direct track function for custom events (following Vercel docs pattern)
  trackEvent: (eventName: string, data?: Record<string, any>) => {
    track(eventName, data);
  },
};
