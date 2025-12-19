# Thelight Next.js Setup Guide

This guide covers the initial setup and running the Next.js migration inside the `Thelight/` folder.

## Prerequisites

- Node.js >= 18 installed
- `pnpm` installed globally (`npm install -g pnpm`)
- Git configured locally

## Step 1: Copy Static Assets

From the repository root, copy images and public files into `Thelight/public/`:

**PowerShell:**
```powershell
mkdir -Force Thelight\public\images
Copy-Item -Path images\* -Destination Thelight\public\images -Recurse -Force
```

**Bash/WSL:**
```bash
mkdir -p Thelight/public/images
cp -r images/* Thelight/public/images/
```

## Step 2: Install Dependencies

Navigate to `Thelight/` and install packages:

```bash
cd Thelight
pnpm install
```

This will install:
- `react`, `react-dom`, `next`
- `react-hook-form`, `zod` (forms)
- `swiper` (carousel)
- `aos` (scroll animations)
- `resend` (email sending)
- TypeScript, Tailwind, ESLint

## Step 3: Configure Environment

Create `.env.local` from the example:

**PowerShell:**
```powershell
Copy-Item -Path .env.example -Destination .env.local
```

**Bash:**
```bash
cp .env.example .env.local
```

Then edit `.env.local` and update:
```
RESEND_API_KEY=your_actual_resend_api_key
CONTACT_EMAIL=tobiadebayoart@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** If `RESEND_API_KEY` is not set, the contact form will log a warning but not fail.

## Step 4: Run Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Available Scripts

```bash
# Development
pnpm dev

# Production build
pnpm build
pnpm start

# Linting
pnpm lint
```

## Project Structure

```
Thelight/
├── app/
│   ├── layout.tsx           # Root layout (Header, Footer, Preloader, AosProvider)
│   ├── page.tsx             # Home page (to be implemented)
│   ├── about/page.tsx       # About page (to be implemented)
│   ├── projects/page.tsx    # Artworks page (to be implemented)
│   ├── afeproject/page.tsx  # AFEProject page (to be implemented)
│   ├── commission/page.tsx  # Commissions page (to be implemented)
│   ├── publications/page.tsx # Publications page (to be implemented)
│   ├── nfts/page.tsx        # NFTs page (to be implemented)
│   ├── contact/page.tsx     # Contact page (to be implemented)
│   ├── api/
│   │   └── contact/route.ts # POST endpoint for contact form
│   └── globals.css          # Tailwind + global CSS variables
├── components/
│   ├── common/
│   │   ├── Header.tsx       # Navigation header with mobile menu
│   │   ├── MobileMenu.tsx   # Offcanvas mobile menu
│   │   ├── Footer.tsx       # Footer with links
│   │   └── Preloader.tsx    # Page preloader
│   ├── forms/
│   │   └── ContactForm.tsx  # Contact form using react-hook-form
│   ├── ProjectGallery.tsx   # Grid gallery component
│   ├── ProjectsCarousel.tsx # Swiper-based carousel
│   └── Lightbox.tsx         # Image lightbox modal
├── providers/
│   └── AosProvider.tsx      # AOS (Animate On Scroll) initialization
├── lib/
│   └── email.ts             # Resend email service wrapper
├── public/
│   ├── images/              # Static images (copy from root)
│   ├── favicon.ico
│   └── next.svg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
├── .env.example
├── .env.local               # Your local environment (git-ignored)
└── README.md
```

## Troubleshooting

### "Module not found: Can't resolve 'aos'"
Run `pnpm install` first—all dependencies must be installed before the dev server starts.

### "Resend API key not configured"
This is a warning and is safe; form submissions will log but not send emails until you configure `RESEND_API_KEY` in `.env.local`.

### Build fails with TypeScript errors
Ensure `tsconfig.json` is present and run `pnpm install` again.

## Next Steps

After setup, you can:

1. **Implement page routes:** Create `app/about/page.tsx`, `app/projects/page.tsx`, etc.
2. **Wire components:** Import and place `ProjectsCarousel`, `ProjectGallery`, `ContactForm` on relevant pages.
3. **Add SEO metadata:** Use `generateMetadata()` on each page.
4. **Test locally:** Visit routes and test forms, galleries, and mobile menu.
5. **Commit to Git:** Push to `production` branch when ready.

For detailed migration info, see [../MIGRATION_MAP.md](../MIGRATION_MAP.md).
