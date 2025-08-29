# Mailchimp Integration Setup

## 🚀 Quick Setup

1. **Get Your Mailchimp API Key**
   - Log into your Mailchimp account
   - Go to Account → Extras → API Keys
   - Create a new API key or copy existing one

2. **Find Your Server Prefix**
   - Look at your Mailchimp URL: `https://us1.admin.mailchimp.com/`
   - The server prefix is `us1` (or whatever yours shows)

3. **Get Your Audience ID**
   - Go to Audience → Settings → Audience name and defaults
   - Copy the "Audience ID" (looks like: `1234567890`)

4. **Add Environment Variables**
   Add these to your `.env.local` file:
   ```bash
   MAILCHIMP_API_KEY=your_api_key_here
   MAILCHIMP_SERVER_PREFIX=us1
   MAILCHIMP_AUDIENCE_ID=1234567890
   ```

## 📧 What Happens Now

- **Automatic**: Every monthly subscriber is automatically added to your Mailchimp campaign
- **Tags**: Subscribers get tagged with `monthly-subscriber` and `fairy-tale-community`
- **Merge Fields**: 
  - `FNAME`: First name (if available)
  - `LNAME`: Last name (if available)  
  - `PLAN`: "Monthly Plan"
- **Status**: Automatically set to "subscribed"

## 🎯 Campaign Ideas

- **Welcome Series**: Introduce them to the journal and community features
- **Weekly Prompts**: Send the journaling prompts they get access to
- **Community Highlights**: Showcase interesting community discussions
- **Fairy Tale Insights**: Share personality analysis tips and stories

## 🔍 Testing

After setup, test by:
1. Making a test monthly subscription
2. Check your Mailchimp audience for the new subscriber
3. Verify the tags and merge fields are set correctly

## 📊 Benefits

- **Automated**: No manual work required
- **Segmented**: Easy to target monthly subscribers specifically
- **Engaging**: Keep subscribers informed about new features
- **Growth**: Build your email list automatically
