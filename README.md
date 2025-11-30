# Tobi Adebayo Portfolio - Next.js Rewrite Plan

## Project Overview

**Current State:** Static HTML portfolio website with 9 pages built with vanilla HTML, CSS, Bootstrap, and jQuery.  
**Goal:** Modernize and rewrite the entire codebase using Next.js 14+ with React, TypeScript, and modern tooling.

---

## Current Architecture Analysis

### Pages & Structure
1. **index.html** - Home/Landing page with featured content blocks and CTA
2. **about.html** - Artist bio and background
3. **projects.html** - Artworks gallery with image previews
4. **afeproject.html** - AFEProject (art for everyone initiative)
5. **commission.html** - Commission opportunities
6. **publications.html** - Publications/press
7. **nfts.html** - NFT showcase
8. **contact.html** - Contact form with email integration
9. **features.html** - Additional features page (minimal usage)
10. **illustration.html** - Illustration showcase (minimal usage)
11. **painting.html** - Painting showcase (minimal usage)
12. **portfolio.html** - Portfolio page (redundant with projects.html)

### Key Features & Interactions
- **Navigation:** Fixed header with responsive mobile menu (hamburger toggle)
- **Styling:** Multi-layered CSS (Bootstrap, custom styles, animations, AOS)
- **Animations:** Scroll animations (AOS - Animate On Scroll)
- **Carousels/Sliders:** Owl Carousel for image galleries
- **Forms:** Contact form with email submission (sendMail() function)
- **Preloader:** Full-page loading animation
- **Search Modal:** Top search functionality
- **Gallery:** Magnific Popup for image lightbox viewing
- **Footer:** Responsive footer with social links
- **Icons:** icomoon custom font icons + Font Awesome

### Current Dependencies
- Bootstrap 5.x
- jQuery
- jQuery UI
- Owl Carousel 2
- AOS (Animate On Scroll)
- Magnific Popup
- Font Awesome 6.4.2
- icomoon custom icons
- Slick Carousel
- intl-tel-input

---

## Next.js Rewrite Plan

### Phase 1: Project Setup (Week 1)

#### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest tobiadebayo --typescript --tailwindcss --eslint
cd tobiadebayo
```

**Configuration:**
- Next.js 14+ with App Router (not Pages Router)
- TypeScript for type safety
- Tailwind CSS (replacing Bootstrap & custom CSS)
- ESLint for code quality
- Prettier for formatting
- PostCSS for styling

#### 1.2 Project Structure
```
tobiadebayo/
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── afeproject/
│   │   └── page.tsx
│   ├── commission/
│   │   └── page.tsx
│   ├── publications/
│   │   └── page.tsx
│   ├── nfts/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts    # API endpoint for contact form
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   ├── Preloader.tsx
│   ├── ImageGallery.tsx
│   ├── ContactForm.tsx
│   ├── Carousel.tsx
│   ├── Hero.tsx
│   └── ...other reusable components
├── hooks/
│   ├── useScrollAnimation.ts
│   └── usePreloader.ts
├── lib/
│   ├── constants.ts         # Site navigation, social links
│   ├── email.ts            # Email sending service
│   └── types.ts            # TypeScript interfaces
├── styles/
│   ├── globals.css         # Global Tailwind overrides
│   └── animations.css      # Custom animations
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

### Phase 2: Core Components & Styling (Week 2)

#### 2.1 Replace Bootstrap with Tailwind CSS
- Convert all Bootstrap grid systems to Tailwind's flex/grid
- Replace Bootstrap utilities with Tailwind equivalents
- Remove Bootstrap dependency from package.json
- Create Tailwind theme configuration with brand colors

