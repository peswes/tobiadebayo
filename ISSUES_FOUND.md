# Issues Found During Planning Phase

## 🔴 Critical Issues (Must Fix)

### 1. Missing Blur Placeholders on Images
**Impact:** Impacts Core Web Vitals (LCP), worse perceived performance  
**Pages Affected:** All pages with images  
**Severity:** HIGH - Performance  
**Fix:** Generate blurDataURL for above-fold images  
**Effort:** 2-3 hours (need to generate data URIs)

**Current State:**
```tsx
<Image src="/images/tobi.jpg" fill priority={true} />
```

**Required State:**
```tsx
<Image 
  src="/images/tobi.jpg" 
  fill 
  priority={true}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..." 
/>
```

---

### 2. Incomplete Metadata on /nfts and /publications
**Impact:** Poor SEO, broken social media cards  
**Pages Affected:** /nfts, /publications  
**Severity:** HIGH - SEO  
**Fix:** Add complete Metadata with openGraph and twitter tags  
**Effort:** 30 minutes (copy pattern from other pages)

**Current State (NFTs):**
```typescript
export const metadata: Metadata = {
  title: "NFTs | Tobi Adebayo",
  description: "Explore Tobi Adebayo's digital art and NFT collection on the blockchain.",
}
```

**Missing:**
- openGraph object with title, description, image, type, url
- twitter card with card type, title, description, image

---

### 3. Buttons Below 44px Touch Target
**Impact:** Accessibility failure on mobile  
**Pages Affected:** All CTA buttons (home, afeproject, nfts, publications, commission)  
**Severity:** HIGH - Accessibility  
**Fix:** Increase py value from py-2.5 to py-3 or add min-h-[44px]  
**Effort:** 30 minutes (search and replace)

**Current Pattern:**
```tsx
className="px-6 md:px-8 py-2.5 md:py-3 ... rounded-full"
// py-2.5 = 10px (too small for 44px minimum)
```

**Fixed Pattern:**
```tsx
className="px-6 md:px-8 py-3 md:py-3.5 min-h-[44px] ... rounded-full"
// Ensures visual height >= 44px
```

**Locations:**
1. `app/page.tsx` - "Contact Me" button
2. `app/afeproject/page.tsx` - "Contact Us" button
3. `app/contact/page.tsx` - Social link buttons
4. `app/nfts/page.tsx` - "Get in Touch" button
5. `app/publications/page.tsx` - "Contact for Press" button
6. `app/commission/page.tsx` - "Start a Commission" button

---

### 4. globals.css Contains Legacy CSS
**Impact:** Maintenance burden, mixed styling approaches, potential conflicts  
**Severity:** HIGH - Code Quality  
**Scope:** globals.css file  
**Fix:** Refactor to Tailwind-first approach  
**Effort:** 1-2 hours

**Current Issues:**
```css
/* Legacy button styles with transform */
button:hover {
  transform: translateY(-2px);  /* Should be Tailwind translate-y */
}

/* Hardcoded form element styling */
input[type="text"] {
  width: 100%;                  /* Should be w-full in Tailwind */
  padding: 12px 15px;          /* Should be px-3.75 py-3 */
  border: 1px solid #e0e0e0;   /* Should be Tailwind border-gray-300 */
  border-radius: 4px;          /* Should be rounded */
  font-size: 14px;             /* Should be text-sm */
}

/* Utility classes that duplicate Tailwind */
.text-center { text-align: center; }   /* Already built into Tailwind */
.mt-4 { margin-top: 1rem; }             /* Duplicate of Tailwind */
.gap-4 { gap: 1rem; }                   /* Duplicate of Tailwind */
```

**Fix:**
- Keep only @tailwind directives
- Keep CSS variables (:root)
- Move button/form styles to pure Tailwind in components
- Remove utility class duplicates
- Add base typography rules (h1-h6, p, a)

---

### 5. ContactForm Missing Accessibility Attributes
**Impact:** Form doesn't announce errors properly, accessibility failure  
**Component:** `components/forms/ContactForm.tsx`  
**Severity:** HIGH - Accessibility  
**Fix:** Add aria-invalid, aria-describedby, ensure semantic labels  
**Effort:** 1 hour

**Current State:**
```tsx
<input {...register('fullName')} type="text" />
{errors.fullName && (
  <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
)}
```

**Fixed State:**
```tsx
<input 
  {...register('fullName')} 
  type="text"
  aria-invalid={errors.fullName ? "true" : "false"}
  aria-describedby={errors.fullName ? "fullName-error" : undefined}
/>
{errors.fullName && (
  <p id="fullName-error" className="text-red-600 text-sm mt-1">
    {errors.fullName.message}
  </p>
)}
```

