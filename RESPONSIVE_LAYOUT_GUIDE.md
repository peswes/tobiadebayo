# Responsive Layout & App Router Caveats Guide

## 📐 Layout Patterns Used in Current Implementation

### Pattern 1: Two-Column Hero + Content (Contact, Commission, About)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
    <Image fill sizes="(max-width: 1024px) 100vw, 50vw" />
  </div>
  <div className="space-y-8">
    {/* Content */}
  </div>
</div>
```

**Responsive Behavior:**
- **Mobile (< 1024px):** Single column, image full width
- **Desktop (1024px+):** Image left, content right, aligned at top

**Common Issues:**
- Image aspect ratio on mobile should be landscape (4:3)
- On desktop, should match content height
- Fix: Use aspect-[4/3] on mobile, let container size on desktop

---

### Pattern 2: Feature Grid (Projects, Publications, NFTs)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {items.map(item => (
    <div key={item.id} className="rounded-lg overflow-hidden">
      <div className="relative w-full aspect-square">
        <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
      </div>
      <div className="p-4 md:p-6">
        {/* Card content */}
      </div>
    </div>
  ))}
</div>
```

**Responsive Behavior:**
- **Mobile (< 768px):** 1 column, full width
- **Tablet (768-1023px):** 2 columns
- **Desktop (1024px+):** 3 columns

**Sizing Logic:**
- Mobile: Image width = viewport width = ~100vw
- Tablet: Image width = 50% of viewport = ~50vw (but 2 columns, so ~50% of container)
- Desktop: Image width = 33% of viewport = ~33vw (3 columns)

**Formula for sizes prop:**
```
(max-width: 768px) 100vw,           // Mobile: full viewport
(max-width: 1024px) 50vw,           // Tablet: half viewport  
33vw                                // Desktop: third viewport
```

**Why:** Tells browser what size image will actually render at, so it can choose optimal image size

---

### Pattern 3: Alternating Layout (AFE Project)
```tsx
<div className={`flex flex-col gap-6 md:gap-10 items-center 
  ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
  <div className="w-full lg:w-1/2">
    <Image aspect-video fill sizes="(max-width: 1024px) 100vw, 50vw" />
  </div>
  <div className="w-full lg:w-1/2">
    {/* Content */}
  </div>
</div>
```

**Responsive Behavior:**
- **Mobile/Tablet (< 1024px):** Single column, image full width
- **Desktop (1024px+):** 
  - Even items: Image left, content right
  - Odd items: Content left, image right

**Width Control:**
- Mobile: w-full (100%) 
- Desktop: lg:w-1/2 (50%)

---

### Pattern 4: Breadcrumb Navigation
```tsx
<nav className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
  <Link href="/" className="transition-colors hover:text-[#ee0101]">Home</Link>
  <span className="text-gray-400">/</span>
  <Link href="/current" className="text-black dark:text-white font-medium">Current</Link>
</nav>
```

**Responsive Text:**
- Mobile: text-sm (14px)
- Tablet: sm:text-base (16px)
- Desktop: md:text-lg (18px)

**Gap:** gap-2 (8px) consistent across all breakpoints

---

### Pattern 5: Hero Section (Page Title + Description)
```tsx
<section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
      Title
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
      Description
    </p>
  </div>
</section>
```

**Responsive Behavior:**
- **Padding (vertical):**
  - Mobile: py-12 (48px)
  - Tablet: md:py-16 (64px)
  - Desktop: lg:py-20 (80px)

- **Padding (horizontal):**
  - Mobile: px-4 (16px)
  - Tablet: md:px-6 (24px)
  - Desktop: lg:px-8 (32px)

- **Max width:** max-w-6xl (64rem = 1024px)
  - Ensures content doesn't stretch on ultra-wide screens
  - Centered with mx-auto

- **Heading sizes:**
  - Mobile: text-4xl (36px)
  - Tablet: sm:text-5xl (48px)
  - Desktop: md:text-6xl (60px)

---

## 🎯 Aspect Ratio Decision Tree

```
Question: What's the content?
│
├─ Portrait/Square (person, artwork)
│  └─ Use: aspect-square (1:1) or aspect-[4/3]
│     Example: Profile images, gallery items
│
├─ Landscape (scenery, banner)
│  └─ Use: aspect-video (16:9)
│     Example: Hero images, showcase videos
│
├─ Custom (specific needs)
│  └─ Use: aspect-[width/height]
│     Example: aspect-[3/2] for landscape portraits
│
└─ Unknown/Flexible
   └─ Use: aspect-auto with container height
      Example: <div className="h-[400px]">
```

**Container Layout:**
```tsx
// Square image
<div className="relative w-full aspect-square">
  <Image fill ... />
</div>

// Landscape image (16:9)
<div className="relative w-full aspect-video">
  <Image fill ... />
</div>

// Custom aspect ratio
<div className="relative w-full aspect-[4/3]">
  <Image fill ... />
