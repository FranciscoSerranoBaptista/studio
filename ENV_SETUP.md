# Environment Variables Setup

This project uses [T3 Env](https://env.t3.gg/) for robust environment variable validation. **Builds will fail** if required environment variables are missing.

## Required Environment Variables

### EmailJS Configuration (Required for email notifications)

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_NOTIFICATION_EMAIL=notifications@yourdomain.com
```

## Local Development Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your EmailJS credentials in `.env.local`

3. Test the build:
   ```bash
   npm run build
   ```

## Production Deployment (Vercel)

### Add Environment Variables to Vercel:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **Environment Variables**
4. Add each variable for **Production**, **Preview**, and **Development**:

   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_NOTIFICATION_EMAIL`

5. Redeploy your application

### EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add these to your environment variables

## Environment Validation

- **Build Time**: T3 Env validates all required variables exist and are properly formatted
- **Runtime**: Variables are type-safe and validated
- **Missing Variables**: Build fails with clear error messages

## Troubleshooting

### Build fails with "Invalid environment variables"
- Ensure all required variables are set in your environment
- Check variable names match exactly (case-sensitive)
- Verify email addresses are valid format

### Email notifications not working in production
- Verify environment variables are set in Vercel dashboard
- Check EmailJS service configuration
- Look for console errors in browser dev tools

### Local development issues
- Ensure `.env.local` exists and contains all required variables
- Restart development server after adding new variables
- Check `.env.local` is in `.gitignore` (should not be committed)

## Security Notes

- Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- EmailJS credentials are safe to expose client-side (they're designed for it)
- Never commit `.env.local` to version control
- Use Vercel's environment variable encryption for production