# Project Knowledge Base (brain.md)

## 🏗️ System Architecture

This repository follows a **Dual-Architecture Strategy** during its transition from a legacy static site to a modern web application.

### 1. Legacy Layer (Root)
- **Nature**: Static HTML/CSS/JS portfolio.
- **Tech Stack**: 
    - **Frontend**: HTML5, CSS3.
    - **UI Framework**: Bootstrap 5.
    - **Libraries**: jQuery, jQuery UI, Owl Carousel 2 (Sliders), AOS (Animations).
- **Purpose**: Current production site hosted via GitHub Pages.
- **Entry Point**: `index.html`.

### 2. Modern Layer (`Thelight/`)
- **Nature**: Next.js 15 Application.
- **Tech Stack**: 
    - **Framework**: Next.js 15 (App Router).
    - **UI**: React 19, Tailwind CSS 4.
    - **Language**: TypeScript.
    - **Utilities**: Zod (Validation), React Hook Form, Resend (Email API), Swiper (React Sliders).
- **Purpose**: Future production site with enhanced performance, SEO, and dynamic features.
- **Entry Point**: `Thelight/app/page.tsx`.

---

## 🎨 Design & Styling Standards

Based on the [Design Audit](AUDIT_SUMMARY.md), the following standards apply across both layers to maintain brand consistency:

### Color Palette
- **Primary Black**: `#000000` (Text, Backgrounds)
- **Accent Red**: `#EE0101` (Hovers, Active states)
- **Text Gray**: `#666666` (Body text)
- **BG Gray**: `#F0F0F0` (Section backgrounds)

### Typography (Responsive Scale)
- **H1**: 48px (Desktop) → 36px (Tablet) → 28px (Mobile)
- **Body**: 18px (Desktop) → 16px (Tablet) → 14px (Mobile)

### Layout Rules
- **Section Padding**: 80px (Desktop) → 60px (Tablet) → 50px (Mobile)
- **Grid Gaps**: 30px (Desktop) → 20px (Tablet) → 15px (Mobile)

---

## 🗺️ Migration Roadmap

The migration from Root to `Thelight/` follows these mappings:

| Static Page | Next.js Route | Status |
|-------------|---------------|--------|
| `index.html` | `/` | In Progress |
| `about.html` | `/about` | Planned |
| `projects.html` | `/projects` | Planned |
| `contact.html` | `/contact` | Planned |

### Migration Priorities
1. **Component Modularization**: Extract `Header`, `Footer`, and `Gallery` into reusable React components.
2. **Asset Migration**: Move all images from `images/` to `Thelight/public/`.
3. **API Integration**: Migrate the contact form to use the `/api/contact` route with Resend.

---

## 🔐 Security Protocols

- **Dependencies**: Never use unverified or future-dated package versions (e.g., Next 16).
- **Environment**: Keep `.env.local` out of version control (already in `.gitignore`).
- **Audit**: Periodically check for typosquatting packages in `package.json`.
