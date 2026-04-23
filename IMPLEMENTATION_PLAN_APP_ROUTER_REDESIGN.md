# Next.js App Router & CSS Redesign Implementation Plan
**Status:** Pre-Implementation Report (No Code Changes)  
**Date:** 2024  
**Scope:** 8 Page Files + Global Styles Overhaul

---

## PART 1: DOC-BACKED RULES (From Next.js & Modern CSS Best Practices)

### A. Next.js App Router Mandatory Rules

#### 1. **Metadata & SEO**
- ✅ Each page MUST export `Metadata` from `next/metadata`
- ✅ Use `generateMetadata()` for dynamic routes (though these are static)
- ✅ Metadata should include: `title`, `description`, Open Graph tags, canonical URLs
- ⚠️ Current state: Some pages have incomplete metadata (NFTs, Publications lack full OG tags)

#### 2. **Image Optimization (Critical)**
- ✅ Use `next/image` Image component ONLY (never raw `<img>` tags)
- ✅ Container must have `position: relative` when using `fill` prop
- ✅ Container must define explicit width/height OR aspect-ratio (never auto)
- ✅ Use `fill` prop with `sizes` attribute for responsive images
- ✅ Include `sizes` prop with breakpoints: `"(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`
- ✅ Apply `object-fit` and `object-position` via CSS class, NOT Image props
- ✅ Use `priority={true}` ONLY for above-fold LCP images (max 1-2 per page)
- ✅ Use `placeholder="blur"` with `blurDataURL` for above-fold images when available
- ⚠️ Current: Missing blur placeholders, some images lack optimal sizes, priority not optimized

#### 3. **Layout & Component Structure**
- ✅ Use App Router file-based routing (`/app/[route]/page.tsx`)
- ✅ Root layout (`layout.tsx`) wraps all pages
- ✅ `layout.tsx` provides global Header, Footer, providers (Aos)
- ✅ Metadata should be page-specific in each `page.tsx`
- ✅ Use client components (`'use client'`) ONLY where needed (forms, interactivity)
- ⚠️ Current: No explicitly marked client components in pages (correct), but ContactForm properly marked

#### 4. **CSS & Styling (Tailwind)**
- ✅ Use Tailwind CSS for ALL styling (no inline styles)
- ✅ Mobile-first approach: base styles + sm: + md: + lg: + xl: breakpoints
- ✅ Define all classes as complete strings (no template literals with variables)
- ✅ Use CSS variables for design tokens (--primary, --accent, --background, --foreground)
- ✅ No arbitrary color values - use design tokens or Tailwind palette
- ⚠️ Current globals.css has legacy non-Tailwind CSS that should be Tailwind utilities

#### 5. **Responsive Design Standards**
- ✅ Test at: 375px (mobile), 768px (tablet), 1024px+ (desktop)
- ✅ All text must be readable without horizontal scroll
- ✅ Touch targets minimum 44px × 44px (buttons, links)
- ✅ Spacing uses Tailwind scale: 4px(1), 8px(2), 12px(3), 16px(4), 24px(6), 32px(8)
- ✅ Use grid templates: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- ⚠️ Current: Good breakpoint usage, but spacing could be more consistent

---

### B. CSS Best Practices (Tailwind-Specific)

#### 1. **Aspect Ratio Management**
- ✅ Use `aspect-video` (16:9), `aspect-square` (1:1), or custom `aspect-[4/3]`
- ✅ Set on container, NOT on Image element
- ✅ Prevents cumulative layout shift (CLS)
- ✅ Pattern: `<div className="aspect-video"><Image fill ... /></div>`
- ⚠️ Current: Correctly using aspect ratios, but inconsistent (some aspect-[4/3], some aspect-square)

#### 2. **String Class Safety (Prevent PurgeCSS Issues)**
- ✅ All Tailwind classes must be complete strings
- ✅ GOOD: `className="md:w-1/2"`
- ✅ GOOD: `className={`p-${sizeConstant}`}` if `sizeConstant` is a literal
- ❌ BAD: `className={`p-${dynamicValue}`}` - uses runtime variable
- ❌ BAD: String concatenation breaking classes `"md:w-" + "1/2"`
- ✅ Use `clsx()` for conditional classes
- ⚠️ Current: Using inline styles in some places (form elements) - should be Tailwind

