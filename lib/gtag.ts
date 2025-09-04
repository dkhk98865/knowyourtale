// Google Ads conversion tracking utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Google Ads conversion tracking function
export function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof(url) !== 'undefined') {
      window.location.href = url;
    }
  };
  
  window.gtag('event', 'conversion', {
    'send_to': 'AW-17529797157/cof6CIzP7pMbEKX07aZB',
    'value': 1.0,
    'currency': 'USD',
    'transaction_id': '',
    'event_callback': callback
  });
  
  return false;
}

// Enhanced conversion tracking with custom values
export function gtag_report_purchase_conversion(
  value: number, 
  currency: string = 'USD', 
  transactionId?: string,
  url?: string
) {
  const callback = function () {
    if (typeof(url) !== 'undefined') {
      window.location.href = url;
    }
  };
  
  window.gtag('event', 'conversion', {
    'send_to': 'AW-17529797157/cof6CIzP7pMbEKX07aZB',
    'value': value,
    'currency': currency,
    'transaction_id': transactionId || `T_${Date.now()}`,
    'event_callback': callback
  });
  
  return false;
}

// Quiz completion conversion
export function gtag_report_quiz_conversion(result: string, url?: string) {
  const callback = function () {
    if (typeof(url) !== 'undefined') {
      window.location.href = url;
    }
  };
  
  window.gtag('event', 'conversion', {
    'send_to': 'AW-17529797157/cof6CIzP7pMbEKX07aZB',
    'value': 0.0, // Free quiz
    'currency': 'USD',
    'transaction_id': `QUIZ_${Date.now()}`,
    'custom_parameters': {
      'quiz_result': result
    },
    'event_callback': callback
  });
  
  return false;
}