---

## 🟠 High Priority Issues (Important)

### 6. Image Priority Not Optimized
**Impact:** All images get same treatment regardless of position  
**Pages Affected:** All pages with multiple images  
**Severity:** HIGH - Performance  
**Fix:** Identify LCP candidates and set priority appropriately  
**Effort:** 1 hour (per page)

**Current State:**
All images use fill without explicit priority (defaults to false)

**Required:**
- Hero images: priority={true}
- Gallery/below-fold images: priority={false} (explicit or default)
- Only 1-2 images per page should have priority

**LCP Candidates:**
| Page | LCP Image |
|------|-----------|
| / (home) | First grid image? (unclear without rendering) |
| /about | Portrait image (above fold) |
| /projects | First gallery image |
| /contact | Portrait image (left side) |
| /afeproject | No above-fold images |
| /nfts | No above-fold images |
| /publications | No above-fold images |
| /commission | Commission artwork (above fold) |

---

### 7. ContactForm Using Inline Classes for Dark Mode
**Impact:** Harder to maintain, not following pure Tailwind approach  
**Component:** `components/forms/ContactForm.tsx` lines 62-78, 108  
**Severity:** MEDIUM - Code Quality  
**Fix:** Extract to Tailwind utility classes only  
**Effort:** 30 minutes

**Current Issue:**
```tsx
className="... dark:border-gray-600 ... dark:bg-zinc-800 dark:text-white transition-colors"
```

Should move all dark mode styling to consistent Tailwind patterns.

---

### 8. Accent Color Contrast Fails WCAG AA
**Impact:** Red text (#ee0101) on white background fails 4.5:1 ratio (only 3.5:1)  
**Pages Affected:** Any page using accent color for text  
**Severity:** MEDIUM - Accessibility  
**Current:** #ee0101 (bright red)  
**WCAG AA Compliant:** Use #c00000 (darker red) instead  

**Affected Elements:**
- Breadcrumb hover states: `.transition-colors hover:text-[#ee0101]`
- Feature type badges: `text-[#ee0101] font-medium`
- Achievement bullets: `text-[#ee0101]`
- Link hover states

**Recommendation:**
- Option A: Change accent color to darker shade
- Option B: Keep accent for backgrounds/decorative elements, use different color for text
- Option C: Use accent only on large text where contrast is less critical

---

### 9. Image Aspect Ratios Inconsistent
**Impact:** Confusing to maintain, potential visual inconsistencies  
**Pages Affected:** Multiple pages  
**Severity:** MEDIUM - Consistency  

**Inconsistencies Found:**
```
app/page.tsx:           aspect-square (all grid items)
app/about/page.tsx:     aspect-[4/3] (portrait)
app/projects/page.tsx:  (via ProjectGallery - unknown)
app/contact/page.tsx:   aspect-[4/3] lg:aspect-square (responsive)
app/afeproject/page.tsx: aspect-video (alternating layout)
app/nfts/page.tsx:      aspect-square (cards)
app/publications/page.tsx: aspect-square (cards)
app/commission/page.tsx: aspect-[4/3] (artwork)
```

**Recommendation:** Standardize to 2-3 consistent ratios:
- Portrait/Profile: `aspect-square` or `aspect-[4/3]`
- Landscape/Hero: `aspect-video` (16:9)
- Flexible: Let container size determine

---

### 10. ProjectGallery Component Not Audited
**Impact:** Unknown if following Next.js Image best practices  
**Component:** `components/ProjectGallery.tsx`  
**Severity:** MEDIUM - Unknown  
**Action:** Must audit this component  
**Effort:** 1-2 hours (depends on complexity)

**Critical Questions:**
- Does it use `fill` prop with containers?
- Does each image have `sizes` prop?
- Are images using aspect ratios?
- Is priority set correctly?
- Does it handle responsive grids?
- Is lightbox functionality properly implemented?

---

## 🟡 Medium Priority Issues (Should Fix)

### 11. Text Size Scaling Inconsistent
**Impact:** Some text doesn't scale properly across breakpoints  
**Pages Affected:** Various (scattered)  
**Severity:** MEDIUM - Consistency  

**Issues Found:**
```
Some pages use: text-lg (constant)
Others use: text-base sm:text-lg md:text-lg (scaling)

Should be consistent pattern across all pages:
text-[size] sm:text-[size+1] md:text-[size+2]
```

---

### 12. Missing Sitemap & robots.txt
**Impact:** SEO degradation, crawlers may not index all pages  
**Files:** Missing `/app/sitemap.ts` and `/app/robots.ts`  
**Severity:** MEDIUM - SEO  
**Fix:** Create both files in `/app` directory  
**Effort:** 30 minutes

**Required Files:**
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://tobiadelayo.com', lastModified: '2024-01-01' },
    { url: 'https://tobiadelayo.com/about', ... },
    // etc.
  ]
}