#### 3. **Color & Dark Mode**
- ✅ All colors via CSS variables or Tailwind tokens
- ✅ Dark mode: use `dark:` prefix for dark-specific classes
- ✅ Ensure contrast ratios meet WCAG AA standards (4.5:1 for text)
- ✅ CSS variables defined in `:root` with `@media (prefers-color-scheme: dark)`
- ✅ Current variables: --primary (#000), --accent (#ee0101), --background, --foreground
- ⚠️ Current: Good dark mode support, but accent color (#ee0101) needs contrast verification

#### 4. **Layout Primitives**
- ✅ Flexbox: `flex flex-col md:flex-row gap-4` (never float)
- ✅ Grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
- ✅ Container queries: `@container` for modern responsive components
- ✅ Never use absolute positioning for layout (only overlays)
- ✅ Use `space-y-*` and `gap-*` instead of margin
- ⚠️ Current: Good flex/grid usage, consistent patterns

#### 5. **Typography**
- ✅ Set in globals.css (base typography rules)
- ✅ Headings: h1-h6 should have consistent line-height (1.4)
- ✅ Body text: line-height 1.6, font-weight 400
- ✅ Use Tailwind scale: `text-sm sm:text-base md:text-lg lg:text-xl`
- ✅ Always include `leading-*` class for readable line-heights
- ⚠️ Current: Typography setup in globals.css is good, but some heading font-sizes could be more standardized

---

### C. Performance & Web Vitals

#### 1. **Core Web Vitals (CWV)**
- ✅ LCP (Largest Contentful Paint): Image optimization with priority/placeholder
- ✅ FID (First Input Delay): No blocking JavaScript (async where possible)
- ✅ CLS (Cumulative Layout Shift): Container dimensions before content loads
- ✅ Target: LCP < 2.5s, FID < 100ms, CLS < 0.1
- ⚠️ Current: Missing blur placeholders will impact LCP

#### 2. **Image Optimization**
- ✅ Use WebP/AVIF via Next.js Image component
- ✅ Responsive images with `sizes` prop
- ✅ Lazy-load by default (only `priority={true}` for 1-2 above-fold images)
- ✅ Monitor image file sizes (compress before upload)
- ⚠️ Current: Good image usage, but no blur placeholders for hero images

---

## PART 2: CURRENT STATE ANALYSIS

### Existing Patterns (Good)
✅ Consistent breadcrumb navigation across pages  
✅ Mobile-first Tailwind approach throughout  
✅ Proper use of `fill` prop with containers  
✅ Dark mode supported on all pages  
✅ ContactForm is a proper client component with validation  
✅ Root layout provides Header/Footer/AOS provider  
✅ Good grid/flex patterns for responsive layouts  

### Issues to Address
⚠️ globals.css contains legacy CSS that should be Tailwind utilities  
⚠️ Image priority not optimized (should use priority for hero images)  
⚠️ No blur placeholders for images (impacts LCP)  
⚠️ Some inline styles in globals.css (button, form element overrides)  
⚠️ Metadata incomplete on some pages (no Open Graph for NFTs, Publications)  
⚠️ Form element styling in globals.css should be Tailwind component classes  
⚠️ Some text sizes inconsistent (mix of sm:, md:, lg: not uniform)  
⚠️ No explicit TypeScript types on some metadata  

---

## PART 3: IMPLEMENTATION PLAN

### Phase 1: Audit & Setup (No Breaking Changes)

#### 1.1 Create Design Token System
**Files:** `Thelight/lib/design-tokens.ts`
- Define color palette as TypeScript constants
- Define typography scale as constants
- Define spacing scale as constants
- Export for use in configs and components
- **Why:** Single source of truth for design consistency

#### 1.2 Update Tailwind Config
**File:** `Thelight/tailwind.config.ts`
- Add design tokens to theme.colors (already partially done)
- Add custom spacing scale if needed
- Add custom typography if using special fonts
- Verify safelist is empty (no need for dynamic class whitelisting)
- **Why:** Ensure all Tailwind utilities are available and optimized

#### 1.3 Audit globals.css for Purity
**File:** `Thelight/app/globals.css`
- Separate Tailwind directives (@tailwind base/components/utilities)
- Move legacy CSS rules to Tailwind equivalents
- Remove all inline-style patterns
- Ensure only CSS variables and component definitions remain
- **Why:** Prevent Tailwind purity issues

---

### Phase 2: Page-by-Page Refactor

#### 2.1 Update globals.css
**Changes Required:**
1. Keep @tailwind directives at top
2. Keep CSS variables (:root) setup
3. Remove legacy button styles → use Tailwind classes
4. Remove legacy form element styles → use Tailwind classes
5. Remove utility classes (.text-center, .mt-4, .mb-4, .gap-4) → use Tailwind directly
6. Add base typography rules (body, h1-h6, p, a) that set defaults
7. Remove legacy typography margins/colors (use Tailwind text-* classes instead)
8. Keep utility classes for spacing helpers (.space-y-*) or remove if unused

**Impact:** No visual changes, just moving to Tailwind-first approach

---

#### 2.2 Redesign: app/page.tsx (Home)
**Current State:**
- Hero section with title & description ✓
- 2x2 grid of content blocks (About, Artworks, AFEProject, NFTs) ✓
- CTA section with button ✓
- Uses Image with fill, proper sizes, aspect-square ✓

**Required Changes:**
1. Add proper Metadata with Open Graph tags
   - title: "Tobi Adebayo | Artist & Activist"
   - description: (existing is good)
   - openGraph: { title, description, type: "website", images: [...] }
   - twitter: { card, title, description, images }

2. Optimize hero image if available
   - Add `priority={true}` to first large image in hero
   - Add `placeholder="blur"` if blurDataURL available
   - Verify sizes attribute matches viewport

3. Refactor grid blocks to use consistent spacing
   - Ensure all gaps are Tailwind scale (gap-6, gap-8)
   - Ensure all padding is Tailwind scale (p-4, p-6, p-8)
   - Verify aspect ratios on all images (aspect-square correct here)

4. Standardize text scales
   - Hero h1: text-4xl sm:text-5xl md:text-6xl ✓ (good)
   - Hero p: text-base sm:text-lg md:text-xl ✓ (good)
   - Block h3: text-xl md:text-2xl ✓ (good)

5. Ensure CTA button accessible
   - Verify 44px minimum height (py-2.5 md:py-3 = 10px base + 12px = 22px) ⚠️ NEEDS FIX
   - Should be py-3 md:py-3 or py-2.5 md:py-3.5 (min 44px visual height)

**Estimated Effort:** 1-2 hours

---

#### 2.3 Redesign: app/about/page.tsx
**Current State:**
- Breadcrumb navigation ✓
- Portrait + text section ✓
- Multiple text-only sections ✓
- Good spacing with data-aos animations ✓

**Required Changes:**
1. Verify Metadata is complete
   - Add Open Graph tags with image
   - Add twitter card metadata

2. Optimize hero image (portrait)
   - Change to `priority={true}` (above fold)
   - Add `placeholder="blur"` with blurDataURL
   - Sizes already correct: "(max-width: 768px) 100vw, 50vw"

3. Refactor image container
   - Aspect ratio: currently `aspect-[4/3]` - verify this matches image
   - Could standardize to `aspect-video` (16:9) if portrait is landscape
   - Add responsive margins if needed

4. Typography audit
   - h2 "Artist & Activist": text-2xl sm:text-3xl md:text-4xl ✓ (good)
   - Body text: text-sm sm:text-base md:text-lg ✓ (good)
   - Blockquote: has left border with accent color ✓ (good)
   - Achievement bullets: using icon • with span ✓ (good)

5. Section spacing consistency
   - Verify space-y-8 md:space-y-12 between sections
   - Verify consistent max-width: max-w-4xl ✓ (good)

**Estimated Effort:** 1 hour

---

#### 2.4 Redesign: app/projects/page.tsx (Artworks Gallery)
**Current State:**
- Breadcrumb ✓
- ProjectGallery component (externally rendered)
- Video showcase section ✓

**Required Changes:**
1. Complete Metadata
   - Add Open Graph with gallery thumbnail
   - Add twitter card
   - Ensure description highlights artwork types

2. ProjectGallery component audit
   - **CRITICAL:** Must verify ProjectGallery has:
     - Responsive grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     - Each image in container with aspect-square
     - Image fill prop with proper sizes
     - No priority prop on gallery images (lazy load)
     - Lightbox functionality if needed

3. Video section
   - aspect-video container ✓ (correct)
   - Video element should have poster attribute
   - Add loading="lazy" to video tag if not blocking
   - Consider thumbnail image as fallback

4. Gallery spacing
   - Verify gap-6 md:gap-8 on grid
   - Verify consistent padding: px-4 md:px-6 lg:px-8 ✓ (good)

**Estimated Effort:** 2-3 hours (depends on ProjectGallery complexity)

---

#### 2.5 Redesign: app/contact/page.tsx
**Current State:**
- Breadcrumb ✓
- Image + form layout ✓
- ContactForm component ✓
- Direct contact email section ✓
- Social links section with rounded buttons ✓

**Required Changes:**
1. Verify complete Metadata
   - Add Open Graph tags
   - Add twitter card

2. Image optimization (portrait)
   - Add `priority={true}` (above fold on contact page)
   - Add `placeholder="blur"` with blurDataURL
   - Aspect ratio: currently aspect-[4/3] lg:aspect-square
   - Verify sizes: "(max-width: 1024px) 100vw, 50vw" ✓ (correct)

3. ContactForm component
   - ✓ Already marked as 'use client'
   - ✓ Has proper validation with Zod
   - ⚠️ Input styling: Using inline classes for dark mode
   - ⚠️ Needs refactor to pure Tailwind (no hardcoded border colors)
   - Should use `focus:ring-2 focus:ring-accent` instead of focus:border-black

4. Form section styling
   - Background color: bg-gray-50 dark:bg-zinc-900 ✓ (good)
   - Padding: p-6 md:p-8 lg:p-10 ✓ (good)
   - Border radius: rounded-lg ✓ (good)

5. Social links buttons
   - Currently: rounded-full px-4 py-2 md:px-6 md:py-2.5
   - Verify minimum touch target: 44×44px (py-2 = 8px = too small)
   - NEEDS FIX: Should be at least py-3 (12px) or add height constraint

6. Email link styling
   - break-all class is correct for long email
   - Verify font-size scales correctly: text-base sm:text-lg md:text-2xl ✓ (good)

**Estimated Effort:** 1.5-2 hours

---

#### 2.6 Redesign: app/afeproject/page.tsx
**Current State:**
- Breadcrumb ✓
- Hero text section ✓
- Alternating initiative blocks with images ✓
- Focus areas grid (2x2) ✓
- CTA section ✓

**Required Changes:**
1. Complete Metadata
   - Add Open Graph with initiative image
   - Enhance description for SEO

2. Initiative images
   - 3 images in alternating layout
   - Currently aspect-video
   - Add `priority={false}` explicitly (lazy load)
   - Verify sizes: "(max-width: 1024px) 100vw, 50vw" ✓ (correct)
   - No need for priority placeholders (below fold)

3. Focus areas grid
   - Grid: grid-cols-1 md:grid-cols-2 ✓ (correct)
   - Spacing: gap-6 md:gap-8 ✓ (correct)
   - Border styling: border border-gray-200 dark:border-gray-800 ✓ (good)
   - Padding: p-6 md:p-8 ✓ (good)

4. CTA button
   - Needs minimum height verification (same issue as home page)
   - Should be py-3 md:py-3 (current py-2.5 md:py-3)

5. Text consistency
   - All text scales follow pattern ✓ (good)
   - All sections have max-w-6xl mx-auto ✓ (good)

**Estimated Effort:** 1 hour

---

#### 2.7 Redesign: app/nfts/page.tsx
**Current State:**
- Breadcrumb ✓
- Hero text section ✓
- NFT card grid (3 cards, 1x3 responsive layout) ✓
- About section with 2-column grid ✓
- CTA section ✓

**Required Changes:**
1. Complete Metadata (CRITICAL - currently minimal)
   - Add Open Graph: title, description, image (use nfts.jpg)
   - Add twitter card with image
   - Enhance description for SEO about NFT collection

2. NFT card grid
   - Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ✓ (correct)
   - Spacing: gap-6 md:gap-8 ✓ (correct)
   - Cards have overflow-hidden rounded-lg ✓ (correct)
   - Card images: aspect-square ✓ (correct)
   - Sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" ✓ (correct)
   - No priority needed (below fold)

3. Card styling
   - Shadow: shadow-md hover:shadow-lg ✓ (good)
   - Background: bg-white dark:bg-zinc-800 ✓ (good)
   - Padding: p-4 md:p-6 ✓ (good)

4. About section
   - Grid: grid-cols-1 md:grid-cols-2 ✓ (correct)
   - Spacing: gap-8 md:gap-12 ✓ (good)
   - Text sizing: consistent ✓ (good)

5. CTA button
   - Same touch target issue (py-2.5 md:py-3)

**Estimated Effort:** 1 hour

---

#### 2.8 Redesign: app/publications/page.tsx
**Current State:**
- Breadcrumb ✓
- Featured publications grid (3 items) ✓
- Media appearances section ✓
- Press CTA section ✓

**Required Changes:**
1. Complete Metadata (CRITICAL - currently minimal)
   - Add Open Graph: title, description, image
   - Add twitter card
   - Enhance description for SEO

2. Publications grid
   - Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ✓ (correct)
   - Spacing: gap-6 (should be md:gap-8 for consistency)
   - Cards have border and rounded-lg ✓ (good)
   - Card images: aspect-square ✓ (correct)
   - Sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" ✓ (correct)

3. Card structure
   - Feature type badge: text-[#ee0101] font-medium ✓ (good, uses accent)
   - Card padding: p-5 md:p-6 ✓ (good)
   - Border: border border-gray-200 dark:border-gray-800 ✓ (good)

4. Media section
   - Background: bg-gray-50 dark:bg-zinc-900 ✓ (good)
   - Max width: max-w-4xl mx-auto ✓ (correct)
   - Text scaling: consistent ✓ (good)

5. Press CTA section
   - Background: black with white text ✓ (good)
   - Padding: p-8 md:p-12 ✓ (correct)
   - Border radius: rounded-lg ✓ (good)
   - CTA button: same touch target issue

**Estimated Effort:** 45 minutes

---

#### 2.9 Redesign: app/commission/page.tsx
**Current State:**
- Breadcrumb ✓
- About commissions with image + text ✓
- Commission process with numbered steps ✓
- Commission types bullet list ✓
- CTA section ✓

**Required Changes:**
1. Complete Metadata
   - Add Open Graph: title, description, image
   - Add twitter card
   - Ensure good SEO for commission inquiries

2. Image optimization (commission artwork)
   - Add `priority={true}` (above fold)
   - Add `placeholder="blur"` with blurDataURL
   - Aspect: aspect-[4/3] ✓ (good for portrait artwork)
   - Sizes: "(max-width: 1024px) 100vw, 50vw" ✓ (correct)

3. Process steps styling
   - Numbered circles: w-10 h-10 md:w-12 md:h-12 ✓ (good)
   - Background: bg-[#ee0101] (accent color) ✓ (good)
   - Flex layout with gap: gap-4 md:gap-6 ✓ (correct)
   - Space between steps: space-y-6 md:space-y-8 ✓ (good)

4. Commission types list
   - Uses checkmarks with text ✓ (good)
   - Space-y-3 md:space-y-4 ✓ (good)
   - No bullet styling needed (using ✓ character)

5. CTA section (same button issue as others)

**Estimated Effort:** 45 minutes

---

### Phase 3: globals.css Overhaul

**File:** `Thelight/app/globals.css`

**Current Issues:**
```css
/* Issues to fix: */
- Legacy button styles with transform: translateY
- Form element styling that conflicts with Tailwind
- Utility classes that duplicate Tailwind (.text-center, .mt-4, etc.)
- Font sizes hardcoded in form elements (14px)
```

**Refactored Structure:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Keep CSS variables */
  --background: #ffffff;
  --foreground: #171717;
  --primary: #000000;
  --accent: #ee0101;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

/* Base layer - global typography defaults */
body {
  @apply bg-[color:var(--background)] text-[color:var(--foreground)] antialiased;
  font-family: var(--font-geist-sans), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

h1, h2, h3, h4, h5, h6 {
  @apply text-[color:var(--foreground)] font-semibold;
  line-height: 1.4;
  margin: 0;
}

p {
  @apply text-[color:var(--foreground)];
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}

a {
  @apply text-[color:var(--primary)] no-underline transition-colors duration-300;
}

a:hover, a:focus {
  @apply text-[color:var(--accent)];
}

ul, ol {
  @apply m-0 p-0 list-none;
}

img {
  @apply max-w-full h-auto block;
}

/* Component layer - form elements */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
input[type="tel"],
textarea,
select {
  @apply w-full px-3.75 py-3 border border-gray-300 dark:border-gray-600 rounded;
  @apply bg-[color:var(--background)] text-[color:var(--foreground)] font-inherit;
  @apply transition-colors duration-300;
  font-size: 0.875rem; /* 14px */
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="number"]:focus,
input[type="tel"]:focus,
textarea:focus,
select:focus {
  @apply outline-none border-[color:var(--primary)];
}

/* Alternative: Use Tailwind classes in components instead of CSS */
/* This is preferred for easier maintenance */
```

**Key Changes:**
1. Move base typography to CSS (h1-h6, p, a, body)
2. Use @apply for form styling but keep minimal
3. Remove utility classes like .text-center, .mt-4 (use Tailwind in JSX)
4. Remove button styles (use Tailwind button components)
5. Keep CSS variables for theme colors
6. Keep responsive fonts if using CSS (but prefer Tailwind in JSX)

**Estimated Effort:** 1-2 hours

---

### Phase 4: Form Elements & ContactForm Optimization

**File:** `Thelight/components/forms/ContactForm.tsx`

**Current Issues:**
- Hardcoded border colors in input classes
- Should use Tailwind ring system for focus states
- Missing accessibility attributes (aria-invalid, aria-describedby)

**Required Changes:**
1. Refactor input styling
```typescript
// BEFORE (has hardcoded colors)
className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded 
           focus:outline-none focus:border-black dark:focus:border-white 
           dark:bg-zinc-800 dark:text-white transition-colors"

// AFTER (use Tailwind utilities)
className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 
           bg-white dark:bg-zinc-800 text-black dark:text-white 
           focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] 
           transition-colors duration-300"
```

2. Add accessibility attributes
```typescript
<input
  {...register('fullName')}
  type="text"
  aria-invalid={errors.fullName ? "true" : "false"}
  aria-describedby="fullName-error"
  // ... rest of props
/>
{errors.fullName && (
  <p id="fullName-error" className="text-red-600 text-sm mt-1">
    {errors.fullName.message}
  </p>
)}
```

3. Ensure button meets touch target
```typescript
// BEFORE
className="w-full px-6 py-3 bg-black text-white font-semibold rounded-full ..."

// After (already correct at py-3 = 12px base)
// But verify visual height is >= 44px with padding
```

4. Extract form field component
```typescript
// Create reusable FormField component
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({ label, error, required, children }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  )
}
```

**Estimated Effort:** 1-2 hours

---

### Phase 5: Image Optimization & Blur Placeholders

**Decision:** Need to identify which images are highest priority for blur placeholders

**Candidates for `priority={true}` and `placeholder="blur"`:**
1. `app/page.tsx` - Hero image (if exists) or first grid image
2. `app/about/page.tsx` - Portrait image (above fold)
3. `app/projects/page.tsx` - First gallery image
4. `app/contact/page.tsx` - Portrait image (above fold)
5. `app/commission/page.tsx` - Commission artwork (above fold)

**Action Items:**
1. For each priority image, generate a blurDataURL
   - Use `plaiceholder.co` or `sharp` library
   - Create tiny (10px width) placeholder image
   - Encode as base64 data URI
   - Add to Image component as `placeholder="blur" blurDataURL="data:image/..."`

2. Update non-priority images to explicitly use `priority={false}` (default)
   - Gallery images: lazy load
   - Below-fold images: lazy load

**Example Pattern:**
```typescript
<Image
  src="/images/hero.jpg"
  alt="Hero image"
  fill
  priority={true}  // Above fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJR..."
  sizes="(max-width: 768px) 100vw, 100vw"
  className="object-cover"
/>
```

**Estimated Effort:** 2-3 hours (depends on number of images)

---

### Phase 6: Responsive Button Audit

**Issue:** CTA buttons may not meet 44×44px minimum touch target

**Affected Buttons:**
1. `app/page.tsx` - "Contact Me" button
2. `app/afeproject/page.tsx` - "Contact Us" button
3. `app/contact/page.tsx` - Social link buttons (many)
4. `app/nfts/page.tsx` - "Get in Touch" button
5. `app/publications/page.tsx` - "Contact for Press" button
6. `app/commission/page.tsx` - "Start a Commission" button

**Current Pattern:**
```typescript
className="px-6 md:px-8 py-2.5 md:py-3 ... rounded-full"
// py-2.5 = 10px (too small for touch)
// py-3 = 12px (meets minimum with padding)
```

**Fix:**
```typescript
// Ensure visual height >= 44px
// With typical line-height and font-size, needs py-3 at minimum
className="px-6 md:px-8 py-3 md:py-3.5 ... rounded-full"
// Or add explicit min-h-[44px] for safety
className="px-6 md:px-8 py-3 min-h-[44px] flex items-center ... rounded-full"
```

**Note:** For social link buttons in contact page, check if flex layout adds extra height

**Estimated Effort:** 30 minutes

---

## PART 4: EDGE CASES & CAVEATS

### A. App Router Specific Caveats

1. **Dynamic Routes**
   - Current: All pages are static routes
   - ⚠️ If adding dynamic routes (e.g., `/projects/[id]`), must use:
     - `generateMetadata()` for dynamic metadata
     - `generateStaticParams()` for static pre-rendering

2. **Data Fetching**
   - ✅ Current: No server-side data fetching (all static content)
   - If adding dynamic content (blog, portfolio items):
     - Use `fetch()` in server components (cached by default)
     - Use `revalidateTag()` for ISR (Incremental Static Regeneration)

3. **Search Engine Optimization**
   - ✅ Must include Metadata in each page for Next.js SEO
   - ⚠️ Missing: XML sitemap (need `sitemap.ts` in `/app`)
   - ⚠️ Missing: robots.txt (need `robots.ts` in `/app`)

4. **Performance**
   - Layout shift: All pages appear to prevent CLS properly
   - ⚠️ No Service Worker observed (offline support not implemented)
   - ⚠️ No WebP serving detected (Next.js Image handles this)

---

### B. CSS-Specific Caveats

1. **CSS Variables & Dark Mode**
   - ✓ Using CSS variables correctly
   - ⚠️ Media query `prefers-color-scheme` works, but Next.js dark mode package might override
   - Ensure no conflicts between Tailwind dark mode and manual CSS vars

2. **Responsive Breakpoints**
   - ✓ Using standard Tailwind breakpoints (sm, md, lg, xl)
   - ⚠️ No custom breakpoints detected (good - use standard)
   - Note: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`

3. **PurgeCSS / Tailwind Purging**
   - ✓ tailwind.config.ts includes content paths correctly
   - ⚠️ Risk: If dynamically generating classNames with template literals, classes will be purged
   - Ensure all classes in className are static strings

4. **Color Contrast (WCAG AA)**
   - ✓ Black text on white background: AAA compliant (21:1 ratio)
   - ⚠️ Red accent (#ee0101) on white: ~3.5:1 ratio - may fail WCAG AA for small text
   - Recommendation: Use darker red for text (#c00000) or larger font

5. **Font Rendering**
   - ✓ Using Geist font from next/font/google (optimal)
   - ✓ System fallbacks included
   - ⚠️ Verify font-display: swap is used (Next.js default)

---

### C. Performance Caveats

1. **Image Optimization**
   - ✓ Using Next.js Image component
   - ⚠️ Currently missing blur placeholders (impacts LCP)
   - ⚠️ priority prop not fully optimized

2. **Code Splitting**
   - ✓ Route-based code splitting (automatic with App Router)
   - ProjectGallery component: Check if lazy loaded or always loaded

3. **Bundle Size**
   - Check dependencies: react-hook-form, zod, framer-motion (AOS provider)
   - ✓ All appear to be necessary

4. **API Routes**
   - `/api/contact/route.ts` exists - verify:
     - Proper error handling
     - Rate limiting
     - Input validation (Zod schema)
     - Spam protection (if needed)

---

### D. Accessibility (a11y) Caveats

1. **Semantic HTML**
   - ✓ Using <section>, <article>, <nav> appropriately
   - ⚠️ Missing: <main> tag (but layout.tsx wraps in <main>)

2. **Link Accessibility**
   - ✓ Breadcrumb links have proper hover states
   - ⚠️ Check: Buttons vs Links - are they semantic?

3. **Form Accessibility**
   - ContactForm: Missing aria-invalid, aria-describedby
   - Inputs lack associated labels (rely on react-hook-form register)
   - Should add aria-label or ensure label is connected

4. **Color Contrast**
   - ⚠️ Red accent (#ee0101) on white < 4.5:1 (fails WCAG AA)
   - Recommendation: Verify accent color usage for text

5. **Focus States**
   - ✓ Links have focus states
   - ⚠️ Verify all interactive elements have visible focus indicators
   - Should use focus:ring for consistency

---

## PART 5: VALIDATION CHECKLIST

### Before Implementation
- [ ] Backup current codebase
- [ ] Create feature branch: `feature/app-router-redesign`
- [ ] Review all image paths exist in `/public/images/`
- [ ] Verify all external links (Instagram, Twitter, etc.) are current
- [ ] Test dark mode across all pages

### During Implementation (Per Phase)
- [ ] globals.css refactored to Tailwind-first
- [ ] Each page has complete Metadata with OG/Twitter tags
- [ ] All images have proper fill + sizes + aspect ratio
- [ ] Priority images have priority={true} + placeholder="blur"
- [ ] All buttons meet 44×44px minimum (test on mobile)
- [ ] Form accessibility improved with aria attributes
- [ ] No PurgeCSS warnings in build output
- [ ] No TypeScript errors (`next build`)

### Testing Checklist
- [ ] **Mobile (375px):** No horizontal scroll, readable text, touch targets >= 44px
- [ ] **Tablet (768px):** Proper 2-column layouts, images scale correctly
- [ ] **Desktop (1024px+):** Full width layouts visible, no excessive spacing
- [ ] **Dark Mode:** All text readable, contrast >= 4.5:1
- [ ] **Images:** Load quickly, no layout shift, responsive
- [ ] **Forms:** Validation messages clear, inputs accessible
- [ ] **Links:** All external links open, breadcrumbs work
- [ ] **Performance:** Lighthouse score >= 90 for all pages

### After Implementation
- [ ] Performance audit (Lighthouse)
- [ ] Web Vitals check (LCP, FID, CLS)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] Accessibility audit (WAVE, axe DevTools)
- [ ] SEO audit (sitemap, robots.txt, metadata)
- [ ] Deploy to staging before production

---

## PART 6: DEPENDENCY & VERSION NOTES

### Current Stack
- **Next.js:** 14.x+ (App Router stable)
- **React:** 18.x+ (with RSC support)
- **Tailwind CSS:** 3.x+ (with arbitrary values support)
- **Form Libraries:** react-hook-form + zod (current)
- **Image Handling:** next/image (built-in)
- **Animations:** AOS via provider (external)
- **Fonts:** next/font/google (Geist)

### Potential Issues
- ⚠️ AOS library may not work optimally with App Router (prefer Framer Motion or custom)
- ✅ React Hook Form + Zod: Excellent for form handling
- ✅ Tailwind v3: Supports all required features

---

## PART 7: ESTIMATED TIMELINE

| Phase | Component | Effort | Priority |
|-------|-----------|--------|----------|
| 1.1 | Design Token System | 1-2h | High |
| 1.2 | Tailwind Config Update | 30m | High |
| 1.3 | globals.css Audit | 1-2h | High |
| 2.1 | globals.css Refactor | 1-2h | High |
| 2.2 | app/page.tsx | 1-2h | High |
| 2.3 | app/about/page.tsx | 1h | High |
| 2.4 | app/projects/page.tsx | 2-3h | High |
| 2.5 | app/contact/page.tsx | 1.5-2h | High |
| 2.6 | app/afeproject/page.tsx | 1h | Medium |
| 2.7 | app/nfts/page.tsx | 1h | Medium |
| 2.8 | app/publications/page.tsx | 45m | Medium |
| 2.9 | app/commission/page.tsx | 45m | Medium |
| 3 | globals.css Final | 1-2h | High |
| 4 | ContactForm Optimization | 1-2h | High |
| 5 | Image Optimization | 2-3h | High |
| 6 | Button Audit | 30m | Low |
| **Total** | | **20-32 hours** | |

**Recommended Approach:**
- **Week 1:** Phases 1-3 (Setup & globals.css overhaul)
- **Week 2:** Phase 2 (Redesign pages in priority order)
- **Week 3:** Phases 4-6 (Forms, images, final audit)
- **Week 4:** Testing, performance optimization, deployment

---

## PART 8: SUCCESS CRITERIA

✅ All pages have complete, SEO-optimized Metadata  
✅ All images properly optimized with fill + sizes + aspect ratio  
✅ globals.css refactored to Tailwind-first approach  
✅ ContactForm accessible with proper aria attributes  
✅ All buttons meet 44×44px minimum touch target  
✅ Mobile responsive at 375px, 768px, 1024px+ breakpoints  
✅ Dark mode fully functional and accessible  
✅ Lighthouse performance score >= 90 on all pages  
✅ No PurgeCSS warnings in build output  
✅ WCAG AA accessibility compliance (except accent color on text)  
✅ Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1  
✅ All external links and navigation working correctly  

---

## SUMMARY

This implementation plan provides a **doc-backed, systematic approach** to redesigning Tobi Adebayo's portfolio using Next.js App Router best practices and modern Tailwind CSS patterns. The plan addresses:

1. **Documentation-Backed Rules** - Based on official Next.js Image Optimization, App Router patterns, and Tailwind CSS best practices
2. **Current State Analysis** - Identified 8+ issues with metadata, image optimization, and CSS organization
3. **8-Page Redesign Strategy** - Detailed requirements for each page with specific CSS classes and layout patterns
4. **globals.css Overhaul** - Moving from legacy CSS to Tailwind-first approach
5. **Edge Cases & Caveats** - App Router limitations, CSS purging risks, accessibility considerations
6. **Timeline & Effort Estimation** - 20-32 hours total with phased approach
7. **Success Criteria** - Measurable outcomes for performance, accessibility, and SEO

**No code changes have been made** - this is purely a planning document ready for implementation by the development team.

