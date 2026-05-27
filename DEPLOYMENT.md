# GitHub Deployment Guide - SkyFly International

A complete step-by-step guide to deploy your Next.js website on GitHub Pages.

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ Node.js installed (v18 or higher from nodejs.org)
- ✅ Git installed (from git-scm.com)
- ✅ GitHub account (free account at github.com)
- ✅ Website code ready (your Next.js project)

> Tip: If Git is installed, you can run the helper script `git-push.bat` from the project root after updating the repository URL.

## 🚀 Complete Deployment Steps

### Step 1: Prepare Your Repository

#### 1A: Check git status
```bash
git status
```

You should see:
- New files listed as "Untracked"
- Modified files listed as "Changes not staged"

#### 1B: Add all files to git
```bash
git add .
```

#### 1C: Create initial commit
```bash
git commit -m "Initial commit: SkyFly website with Next.js, animations, and consultation booking"
```

Expected output:
```
[main (root-commit) abc1234] Initial commit: ...
 XX files changed, XXXXX insertions(+)
 create mode 100644 .github/workflows/deploy.yml
 create mode 100644 README.md
 ...
```

---

### Step 2: Create GitHub Repository

#### 2A: Go to GitHub
1. Open https://github.com in your browser
2. Log in with your GitHub account (or create one if needed)

#### 2B: Create new repository
1. Click **"+"** in top-right corner → **"New repository"**
2. Fill in the form:
   - **Repository name**: `skyfly-international` (or your preferred name)
   - **Description**: "SkyFly International - Global Visa Guidance"
   - **Visibility**: Select **"Public"** (required for free GitHub Pages)
   - **Initialize repository**: Leave unchecked (you already have code)
3. Click **"Create repository"**

#### 2C: Copy the repository URL
You'll see a screen like this:
```
Quick setup — if you've done this kind of thing before

Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or push an existing repository from the command line

git remote add origin https://github.com/YOUR-USERNAME/skyfly-international.git
git branch -M main
git push -u origin main
```

Copy the URL: `https://github.com/YOUR-USERNAME/skyfly-international.git`

---

### Step 3: Connect Local Repository to GitHub

#### 3A: Add remote repository
In your terminal, run:
```bash
git remote add origin https://github.com/YOUR-USERNAME/skyfly-international.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

#### 3B: Rename branch to main (if needed)
```bash
git branch -M main
```

#### 3C: Push code to GitHub
```bash
git push -u origin main
```

You'll see:
```
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
Delta compression using up to 8 threads
Compressing objects: 100% (40/40), done.
Writing objects: 100% (45/45), XXXXX bytes, done.
Total 45 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR-USERNAME/skyfly-international.git
 * [new branch]      main -> main
Branch 'main' is set up to track remote branch 'main' from 'origin'.
```

✅ **Code is now on GitHub!**

---

### Step 4: Enable GitHub Pages

#### 4A: Go to repository settings
1. Go to your repository on GitHub
2. Click **"Settings"** tab (top right)
3. Click **"Pages"** in left sidebar (under "Code and automation")

#### 4B: Configure deployment
1. Under **"Build and deployment"** section:
   - **Source**: Select **"GitHub Actions"**
   - **Framework**: GitHub will auto-detect (but select **"Next.js"** if available)
2. Click **"Save"** (if available, it auto-saves)

#### 4C: GitHub creates workflow file
GitHub will create `.github/workflows/nextjs.yml` automatically if not present.

---

### Step 5: Deploy Your Website

#### 5A: Wait for workflow completion
1. Click **"Actions"** tab in your repository
2. Wait for the workflow to complete (green ✅ means success)
3. Initial deployment takes 2-5 minutes

#### 5B: Get your live URL
1. Go back to **Settings** → **Pages**
2. Look for: **"Your site is live at: https://YOUR-USERNAME.github.io/skyfly-international/"**

Copy and save this URL - this is your live website!

---

## 📝 Making Updates & Pushing Changes

Every time you update your code and want to deploy changes:

### Update Workflow (Simple 3-step process)

#### Step 1: Check changed files
```bash
git status
```

#### Step 2: Commit your changes
```bash
git add .
git commit -m "Description of what you changed"
```

Example messages:
- `git commit -m "Update hero section text"`
- `git commit -m "Add new testimonials"`
- `git commit -m "Fix mobile responsiveness"`
- `git commit -m "Update contact phone number"`

#### Step 3: Push to GitHub
```bash
git push origin main
```

**That's it!** GitHub Actions automatically rebuilds and deploys within 1-2 minutes.

---

## 🔄 Git Commands Reference

### Viewing History
```bash
# See all commits
git log --oneline

