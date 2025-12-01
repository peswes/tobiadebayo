# Next.js Migration - Implementation Guide

## Quick Start

A new Next.js project has been created at:
```
../tobiadebayo-next/
```

This is a clean Next.js 16 project with TypeScript, Tailwind CSS, and ESLint pre-configured.

### Dependencies Installed
```
✓ framer-motion       - Animation library
✓ react-hook-form     - Form management
✓ zod                 - Schema validation
✓ axios               - HTTP client
✓ clsx                - Class management
✓ tailwind-merge      - Merge Tailwind classes
✓ resend              - Email service
```

---

## Implementation Strategy

### Step 1: Start the New Project
```bash
cd ../tobiadebayo-next
npm run dev
```

Opens at: http://localhost:3000

### Step 2: Create Project Structure

Create these directories:
```
app/
├── components/
│   ├── common/
│   ├── sections/
│   ├── ui/
│   ├── forms/
│   └── providers/
├── hooks/
├── lib/
├── styles/
├── data/
└── api/
```

### Step 3: Migrate Content

1. **Extract Data**
   - Copy all text content from HTML pages
   - Create `data/projects.json` with artwork metadata
   - Create `data/publications.json` with publication details
   - Create `data/nfts.json` with NFT information

2. **Copy Assets**
   - Copy images from `images/` to `public/images/`
   - Copy fonts (if needed) to `public/fonts/`

3. **Create Components**
   - Header & Navigation
   - Footer
   - ContactForm
   - ProjectGallery
   - etc.

4. **Build Pages**
   - Start with home page
   - Then about, projects, contact, etc.

---

## File Templates

See the `_nextjs-templates/` directory in this project for:
- Component templates
- Page templates
- API route templates
- Configuration examples

---

## Environment Variables

Create `.env.local` in the new project:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=tobiadebayoart@gmail.com
```

---

## Build & Deploy

### Local Testing
```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

### Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

---

## Migration Checklist

- [ ] Project structure created
- [ ] Data files (JSON) created
- [ ] Assets copied
- [ ] Header component built
- [ ] Footer component built
- [ ] Home page created
- [ ] About page created
- [ ] Projects page created
- [ ] Contact page & API created
- [ ] Other pages created
- [ ] Forms validation added
- [ ] Email service configured
- [ ] SEO metadata added
- [ ] Images optimized
- [ ] Testing completed
- [ ] Deployed to production

---

## Support

For detailed information about each phase, see TASKS.md in the root directory.
