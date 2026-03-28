# Deployment Guide — Guy Kushnir Portfolio

## Step 1: Install dependencies

Open a terminal in this folder and run:

```bash
npm install
```

## Step 2: Test locally

```bash
npm run dev
```

Open http://localhost:3000 — you should see the full site.

## Step 3: Create a GitHub repository

1. Go to https://github.com/new
2. Name it: `guy-kushnir-portfolio` (or any name)
3. Set to **Private** or Public — your choice
4. Do NOT initialize with README (we already have files)

Then push this project:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/guy-kushnir-portfolio.git
git push -u origin main
```

## Step 4: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `guy-kushnir-portfolio` repo
4. Vercel auto-detects Next.js — no config needed
5. Click **Deploy**

Your site will be live at `https://guy-kushnir-portfolio.vercel.app` (or your custom domain).

## Step 5: Auto-deploy on push

Every `git push` to `main` will automatically redeploy.

After building each section:
```bash
git add .
git commit -m "Add [section name] section"
git push
```

Vercel will deploy in ~30 seconds.

## Custom domain (optional)

In Vercel dashboard → Your project → Settings → Domains → Add your domain.

## LinkedIn URL

Update your LinkedIn URL in `components/Footer.tsx` and `components/Contact.tsx`
if your LinkedIn handle is different from `guy-kushnir-pm`.
