# 🎯 COMPREHENSIVE NEXT.JS MIGRATION PLAN
## Tobi Adebayo Portfolio - HTML/CSS/JS → Next.js Migration

**Current Status:** Previous migration attempt exists in `Thelight/` but incomplete  
**Objective:** Complete, tested, production-ready Next.js migration  
**Timeline:** Phase-based execution (no time estimates)

---

## 📊 SITUATION ANALYSIS

### Current State
- **Original Site:** 8 static HTML pages + Bootstrap/jQuery + Owl Carousel + AOS
- **Previous Attempt:** Complete Next.js scaffold in `Thelight/` with 90% implementation done
- **Problem:** Incomplete asset migration, untested, form endpoint not verified
- **Opportunity:** Solid foundation exists—need to finish, test, optimize, and deploy

### Key Findings
1. **CSS Architecture:** Monolithic `style.css` (main styles) + multiple libraries (Bootstrap, AOS, Magnific Popup, icomoon)
2. **JavaScript:** jQuery-heavy (DOM manipulation, menu, carousel, lightbox)
3. **Layout:** Bootstrap grid-based, no semantic HTML5 in original
4. **Assets:** 18 images + 1 video, custom fonts (icomoon + HK Grotesk)
5. **Color Scheme:** Black (#000) primary, Red (#ee0101) accent, Gray (#a6a6a6) secondary

### Why Previous Attempt Stalled
- Assets not copied to `Thelight/public/images/`
- Form API not fully tested with Resend
- No accessibility/performance optimization
- Original files still in root causing potential confusion
- Missing: tests, image optimization, deployment verification

---

## 🛠️ MASTER SKILL: HTML-TO-REACT (NEXT.JS) CONVERSION FRAMEWORK

### Prerequisite Understanding
Before making ANY code changes, understand these mappings:

#### 1. **HTML Structure → React Components**
```
Original: HTML file with inline styles + classes
↓
React: Component with props, state, server/client directives
↓
Example:
  <div class="site-mobile-menu">...</div>
  → <MobileMenu isOpen={isOpen} onClose={closeMenu} />
```

#### 2. **CSS Classes → Tailwind Classes + CSS Modules**
```
Original: style.css with .class-name { properties }
↓
React: Inline tailwindcss or @apply in component CSS
↓
Mapping Strategy:
  .col-md-4 (Bootstrap) → md:w-1/3 (Tailwind)
  .red-text (.red) → text-red-600 (Tailwind)
  Custom .site-button → @apply px-4 py-2 bg-black text-white (Tailwind)
```

#### 3. **JavaScript Interactions → React Effects + Event Handlers**
```
Original: jQuery $(selector).on('click', handler)
↓
React: onClick handler or useEffect with ref
↓
Patterns:
  - Page initialization → useEffect with []
  - DOM queries → useRef or state-based rendering
  - Event delegation → Direct event listeners with refs
  - Data updates → setState or useReducer
```

#### 4. **Third-Party Libraries → React Equivalents**
```
Owl Carousel → Swiper React (already configured)
Magnific Popup → React Lightbox component
AOS (Animate on Scroll) → AOS npm package (already configured)
jQuery → Native DOM APIs or React patterns
```

#### 5. **CSS Styling Hierarchy**
```
Level 1: Tailwind utilities (default)
Level 2: @apply for complex combinations
Level 3: Module-specific CSS when Tailwind is insufficient
Level 4: Inline styles only for dynamic values

Color System (from app/globals.css):
  --primary: #000000 (black)
  --accent: #ee0101 (red)
  --secondary: #a6a6a6 (gray)
  --text: #666666
  --heading: #232323
  --border: #ebebeb
```

#### 6. **Component Hierarchy**
```
Level 1: Layout (app/layout.tsx) - wraps all pages
Level 2: Page components (app/*/page.tsx) - route handlers
Level 3: Feature components (components/ProjectGallery.tsx) - major features
Level 4: Primitive components (components/common/Button.tsx) - reusable basics
```

#### 7. **Data Flow Pattern**
```
Static Data (images array, menu links) → Hardcoded or imported from separate file
Dynamic Data (form input) → React state (useState)
API Data (contact form submission) → useReducer or custom hook
Async Operations → useEffect or server actions
```

#### 8. **Next.js Specifics**
```
Server Components (default):
  - Can access databases, APIs, secrets
  - For content rendering, data fetching
  - NO React hooks, event listeners, or state

Client Components ('use client'):
  - Required for interactivity (onClick, useState, useEffect)
  - Form components, toggles, filters
  - Animations and animations

API Routes (app/api/route.ts):
  - Handle POST, GET, etc.
  - Receive JSON from client
  - Return JSON response

Image Optimization:
  - Use next/image Image component
  - Define width, height, or fill
  - Enables automatic WebP/Avif
```

#### 9. **Responsive Design Strategy**
```
Mobile-First Approach (already in Thelight):
  Base styles: mobile (sm: 640px)
  Tablet: md: 768px
  Desktop: lg: 1024px, xl: 1280px
  
Tailwind Class Prefixes:
  md:w-1/3  (apply md:width on medium+ screens)
  lg:grid-cols-3  (apply grid on large+ screens)
  sm:hidden  (hide on small screens)
```

#### 10. **Performance & Optimization Pattern**
```
Images:
  1. Use next/image (built-in optimization)
  2. Provide srcSet sizes
  3. Generate WebP versions
  4. Lazy load with loading="lazy"

Fonts:
  1. Use next/font for local fonts (self-hosted)
  2. Add font-display: swap
  3. Preload critical fonts

CSS:
  1. Tree-shake unused Tailwind classes
  2. Use @apply for common patterns
  3. Minimize CSS-in-JS

Bundles:
  1. Code-split with dynamic()
  2. Tree-shake unused imports
  3. Lazy load non-critical components
```

---

## 📋 DETAILED IMPLEMENTATION PHASES

### PHASE 0: PREPARATION & CLEANUP (Foundation)
**Goal:** Clean slate, all tools ready, no conflicts

#### Tasks
1. **phase0-backup-originals** - Document and verify backup of original HTML/CSS/JS
2. **phase0-analyze-thelight** - Audit existing Thelight Next.js project for issues
3. **phase0-cleanup-thelight** - Remove broken/incomplete code from previous attempt
4. **phase0-fresh-setup** - Ensure Next.js 16, dependencies, configs are correct
5. **phase0-copy-assets** - Move images/fonts to `Thelight/public/`

### PHASE 1: COMPONENT LIBRARY (Core Building Blocks)
**Goal:** Create reusable, styled components matching original design

#### Components to Build
1. **component-button** - Primary/secondary buttons with hover states
2. **component-card** - Generic card container (used in galleries, projects)
3. **component-badge** - Small badge/label element
4. **component-modal** - Base modal wrapper for lightbox
5. **component-section** - Page section wrapper with padding/max-width
6. **component-link** - Next Link wrapper with styling
7. **component-image** - Next Image wrapper with fallback
8. **component-grid** - Responsive grid for galleries

#### Quality Checks
- [ ] All components accept className prop for flexibility
- [ ] Tailwind classes properly namespaced (no style conflicts)
- [ ] Accessible (ARIA labels, semantic HTML, keyboard nav)
- [ ] Mobile-responsive (test at 375px, 768px, 1024px)
- [ ] Types defined in TypeScript

### PHASE 2: LAYOUT COMPONENTS (Navigation & Structure)
**Goal:** Reusable header, footer, mobile menu

#### Components to Build
1. **Header.tsx** (REFINE if exists)
   - Logo, navigation links, hamburger toggle
   - Fixed position, responsive
   - Dark/light support

2. **Footer.tsx** (REFINE if exists)
   - Links, social icons, copyright
   - Match original footer styling

3. **MobileMenu.tsx** (REFINE if exists)
   - Offcanvas nav, smooth animation
   - Close on link click, close button

4. **Navigation.tsx** (NEW if needed)
   - Desktop nav, dropdown menus
   - Active link highlighting

5. **RootLayout** (AUDIT)
   - Providers wired: AOS, any others
   - Head metadata
   - Error boundary

#### Quality Checks
- [ ] Navigation accessible with keyboard
- [ ] Mobile menu doesn't hide content on desktop
- [ ] Links point to correct routes
- [ ] Styled to match original (colors, fonts, spacing)

### PHASE 3: GALLERY & MEDIA COMPONENTS (Complex Features)
**Goal:** Lightbox, carousels, image grids

#### Components to Build
1. **ProjectGallery.tsx** (REFINE)
   - Grid layout of artwork thumbnails
   - Click to open lightbox
   - Responsive: 2 cols (mobile) → 3 cols (desktop)

2. **Lightbox.tsx** (REFINE)
   - Modal for full-size images
   - Navigation (prev/next)
   - Close button, keyboard shortcuts

3. **ProjectsCarousel.tsx** (REFINE with Swiper)
   - Featured artworks in carousel
   - Swiper.js integration
   - Responsive: 1 item (mobile) → 3 items (desktop)

4. **VideoPlayer.tsx** (NEW if needed)
   - HTML5 video or custom player
   - For smile.mp4

#### Quality Checks
- [ ] Lightbox proper z-index, backdrop
- [ ] Carousel responsive, controls accessible
- [ ] Images load with Next Image (no layout shift)
- [ ] Keyboard shortcuts work (ESC to close, arrows to nav)
- [ ] Touch support on mobile

### PHASE 4: PAGE COMPONENTS (Individual Pages)
**Goal:** Build each of 8 pages with proper layout, SEO, content

#### 8 Pages to Build/Refine
1. **Home (app/page.tsx)**
   - Hero section, featured blocks (4 cards), CTA
   - Images: tobi.jpg, dreamgirl.jpg, AFEProjects.jpg, nfts.jpg
   - Scroll animations (AOS)

2. **About (app/about/page.tsx)**
   - Bio text, mission statement
   - Profile image (tobi.jpg or tobitak.png)
   - Clean, text-focused layout

3. **Projects (app/projects/page.tsx)**
   - Main artworks gallery
   - 7 artworks: dreamgirl, happiness, ajudua, lookman, messi, discrepancy, bfwo
   - Carousel + grid + lightbox
   - Video: smile.mp4

4. **AFE Project (app/afeproject/page.tsx)**
   - Project showcase
   - Images: AFEProjects.jpg, afepy2.jpg, afepy3.jpg
   - Impact section

5. **Commission (app/commission/page.tsx)**
   - Commission info
   - Pricing/services
   - CTA to contact form

6. **Publications (app/publications/page.tsx)**
   - Press features, media mentions
   - List/grid of publication links

7. **NFTs (app/nfts/page.tsx)**
   - NFT collection
   - Images: nfts.jpg, tobinft.jpg
   - Collection info

8. **Contact (app/contact/page.tsx)**
   - Contact form
   - Social media links
   - Contact info (if any)

#### Quality Checks
- [ ] SEO metadata set (generateMetadata())
- [ ] Open Graph images defined
- [ ] All images optimized (next/image)
- [ ] Mobile layout tested
- [ ] Accessibility (WCAG 2.1)

### PHASE 5: FORMS & API (Backend Integration)
**Goal:** Working contact form with email delivery

#### Components/Routes to Build
1. **ContactForm.tsx** (REFINE)
   - Fields: name, email, phone, message
   - Form validation (react-hook-form + zod)
   - Error/success states
   - Loading state

2. **app/api/contact/route.ts** (REFINE + TEST)
   - POST endpoint
   - Validate incoming JSON
   - Call Resend API
   - Return success/error response
   - Error logging

3. **.env.local Configuration**
   - RESEND_API_KEY from Resend dashboard
   - CONTACT_EMAIL (recipient address)

#### Quality Checks
- [ ] Form validation works client-side
- [ ] Form rejects invalid emails
- [ ] API endpoint returns 200 on success
- [ ] Email actually sends (test with Resend)
- [ ] Error handling shows user-friendly message
- [ ] Rate limiting (optional: max 5 emails per minute)

### PHASE 6: STYLING & CSS (Complete Design System)
**Goal:** All pages pixel-perfect match original, optimized CSS

#### Tasks
1. **color-system** - Define all colors in Tailwind config
2. **typography** - Font sizes, weights, line heights
3. **spacing** - Padding/margin scale (4px increments)
4. **component-styles** - Utility classes for buttons, cards, badges
5. **animations** - Transitions, hover states, scroll animations (AOS)
6. **responsive** - All breakpoints tested (sm, md, lg, xl)
7. **dark-mode** (optional) - If supported, add dark variants

#### Quality Checks
- [ ] No unused CSS classes (tree-shake)
- [ ] Colors match brand (black, red, gray palette)
- [ ] Typography reads well on all screen sizes
- [ ] Animations smooth (60fps, respects prefers-reduced-motion)
- [ ] Spacing consistent across pages

### PHASE 7: OPTIMIZATION & PERFORMANCE
**Goal:** Fast, optimized, production-ready

#### Image Optimization
1. **next/image** - All images use Image component
2. **WebP/Avif** - Generated automatically
3. **Responsive images** - srcSet, sizes attributes
4. **Lazy loading** - loading="lazy" for off-screen images
5. **Placeholder** - blurDataURL for better UX

#### Font Optimization
1. **Local hosting** - Move fonts to public/fonts/
2. **Subsetting** - Include only used characters
3. **Font-display** - Add swap/fallback strategy
4. **Preload critical** - Preload primary font (HK Grotesk)

#### Bundle Optimization
1. **Code splitting** - Dynamic imports for non-critical components
2. **Tree shaking** - Remove unused Tailwind classes
3. **Compression** - gzip/brotli enabled
4. **Caching** - Set proper cache headers

#### Quality Checks
- [ ] Lighthouse score >90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- [ ] Time to Interactive <3.5s
- [ ] First Contentful Paint <1.8s

### PHASE 8: TESTING & QUALITY ASSURANCE
**Goal:** Comprehensive testing before deployment

#### Test Categories
1. **Functional Testing**
   - [ ] All routes load without errors
   - [ ] Navigation works (internal links)
   - [ ] Contact form submits and sends email
   - [ ] Image galleries load and lightbox works

2. **Responsive Testing**
   - [ ] Test at 375px (iPhone SE), 768px (iPad), 1024px, 1440px (desktop)
   - [ ] Touch interactions on mobile
   - [ ] Hamburger menu works on small screens

3. **Accessibility Testing**
   - [ ] Keyboard navigation (Tab, Enter, Escape)
   - [ ] Screen reader compatibility (NVDA, JAWS)
   - [ ] ARIA labels present and correct
   - [ ] Color contrast ratio >4.5:1
   - [ ] No focus traps

4. **Performance Testing**
   - [ ] Lighthouse audit on all pages
   - [ ] Core Web Vitals measurement
   - [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

5. **Browser Testing**
   - [ ] Chrome/Edge (latest)
   - [ ] Firefox (latest)
   - [ ] Safari (latest)
   - [ ] Mobile browsers (iOS Safari, Chrome Mobile)

#### Tools
- Lighthouse (built-in)
- WAVE (accessibility)
- WebPageTest (performance)
- Manual testing on real devices

### PHASE 9: DEPLOYMENT SETUP
**Goal:** Ready for production deployment

#### Tasks
1. **Environment Configuration**
   - Create .env.local with Resend API key
   - Set CONTACT_EMAIL for form recipient

2. **Vercel Setup**
   - Connect GitHub repo to Vercel
   - Set build directory: `Thelight/`
   - Set root directory: `Thelight/`
   - Configure environment variables

3. **DNS/Domain**
   - Update DNS to point to Vercel deployment
   - Or configure custom domain in Vercel

4. **Monitoring**
   - Set up error tracking (Sentry optional)
   - Enable analytics (optional)

#### Quality Checks
- [ ] Production build succeeds (`pnpm build`)
- [ ] No console errors in production
- [ ] All routes work on live deployment
- [ ] Contact form sends emails in production

### PHASE 10: CUTOVER & CLEANUP
**Goal:** Replace live site, remove old files

#### Tasks
1. **Before Cutover**
   - Full production smoke test
   - Backup current live deployment
   - Brief QA team/stakeholders

2. **Cutover Steps**
   - Verify DNS/domain pointing to new Next.js deployment
   - Monitor for errors (first 24 hours)
   - Update any external references (social media, etc.)

3. **Cleanup**
   - Archive original HTML files (keep as reference)
   - Remove duplicate images from root
   - Delete old CSS/JS files (or archive)
   - Commit cleanup to git

4. **Documentation**
   - Update README.md with Next.js deployment instructions
   - Document any custom processes
   - Create runbooks for common tasks

---

## 🎓 SKILL MATRIX: HTML-TO-REACT CONVERSION DETAILS

### Understanding Original CSS Files

**Main File: `style.css` (1200+ lines)**
```
Sections:
1. Color variables (top of file) → Map to Tailwind config
2. Typography (font-family, sizes, weights) → Map to CSS variables
3. Spacing utilities (.m-*, .p-*) → Native Tailwind
4. Component styles (.site-button, .site-card, etc.) → Component CSS
5. Page-specific styles (index, about, projects) → Extract into page CSS
6. Responsive overrides (@media) → Tailwind responsive prefixes
7. Animation keyframes → Extract to separate animations.css
```

**Strategy:**
- Line-by-line analysis of `.site-*` classes
- Group by component purpose
- Convert each to Tailwind @apply or inline classes
- Test pixel-perfect rendering after conversion

### Understanding Original JavaScript

**Main File: `js/main.js` (200+ lines)**
```
Key Sections to Convert:
1. AOS.init() → useEffect in AosProvider.tsx
2. Owl Carousel → Swiper.js in ProjectsCarousel.tsx
3. Mobile menu toggle → useState + MobileMenu.tsx
4. Magnific Popup → Custom Lightbox.tsx
5. jQuery form handlers → react-hook-form in ContactForm.tsx
6. Slider range → HTML input[type=range] with onChange
7. Lazy loading snippet → next/image or Intersection Observer hook
```

**Conversion Pattern:**
```javascript
// Original jQuery
$('.site-mobile-menu .navbar-toggle').on('click', function() {
  $('.site-mobile-menu').toggleClass('active');
});

// React Equivalent
const [isMenuOpen, setIsMenuOpen] = useState(false);
<button onClick={() => setIsMenuOpen(!isMenuOpen)}>Toggle</button>
<MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
```

### HTML Structure Conversion

**Original Pattern:**
```html
<div class="container">
  <div class="row">
    <div class="col-md-4">...</div>
    <div class="col-md-4">...</div>
    <div class="col-md-4">...</div>
  </div>
</div>
```

**React/Tailwind Pattern:**
```jsx
<div className="max-w-6xl mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
</div>
```

### Image Migration

**From:**
```html
<img src="images/dreamgirl.jpg" alt="Artwork">
```

**To:**
```jsx
import Image from 'next/image';
<Image 
  src="/images/dreamgirl.jpg" 
  alt="Artwork" 
  width={800} 
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={false}
/>
```

### Font Migration

**From:**
```css
@font-face {
  font-family: 'HK Grotesk';
  src: url('../fonts/hkgrotesk.woff') format('woff');
}
```

**To (using next/font):**
```jsx
import { Geist } from 'next/font/google';
const geist = Geist({ subsets: ['latin'] });
// Or for local fonts:
import localFont from 'next/font/local';
const hkGrotesk = localFont({
  src: [{ path: '../fonts/hkgrotesk.woff2', weight: '400' }]
});
```

### Forms & Validation

**From jQuery:**
```javascript
$('#contactForm').on('submit', function(e) {
  e.preventDefault();
  if (!$(this).find('input[name="email"]').val()) {
    alert('Email required');
  }
});
```

**To react-hook-form:**
```jsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactSchema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(2, 'Name required'),
});

export default function ContactForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: zodResolver(contactSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  );
}
```

---

## 📊 DEPENDENCY MATRIX

### Required for Each Phase

| Phase | Dependencies | Tools |
|-------|-------------|-------|
| 0 | Node.js 18+, pnpm | Git, VS Code |
| 1 | Tailwind CSS, TypeScript | - |
| 2 | React, Next.js | - |
| 3 | Swiper, next/image | - |
| 4 | All previous + assets | Image editor (optional) |
| 5 | react-hook-form, zod, Resend | Postman (testing) |
| 6 | PostCSS, Tailwind | Lighthouse, WAVE |
| 7 | next/image, next/font | WebPageTest |
| 8 | Testing tools | Jest (optional), Playwright |
| 9 | Vercel account | GitHub |
| 10 | Domain/DNS | - |

---

## 🚨 KNOWN RISKS & MITIGATION

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Image paths broken after migration | High | Test all image paths, use next/image |
| Form emails not sending | High | Test Resend API key early, have fallback |
| CSS not matching original design | Medium | Screenshot comparison, pixel-perfect QA |
| Performance regression | Medium | Lighthouse baseline, compare metrics |
| Mobile menu glitches | Medium | Test on real devices, multiple screen sizes |
| Accessibility failures | Medium | WAVE audit, keyboard navigation test |
| Build failures | Low | Incrementally migrate, test after each phase |

---

## 📅 EXECUTION CHECKLIST

### Before You Start
- [ ] Read this entire plan
- [ ] Review codebase analysis above
- [ ] Understand HTML-to-React skill matrix
- [ ] Set up SQL tracking (done)
- [ ] Create session workspace (done)

### Go/No-Go
- [ ] All original files backed up
- [ ] Thelight/ directory analyzed
- [ ] Dependencies list reviewed
- [ ] Risk assessment complete

---

## 📝 SUCCESS CRITERIA

### Phase Completion
Each phase is complete when:
1. All tasks marked as 'done' in SQL
2. Quality checks all pass
3. No regressions from previous phase
4. Code committed to git with descriptive message

### Overall Success
Migration is complete when:
1. ✅ All 8 pages deployed and working
2. ✅ Contact form sends emails
3. ✅ Lighthouse >90 on all pages
4. ✅ Accessibility audit passes (WCAG 2.1 AA)
5. ✅ Mobile responsive at all breakpoints
6. ✅ Zero console errors in production
7. ✅ All images optimized (WebP/Avif)
8. ✅ Live site is faster than original
9. ✅ Original HTML files archived
10. ✅ Documentation updated

---

## 🎯 NEXT IMMEDIATE ACTION

1. ✅ **Analysis Complete** - Codebase fully mapped
2. ⏭️ **Confirm Plan** - User reviews and approves
3. ⏭️ **Create SQL Todos** - Insert all phases into tracking
4. ⏭️ **Start Phase 0** - Begin cleanup and preparation

---

**Plan Created:** 2026-03-15  
**Framework:** Ultra-detailed HTML-to-React conversion guide with step-by-step execution  
**Phases:** 10 sequential phases with clear gates and quality checks  
**Total Scope:** ~50+ specific tasks organized by complexity
