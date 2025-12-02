# Tobi Adebayo Portfolio - Next.js Migration Plan

**Status:** Planning Phase  
**Target Timeline:** 6 weeks  
**Last Updated:** November 30, 2025

---

## Executive Summary

This document outlines the comprehensive plan to migrate the Tobi Adebayo portfolio from a static HTML website to a modern Next.js 14+ application. The migration will improve performance, maintainability, SEO, and enable future feature expansion.

**Current State:** 8 static HTML pages, 10+ dependencies, manual updates  
**Target State:** Modern React application, TypeScript, optimized assets, automated deployment

---

## Phase 1: Project Setup & Architecture (Week 1)

### 1.1 Initialize Next.js Project

#### Command
```bash
npx create-next-app@latest tobiadebayo --typescript --tailwindcss --eslint
cd tobiadebayo
npm install
```

#### Project Configuration

**next.config.ts**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
};

export default nextConfig;
```

**tsconfig.json** - Enable strict mode and path aliases
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForEnumMembers": true,
    "lib": ["ES2022", "dom", "dom.iterable"],
    "jsx": "preserve",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./",
    "removeComments": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/styles/*": ["./styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 1.2 Project Directory Structure

```
tobiadebayo/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   ├── error.tsx                     # Error boundary
│   ├── not-found.tsx                 # 404 page
│   ├── sitemap.ts                    # Dynamic sitemap
│   ├── robots.ts                     # robots.txt
│   ├── (auth)/
│   │   └── admin/                    # Future admin panel
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx             # Individual project detail
│   ├── afeproject/
│   │   └── page.tsx
│   ├── commission/
│   │   └── page.tsx
│   ├── publications/
│   │   └── page.tsx
│   ├── nfts/
│   │   └── page.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── route.ts                 # Contact form API
│   └── api/
│       ├── contact/
│       │   └── route.ts             # POST endpoint
│       └── projects/
│           └── route.ts             # Future: fetch projects
│
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── Preloader.tsx
│   │   └── Breadcrumb.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ProjectGallery.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Form.tsx
│   │   ├── Gallery.tsx
│   │   └── SocialLinks.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── CommissionForm.tsx
│   │   └── FormField.tsx
│   └── providers/
│       ├── ClientProvider.tsx        # Client-side setup
│       └── AosProvider.tsx           # Scroll animations
│
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── usePreloader.ts
│   ├── useFormSubmit.ts
│   └── useWindowSize.ts
│
├── lib/
│   ├── constants.ts                 # Site navigation, social links
│   ├── email.ts                     # Email service
│   ├── types.ts                     # TypeScript interfaces
│   ├── utils.ts                     # Utility functions
│   └── api-client.ts                # API utilities
│
├── styles/
│   ├── globals.css                  # Global Tailwind styles
│   ├── animations.css               # Custom animations
│   └── variables.css                # CSS variables
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── artwork-*.jpg
│   │   └── ...
│   ├── fonts/
│   ├── icons/
│   └── videos/
│
├── data/
│   ├── projects.json               # Project data
│   ├── publications.json           # Publications data
│   ├── nfts.json                   # NFT data
│   └── team.json                   # Team/collaborators (if needed)
│
├── tailwind.config.ts              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── tsconfig.json                   # TypeScript config
├── next.config.ts                  # Next.js config
├── .eslintrc.json                  # ESLint config
├── .env.local                      # Local environment variables
├── .env.example                    # Environment template
├── package.json                    # Dependencies
└── README.md                       # Documentation
```

### 1.3 Initial Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "next": "^14.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.50.0",
    "zod": "^3.22.0",
    "axios": "^1.6.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "next-image-export-optimizer": "^1.19.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@typescript-eslint/eslint-plugin": "^6.13.0",
    "@typescript-eslint/parser": "^6.13.0",
    "eslint": "^8.54.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.1.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

---

## Phase 2: Core Components & Styling (Week 2)

### 2.1 Tailwind CSS Configuration

**tailwind.config.ts**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#a6a6a6',
        accent: '#ee0101',
        light: '#f0f0f0',
      },
      fontFamily: {
        sans: ['Bahnschrift Regular', 'system-ui', 'sans-serif'],
        heading: ['HK Grotesk', 'sans-serif'],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
export default config
```

### 2.2 Core Components

#### Header Component
```typescript
// components/common/Header.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-black z-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-8" />
          </Link>
          
          <Navigation />
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {/* Hamburger icon */}
          </button>
        </div>
      </div>
      
      {isMenuOpen && <MobileMenu />}
    </header>
  )
}
```

#### Footer Component
```typescript
// components/common/Footer.tsx
'use client'

import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer sections */}
        </div>
        <div className="text-center py-8 border-t">
          <p>© Tobi Adebayo Studios, {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
```

