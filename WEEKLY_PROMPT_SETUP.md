# Weekly Prompt System Setup Guide

This guide explains how the weekly character prompt system works in the journal section.

## 🎯 Overview

The weekly prompt system automatically:
- Shows each user their current character prompt in the journal section
- Advances users through 12 characters (one per week)
- Updates prompts every Monday at 9 AM
- Tracks individual user progress through the cycle

## 📅 How It Works

### 12-Week Character Cycle

Each user progresses through one character per week:

| Week | Character | Theme |
|------|-----------|-------|
| 1 | Snow White | Innocence & Resilience |
| 2 | Cinderella | Hope & Transformation |
| 3 | Aurora | Awakening & Destiny |
| 4 | Ariel | Love & Sacrifice |
| 5 | Belle | Looking Beyond Appearances |
| 6 | Rapunzel | Freedom & Courage |
| 7 | Gerda | Unconditional Love |
| 8 | Mulan | Honor & Courage |
| 9 | Alice | Curiosity & Wonder |
| 10 | Dorothy | Finding Your Way Home |
| 11 | Wendy | Nurturing & Growth |
| 12 | Little Red Riding Hood | Wisdom & Discernment |

After 12 weeks, the cycle repeats.

## 🔄 System Flow

### 1. **User Initialization** (When someone subscribes)
```typescript
// Happens automatically in the Stripe webhook
const promptService = new UserPromptProgressService();
await promptService.initializeUser(customerEmail, customerEmail);
```

**What happens:**
- Creates record in `user_prompt_progress` table
- Sets current_week = 1 (Snow White)
- Sets next_prompt_date = next Monday at 9 AM
- User is marked as active

### 2. **Weekly Prompt Updates** (Every Monday at 9 AM)
```typescript
// Cron job calls /api/weekly-prompts
const promptService = new UserPromptProgressService();
await promptService.updateAllUsersToNewPrompt();
```

**What happens:**
- Finds all users ready for new prompts
- Advances each user to next character
- Updates next_prompt_date
- Logs the advancement

### 3. **Journal Display**
- User sees their current character prompt in journal section
- Shows character image, name, and reflection prompt
- Displays progress (Week X of 12)
- Provides "Respond to This Prompt" button

## 🛠️ How to Check if It's Working

### 1. **Check Database Tables**

Run these queries in your Supabase SQL editor:

```sql
-- Check if users are being initialized
SELECT * FROM user_prompt_progress 
WHERE is_active = true 
ORDER BY created_at DESC;

-- Check user progress
SELECT 
  user_email,
  current_week,
  character_id,
  next_prompt_date,
  total_prompts_viewed,
  is_active
FROM user_prompt_progress 
WHERE is_active = true;
```

### 2. **Test the API Endpoints**

```bash
# Check who's ready for new prompts
curl https://your-domain.com/api/weekly-prompts

# Manually trigger prompt updates (for testing)
curl -X POST https://your-domain.com/api/weekly-prompts \
  -H "Authorization: Bearer your_weekly_prompt_secret"
```

### 3. **Check Journal Page**
1. **Subscribe to monthly plan** (creates test user)
2. **Go to journal page** (should see current character prompt)
3. **Check progress indicator** (should show Week 1 of 12)
4. **Wait for Monday** (or manually trigger update)

## 🔍 Troubleshooting Checklist

### ✅ **User Initialization**
- [ ] New monthly subscription creates webhook event
- [ ] Webhook initializes user prompt progress
- [ ] Record appears in `user_prompt_progress` table

### ✅ **Prompt Updates**
- [ ] Cron job runs every Monday at 9 AM
- [ ] API finds users ready for new prompts
- [ ] Users advance to next character
- [ ] Progress is updated correctly

### ✅ **Journal Display**
- [ ] User sees current character prompt
- [ ] Character image and name display correctly
- [ ] Progress indicator shows correct week
- [ ] "Respond to Prompt" button works

## 🚨 Common Issues & Solutions

### **Issue: No users in user_prompt_progress**
**Check:**
- Webhook is processing monthly subscriptions
- `initializeUser` function is being called
- Database connection is working

### **Issue: Prompts not updating**
**Check:**
- Cron job is running (`vercel.json` configured)
- `WEEKLY_PROMPT_SECRET` environment variable is set
- API endpoint is accessible

### **Issue: Wrong character prompts**
**Check:**
- `types/characters.ts` has `weeklyPrompt` field for all characters
- Character IDs match between database and code

### **Issue: Users not progressing**
**Check:**
- Prompt updates are completing successfully
- `advanceToNextPrompt` function is updating records
- No errors in API logs

## 📊 Monitoring Dashboard

You can create a simple monitoring view:

```sql
-- Create a monitoring view
CREATE OR REPLACE VIEW weekly_prompt_status AS
SELECT 
  COUNT(*) as total_users,
  COUNT(*) FILTER (WHERE is_active = true) as active_users,
  COUNT(*) FILTER (WHERE next_prompt_date <= NOW()) as ready_for_update,
  AVG(current_week) as average_week,
  MAX(current_week) as max_week
FROM user_prompt_progress;

-- Check the status
SELECT * FROM weekly_prompt_status;
```

## 🎯 Quick Test Steps

1. **Subscribe to monthly plan** (creates test user)
2. **Check database** (should see record in `user_prompt_progress`)
3. **Go to journal page** (should see Snow White prompt)
4. **Manually trigger update** (test the API endpoint)
5. **Check progress** (should advance to Cinderella)

## 🔧 Environment Variables Needed

```bash
# For weekly prompt system
WEEKLY_PROMPT_SECRET=EF4DD6F2DC4DD
```

## 📚 Key Files

- `lib/user-prompt-progress.ts` - Core service for managing user progress
- `app/api/weekly-prompts/route.ts` - API endpoint for weekly updates
- `app/journal/page.tsx` - Journal page showing current prompt
- `types/characters.ts` - Character data with weekly prompts
- `vercel.json` - Cron job configuration

The system is designed to be fully automated, providing each user with a personalized journey through the 12 fairy tale characters in their journal section!
