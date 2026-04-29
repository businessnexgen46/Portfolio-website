# Supabase Integration Setup Guide

This guide will help you set up Supabase to handle form submissions from your portfolio website.

## 🚀 Quick Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign up/login with your GitHub account
4. Create a new project:
   - **Organization**: Choose or create an organization
   - **Project Name**: `sabarish-portfolio` (or your preferred name)
   - **Database Password**: Create a strong password
   - **Region**: Choose the closest region to your audience

### 2. Get Your Supabase Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the **Project URL** and **anon public key**
3. These will be used in your environment variables

### 3. Set Up Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   VITE_APP_TITLE=Sabarish A - Portfolio
   VITE_APP_DESCRIPTION=Freelance web developer specializing in high-converting websites
   ```

### 4. Set Up Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste the contents of `supabase-schema.sql`
4. Click "Run" to execute the SQL

This will create:
- `contact_submissions` table - for storing contact form data
- `newsletter_subscribers` table - for newsletter signups
- `form_analytics` table - for tracking submission metrics
- Proper Row Level Security (RLS) policies
- Indexes for performance
- Triggers for automatic analytics updates

### 5. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your portfolio and test the contact form

3. Check your Supabase dashboard:
   - Go to **Table Editor**
   - Select the `contact_submissions` table
   - You should see your test submission

## 📊 What Gets Stored

### Contact Form Submissions
- Name, email, phone, company
- Message and project details
- Service interests
- Source (which form was used)
- Status tracking (new, contacted, qualified, closed)
- Timestamps

### Analytics
- Form submission counts
- Last submission times
- Performance metrics

## 🔒 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Anonymous users** can only insert their own data
- **Authenticated users** can view all submissions (for admin dashboard)
- **Service role** has full access for backend operations

## 🛠️ Admin Dashboard

There's a built-in admin dashboard component at `src/components/admin/AdminDashboard.tsx` that allows you to:

- View all contact submissions
- Filter by status
- See submission details
- Track analytics
- Manage leads

To use it, you'll need to:
1. Add authentication to your app
2. Create an admin route
3. Protect it with authentication checks

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | `https://abc123.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `VITE_APP_TITLE` | Your app title | `Sabarish A - Portfolio` |
| `VITE_APP_DESCRIPTION` | Your app description | `Freelance web developer...` |

## 🚨 Important Notes

1. **Never commit your `.env` file** to version control
2. **Keep your anon key secret** - it's like a public API key
3. **Use environment variables** for all sensitive data
4. **Test thoroughly** before deploying to production

## 🔄 Deployment

When deploying to production:

1. Add your environment variables to your hosting provider
2. Update your Supabase CORS settings if needed
3. Test the forms in the production environment
4. Monitor your Supabase dashboard for submissions

## 📞 Support

If you run into issues:

1. Check the Supabase [documentation](https://supabase.com/docs)
2. Verify your environment variables are set correctly
3. Check your browser console for errors
4. Ensure your SQL schema was applied correctly

## 🎉 You're Done!

Your portfolio now has a fully functional backend with:
- ✅ Contact form submissions stored in Supabase
- ✅ Analytics tracking
- ✅ Security best practices
- ✅ Admin dashboard ready
- ✅ Production-ready setup
