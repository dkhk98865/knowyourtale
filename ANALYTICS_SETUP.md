# Vercel Analytics Setup & Usage Guide

This guide explains how Vercel Analytics is implemented in your Know Your Tale application and how to use it effectively.

## 🚀 Overview

Vercel Analytics has been integrated to track key user interactions and purchase events. The analytics system is designed to provide insights into:

- **Purchase Events**: Single reports, all reports, and monthly subscriptions
- **User Engagement**: Button clicks, page views, and form submissions
- **Conversion Funnel**: Checkout initiation to successful payment
- **Page Performance**: User journey tracking across the site

## 📊 Analytics Events Tracked

### Purchase Events
- `purchase_single_report` - When a user purchases a single character report
- `purchase_all_reports` - When a user purchases access to all reports
- `purchase_monthly_subscription` - When a user subscribes to the monthly plan
- `purchase` - Generic purchase event with plan details
- `payment_success` - When a payment is successfully completed

### User Journey Events
- `checkout_initiated` - When a user starts the checkout process
- `page_view` - When users visit different pages
- `button_click` - When users interact with key buttons
- `user_engagement` - General user engagement tracking

### Error & Performance Events
- `error` - Application errors and issues
- `form_submission` - Form completion tracking

## 🔧 Implementation Details

### Core Analytics Utility
The analytics functionality is centralized in `lib/analytics.ts`:

```typescript
import { analytics } from '@/lib/analytics';

// Track a purchase
analytics.trackSingleReportPurchase('snowwhite', 'Snow White');

// Track page view
analytics.trackPageView('story', 'snowwhite');

// Track button click
analytics.trackButtonClick('purchase_button', 'story_page');
```

### Error Handling
All analytics calls are wrapped in try-catch blocks to prevent tracking failures from breaking the user experience:

```typescript
try {
  analytics.trackPurchase('single', 4.99, 'USD', characterId);
} catch (error) {
  console.error('Analytics tracking failed:', error);
}
```

## 📍 Where Analytics Are Implemented

### 1. Story Pages (`app/story/[id]/page.tsx`)
- **Page View Tracking**: Tracks when users view character story pages
- **Purchase Button Tracking**: Tracks single report and all reports purchase attempts
- **Checkout Initiation**: Tracks when users start the checkout process

### 2. Subscription Page (`app/subscription/page.tsx`)
- **Page View Tracking**: Tracks subscription page visits
- **Monthly Plan Button**: Tracks monthly subscription attempts
- **Checkout Initiation**: Tracks monthly plan checkout starts

### 3. Success Page (`app/subscription/success/page.tsx`)
- **Page View Tracking**: Tracks successful purchase completion pages
- **Payment Success Tracking**: Tracks completed payments with plan details
- **Specific Purchase Tracking**: Different tracking for each plan type

### 4. Webhook Handler (`app/api/webhooks/stripe/route.ts`)
- **Server-Side Tracking**: Tracks successful payments from Stripe webhooks
- **Purchase Confirmation**: Ensures analytics are tracked even if client-side tracking fails

### 5. Home Page (`app/page.tsx`)
- **Page View Tracking**: Tracks homepage visits

## 🎯 Key Metrics to Monitor

### Conversion Funnel
1. **Page Views** → **Button Clicks** → **Checkout Initiation** → **Payment Success**
2. Track drop-off rates at each step
3. Identify which character pages drive the most purchases

### Revenue Metrics
- Total purchases by plan type
- Average order value
- Monthly recurring revenue (MRR)
- Customer acquisition cost (CAC)

### User Behavior
- Most popular character pages
- Button click-through rates
- Time spent on pages before purchase
- Return visitor patterns

## 📈 Vercel Analytics Dashboard

### Accessing Analytics
1. Go to your Vercel dashboard
2. Select your project
3. Navigate to the "Analytics" tab
4. View real-time and historical data

### Key Dashboards
- **Events**: View all tracked events
- **Pages**: Page view performance
- **Performance**: Core Web Vitals and loading times
- **Custom Events**: Purchase and engagement metrics

## 🛠️ Adding New Tracking

### 1. Add New Event Type
```typescript
// In lib/analytics.ts
trackNewEvent: (data: any) => {
  try {
    track('new_event', {
      ...data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
}
```

### 2. Implement in Component
```typescript
import { analytics } from '@/lib/analytics';

// Track the event
analytics.trackNewEvent({ key: 'value' });
```

### 3. Add Error Handling
Always wrap analytics calls in try-catch blocks to prevent failures from affecting user experience.

## 🔍 Debugging Analytics

### Console Logs
Analytics tracking includes console logging for debugging:
- Check browser console for tracking confirmations
- Look for "Analytics tracking failed" messages
- Verify event data is being sent

### Vercel Dashboard
- Events may take a few minutes to appear
- Check for any failed event deliveries
- Verify webhook endpoints are working

### Common Issues
1. **Events not appearing**: Check Vercel project configuration
2. **Tracking errors**: Verify analytics import and usage
3. **Missing data**: Ensure all required parameters are passed

## 📱 Mobile & Cross-Platform

Analytics tracking works across all platforms:
- **Web**: Full tracking implementation
- **Mobile**: Responsive design with same tracking
- **PWA**: Progressive web app compatibility

## 🔒 Privacy & Compliance

### Data Collected
- Purchase events and amounts
- Page views and user interactions
- Button clicks and form submissions
- Error tracking for debugging

### User Privacy
- No personally identifiable information (PII) in analytics
- User emails are not tracked in analytics events
- Focus on aggregate behavior patterns
- Compliant with GDPR and privacy regulations

## 🚀 Best Practices

### 1. Consistent Naming
- Use descriptive event names
- Follow naming conventions (snake_case)
- Include relevant context in event data

### 2. Performance
- Analytics calls are non-blocking
- Error handling prevents app crashes
- Minimal impact on user experience

### 3. Data Quality
- Validate data before sending
- Include timestamps for all events
- Use consistent data types

### 4. Monitoring
- Regularly check analytics dashboard
- Monitor for tracking failures
- Validate data accuracy

## 📚 Additional Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Web Analytics Best Practices](https://web.dev/analytics/)
- [Privacy-First Analytics](https://plausible.io/privacy-focused-web-analytics)

## 🆘 Troubleshooting

### Analytics Not Working
1. Check Vercel project configuration
2. Verify environment variables
3. Check browser console for errors
4. Ensure analytics component is loaded

### Missing Events
1. Verify tracking calls are being made
2. Check network tab for analytics requests
3. Wait for events to appear in dashboard
4. Verify event names and data

### Performance Issues
1. Check for excessive analytics calls
2. Verify error handling is working
3. Monitor console for tracking failures
4. Ensure analytics don't block user interactions

---

**Happy tracking! 📊✨**
