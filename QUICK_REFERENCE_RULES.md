# Quick Reference: Doc-Backed Rules for Tobi's Portfolio Redesign

## 🎯 Golden Rules (Must Follow)

### Next.js Image Rules
```tsx
// ✅ GOOD: Container + Image with fill
<div className="relative w-full aspect-square">
  <Image
    src="/image.jpg"
    alt="description"
    fill
    priority={isAboveFold}
    placeholder="blur"
    blurDataURL="data:image/..."
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
  />
</div>

// ❌ WRONG: No container, no fill
<Image src="/image.jpg" width={400} height={300} />

// ❌ WRONG: priority on all images
<Image src="/image.jpg" fill priority={true} />

// ❌ WRONG: fill without container position:relative
<Image src="/image.jpg" fill />
```

### CSS Rules
```
✅ Mobile-first: base + sm: + md: + lg: + xl:
✅ All classes complete strings: className="md:w-1/2"
✅ Use CSS variables for colors: var(--primary), var(--accent)
✅ No inline styles on elements
✅ Use gap/space-y for spacing, not margin
✅ Define container dimensions before image renders

❌ Dynamic classes: className={`p-${size}`}
❌ Hardcoded pixels: style="width: 400px"
❌ <img> tags (use <Image>)
❌ inline-block for layout (use flex/grid)
❌ All images with priority=true
```

### Responsive Breakpoints
```
Mobile-first approach:
- Base: mobile styles (375px - 639px)
- sm: 640px+
- md: 768px+
- lg: 1024px+
- xl: 1280px+
- 2xl: 1536px+

Example:
className="text-sm sm:text-base md:text-lg lg:text-xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
```

### Touch Targets & Accessibility
```
✅ Minimum 44×44px for all buttons/links
✅ Contrast ratio >= 4.5:1 for text
✅ Focus states visible on all interactive elements
✅ Forms have aria-invalid and aria-describedby
✅ Links have descriptive text, not just "Click here"

Current issues:
⚠️ CTA buttons: py-2.5 is too small (10px) - use py-3+ (12px+)
⚠️ Accent color #ee0101 on white (3.5:1) fails WCAG AA for text
⚠️ ContactForm inputs missing aria attributes
```

---

## 📋 Page-by-Page Checklist

### Each Page Must Have:
- [ ] Complete Metadata with `title`, `description`, `openGraph`, `twitter`
- [ ] Breadcrumb navigation with proper hover states
- [ ] All images with `fill`, `sizes`, `aspect-ratio`
- [ ] Hero/above-fold image with `priority={true}` and `placeholder="blur"`
- [ ] Gallery/below-fold images with lazy loading
- [ ] All buttons >= 44px height minimum
- [ ] Dark mode classes on all text elements
- [ ] Consistent text scaling: sm:text-base md:text-lg lg:text-lg
- [ ] Consistent spacing: gap-6 md:gap-8, px-4 md:px-6 lg:px-8

### Metadata Template
```typescript
export const metadata: Metadata = {
  title: "Page Title | Tobi Adebayo",
  description: "SEO-friendly description under 160 chars",
  openGraph: {
    title: "Page Title",
    description: "Description",
    url: "https://tobiadelayo.com/route",
    type: "website",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title",
    description: "Description",
    images: ["/images/og-image.jpg"],
  },
}
```

---

## 🎨 Tailwind Spacing Scale (Use These Values)

```
Margin/Padding:
- 1 = 4px
- 2 = 8px
- 3 = 12px
- 4 = 16px
- 6 = 24px
- 8 = 32px
- 10 = 40px
- 12 = 48px

Gap/Flex spacing:
- gap-4 (16px) - between items
- gap-6 (24px) - between sections
- gap-8 (32px) - between major sections

❌ WRONG: p-[13px], mx-[5px] (arbitrary values)
✅ GOOD: p-3, mx-2 (stick to scale)
```

---

## 🖼️ Image Patterns by Use Case

### Hero/Banner Image (Above Fold)
```tsx
<div className="relative w-full aspect-video">
  <Image
    src="/images/hero.jpg"
    alt="Hero"
    fill
    priority={true}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,..."
    sizes="100vw"
    className="object-cover"
  />
</div>
```

