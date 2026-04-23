## Next.js next/image Best Practices

**Fill Property Pattern:**
- Use `fill` prop for images in containers with position: relative
- Always wrap `<Image fill>` in a container div with `position: relative`
- Never set width/height on image with fill=true
- Pattern: Container sets width/height, Image takes fill

**Sizing & Responsive Images:**
- Use `sizes` prop to specify breakpoints: sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
- Always include sizes prop with fill=true (required for responsive design)
- Use `next-gen` formats with priority prop only for LCP images
- Avoid `layout="fill"` in newer versions - use fill prop instead

**Aspect Ratio Management:**
- Wrap Image in aspect-ratio container: use `<div className="aspect-video">` or custom ratio
- Use Container Queries or padding-bottom trick for responsive ratios
- Pattern: `<div style={{ aspectRatio: "16/9" }}><Image fill /></div>`
- Never rely on Image dimensions alone - container controls aspect ratio

**Layout Shift Prevention:**
- Always define container dimensions before Image renders
- Use `placeholder="blur"` with blurDataURL for better LCP
- Set container height/width explicitly - never auto
- Avoid style changes between render and hydration
- Use CSS classes, not inline styles for consistency

**Object-Fit & Object-Position:**
- Use `object-fit: cover` for gallery images (fills container, crops)
- Use `object-fit: contain` for product displays (shows whole image)
- Use `object-position: center` by default, adjust for focal points
- Apply via CSS class, not Image component props

**Performance Optimization:**
- Use priority={true} ONLY for images above the fold (max 1-2 per page)
- Lazy load below-fold images with loading="lazy" (default)
- Use `unoptimized={false}` (default) to enable Next.js Image Optimization
- Monitor Core Web Vitals: LCP, CLS, FID

---

## Tailwind CSS Best Practices

**Responsive Design Pattern:**
- Mobile-first: design for small screens, add breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
- Use breakpoint prefixes: `p-4 md:p-6 lg:p-8`
- Never hardcode pixels in jsx/html - always use Tailwind utilities
- Test at: 375px (mobile), 768px (tablet), 1024px (desktop)

**Aspect Ratio Utilities:**
- Use `aspect-video` (16/9), `aspect-square` (1/1), `aspect-auto`
- Custom ratios: `aspect-[4/3]` in Tailwind v3+
- Pair with `w-full h-auto` or container sizing
- Pattern: `<div className="aspect-video"><img className="w-full h-full object-cover" /></div>`

**Layout Shift Prevention (CSS):**
- Set dimensions before content loads: use `w-full h-[400px]` not `h-auto`
- Use `space-y-4 space-x-4` for consistent gaps (not margin)
- Avoid `inline-block` or `inline` for images - use `block`
- Use CSS Grid/Flexbox, not absolute positioning

**Safe Class Usage (Avoid Purge Issues):**
- ✅ GOOD: `className="md:w-1/2"` (class string detected)
- ✅ GOOD: `className={`p-${size}`}` when size is literal constant
- ❌ WRONG: `className={`p-${dynamicValue}`}` (template literal with variable)
- ❌ WRONG: Broken strings like `className="md:w-1/" + "2"` 

**String Concatenation Safe Patterns:**
- Use clsx or classnames library for conditional classes
- Pattern: `clsx("base-class", condition && "conditional-class")`
- If no library: use ternary: `condition ? "class-a" : "class-b"`
- Avoid: `"class-a " + "class-b"` when classes include responsive prefixes

**PurgeCSS Prevention Checklist:**
- [ ] All Tailwind classes are complete strings in source code
- [ ] Dynamic values not in class names (use inline styles or CSS variables)
- [ ] No string interpolation with runtime variables in classNames
- [ ] Use whitelisting: safelist: ["md:w-1/3", "lg:w-1/4"] in tailwind.config.js if needed
- [ ] Don't build class names from arrays: bad = `array.map(a => `p-${a}`)`
- [ ] Do use static class names: good = `object.classNameMap[key]` where keys are known

