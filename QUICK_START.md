# Quick Start Guide - SkyFly International

**Get your website running in 3 minutes!**

## ⚡ Fastest Way to Start

### Step 1: Install & Run (Copy & Paste)

Open terminal in VS Code and run:

```bash
npm install && npm run dev
```

Wait for "✓ Ready in..." message, then open:

```
http://localhost:3000
```

**Done!** You should see the SkyFly website with hero section, animations, and all sections.

---

## 📦 What You Get

✅ **Hero Section** - World map with animated country connections  
✅ **Services Section** - Professional documentation & guidance services  
✅ **Contact Form** - Email, phone, WhatsApp integration  
✅ **Consultation Modal** - Booking with WhatsApp redirect  
✅ **Testimonials** - Client success stories  
✅ **FAQs** - Common questions about visa process  
✅ **Responsive Design** - Works on mobile, tablet, desktop  
✅ **Dark Theme** - Modern blue and orange color scheme  
✅ **Animations** - Smooth Framer Motion effects throughout  

---

## 📝 Quick Edits

### Change Business Phone
File: `components/contact-section.tsx` → Search: `8098118198` → Replace with your number

### Change Email
File: `components/contact-section.tsx` → Search: `adminskyfly2026@gmail.com` → Replace with your email

### Change Office Address
File: `components/contact-section.tsx` → Search: `Trichy, Tamil Nadu` → Replace with your city/address

### Change Services List
File: `components/services-section.tsx` → Edit the `services` array

### Change Hero Text
File: `components/hero-section.tsx` → Edit the `typingTexts` array

---

## 🚀 Deploy to GitHub (5 Minutes)

### 1. Create GitHub Repository
1. Go to https://github.com
2. Click **"+"** → **"New repository"**
3. Name: `skyfly-international`
4. Select **"Public"**
5. Click **"Create repository"**

### 2. Push Your Code
```bash
git add .
git commit -m "Initial commit: SkyFly website"
git remote add origin https://github.com/YOUR-USERNAME/skyfly-international.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to repository → **Settings** → **Pages**
2. Under "Build and deployment", select **"GitHub Actions"**
3. Wait 2-5 minutes for build to complete

### 4. Get Live URL
Check **Settings** → **Pages** → Copy the live URL

**That's it! Your site is live!**

---

## 🔄 Update Your Website

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub automatically redeploys within 1-2 minutes.

---

## 🛠️ Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check code quality
npm run lint

# Stop development server
Ctrl+C (in terminal)
```

---

## ❌ Common Issues & Fixes

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### "Changes not showing"
- Save file: `Ctrl+S`
- Hard refresh browser: `Ctrl+Shift+R`
- Check terminal for errors

### "npm: command not found"
- Install Node.js from https://nodejs.org/
- Restart VS Code

### Deployment failed
- Check Actions tab for error details
- Ensure all files are saved and committed
- Run `npm run build` locally to check for errors

---

## 📁 File Structure

```
website/
├── app/                    # Main app pages
│   ├── page.tsx           # Home page (all sections)
│   ├── layout.tsx         # Root layout & metadata
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── hero-section.tsx   # Landing section
│   ├── services-section.tsx
│   ├── contact-section.tsx
│   ├── consultation-modal.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── ui/                # UI components
├── public/                # Images, icons, assets
├── package.json           # Dependencies
├── next.config.mjs        # Next.js settings
└── tailwind.config.ts     # Tailwind CSS settings
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
- `sky-blue` → Primary blue color
- `orange` → Accent orange color
- `navy` → Background navy color

### Fonts
Edit `app/layout.tsx`:
- Currently using: Inter (main), Space Grotesk (headings)

### Add New Sections
1. Create new component: `components/my-section.tsx`
2. Import in `app/page.tsx`
3. Add to JSX markup

---

## 📞 Contact Information

- **WhatsApp**: https://wa.me/918098118198
- **Email**: adminskyfly2026@gmail.com
- **Phone**: 8098118198
- **Address**: NO:54 (1st Floor), Vanapattarai Street, Trichy, Tamil Nadu – 620002, India

---

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Shadcn/UI**: https://ui.shadcn.com/
- **Git Tutorial**: https://git-scm.com/doc

---

**Happy coding! 🚀**