### Gallery Grid Images (Below Fold)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="relative w-full aspect-square">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  ))}
</div>
```

### Aspect Ratio Options
```
aspect-square     - 1:1 (gallery, thumbnails)
aspect-video      - 16:9 (hero, showcase)
aspect-[4/3]      - 4:3 (portraits)
aspect-[3/2]      - 3:2 (landscape)
```

---

## 🎯 Common Issues & Fixes

### Issue: Button Too Small
```tsx
// ❌ BEFORE: py-2.5 = 10px (too small for 44px minimum)
<button className="px-6 py-2.5 rounded-full">Click</button>

// ✅ AFTER: py-3 = 12px + padding achieves 44px
<button className="px-6 py-3 min-h-[44px] rounded-full">Click</button>
```

### Issue: Image Layout Shift
```tsx
// ❌ BEFORE: No container sizing
<Image src="..." fill />

// ✅ AFTER: Container sized first
<div className="w-full h-[400px]">
  <Image src="..." fill className="object-cover" />
</div>
```

### Issue: Dark Mode Not Working
```tsx
// ❌ BEFORE: Hardcoded color
<h1 className="text-black">Title</h1>

// ✅ AFTER: Include dark mode class
<h1 className="text-black dark:text-white">Title</h1>
```

### Issue: Responsive Text Not Scaling
```tsx
// ❌ BEFORE: Only one size
<p className="text-lg">Text</p>

// ✅ AFTER: Scale by breakpoint
<p className="text-base sm:text-lg md:text-xl lg:text-2xl">Text</p>
```

### Issue: Classes Being Purged
```tsx
// ❌ WRONG: Dynamic template literal
className={`p-${dynamicSize}`}  // p-4, p-6, p-8 will be purged

// ✅ RIGHT: Static string
className={`p-${sizeMap[key]}`} // where sizeMap is object with known keys

// ✅ BEST: Use conditional
condition ? "p-4" : "p-6"
```

---

## 🚀 Performance Checklist

### Images
- [ ] Hero images: `priority={true}` + `placeholder="blur"`
- [ ] Gallery images: `priority={false}` (default)
- [ ] All images have `sizes` prop
- [ ] All images have `aspect-ratio` set
- [ ] No images > 500KB (optimize before upload)
- [ ] Use WebP/AVIF (Next.js handles automatically)

### CSS & JS
- [ ] No unused CSS (Tailwind auto-purges)
- [ ] globals.css only has @tailwind directives + variables
- [ ] No inline styles in HTML
- [ ] Components properly code-split by route
- [ ] No unnecessary dependencies

### Metrics
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Lighthouse Performance score >= 90

---

## 📱 Responsive Testing Points

Test these viewport sizes:
```
375px   - iPhone SE
768px   - iPad
1024px  - iPad Pro / Desktop
1440px  - Larger desktop
```

For each, verify:
- [ ] No horizontal scroll on mobile
- [ ] Text readable without zoom
- [ ] Touch targets >= 44px
- [ ] Images maintain aspect ratio
- [ ] Spacing feels balanced
- [ ] Dark mode text visible

---

## 🎯 Pages Needing Metadata Fixes

| Page | Current Status | Missing |
|------|---|---|
| home (/) | ✓ Good | None |
| /about | ✓ Good | Twitter card |
| /projects | ✓ Good | Twitter card |
| /contact | ✓ Good | Twitter card |
| /afeproject | ✓ Good | Twitter card |
| /nfts | ⚠️ Minimal | OG image, Twitter |
| /publications | ⚠️ Minimal | OG image, Twitter |
| /commission | ✓ Good | Twitter card |

---

## 🔧 ContactForm Accessibility Fixes

```tsx
// ✅ Add aria attributes
<input
  {...register('fullName')}
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

## ✅ Final Validation

Before deployment, verify:
```
[ ] npm run build - No errors
[ ] npm run lint - No warnings
[ ] All Metadata complete on all pages
[ ] All images optimized and responsive
[ ] All buttons >= 44px
[ ] Dark mode works everywhere
[ ] Links all functional
[ ] Forms validate correctly
[ ] Lighthouse >= 90
[ ] Mobile responsive at 375px, 768px, 1024px
[ ] WCAG AA contrast (except accent #ee0101)
```

---

## 🔗 Key Documentation Links

- **Next.js Image Optimization:** https://nextjs.org/docs/app/api-reference/components/image
- **Tailwind Responsive Design:** https://tailwindcss.com/docs/responsive-design
- **Web Vitals:** https://web.dev/vitals/
- **WCAG AA Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Next.js App Router:** https://nextjs.org/docs/app

---

**Remember:** The goal is to maintain Tobi's artistic vision while implementing best practices for performance, accessibility, and SEO. No shortcuts on the fundamentals!