**Color Scheme:**
- Primary: Black (#000000)
- Secondary: Gray (#666666, #a6a6a6)
- Accent: Red (#ee0101)
- Background: White (#ffffff), Light Gray (#f0f0f0)

#### 2.2 Build Core Components

**Header Component** (`components/Header.tsx`)
- Fixed navigation bar
- Logo/branding
- Navigation links with active state styling
- Search icon (placeholder for search functionality)
- Responsive design with mobile menu trigger

**Navigation Component** (`components/Navigation.tsx`)
- Navigation menu items
- Active link highlighting
- Dropdown support (if needed)

**Mobile Menu Component** (`components/MobileMenu.tsx`)
- Hamburger toggle button
- Slide-out mobile navigation
- Click-outside handler to close menu
- Smooth animations

**Footer Component** (`components/Footer.tsx`)
- Logo section
- Quick links
- Social media icons (Instagram, Twitter, Facebook, LinkedIn, TikTok)
- Contact email
- Copyright notice with dynamic year

**Preloader Component** (`components/Preloader.tsx`)
- Loading animation
- Fade out on page load
- Custom CSS animations

#### 2.3 Animation Setup
- Install `framer-motion` for smooth animations
- Create custom hooks for scroll animations
- Replace AOS with Framer Motion `inView` detection
- Implement fade-in animations on scroll

---

### Phase 3: Page Implementation (Weeks 3-4)

#### 3.1 Home Page (`app/page.tsx`)
**Components:**
- Hero section with featured image
- Featured content blocks (About, Artworks, AFEProject, NFTs)
- Call-to-action section ("Get in Touch")
- Featured artworks grid
- Newsletter signup (optional enhancement)

**Features:**
- Image optimization with Next.js `Image` component
- Lazy loading for below-the-fold content
- Responsive grid layout

#### 3.2 About Page (`app/about/page.tsx`)
**Components:**
- Large profile image
- Multi-paragraph biography with formatting
- Skills/specialties section
- Services offered

**Features:**
- Rich text formatting (headings, bold, italics)
- Responsive image sizing

#### 3.3 Projects/Artworks Page (`app/projects/page.tsx`)
**Components:**
- Image grid gallery
- Filter/category buttons (if applicable)
- Image cards with title and medium info
- Lightbox modal for full-size viewing

**Features:**
- Dynamic image loading
- Image optimization
- Gallery filtering system
- Magnific Popup replacement (custom modal or use `next-image-gallery`)

#### 3.4 AFEProject Page (`app/afeproject/page.tsx`)
- Similar structure to projects page
- Project showcase with descriptions
- Impact/statistics section

#### 3.5 Commissions Page (`app/commission/page.tsx`)
- Pricing information
- Commission process explanation
- Call-to-action for contact

#### 3.6 Publications Page (`app/publications/page.tsx`)
- List of publications
- Links and dates
- Featured publications

#### 3.7 NFTs Page (`app/nfts/page.tsx`)
- NFT showcase/gallery
- Blockchain information
- Links to marketplaces

#### 3.8 Contact Page (`app/contact/page.tsx`)
**Components:**
- Contact form with validation
- Contact information cards
- Social media links
- Embedded map (optional enhancement)

**Features:**
- Client-side form validation (React Hook Form)
- Email submission via API route
- Success/error message handling
- Loading state management

---

### Phase 4: API & Functionality (Week 4)

#### 4.1 Contact Form API (`app/api/contact/route.ts`)
**Functionality:**
- Accept POST requests from contact form
- Validate form data (name, email, phone, message)
- Send email using Nodemailer or SendGrid/Resend
- Return success/error response

**Implementation:**
```typescript
// POST /api/contact
// Body: { fullName, email, phone, message }
// Response: { success: boolean, message: string }
```

#### 4.2 Email Service (`lib/email.ts`)
- Email template for contact form
- Error handling and logging
- Support for transactional email services (Resend, SendGrid, Nodemailer)

---

### Phase 5: Advanced Features & Optimization (Week 5)

#### 5.1 Performance Optimization
- Image optimization with Next.js `Image` component
- Next.js built-in code splitting
- Lazy loading for images and components
- Metadata generation for SEO
- Font optimization

#### 5.2 SEO Implementation
- Meta tags for each page (`generateMetadata()`)
- Open Graph tags for social sharing
- Structured data (JSON-LD) for artist bio
- Dynamic sitemap generation
- robots.txt configuration

#### 5.3 Analytics & Monitoring
- Google Analytics integration
- Error tracking (Sentry)
- Performance monitoring

#### 5.4 Additional Features
- Search functionality (if needed)
- Newsletter subscription (Mailchimp integration)
- Blog section (optional future enhancement)
- Image gallery with categories/filters
- Dark mode support (Tailwind theme)

---

### Phase 6: Testing & Deployment (Week 6)

#### 6.1 Testing
- Unit tests for components (Jest + React Testing Library)
- Integration tests for API routes
- E2E tests for critical user flows (Playwright/Cypress)

#### 6.2 Quality Assurance
- Accessibility audit (WCAG compliance)
- Mobile responsiveness testing
- Cross-browser testing
- Lighthouse performance audit

#### 6.3 Deployment
- Deploy to Vercel (native Next.js hosting)
- Setup automatic deployments on push
- Environment variable configuration
- Database/CMS setup (if needed for dynamic content)

#### 6.4 Post-Deployment
- Monitor performance metrics
- User feedback collection
- Continuous improvements
- SEO monitoring

---

## Technology Stack

### Frontend
- **Framework:** Next.js 14+
- **UI Library:** React 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod (validation)
- **Image Gallery:** react-medium-image-zoom or react-image-lightbox

### Backend/Services
- **API Routes:** Next.js API Routes
- **Email:** Resend, SendGrid, or Nodemailer
- **CMS:** (Optional) Contentful, Strapi, or Sanity for dynamic content

### Development Tools
- **Package Manager:** npm or pnpm
- **Linting:** ESLint
- **Formatting:** Prettier
- **Testing:** Jest, React Testing Library, Playwright
- **Version Control:** Git

### Hosting & Deployment
- **Primary:** Vercel (optimized for Next.js)
- **Alternative:** Netlify, AWS Amplify, or self-hosted

---

## Migration Strategy

### Step 1: Data & Content Extraction
- Extract all text content from HTML files
- Categorize artworks and metadata
- Create content JSON files or database records

### Step 2: Component-by-Component Migration
- Build components in isolation
- Test each component with sample data
- Maintain feature parity with original site

### Step 3: Gradual Rollout
- Deploy to staging environment
- Conduct thorough testing
- Soft launch on subdomain (next.tobiadebayo.com)
- Gradual traffic migration
- Full cutover after validation

### Step 4: Cleanup & Optimization
- Remove old HTML files
- Optimize assets
- Final performance audit
- Launch on main domain

---

## Dependencies to Remove
- Bootstrap (replace with Tailwind CSS)
- jQuery (not needed with React)
- jQuery UI
- Owl Carousel (replace with custom React component or library)
- Magnific Popup (replace with React modal/lightbox)
- Slick Carousel (replace with Framer Motion or Swiper)

## New Dependencies to Add
- next
- react
- react-dom
- tailwindcss
- framer-motion
- react-hook-form
- zod
- next-image-zoom (or similar)
- swiper (optional, for carousels)

---

## Estimated Timeline
- **Week 1:** Project setup & architecture
- **Week 2:** Core components & styling
- **Weeks 3-4:** Page implementation
- **Week 4:** API & backend functionality
- **Week 5:** Advanced features & optimization
- **Week 6:** Testing & deployment

**Total:** 6 weeks for complete rewrite

---

## Key Improvements Over Current Version
1. ✅ **Better Performance:** Automatic code splitting, image optimization, caching
2. ✅ **Improved SEO:** Built-in meta tags, dynamic sitemaps, structured data
3. ✅ **Modern DX:** TypeScript, component reusability, better tooling
4. ✅ **Scalability:** Easier to add features like blog, e-commerce, etc.
5. ✅ **Maintainability:** Cleaner code, better organization, less complexity
6. ✅ **Mobile-First:** Better responsive design patterns
7. ✅ **Accessibility:** Built-in accessibility features with modern React
8. ✅ **Analytics:** Easier integration of tracking and monitoring
9. ✅ **Security:** Built-in CSRF protection, secure API routes
10. ✅ **Developer Experience:** Hot reload, better debugging, TypeScript support

---

## Maintenance & Future Enhancements
- Add blog section with markdown support
- Integrate CMS for easier content management
- Add image compression/optimization service
- Implement advanced analytics
- Add newsletter functionality
- Social media feed integration
- Commission management system
- Admin dashboard for content management

---

## Questions & Decisions Needed
1. **Content Management:** Will content be hardcoded, in JSON, or use a CMS?
2. **Email Service:** Which service for sending emails (Resend, SendGrid, Nodemailer)?
3. **Comments/Feedback:** Enable user comments on artworks?
4. **E-commerce:** Add shop functionality for prints/originals?
5. **Blog:** Need a blog section?
6. **Admin Panel:** Need admin dashboard for content management?
7. **Database:** Need persistent data storage?
8. **Authentication:** Need user accounts or admin login?

---

## Resources & References
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript React Guide](https://www.typescriptlang.org/docs/handbook/react.html)

---

**Last Updated:** November 30, 2025  
**Status:** Ready for implementation
