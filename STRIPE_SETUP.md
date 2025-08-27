# Stripe Integration Setup Guide

This guide will walk you through setting up Stripe for your subscription plans.

## 🚀 Quick Start

1. **Install Dependencies** ✅
   - Stripe packages are already installed
   - Backend API routes are created
   - Database schema is ready

2. **Set Up Stripe Account**
3. **Configure Environment Variables**
4. **Create Products & Prices in Stripe**
5. **Set Up Webhooks**
6. **Test the Integration**

## 📋 Prerequisites

- Stripe account (free to start)
- Supabase project with database access
- Domain for webhook endpoints (or use ngrok for local testing)

## 🔧 Step-by-Step Setup

### 1. Stripe Dashboard Setup

1. **Create Stripe Account**
   - Go to [stripe.com](https://stripe.com) and sign up
   - Complete account verification

## 3. Create Products and Prices

### **Products to Create:**
- Create "Single Report" product
- Create "Monthly Plan" product  
- Create "All Reports" product

### **Price Configuration:**
- For Single Report: $4.99 one-time payment
- For Monthly Plan: $7.99/month recurring
- For All Reports: $9.99 one-time payment

### **Product Setup Steps:**
1. Go to Products in your Stripe Dashboard
2. Click "Add Product"
3. Set product name (e.g., "Single Report")
4. Set price to $4.99
5. Choose "One time" for Single Report and All Reports, "Recurring" for Monthly Adventure
6. For Monthly Adventure, set billing interval to "Monthly"
7. Save the product
8. Repeat for all three products

### 2. Environment Variables

# App Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000 # Your app URL
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... # Same as above
```

### 3. Database Setup

1. **Open Supabase Dashboard**
   - Go to your project → SQL Editor
   - Copy and paste the contents of `database-schema.sql`
   - Run the SQL commands

2. **Verify Table Creation**
   - Check that `user_subscriptions` table exists
   - Verify RLS policies are enabled

### 4. Webhook Configuration

1. **In Stripe Dashboard**
   - Go to Developers → Webhooks
   - Click "Add endpoint"
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events to send: Select these events:
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`

2. **Get Webhook Secret**
   - After creating webhook, click on it
   - Copy the "Signing secret" (starts with `whsec_`)
   - Add to your `.env.local` as `STRIPE_WEBHOOK_SECRET`

### 5. Test the Integration

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Test Subscription Flow**
   - Go to `/subscription`
   - Sign in with a test account
   - Click "Get Single Report", "Start Monthly Adventure", or "Get All Reports"
   - Should redirect to Stripe Checkout

3. **Use Test Cards**
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - Expiry: Any future date
   - CVC: Any 3 digits

## 🔍 Troubleshooting

### Common Issues

1. **"STRIPE_SECRET_KEY is not set"**
   - Check `.env.local` file
   - Restart development server

2. **"Price ID not configured"**
   - Verify `STRIPE_SINGLE_PRICE_ID`, `STRIPE_MONTHLY_PRICE_ID`, and `STRIPE_ALL_REPORTS_PRICE_ID` are set
   - Check that Price IDs start with `price_`

3. **Webhook errors**
   - Verify webhook URL is correct
   - Check webhook secret in environment variables
   - Ensure webhook endpoint is accessible

4. **Database errors**
   - Run the SQL schema in Supabase
   - Check RLS policies are enabled
   - Verify table structure

### Testing Webhooks Locally

If testing locally, use [ngrok](https://ngrok.com):

```bash
# Install ngrok
npm install -g ngrok

# Start your app
npm run dev

# In another terminal, expose your local server
ngrok http 3000

# Use the ngrok URL for your webhook endpoint
# Example: https://abc123.ngrok.io/api/webhooks/stripe
```

## 📊 Monitoring

### Stripe Dashboard
- **Payments**: View successful/failed payments
- **Subscriptions**: Monitor active subscriptions
- **Webhooks**: Check webhook delivery status
- **Logs**: View API request logs

### Supabase Dashboard
- **Table Editor**: View subscription data
- **Logs**: Check for database errors
- **RLS**: Verify security policies

## 🚀 Production Deployment

1. **Switch to Live Keys**
   - Replace test keys with live keys
   - Update webhook endpoints to production domain
   - Test with small amounts first

2. **Security Considerations**
   - Never expose secret keys in client code
   - Use environment variables
   - Enable RLS on all tables
   - Monitor webhook failures

3. **Scaling**
   - Consider Stripe Connect for multi-tenant
   - Implement subscription management UI
   - Add usage tracking and limits

## 📚 Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)

## 🎯 Next Steps

After setup is complete:

1. **Customize the UI** to match your brand
2. **Add subscription management** (cancel, upgrade, downgrade)
3. **Implement usage tracking** and limits
4. **Add analytics** and reporting
5. **Create admin dashboard** for managing subscriptions

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Stripe and Supabase logs
3. Verify all environment variables are set
4. Test with Stripe's test mode first
5. Check the browser console for client-side errors

---

**Happy coding! 🚀✨**
