# SkyFly International - Global Visa Documentation & Immigration Guidance

A modern, responsive Next.js website for SkyFly International offering professional visa documentation and immigration consultation services worldwide.

## 🌍 Features

- **Hero Section**: Animated world map with typing animation and floating planes
- **Services Section**: Comprehensive documentation and guidance services
- **Consultation Modal**: Free consultation booking with WhatsApp integration
- **Contact Section**: Multi-channel contact form with office location
- **Testimonials**: Client success stories and trust indicators
- **FAQs**: Common questions about visa processes
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Theme**: Professional blue and orange color scheme
- **Smooth Animations**: Framer Motion animations throughout

## 🛠️ Tech Stack

- **Next.js 16.2.6**: React framework for production
- **React 19**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS 4.2**: Utility-first CSS
- **Framer Motion**: Animation library
- **Shadcn/UI**: Component library
- **Lucide React**: Icon library

## 📋 Prerequisites

- **Node.js** (v18 or higher): Download from [nodejs.org](https://nodejs.org/)
- **npm** or **pnpm**: Package manager (included with Node.js)
- **Git**: Version control (for GitHub deployment)

> If Git is installed and configured, you can use the provided helper script `git-push.bat` to initialize, commit, and push your repository automatically.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Run Development Server
```bash
npm run dev
# or
pnpm dev
```

The website will be available at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
# or
pnpm build
```

### 4. Start Production Server
```bash
npm start
# or
pnpm start
```

## 📁 Project Structure

```
website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page (main component)
├── components/
│   ├── ui/                  # Shadcn UI components
│   ├── hero-section.tsx     # Landing hero with animation
│   ├── services-section.tsx # Services showcase
│   ├── contact-section.tsx  # Contact form
│   ├── consultation-modal.tsx # Booking modal
│   └── ...                  # Other sections
├── lib/
│   └── utils.ts             # Utility functions
├── hooks/
│   └── use-toast.ts         # Custom hooks
├── public/                  # Static assets
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Project dependencies
```

## 🌐 GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click **"New repository"**
3. Name it: `skyfly-international` (or any name)
4. Add description: "SkyFly International - Global Visa Guidance"
5. Choose **Public** (required for free GitHub Pages)
6. Click **"Create repository"**

### Step 2: Initialize Git Locally

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: SkyFly website with Next.js, Tailwind, and animations"

# Add remote repository (replace USERNAME and REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push to GitHub (first time)
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"**
   - **Framework**: Select **"Next.js"**
4. GitHub will create a workflow file automatically
5. Click **"Save"**

### Step 4: Deploy

GitHub Actions will automatically build and deploy on every push to `main` branch.

Check deployment status:
1. Go to **Actions** tab in your repository
2. Watch the workflow complete
3. Once green ✅, your site is live at `https://USERNAME.github.io/REPO-NAME/`

## 📝 Making Changes & Pushing Updates

### After Making Code Changes:

```bash
# Check status
git status

# Stage changes
git add .

# Commit with message
git commit -m "Description of what you changed"

# Push to GitHub
git push origin main
```

## 🔧 Configuration

### Environment Variables (if needed)

Create `.env.local` file:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=918098118198
```

### Contact Information (Edit in components)

- **Phone**: `8098118198` - Update in [components/contact-section.tsx](components/contact-section.tsx)
- **Email**: `adminskyfly2026@gmail.com` - Update in [components/contact-section.tsx](components/contact-section.tsx)
- **Address**: Trichy office details - Update in [components/contact-section.tsx](components/contact-section.tsx)

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change:
- Primary colors (sky-blue, cyan-glow)
- Secondary colors (orange, navy)
- Theme variables

### Content
Update sections in `components/`:
- Hero message in [hero-section.tsx](components/hero-section.tsx)
- Services in [services-section.tsx](components/services-section.tsx)
- Contact info in [contact-section.tsx](components/contact-section.tsx)

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Changes Not Showing
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear `.next` folder: `rm -rf .next && npm run dev`

### Build Errors
```bash
npm run lint      # Check for errors
npm run build     # Rebuild
```

## 📊 Performance

- **Lighthouse**: Optimized for Core Web Vitals
- **Bundle Size**: ~200KB (optimized)
- **Deploy Time**: <2 minutes with GitHub Pages
- **CDN**: CloudFlare (via GitHub Pages)

## 📞 Support

For issues or questions:
- **WhatsApp**: [Chat with team](https://wa.me/918098118198)
- **Email**: adminskyfly2026@gmail.com
- **Phone**: 8098118198

## 📄 License

This project is private and confidential to SkyFly International.

---

**Built with ❤️ for SkyFly International**