#### Preloader Component
```typescript
// components/common/Preloader.tsx
'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="animate-pulse">Loading...</div>
    </div>
  )
}
```

### 2.3 Custom Hooks

#### useScrollAnimation Hook
```typescript
// hooks/useScrollAnimation.ts
'use client'

import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
```

---

## Phase 3: Page Implementation (Weeks 3-4)

### 3.1 Home Page (`app/page.tsx`)

**Features:**
- Hero section with featured image
- Featured content blocks with links
- CTA section
- Social proof/testimonials (optional)
- Newsletter signup (optional)

### 3.2 About Page (`app/about/page.tsx`)

**Features:**
- Full biography
- Artistic journey timeline
- Mission statement
- Skills/specialties
- Links to key works

### 3.3 Projects Page (`app/projects/page.tsx`)

**Features:**
- Dynamic project gallery
- Filter/category system
- Search functionality
- Image optimization
- Project detail pages (`app/projects/[slug]/page.tsx`)

### 3.4 Contact Page (`app/contact/page.tsx`)

**Features:**
- Contact form with validation
- Email submission via API route
- Success/error handling
- Loading states
- Contact information

### 3.5 Other Pages

- AFEProject (`app/afeproject/page.tsx`)
- Commissions (`app/commission/page.tsx`)
- Publications (`app/publications/page.tsx`)
- NFTs (`app/nfts/page.tsx`)

---

## Phase 4: API Routes & Backend (Week 4)

### 4.1 Contact Form API