# See what changed in last commit
git diff HEAD~1

# See current status
git status
```

### Fixing Mistakes
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Fix commit message
git commit --amend -m "Corrected message"
```

---

## 🔧 Troubleshooting

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/ and restart terminal

### Issue: "fatal: not a git repository"
**Solution**: Run `git init` in your project folder first

### Issue: "fatal: refusing to merge unrelated histories"
**Solution**: Use `git push -u origin main --force` (only if needed!)

### Issue: Website still showing old content
**Solution**: 
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Wait 5 minutes (cache clearing)
3. Check Actions tab - ensure deployment succeeded

### Issue: Deployment failed in Actions
**Solution**:
1. Click the failed workflow in Actions tab
2. Click the red ❌ step to see error details
3. Common errors:
   - Missing dependencies: `npm install` locally first
   - Port issues: Check `next.config.mjs` settings
   - Environment variables: Check `.env.local` file

---

## 🌐 Custom Domain (Optional)

To use a custom domain (e.g., skyfly.com instead of github.io):

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain name
3. Update DNS records with your domain registrar (follow GitHub's instructions)
4. Wait for DNS verification (can take 24 hours)

---

## 📊 Monitoring Your Deployment

### Check deployment status:
1. Go to **Actions** tab
2. Click the latest workflow run
3. Expand steps to see build logs
4. Green ✅ = Success, Red ❌ = Failed

### View build logs:
1. Click the failed step
2. Scroll down to see error messages
3. Fix the issue locally, commit, and push again

---

## 🔐 GitHub Best Practices

### Commit messages (be descriptive):
```
❌ Bad:  git commit -m "changes"
✅ Good: git commit -m "Update hero section with new tagline"

❌ Bad:  git commit -m "fix"
✅ Good: git commit -m "Fix mobile responsiveness in hero section"

❌ Bad:  git commit -m "update"
✅ Good: git commit -m "Add new testimonials and update contact info"
```

### Commit frequently (save progress):
- Commit after each feature: "Add FAQ section"
- Commit after fixes: "Fix typo in services section"
- Don't commit giant blocks - break into logical chunks

### Branch protection (optional but recommended):
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Require pull requests before merging
4. Protects main branch from accidental pushes

---

## 🎯 Next Steps

After successful deployment:

1. **Test your website** - Open live URL and test all features
2. **Update SEO** - Add keywords to `app/layout.tsx`
3. **Add analytics** - Enable Google Analytics or Vercel Analytics
4. **Monitor performance** - Use Lighthouse (Chrome DevTools)
5. **Set up CI/CD** - GitHub Actions already does this!

---

## 📞 Quick Reference

| Action | Command |
|--------|---------|
| Add all changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push to GitHub | `git push origin main` |
| View status | `git status` |
| View history | `git log --oneline` |
| Check remote | `git remote -v` |

---

## ✅ Deployment Checklist

- [ ] Node.js installed
- [ ] Git initialized locally
- [ ] Code committed with `git add . && git commit -m "message"`
- [ ] GitHub repository created (public)
- [ ] Remote added: `git remote add origin ...`
- [ ] Code pushed: `git push -u origin main`
- [ ] GitHub Pages enabled (Actions selected)
- [ ] Workflow completed (green ✅)
- [ ] Live URL copied and bookmarked
- [ ] Website tested (hero, forms, links work)

---

**🎉 You're now deployed on GitHub Pages! Happy coding!**
