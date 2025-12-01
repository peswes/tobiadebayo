# Phase 2: Quick Integration Checklist

## Pre-Integration Setup

- [ ] Open `tobiadebayo-next` project in VS Code
- [ ] Ensure all Phase 1 dependencies are installed (`npm install`)
- [ ] Verify Next.js project structure is in place

## Directory Creation

```bash
# Create necessary directories in tobiadebayo-next/
mkdir -p app/components/common
mkdir -p app/components/sections
mkdir -p app/components/ui
mkdir -p app/components/forms
mkdir -p app/hooks
mkdir -p app/lib/data
mkdir -p app/api/contact
mkdir -p app/about
mkdir -p app/projects
mkdir -p app/contact
```

## Component Copy Instructions

### Step 1: Common Components
Copy from `_nextjs-templates/` to `tobiadebayo-next/app/components/common/`:
- [ ] Header.tsx
- [ ] Navigation.tsx
- [ ] Footer.tsx
- [ ] MobileMenu.tsx
- [ ] Preloader.tsx

### Step 2: Section Components
Copy to `tobiadebayo-next/app/components/sections/`:
- [ ] Hero.tsx

### Step 3: UI Components
Copy to `tobiadebayo-next/app/components/ui/`:
- [ ] Button.tsx
- [ ] Card.tsx
- [ ] Gallery.tsx
- [ ] SocialLinks.tsx

### Step 4: Form Components
Copy to `tobiadebayo-next/app/components/forms/`:
- [ ] ContactForm.tsx

### Step 5: Custom Hooks
Copy to `tobiadebayo-next/app/hooks/`:
- [ ] useScrollAnimation.ts
- [ ] useWindowSize.ts

### Step 6: Lib Files
Copy to `tobiadebayo-next/app/lib/`:
- [ ] constants.ts
- [ ] types.ts
- [ ] utils.ts

### Step 7: Data Files
Copy to `tobiadebayo-next/app/lib/data/`:
- [ ] projects.json
- [ ] publications.json
- [ ] nfts.json
- [ ] commissions.json

### Step 8: Page Templates
- [ ] Copy `home-page.tsx` → `app/page.tsx`
- [ ] Copy `about-page.tsx` → `app/about/page.tsx`
- [ ] Copy `projects-page.tsx` → `app/projects/page.tsx`
- [ ] Copy `contact-page.tsx` → `app/contact/page.tsx`

### Step 9: API Routes
- [ ] Copy `contact-route.ts` → `app/api/contact/route.ts`

## Configuration Updates

### Root Layout (app/layout.tsx)

Add to imports:
```typescript
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Preloader from '@/components/common/Preloader'
import './globals.css'
```

Replace body content:
```typescript
<Preloader />
<Header />
<main>{children}</main>
<Footer />
```

### Tailwind Config (tailwind.config.ts)

Ensure red color is defined:
```javascript
colors: {
  red: {
    600: '#ee0101',
  }
}
```

### Public Assets

- [ ] Ensure images folder exists: `public/images/`
- [ ] Copy or link images from original project
- [ ] Add logo.png and black-logo.png

### Font Awesome

Add to `app/layout.tsx` head or public/index.html:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
```

## Testing Checklist

After copying all files:

- [ ] `npm run dev` - Project starts without errors
- [ ] Navigate to home page `/`
- [ ] Navigate to about page `/about`
- [ ] Navigate to projects page `/projects`
- [ ] Navigate to contact page `/contact`
- [ ] Test mobile menu on mobile/tablet view
- [ ] Test form validation on contact page
- [ ] Test gallery lightbox on projects page
- [ ] Check all links work correctly
- [ ] Verify responsive design at different breakpoints

## Content Updates

After integration, update:

- [ ] `constants.ts` - Update social media URLs
- [ ] `constants.ts` - Update contact email
- [ ] `constants.ts` - Update site name/title
- [ ] `projects.json` - Add actual project data
- [ ] `publications.json` - Add actual publications
- [ ] `nfts.json` - Add actual NFT data
- [ ] `commissions.json` - Update commission info
- [ ] Image paths - Replace placeholders with real image paths

## Build & Performance

- [ ] Run `npm run build` - Build succeeds
- [ ] Check for TypeScript errors
- [ ] Verify no ESLint warnings
- [ ] Test on different browsers
- [ ] Check Lighthouse scores

## Documentation

- [ ] Review PHASE2_GUIDE.md for detailed info
- [ ] Review PHASE2_COMPLETION_REPORT.md for overview
- [ ] Update project README with new structure

## Git Commit

```bash
git add .
git commit -m "Phase 2: Add core components and page templates

- Add 15 core components (header, footer, nav, etc.)
- Add 4 page templates (home, about, projects, contact)
- Add 2 custom hooks (useScrollAnimation, useWindowSize)
- Add utility functions and constants
- Add API route template for contact form
- Add data structure files (projects, publications, nfts, commissions)
- Add comprehensive documentation"
```

## Troubleshooting

### Issue: Components not found
- **Solution**: Verify import paths use `@/components/` alias
- Check `tsconfig.json` paths configuration

### Issue: Styles not applied
- **Solution**: Ensure Tailwind CSS is properly configured
- Verify `globals.css` imports Tailwind directives
- Check `tailwind.config.ts` extends default theme

### Issue: Images not loading
- **Solution**: Verify images exist in `public/images/`
- Check image file names match paths in templates
- Update image paths in components as needed

### Issue: Form validation not working
- **Solution**: Ensure `react-hook-form` and `zod` are installed
- Check Zod resolver is imported correctly
- Verify API endpoint exists at `/api/contact`

## Next Steps (Phase 3)

Once Phase 2 is integrated:

1. Create remaining page templates:
   - afeproject/page.tsx
   - commission/page.tsx
   - nfts/page.tsx
   - publications/page.tsx
   - projects/[slug]/page.tsx

2. Extract content from original HTML pages

3. Populate data files with real content

4. Implement dynamic routing

5. Add image optimization

## Support

For questions or issues:
- Reference NEXTJS_START.md for project setup
- Check PHASE2_GUIDE.md for component details
- Review component source code for prop definitions
- Check types.ts for interface definitions

---

**Total Files to Copy**: 25+
**Estimated Time**: 30-45 minutes
**Difficulty**: Easy (copy-paste)
**Prerequisites**: Phase 1 complete, dependencies installed