**Endpoint:** `POST /api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, message } = await req.json()

    // Validate
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

### 4.2 Email Service

**Library Options:**
1. **Resend** (Recommended) - Modern, React-friendly
2. **SendGrid** - Enterprise-grade
3. **Nodemailer** - Self-hosted SMTP

**Implementation with Resend:**
```bash
npm install resend
```

```typescript
// lib/email.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  return await resend.emails.send({
    from: 'noreply@tobiadebayo.com',
    to,
    subject,
    html,
  })
}
```

---

## Phase 5: Optimization & Enhancement (Week 5)

### 5.1 Image Optimization

- Use Next.js `Image` component
- Automatic WebP/AVIF conversion
- Responsive sizing
- Lazy loading
- Blur placeholders

### 5.2 SEO Implementation

**generateMetadata() for each page**
```typescript
export async function generateMetadata({ params }: Props): Metadata {
  return {
    title: 'Tobi Adebayo | Artist & Activist',
    description: 'Multi-disciplinary artist creating thought-provoking works...',
    openGraph: {
      title: 'Tobi Adebayo',
      description: '...',
      images: [{ url: '/og-image.jpg' }],
    },
  }
}
```

**sitemap.ts**
```typescript
export default async function sitemap() {
  return [
    {
      url: 'https://tobiadebayo.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://tobiadebayo.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... more URLs
  ]
}
```

**robots.ts**
```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: 'https://tobiadebayo.com/sitemap.xml',
  }
}
```

### 5.3 Performance Monitoring

- Integrate Sentry for error tracking
- Google Analytics 4
- Web Vitals tracking
- Performance budgets

### 5.4 Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast ratios

---

## Phase 6: Testing & Deployment (Week 6)

### 6.1 Testing Strategy

**Unit Tests**
```bash
npm install --save-dev jest @testing-library/react
```

**E2E Tests**
```bash
npm install --save-dev playwright
```

**Test Coverage:**
- Components (snapshot + functional)
- API routes
- Critical user flows
- Form validation

### 6.2 Quality Assurance

- Lighthouse audit (target: 90+ on all metrics)
- Mobile responsiveness
- Cross-browser testing
- Accessibility audit
- Security review

### 6.3 Deployment Strategy

**Vercel Deployment** (Recommended)

1. **Connect Repository**
   - Connect GitHub to Vercel
   - Select `tobiadebayo` repository

2. **Configure Environment**
   ```
   NEXT_PUBLIC_SITE_URL=https://tobiadebayo.com
   RESEND_API_KEY=***
   CONTACT_EMAIL=tobiadebayoart@gmail.com
   ```

3. **Deploy**
   - Automatic on push to main
   - Preview deployments for PRs
   - Automatic rollback capability

**Domain Setup**
- Keep existing DNS pointing to Vercel
- Update CNAME record if needed

### 6.4 Post-Launch Checklist

- [ ] Verify all pages load correctly
- [ ] Check form submissions work
- [ ] Test on mobile devices
- [ ] Verify analytics tracking
- [ ] Test email notifications
- [ ] Check social media sharing
- [ ] Verify 301 redirects (if URL structure changes)
- [ ] Monitor error logs
- [ ] Performance baseline established
- [ ] User feedback mechanism enabled

---

## Technology Stack - Final

### Core Framework
- **Next.js 14** - React framework with SSR/SSG
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **CSS Modules** - Component scoping

### Forms & Validation
- **React Hook Form** - Lightweight form management
- **Zod** - TypeScript-first schema validation

### Database/CMS (Optional)
- **Supabase** - PostgreSQL + Auth
- **Contentful** - Headless CMS
- **Sanity** - Content platform

### Email
- **Resend** - Email for developers
- **SendGrid** - Enterprise option

### Deployment
- **Vercel** - Next.js native hosting
- **GitHub** - Source control

### Analytics & Monitoring
- **Google Analytics 4** - Traffic analytics
- **Sentry** - Error tracking
- **Vercel Analytics** - Performance metrics

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Unit testing
- **Playwright** - E2E testing

---

## Migration Checklist

### Content Migration
- [ ] Extract all text from HTML files
- [ ] Organize artwork metadata
- [ ] Document publication details
- [ ] Compile NFT information
- [ ] Create data JSON files

### Design Migration
- [ ] Convert CSS to Tailwind
- [ ] Create component library
- [ ] Implement design system
- [ ] Set up color tokens
- [ ] Configure typography

### Functionality Migration
- [ ] Implement navigation
- [ ] Build contact form
- [ ] Create gallery component
- [ ] Add scroll animations
- [ ] Test form submission

### Quality Assurance
- [ ] Full page testing
- [ ] Form validation
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility
- [ ] Accessibility audit

### Deployment
- [ ] Environment configuration
- [ ] Domain setup
- [ ] DNS configuration
- [ ] SSL/HTTPS verification
- [ ] Monitoring setup

---

## Key Improvements Over Current Version

| Aspect | Current | Future |
|--------|---------|--------|
| **Performance** | Manual optimization | Automatic code splitting & caching |
| **SEO** | Limited (static HTML) | Built-in meta tags & sitemap |
| **Developer Experience** | jQuery templates | React components + TypeScript |
| **Type Safety** | None | Full TypeScript |
| **Styling** | Bootstrap + custom CSS | Tailwind CSS |
| **Image Optimization** | Manual resizing | Automatic optimization |
| **Form Handling** | Vanilla JS | React Hook Form |
| **Build Process** | None | Optimized Next.js build |
| **Deployment** | GitHub Pages | Vercel (streamlined) |
| **Scalability** | Limited | Easy to add features |
| **Mobile** | jQuery menu | Native responsive design |
| **Analytics** | Manual tracking | GA4 integration ready |

---

## Rollback Plan

If issues occur post-launch:

1. **Keep old site accessible** - Archive on separate domain
2. **Monitor closely** - First 24-48 hours critical
3. **Fast rollback** - Switch DNS back if critical issues
4. **Gradual migration** - Optional: 50% traffic initially

---

## Post-Launch Roadmap (Future Enhancements)

### 3 Months
- [ ] Blog system with markdown support
- [ ] Advanced analytics dashboard
- [ ] Email newsletter functionality
- [ ] Commission management system

### 6 Months
- [ ] Admin dashboard for content management
- [ ] User authentication system
- [ ] Art marketplace integration
- [ ] Commission booking system

### 12 Months
- [ ] Mobile app
- [ ] AI-powered image recommendations
- [ ] Social community features
- [ ] Advanced e-commerce integration

---

## Resources & References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment](https://vercel.com/docs)

---

## Questions & Decisions

1. **Content Management:** Hardcoded data, JSON files, or CMS?
2. **Blog Integration:** Required? If yes, which system?
3. **E-commerce:** Shop functionality for prints/originals?
4. **User Accounts:** Needed for future features?
5. **Database:** When should backend database be added?
6. **Admin Panel:** Priority for content management?
7. **Comments/Reviews:** Enable on artwork pages?
8. **Analytics Depth:** Custom dashboard vs. standard GA4?

---

## Success Criteria

- ✅ All 8 pages migrated and functional
- ✅ Lighthouse score ≥ 90 (all metrics)
- ✅ Zero 404s from old site links
- ✅ Contact form fully operational
- ✅ Mobile responsiveness verified
- ✅ SEO metadata complete
- ✅ Analytics tracking working
- ✅ Performance > 50% improvement
- ✅ Zero critical security issues
- ✅ User acceptance testing passed

---

**Timeline:** 6 weeks from start to production  
**Estimated Effort:** 480 developer hours  
**Risk Level:** Low (template-driven migration)  
**Next Step:** Approval to proceed with Phase 1

---

*For questions or clarifications, refer to individual phase sections or contact the development team.*
