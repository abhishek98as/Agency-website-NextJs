# Nexus Agency - CI/CD Pipeline Setup

## 🚀 Automatic Deployment Workflow

Your project is now configured for automatic deployment! Here's how it works:

```
Local Changes → GitHub → Vercel (Auto-Deploy)
```

---

## 📋 One-Time Setup: Connect Vercel to GitHub

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `abhishek98as/Agency-website-NextJs`

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variable**
   - Click "Environment Variables"
   - Add:
     - **Name:** `NEXT_PUBLIC_SITE_URL`
     - **Value:** `https://your-project.vercel.app` (update after first deploy)

5. **Deploy**
   - Click "Deploy"
   - Wait ~2 minutes for first deployment

6. **Enable Auto-Deploy**
   - Settings → Git → Production Branch: `main` ✅
   - This is enabled by default!

---

## 🔄 Daily Workflow: Push Code to Deploy

### Method 1: Quick PowerShell Script (Recommended)

```powershell
# With custom message
.\deploy.ps1 "Added new feature"

# With auto-generated timestamp
.\deploy.ps1
```

### Method 2: NPM Scripts

```bash
# Option A: Auto-commit with timestamp
npm run deploy

# Option B: Manual commit message (will open editor)
npm run quick-push
```

### Method 3: Manual Git Commands

```bash
git add -A
git commit -m "Your commit message"
git push origin main
```

---

## 🤖 What Happens Automatically

### GitHub Actions (CI)
- ✅ Runs ESLint on every push
- ✅ Builds the project to check for errors
- ✅ Validates code quality before deployment

### Vercel (CD)
- ✅ Detects push to `main` branch
- ✅ Automatically builds and deploys
- ✅ Provides preview URL for each deployment
- ✅ Updates production site (~2 minutes)

---

## 📊 Monitoring Your Deployments

### Vercel Dashboard
- **URL:** https://vercel.com/dashboard
- **See:** Build logs, deployment status, analytics

### GitHub Actions
- **URL:** https://github.com/abhishek98as/Agency-website-NextJs/actions
- **See:** CI pipeline status, lint results

---

## 🛠️ Troubleshooting

### Deployment Failed?
1. Check GitHub Actions: https://github.com/abhishek98as/Agency-website-NextJs/actions
2. Check Vercel logs: https://vercel.com/dashboard
3. Common issues:
   - ESLint errors → Run `npm run lint` locally
   - Build errors → Run `npm run build` locally
   - Missing env vars → Add in Vercel dashboard

### Push Rejected?
```bash
# Pull latest changes first
git pull origin main

# Then push again
git push origin main
```

---

## 📱 Quick Reference

| Action | Command |
|--------|---------|
| Deploy with message | `.\deploy.ps1 "message"` |
| Deploy with timestamp | `.\deploy.ps1` |
| Check deployment status | Visit Vercel dashboard |
| View build logs | GitHub Actions tab |
| Rollback deployment | Vercel dashboard → Deployments → Promote |

---

## 🎯 Best Practices

1. **Test Locally First**
   ```bash
   npm run lint    # Check for errors
   npm run build   # Ensure it builds
   npm run dev     # Test locally
   ```

2. **Commit Often**
   - Small, focused commits are better
   - Use descriptive commit messages

3. **Monitor First Deployment**
   - Watch Vercel dashboard for first deploy
   - Verify all features work in production

4. **Update Environment Variables**
   - After first deploy, update `NEXT_PUBLIC_SITE_URL` in Vercel
   - Use your actual Vercel domain

---

## 🔗 Important Links

- **Production Site:** (Will be available after Vercel setup)
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repository:** https://github.com/abhishek98as/Agency-website-NextJs
- **GitHub Actions:** https://github.com/abhishek98as/Agency-website-NextJs/actions

---

**That's it! 🎉**

Now every time you push to GitHub, your site will automatically update on Vercel within 2 minutes.