</div>
```

---

## 🔧 App Router Layout Specifics

### Root Layout (`layout.tsx`)
```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="...">
        <Header />
        <AosProvider>
          <main className="min-h-screen">{children}</main>
        </AosProvider>
        <Footer />
      </body>
    </html>
  )
}
```

**Key Points:**
- ✅ Header & Footer wrap all pages
- ✅ Provider (AOS) wraps main content
- ✅ <main> tag inside body (semantic HTML)
- ✅ min-h-screen ensures footer sticks if content is short

**Metadata Inheritance:**
- Root layout metadata is default
- Each page `page.tsx` overrides with specific metadata
- Next.js merges root + page metadata

### Page Layout (`app/[route]/page.tsx`)
```tsx
export const metadata = {
  title: "Page | Tobi Adebayo",
  // ...
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Page content */}
    </div>
  )
}
```

**Pattern:**
- Each page is a server component (no 'use client' unless needed)
- Page wraps content in min-h-screen div
- Background color applied for dark mode
- Page metadata exported as named constant

---

## ⚠️ App Router Caveats & Gotchas

### Caveat 1: Metadata Not Exported = Missing Tags
**Problem:** Forgetting to export metadata on a page

```tsx
// ❌ WRONG: No metadata
export default function Page() {
  return <div>Page</div>
}

// ✅ CORRECT: Export metadata
export const metadata: Metadata = { ... }
export default function Page() {
  return <div>Page</div>
}
```

**Impact:** SEO suffers, social media cards don't work

**Fix:** Every page MUST have metadata export

---

### Caveat 2: CSS Variables in Dark Mode
**Problem:** CSS variables might not update with dark mode toggle

```css
/* In globals.css */
:root {
  --primary: #000000;
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary: #ffffff;
  }
}
```

**Caveat:** If using Tailwind dark mode plugin, may conflict

**Solution:**
- Use `dark:` prefix in Tailwind classes
- Only use CSS variables for truly theme-agnostic values (spacing, etc.)

---

### Caveat 3: Image Priority & LCP
**Problem:** Multiple images with `priority={true}` waste resources

```tsx
// ❌ WRONG: All images prioritized
<Image src="..." priority={true} />  // Hero
<Image src="..." priority={true} />  // Below fold
<Image src="..." priority={true} />  // Gallery

// ✅ CORRECT: Only LCP image prioritized
<Image src="..." priority={true} placeholder="blur" />  // Hero
<Image src="..." />  // Rest lazy load by default
```

**LCP Candidates (max 1-2 per page):**
- Hero image
- First gallery item (sometimes)
- Above-fold portrait

---

### Caveat 4: Image Sizes Prop Precision
**Problem:** Incorrect sizes prop causes wrong image size selection

```tsx
// ❌ WRONG: Sizes don't match actual layout
<Image
  src="..."
  sizes="100vw"  // Says full width
  className="w-1/2"  // But renders at 50%!
/>

// ✅ CORRECT: Sizes match layout
<Image
  src="..."
  sizes="(max-width: 768px) 100vw, 50vw"  // Actual widths
  className="w-full md:w-1/2"
/>
```

**Impact:** Browser downloads wrong image size (performance hit)

**Rule:** sizes width = max-width of container in CSS

---

### Caveat 5: Layout Shift from Images
**Problem:** Image loads after text, pushing content down

```tsx
// ❌ WRONG: No container height
<Image fill src="..." />

// ✅ CORRECT: Container sized first
<div className="relative w-full aspect-square">
  <Image fill src="..." />
</div>
```

**Metric:** CLS (Cumulative Layout Shift) must be < 0.1

---

### Caveat 6: Form Submissions in App Router
**Problem:** Form might use stale data in server components

```tsx
// ContactForm is 'use client' - correct!
'use client'

function ContactForm() {
  async function onSubmit(data) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}
```

**Caveat:**
- Client component (use client) needed for interactivity
- Must fetch to API route (no direct server function calls from client form)
- API route validates and processes on server

---

### Caveat 7: CSS Purging with Tailwind
**Problem:** Dynamic class names get purged from CSS

```tsx
// ❌ WRONG: Purged - variable in template literal
const size = 'md'
className={`p-${size}`}  // Tailwind can't find "p-md"

// ✅ RIGHT: Static string
const sizeMap = { md: 'p-4', lg: 'p-6' }
className={sizeMap[size]}  // p-4 exists in CSS

// ✅ GOOD: Conditional
size === 'md' ? 'p-4' : 'p-6'
```

**Safe Classes:**
- All must be complete strings in source code
- Variables can't be inside class names
- Tailwind scans static strings only

---

### Caveat 8: Dark Mode Class Not Updating
**Problem:** Dark mode class (dark:) not applying on manual toggle

```tsx
// ✅ GOOD: Uses CSS variable for mode-agnostic styling
<div className="bg-white dark:bg-black text-black dark:text-white">

// ⚠️ RISKY: Relies on document.documentElement.classList
<div className="bg-white dark:bg-black">
```

**Note:** Current implementation uses `@media (prefers-color-scheme: dark)` which respects OS preference. For manual toggle, need different approach.

---

### Caveat 9: Aspect Ratio on Different Sizes
**Problem:** Using fixed aspect ratio on flexible container

```tsx
// ❌ RISKY: Aspect ratio changes layout
<div className="w-full aspect-video">
  {/* Height calculated from 16:9 of width */}
  {/* If width changes, height changes */}