**Utility Best Practices:**
- Use `truncate` for text overflow, `line-clamp-3` for multi-line
- Use `transition` with specific duration: `transition-all duration-300`
- Group related utilities: layout + spacing + colors + effects
- Order: positioning → sizing → spacing → colors → effects

**Grid & Flex Patterns:**
- Flexbox: `flex flex-col md:flex-row gap-4`
- CSS Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Use auto-fit/auto-fill for responsive grids: `grid-cols-[repeat(auto-fit,minmax(250px,1fr))]`
- Avoid float - always use Flexbox or Grid

**Spacing Consistency:**
- Use Tailwind scale: 4px (1), 8px (2), 12px (3), 16px (4), 24px (6), 32px (8), 40px (10)
- Never use arbitrary: `p-[13px]` - round to nearest: `p-3`
- Consistent gaps: `gap-4` for lists, `gap-6` for sections
- Vertical rhythm: `py-8` or `py-12` for sections

---

## Enforcement Checklist (When Editing Files)

When editing any file with images or styling:

### Image Files (Next.js)
- [ ] Image wrapped in container with `position: relative`
- [ ] Container has explicit width/height or aspect-ratio
- [ ] Using `fill` prop with container setup
- [ ] `sizes` prop included and correct for responsive
- [ ] `object-fit` and `object-position` defined (CSS, not props)
- [ ] No inline styles - use Tailwind or CSS classes
- [ ] LCP images only have `priority={true}` (max 2 per page)
- [ ] No layout shift between initial and hydrated render
- [ ] placeholder="blur" included for above-fold images

### CSS/Styling Files (Tailwind)
- [ ] All classes are complete strings (no template literals with variables)
- [ ] Mobile-first breakpoints: base + sm: + md: + lg: + xl:
- [ ] Aspect ratios set on container, not image
- [ ] Height always defined (no auto except where intentional)
- [ ] Spacing uses Tailwind scale (no arbitrary px values)
- [ ] No inline styles in HTML - all styles in Tailwind classes
- [ ] Colors from design tokens (use Tailwind config)
- [ ] No deprecated utilities or old syntax

### Responsive Design Audit
- [ ] Tested at 375px (mobile) - no scrolling, readable
- [ ] Tested at 768px (tablet) - proper spacing, 1-2 column
- [ ] Tested at 1024px (desktop) - full layout visible
- [ ] Images maintain aspect ratio at all breakpoints
- [ ] No cumulative layout shift (CLS < 0.1)
- [ ] Buttons are minimum 44px tap target

### Common Anti-Patterns to Avoid
- ❌ `<Image src="..." width={400} height={300} />` without fill (old Next.js)
- ❌ `fill={true}` without container position: relative
- ❌ `<img>` tags without srcset in Next.js (should use Image)
- ❌ `style="width: 100%; height: 500px;"` (use Tailwind: w-full h-[500px])
- ❌ `className={`text-${size}`}` (dynamic - use CSS vars instead)
- ❌ Hardcoded breakpoints - use Tailwind breakpoints
- ❌ No aspect ratio, just height - causes stretch/distortion
- ❌ Loading images without lazy-loading below fold
- ❌ All images with priority=true (only LCP images)

---

## Quick Reference: Common Patterns

### Next.js Image Pattern (Fill + Responsive)
```jsx
<div className="relative w-full aspect-video">
  <Image 
    src="/image.jpg" 
    alt="description" 
    fill 
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover object-center"
    priority={isAboveFold} 
  />
</div>
```

### Tailwind Responsive Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="aspect-square bg-gray-200">
      {/* content */}
    </div>
  ))}
</div>
```

### Safe Dynamic Classes (with clsx)
```jsx
import clsx from 'clsx'

<div className={clsx(
  'p-4 md:p-6 lg:p-8',
  isActive && 'bg-blue-500',
  isPending && 'opacity-50'
)}>
  {/* content */}
</div>
```

---

## Resources
- Next.js Image Optimization: https://nextjs.org/docs/api-reference/next/image
- Tailwind CSS Responsive Design: https://tailwindcss.com/docs/responsive-design
- Web Vitals Guide: https://web.dev/vitals/
- CSS Aspect Ratio: https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