// app/robots.ts
export default {
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  sitemap: 'https://tobiadelayo.com/sitemap.xml',
}
```

---

### 13. No OpenGraph Image Tags
**Impact:** Social media shares show no image preview  
**Pages Affected:** All pages missing OG image  
**Severity:** MEDIUM - SEO/Social  
**Fix:** Add image URLs to all Metadata exports  
**Effort:** 30 minutes (copy URLs to metadata)

**Current:**
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "...",
  // Missing openGraph with images
}
```

**Fixed:**
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "...",
  openGraph: {
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
}
```

---

### 14. ContactForm Button Styling Could Be Better
**Impact:** Button styling uses inline classes, hard to maintain  
**Component:** `components/forms/ContactForm.tsx` line 119  
**Severity:** LOW - Code Quality  

**Current:**
```tsx
className="w-full px-6 py-3 bg-black text-white font-semibold rounded-full 
           hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors 
           duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
```

**Could Extract to:**
```tsx
// Create a Button component or use consistent class pattern
```

---

### 15. No Error Boundary for API Failures
**Impact:** If `/api/contact` fails, form shows generic error  
**Component:** `components/forms/ContactForm.tsx` lines 46-49  
**Severity:** LOW - User Experience  

**Current:**
```typescript
} catch (err) {
  setStatus('error')
  setTimeout(() => setStatus('idle'), 5000)
}
```

**Better:**
Would be nice to have more specific error messages or logging.

---

## 🟢 Low Priority Issues (Nice to Have)

### 16. AOS Library Compatibility
**Impact:** Animations might not work optimally with App Router  
**Severity:** LOW - Conditional  
**Note:** Current implementation appears to work, but worth monitoring  

---

### 17. TypeScript Strictness
**Impact:** Missing explicit types in some places  
**Severity:** LOW - Code Quality  

---

### 18. No WebP Format Specification
**Impact:** Modern image formats not explicitly leveraged  
**Severity:** LOW - Next.js handles automatically  

---

## 📊 Summary by Severity

| Severity | Count | Time to Fix |
|----------|-------|------------|
| 🔴 CRITICAL | 5 | ~10 hours |
| 🟠 HIGH | 5 | ~5 hours |
| 🟡 MEDIUM | 5 | ~3 hours |
| 🟢 LOW | 3 | ~1 hour |
| **TOTAL** | **18** | **~19 hours** |

---

## 🎯 Recommended Fix Order

### Sprint 1 (Week 1): Critical Issues
1. Refactor globals.css (2 hours)
2. Complete Metadata on /nfts & /publications (1 hour)
3. Fix button touch targets (1 hour)
4. Add ContactForm accessibility (1 hour)
5. Identify and optimize image priorities (2 hours)

**Sprint 1 Total: ~7 hours**

### Sprint 2 (Week 2): High Priority Issues  
1. Generate blur placeholders (3 hours)
2. Audit and fix ProjectGallery component (2 hours)
3. Optimize image aspect ratios (1 hour)

**Sprint 2 Total: ~6 hours**

### Sprint 3 (Week 3): Medium Priority Issues
1. Standardize text scaling (1 hour)
2. Add sitemap & robots.txt (1 hour)
3. Add OpenGraph images to metadata (1 hour)
4. Review and test everything (2 hours)

**Sprint 3 Total: ~5 hours**

---

## ✅ Validation After Fixes

- [ ] All pages pass Lighthouse >= 90
- [ ] Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] All buttons visually >= 44×44px
- [ ] Dark mode fully functional
- [ ] All images have sizes prop
- [ ] All above-fold images have priority + blur
- [ ] All pages have complete Metadata with OG/Twitter tags
- [ ] ContactForm passes accessibility audit
- [ ] Text scales properly at 375px, 768px, 1024px
- [ ] Accent color meets contrast requirements (or documented exception)
- [ ] No console warnings or errors
- [ ] Sitemap generates correctly
- [ ] Social media shares show proper previews

---

## Notes for Implementation Team

- **Start with globals.css refactor first** - it's the foundation
- **Test button sizing on actual devices** - visual testing important
- **Use automated accessibility checker** - WAVE or axe DevTools
- **Screenshot comparisons** - verify visual changes during refactoring
- **Performance test with Lighthouse** - run after each major change
- **Mobile device testing** - don't rely solely on dev tools simulation