</div>

// ✅ BETTER: Explicit sizing where needed
<div className="w-full max-h-[600px] aspect-video">
  {/* Bounded to prevent excessively tall layouts */}
</div>
```

**Test:** Verify images don't stretch oddly on ultra-wide screens (> 1920px)

---

### Caveat 10: Font Loading & Flash of Unstyled Text (FOUT)
**Problem:** Custom fonts load late, causing text shift

```tsx
// ✅ CORRECT: Next.js font optimization
import { Geist } from "next/font/google"

const geistSans = Geist({ variable: "--font-geist-sans" })

<body className={geistSans.variable}>
```

**Note:** Current implementation does this correctly. Fonts load optimally via Next.js.

---

## 🎨 Responsive Text Scaling Strategy

### Heading Hierarchy
```
H1: text-4xl sm:text-5xl md:text-6xl
    (36px → 48px → 60px)
    
H2: text-2xl sm:text-3xl md:text-4xl
    (24px → 30px → 36px)
    
H3: text-xl sm:text-2xl md:text-3xl
    (20px → 24px → 30px)
    
H4: text-lg sm:text-xl md:text-2xl
    (18px → 20px → 24px)
```

### Body Text
```
Large text: text-lg sm:text-xl md:text-2xl
            (18px → 20px → 24px) - for hero copy

Normal: text-base sm:text-lg md:text-lg
        (16px → 18px → 18px) - for paragraphs

Small: text-sm sm:text-base md:text-base
       (14px → 16px → 16px) - for labels, captions

Tiny: text-xs sm:text-sm md:text-sm
      (12px → 14px → 14px) - for metadata
```

### Line Heights
```
Headings: leading-tight (line-height: 1.25)
Paragraphs: leading-relaxed (line-height: 1.625)
```

---

## 🧪 Testing Breakpoints

### Critical Test Sizes
```
375px   - iPhone SE (min mobile width)
390px   - iPhone 14 (standard phone)
414px   - iPhone 14+ (large phone)
768px   - iPad (min tablet width)
1024px  - iPad Pro / min desktop
1440px  - Laptop screen
1920px  - Large desktop
```

### What to Check at Each Size
```
375px:  [No horizontal scroll, readable text, tap targets >= 44px]
768px:  [2-column layouts correct, images scale, spacing right]
1024px: [3-column layouts appear, sidebar visible, full desktop]
1920px: [Max-width constraint working, content not too wide, no gaps]
```

---

## 🚀 Performance Impact by Pattern

### Grid Layouts (Best)
```tsx
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```
✅ Explicit breakpoints  
✅ No JavaScript needed  
✅ CSS handles layout  
✅ Fast rendering  

### Flex Layouts (Good)
```tsx
flex flex-col md:flex-row
```
✅ Responsive direction change  
✅ Alignment properties flexible  
✅ But can be less predictable than grid  

### Absolute Positioning (Bad)
```tsx
absolute top-0 left-0
```
❌ Breaks responsive design  
❌ Hard to maintain  
❌ Not flexible to content  
❌ Avoid for layout  

---

## 📊 Container Queries (Advanced)

**Future-Proof Pattern (Tailwind 3+):**
```tsx
<div className="@container">
  <div className="text-sm @md:text-lg">
    {/* Responds to parent container width, not viewport */}
  </div>
</div>
```

**Current Status:** Not used in codebase, but available for future enhancement

---

## Summary Table: Responsive Patterns

| Pattern | When to Use | Breakpoints | Example |
|---------|------------|------------|---------|
| **Grid 1→2→3** | Feature cards, gallery | md:cols-2 lg:cols-3 | Projects, NFTs |
| **Hero 1→2** | Two-column layout | lg:flex-row | Contact, Commission |
| **Alternating** | Content showcase | lg:flex-row-reverse | AFE initiatives |
| **Breadcrumb** | Navigation | sm: lg: sizing | All pages |
| **Hero Section** | Page header | md: lg: padding | All pages |
| **Button** | CTA | py-3 md:py-3 | All pages |
| **Full Width** | Sections | px-4 md:px-6 | All pages |

---

## ✅ Responsive Validation Checklist

- [ ] **Tested at 375px:** No horizontal scroll, text readable
- [ ] **Tested at 768px:** 2-column grids appear, images scale correctly
- [ ] **Tested at 1024px:** Full layout visible, 3-column grids working
- [ ] **Tested at 1920px:** Max-width constraint applied, no excess gaps
- [ ] **Images:** Maintain aspect ratio at all sizes
- [ ] **Text:** Scales appropriately, no overflow
- [ ] **Buttons:** All >= 44px, tap targets large enough
- [ ] **Dark Mode:** Text visible at all breakpoints
- [ ] **Touch Targets:** No elements < 44px × 44px
- [ ] **CLS:** No layout shift on image load

