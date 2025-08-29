import { track } from '@vercel/analytics';

// Define proper types for analytics data
type AnalyticsData = Record<string, string | number | boolean | null>;
type ButtonClickDetails = Record<string, string | number | boolean | null>;
type FormSubmissionDetails = Record<string, string | number | boolean | null>;
type ErrorContext = Record<string, string | number | boolean | null>;
type ConversionStepDetails = Record<string, string | number | boolean | null>;

// Analytics event tracking utility following Vercel's best practices
export const analytics = {
  // Track purchase events
  trackPurchase: (plan: string, amount: number, currency: string = 'USD', characterId?: string) => {
    const data: Record<string, string | number | boolean | null> = {
      plan,
      amount,
      currency,
      timestamp: new Date().toISOString(),
    };
    
    if (characterId) {
      data.characterId = characterId;
    }
    
    track('purchase', data);
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
    const data: Record<string, string | number | boolean | null> = {
      plan,
      timestamp: new Date().toISOString(),
    };
    
    if (characterId) {
      data.characterId = characterId;
    }
    
    track('checkout_initiated', data);
  },

  // Track successful payment
  trackPaymentSuccess: (plan: string, sessionId: string, characterId?: string) => {
    const data: Record<string, string | number | boolean | null> = {
      plan,
      sessionId,
      timestamp: new Date().toISOString(),
    };
    
    if (characterId) {
      data.characterId = characterId;
    }
    
    track('payment_success', data);
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
    const data: Record<string, string | number | boolean | null> = {
      page,
      timestamp: new Date().toISOString(),
    };
    
    if (characterId) {
      data.characterId = characterId;
    }
    
    track('page_view', data);
  },

  // Track user engagement
  trackEngagement: (action: string, details?: AnalyticsData) => {
    const data: Record<string, string | number | boolean | null> = {
      action,
      timestamp: new Date().toISOString(),
    };
    
    if (details) {
      // Flatten the details object to avoid nested objects
      Object.entries(details).forEach(([key, value]) => {
        if (value !== undefined) {
          data[`detail_${key}`] = value;
        }
      });
    }
    
    track('user_engagement', data);
  },

  // Track button clicks
  trackButtonClick: (buttonName: string, location: string, details?: ButtonClickDetails) => {
    const data: Record<string, string | number | boolean | null> = {
      buttonName,
      location,
      timestamp: new Date().toISOString(),
    };
    
    if (details) {
      // Flatten the details object to avoid nested objects
      Object.entries(details).forEach(([key, value]) => {
        if (value !== undefined) {
          data[`detail_${key}`] = value;
        }
      });
    }
    
    track('button_click', data);
  },

  // Track form submissions
  trackFormSubmission: (formName: string, success: boolean, details?: FormSubmissionDetails) => {
    const data: Record<string, string | number | boolean | null> = {
      formName,
      success,
      timestamp: new Date().toISOString(),
    };
    
    if (details) {
      // Flatten the details object to avoid nested objects
      Object.entries(details).forEach(([key, value]) => {
        if (value !== undefined) {
          data[`detail_${key}`] = value;
        }
      });
    }
    
    track('form_submission', data);
  },

  // Track errors
  trackError: (errorType: string, errorMessage: string, context?: ErrorContext) => {
    const data: Record<string, string | number | boolean | null> = {
      errorType,
      errorMessage,
      timestamp: new Date().toISOString(),
    };
    
    if (context) {
      // Flatten the context object to avoid nested objects
      Object.entries(context).forEach(([key, value]) => {
        if (value !== undefined) {
          data[`context_${key}`] = value;
        }
      });
    }
    
    track('error', data);
  },

  // Track conversion funnel
  trackConversionStep: (step: string, stepNumber: number, totalSteps: number, details?: ConversionStepDetails) => {
    const data: Record<string, string | number | boolean | null> = {
      step,
      stepNumber,
      totalSteps,
      timestamp: new Date().toISOString(),
    };
    
    if (details) {
      // Flatten the details object to avoid nested objects
      Object.entries(details).forEach(([key, value]) => {
        if (value !== undefined) {
          data[`detail_${key}`] = value;
        }
      });
    }
    
    track('conversion_step', data);
  },

  // Direct track function for custom events (following Vercel docs pattern)
  trackEvent: (eventName: string, data?: AnalyticsData) => {
    if (data) {
      track(eventName, data);
    } else {
      track(eventName);
    }
  },
};
