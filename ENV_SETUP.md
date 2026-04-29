# Environment Setup Instructions

## Supabase Configuration

1. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

2. Replace the placeholder values in `.env` with your actual Supabase credentials:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

3. Get your credentials from:
   - Supabase Dashboard → Project Settings → API
   - Copy the Project URL and anon public key

## Development

After setting up `.env`, run:
```bash
npm run dev
```

The application will now connect to your Supabase backend for lead management and contact form submissions.
