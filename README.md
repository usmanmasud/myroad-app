# Usman's Cloud & DevOps Roadmap Tracker

Track your 52-week Cloud & DevOps learning journey with persistent progress, notes, and streaks.

## Stack
- **Next.js 16** (App Router)
- **Neon** — serverless Postgres (free tier)
- **Prisma** — ORM + migrations
- **Vercel** — deployment

## Local Setup

### 1. Clone & install
```bash
git clone <your-repo>
cd myroad-app
npm install
```

### 2. Set up Neon database (free)
1. Go to [neon.tech](https://neon.tech) → create a free account
2. Create a new project → copy the **Connection string**
3. In the dashboard, get both **pooled** and **direct** URLs

### 3. Configure environment
```bash
cp .env.example .env
```
Fill in your Neon URLs in `.env`:
```
DATABASE_URL="postgresql://..."   # pooled (with pgbouncer=true)
DIRECT_URL="postgresql://..."     # direct (no pgbouncer)
```

### 4. Run migrations
```bash
npx prisma migrate dev --name init
```

### 5. Start dev server
```bash
npm run dev
```

---

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → import your repo
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL` → your Neon **pooled** URL
   - `DIRECT_URL` → your Neon **direct** URL
4. Deploy — Vercel runs `prisma generate && next build` automatically

> **First deploy**: After deploying, run migrations once:
> ```bash
> npx prisma migrate deploy
> ```

---

## Features
- ✅ Mark weeks complete — saved to DB
- 🔥 Daily streak tracking
- 📝 Notes per week (what you learned, blockers, commit links)
- 📊 Overall + per-phase progress bars
- 💡 Week breakdown: topics, project, resources, LinkedIn post idea
