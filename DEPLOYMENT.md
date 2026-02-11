# Deploy Your Portfolio for FREE

Get your portfolio live at a free URL like:
- `ajay-kumar-portfolio.vercel.app` (Vercel)
- `ajay-kumar-ux.netlify.app` (Netlify)

---

## Free Deployment with Vercel (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio setup"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Sign up** at [vercel.com](https://vercel.com) (free account)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your portfolio repository
5. Vercel auto-detects Next.js settings
6. Click **"Deploy"** 

🎉 **Done!** Your portfolio is live at `your-project-name.vercel.app`

### Step 3: Customize Your URL (Optional)

In Vercel Dashboard:
1. Go to **Settings** → **Domains**
2. Edit the default Vercel domain
3. Change to: `ajay-kumar-portfolio.vercel.app`

---

## Alternative: Free Deployment with Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. **Sign up** at [netlify.com](https://www.netlify.com) (free account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to your GitHub repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **"Deploy site"**

🎉 **Done!** Your portfolio is live at `random-name.netlify.app`

### Customize URL:
1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `ajay-kumar-ux`
4. Your URL becomes: `ajay-kumar-ux.netlify.app`

---

## Environment Variables (If Using Contact Form)

Add these in your hosting platform dashboard:

**Vercel/Netlify Dashboard** → **Settings** → **Environment Variables**

```env
NEXT_PUBLIC_APP_URL=https://your-site.vercel.app
# Add email/Telegram vars if using contact form
```

---

## What You Get for FREE:

✅ **Live portfolio URL** (no expiration)
✅ **Automatic HTTPS/SSL** (secure)
✅ **Auto-deploy on push** (update by pushing to GitHub)
✅ **Global CDN** (fast worldwide)
✅ **Unlimited bandwidth** (Vercel/Netlify free tier)

---

## Quick Deploy Buttons

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=YOUR_GITHUB_REPO_URL)

*Replace `YOUR_GITHUB_REPO_URL` with your actual repository URL*

---

## Troubleshooting

**Build failing?**
- Test locally: `npm run build`
- Check build logs in Vercel/Netlify dashboard

**Want a custom domain later?**
- You can add `ajaykumarportfolio.com` anytime
- See original DEPLOYMENT.md for custom domain setup

---

## Summary

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel (5 minutes)
3. ✅ Get free URL: `your-name.vercel.app`
4. ✅ Share with everyone!

**Cost: $0 forever** 🎉
