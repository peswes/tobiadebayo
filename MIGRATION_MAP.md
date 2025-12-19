# Migration File Map — HTML → Next.js

This file maps existing static site files to the Next.js app in `Thelight/`.

## Summary
- Work inside `Thelight/` (do not create another Next app at repository root).
- Use TypeScript and Tailwind (global CSS for variables in `app/globals.css`).
- Use Next.js API routes for forms; use `pnpm` locally.
- Keep original files as backups until migration verification.

---

## Pages (HTML → Next routes + components)

1. index.html
   - Next route: `app/page.tsx`
   - Components: `Hero`, `FeaturedBlocks`, `CTASection`, `Preloader`, `Footer`, `Header`/`Navigation`
   - Assets to move: `images/tobi.jpg`, `images/dreamgirl.jpg`, `images/AFEProjects.jpg`, `images/nfts.jpg`, `images/logo.png`, `images/black-logo.png`, `images/favicon.jpg`
   - JS to port: `js/main.js` (AOS init, lazy-load snippet), `js/owl.carousel.*` usage → replace with React carousel or `swiper`/`splide` React wrapper

2. about.html
   - Next route: `app/about/page.tsx`
   - Components: `AboutHero`, `Timeline`, `BioSection`, `Footer`, `Header`
   - Assets: any author/profile images (e.g., `images/tobi.jpg`) and CSS classes from `style.css`/`css/style-2.css`

3. projects.html (Artworks)
   - Next route: `app/projects/page.tsx`
   - Components: `ProjectGallery`, `ProjectCard`, `ProjectModal` (lightbox), `GalleryFilter`
   - Assets: `images/happiness.jpg`, `images/ajudua.jpg`, `images/discrepancy.jpg`, `images/dreamgirl.jpg`, `images/lookman.jpg`, `images/messi.jpg`, `images/peter.jpg`, `smile.mp4`
   - JS to port: `owl.carousel` initialiser (`.nonloop-block-3`), Magnific Popup gallery -> swap for `react-image-lightbox` or headless modal + `next/image`

4. afeproject.html
   - Next route: `app/afeproject/page.tsx`
   - Components: `ProjectShowcase`, `PhotoGrid`, `ImpactStats`
   - Assets: `images/AFEProjects.jpg`, `images/afepy2.jpg`, `images/afepy3.jpg`

5. commission.html
   - Next route: `app/commission/page.tsx`
   - Components: `CommissionForm` (or link to contact), `PricingCard`, `HowItWorks`
   - JS to port: any form validation -> convert to `react-hook-form` + `zod`

6. publications.html
   - Next route: `app/publications/page.tsx`
   - Components: `PublicationCard`, `PressGrid`
   - Assets: images referenced in page (if any)

7. nfts.html
   - Next route: `app/nfts/page.tsx`
   - Components: `NFTGallery`, `NftCard`, `NftDetail` (if required)
   - Assets: `images/nfts.jpg`, `images/tobinft.jpg`

8. contact.html
   - Next route: `app/contact/page.tsx`
   - Components: `ContactForm` (client), `ContactCard`
   - API: `app/api/contact/route.ts` (POST) — implement email sending via Resend/SendGrid/Nodemailer
   - Form fields: name, email, phone, message

---

## Shared assets and where to put them
- Move images → `Thelight/public/images/` (preserve filenames).
- Move `fonts/icomoon` → `Thelight/public/fonts/icomoon/` and update CSS url() paths.
- Move videos (e.g., `smile.mp4`) → `Thelight/public/videos/`.
- Keep a backup copy of `css/` and `js/` in `backup/static-assets/` (or leave in repo root) until migration is verified.

## CSS & Styling strategy
- Use Tailwind for utility classes and component styling.
- Keep a `globals.css` in `Thelight/app/` for CSS variables and base rules (you already have it). Put color and font tokens there.
- For complex existing styles that are not worth rewriting immediately, import them into `Thelight/styles/legacy/` and replace incrementally.

## JavaScript interactions to refactor
- `js/main.js`:
  - AOS: replace/init via React effect (use `AOS` package or implement intersection-observer hooks).
  - Carousel (`owl.carousel`): replace with `swiper` or `react-owl-carousel` (prefer native React solution).
  - Mobile menu cloning & offcanvas logic: implement as `MobileMenu` React component and toggle state.
  - Magnific Popup lightbox: replace with a React lightbox component.

## API & Forms
- Implement `app/api/contact/route.ts` to accept POST with JSON (name, email, phone, message).
- Use `react-hook-form` + `zod` for client validation.
- Use `resend` or `nodemailer` server-side to deliver emails; store email config in `.env.local`.

## Accessibility & SEO
- Add `generateMetadata()` for each route and use Next `Image` for images.
- Ensure semantic HTML, ARIA labels for menus and forms, and keyboard navigation on galleries.

## Branching & workflow
- Work on branch: `production` (per your instruction). Create local feature branches for each major phase (e.g., `production/migrate-layout`).
- Keep original HTML/CSS/JS files as backups until migration is complete.

## Next immediate steps (I'll perform if you confirm)
1. Create `MIGRATION_MAP.md` (this file — done).
2. Create `Thelight/public/images/` and copy root `images/` into it (I will prepare a script or perform the move when you confirm).
3. Add initial component scaffolding: `components/common/Header.tsx`, `components/common/Footer.tsx`, `components/Preloader.tsx`, `components/ProjectGallery.tsx`.
4. Implement `app/contact/route.ts` skeleton and a client `ContactForm` using `react-hook-form`.
5. Install packages using `pnpm` inside `Thelight/` and configure Tailwind tokens in `tailwind.config.ts`.

---

If you want I can now: (A) create the initial component files and `app/api/contact/route.ts`, (B) move assets into `Thelight/public/` and update references, or (C) open a feature branch in Git. Which should I do first?
