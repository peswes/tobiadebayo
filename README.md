# Tobi Adebayo Portfolio Website

## Project Overview

**Tobi Adebayo** is a multi-disciplinary artist and activist renowned for thought-provoking works that inspire unity, hope, and faith. This website serves as his professional portfolio and online presence.

**Current Tech Stack:** HTML5, CSS3, Bootstrap 5, jQuery, Owl Carousel, AOS  
**Future Migration:** Next.js 14+ with React, TypeScript, and Tailwind CSS (see [TASKS.md](TASKS.md))

---

## About the Artist

**Full Name:** Adebayo Oluwatobi James  
**Born:** 2000  
**Location:** Nigeria

Tobi's artistic journey began at a tender age and has evolved into a multifaceted creative practice spanning:
- **Mediums:** Charcoal, graphites, acrylics, digital art, stamp art
- **Philosophy:** "You cannot bring people into an experience of what you haven't experienced"
- **Mission:** Use art as a tool for social impact and innovation through Art for Everyone (AFE)

### Key Achievements
- Featured in various publications
- Earned grants and completed 200+ commissions
- Recognized by notable figures and collaborators
- Active in community art initiatives and orphanage programs
- Transitioned to professional art industry in 2018

---

## Website Pages & Content

### 1. **Home Page** (`index.html`)
- Landing page with hero section
- Featured content blocks linking to main sections:
  - About
  - Artworks
  - AFEProject
  - NFTs
- Call-to-action section ("Get in Touch")
- Responsive navigation with mobile menu
- Footer with social links

### 2. **About Page** (`about.html`)
- Detailed artist biography
- Background and artistic journey
- Creative philosophy and approach
- Impact and future vision
- Professional timeline

### 3. **Artworks Page** (`projects.html`)
- Gallery of artwork pieces with titles and mediums
- Includes:
  - Happiness Within (Graphite & Charcoal, 2020)
  - Bobo Ajudua
  - Discrepancy
  - Peter
  - Messi
  - Dream Girl
  - Black Future Without Oppression (BFWO)
  - Lookman (Portrait)
  - Video showcase (Smile Animation)
- Image grid with responsive layout

### 4. **AFEProject Page** (`afeproject.html`)
- Art for Everyone initiative details
- Community outreach programs
- Orphanage and vulnerable children engagement
- Project impact and statistics
- Photo documentation of activities

### 5. **Commissions Page** (`commission.html`)
- Commission service information
- Pricing structure (if applicable)
- Commission process and timeline
- Types of commissions offered
- Contact/inquiry information

### 6. **Publications Page** (`publications.html`)
- Featured publications and press coverage
- Lookman (Portrait/Interview)
- TikTok/Social media features
- Media appearances

### 7. **NFTs Page** (`nfts.html`)
- Digital art and NFT collection showcase
- Blockchain/marketplace information
- NFT descriptions and details

### 8. **Contact Page** (`contact.html`)
- Contact form (Name, Email, Phone, Message)
- Email validation and submission
- Contact information card
- Social media links:
  - Instagram
  - Twitter (X)
  - Facebook
  - LinkedIn
  - TikTok
- Direct email: tobiadebayoart@gmail.com

---

## Site Features & Interactions

### Navigation
- **Fixed Header:** Stays visible when scrolling
- **Responsive Menu:** Hamburger menu on mobile devices
- **Active Page Indicator:** Shows current page in navigation
- **Logo Link:** Returns to home page

### Visual Effects
- **Scroll Animations:** AOS (Animate On Scroll) for fade-in effects
- **Preloader:** Loading animation on page load
- **Hover States:** Interactive buttons and links
- **Image Gallery:** Responsive grid layouts
- **Video Integration:** Embedded video showcase in Artworks

### Forms & Interaction
- **Contact Form:** Email form with validation
- **Search Modal:** Top search functionality
- **Call-to-Action Buttons:** Links to key pages

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Hamburger menu navigation on mobile
- Optimized image sizing for different screen sizes

---

## Current Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styles and grid system
- **Bootstrap 5** - Responsive grid and utilities
- **jQuery** - DOM manipulation and effects
- **jQuery UI** - Slider components

### Libraries & Plugins
- **Owl Carousel 2** - Image carousels/sliders
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Font Awesome 6.4.2** - Icon library
- **icomoon** - Custom icon fonts
- **intl-tel-input** - International phone number formatting

### Utilities
- **jsconfig.json** - JavaScript/alias configuration

---

## File Structure

```
tobiadebayo/
├── index.html                  # Home page
├── about.html                  # About artist
├── projects.html               # Artworks gallery
├── afeproject.html            # Art for Everyone project
├── commission.html            # Commission services
├── publications.html          # Publications/Press
├── nfts.html                  # NFT collection
├── contact.html               # Contact page
├── style.css                  # Main stylesheet (with imports)
├── css/
│   ├── bootstrap.min.css      # Bootstrap framework
│   ├── style-2.css            # Additional styles
│   ├── aos.css                # Scroll animations
│   ├── owl.carousel.min.css   # Carousel styles
│   ├── owl.theme.default.min.css # Carousel theme
│   ├── jquery-ui.css          # jQuery UI styles
│   ├── font-awesome.min.css   # Icon styles
│   └── default-assets/
│       ├── hkgrotesk-fonts.css # Custom fonts
│       ├── classy-nav.css     # Navigation styles
├── js/
│   ├── jquery.min.js          # jQuery library
│   ├── bootstrap.min.js       # Bootstrap functionality
│   ├── jquery-ui.js           # jQuery UI
│   ├── owl.carousel.min.js    # Carousel functionality
│   ├── aos.js                 # Scroll animation functionality
│   ├── main.js                # Custom scripts
│   ├── popper.min.js          # Popper utility library
│   ├── mona.bundle.js         # Template bundle
│   └── default-assets/
│       └── active.js          # Active state management
├── images/
│   ├── logo.png               # Site logo
│   ├── black-logo.png         # Dark logo variant
│   ├── favicon.jpg            # Favicon
│   ├── tobi.jpg               # Artist profile photo
│   ├── (artwork images)       # Gallery images
│   ├── (project images)       # AFEProject images
│   └── (nft images)           # NFT showcase images
├── fonts/
│   └── icomoon/               # Custom icon fonts
├── README.md                  # Project documentation
├── CLEANUP_SUMMARY.md         # Cleanup history
├── TASKS.md                   # Next.js migration plan
└── jsconfig.json              # JavaScript configuration
```

---

## Current Performance Metrics

- **Total Pages:** 8 active
- **Total CSS Files:** 8 active
- **Total Images:** 19 optimized
- **Load Dependencies:** 10+ libraries
- **Performance Considerations:**
  - Multiple CSS files loaded sequentially
  - jQuery dependency for simple DOM operations
  - Bootstrap bloat for minimal grid usage
  - External CDN dependency for Font Awesome

---

## Key Statistics

| Metric | Count |
|--------|-------|
| Active Pages | 8 |
| Artworks in Gallery | 8+ |
| Social Media Links | 5 |
| AFEProject Images | 3 |
| Contact Form Fields | 4 |
| Navigation Links | 8 |

---

## Development Notes

### Recent Changes (November 30, 2025)
- Removed 4 unused HTML pages (features, illustration, painting, portfolio)
- Removed 3 unused CSS files (animate.css, magnific-popup.css, slick.css)
- Deleted 15 unused images
- Removed commented-out carousel code
- Reduced codebase by ~2.3-3.2 MB
- See [CLEANUP_SUMMARY.md](CLEANUP_SUMMARY.md) for detailed cleanup history

### Known Limitations
- jQuery dependency for basic functionality
- Bootstrap overhead for minimal grid usage
- Multiple CSS file imports (8 files)
- No build optimization pipeline
- Limited SEO capabilities (static HTML)
- Manual mobile menu management

---

## Future Improvements

See [TASKS.md](TASKS.md) for comprehensive Next.js migration plan including:
- Modern React architecture
- TypeScript for type safety
- Tailwind CSS for styling
- API routes for form handling
- Image optimization
- SEO improvements
- Performance enhancements

---

## How to Run Locally

1. **Clone Repository**
   ```bash
   git clone https://github.com/peswes/tobiadebayo.git
   cd tobiadebayo
   ```

2. **Open in Browser**
   - Simply open `index.html` in a web browser
   - No build process required (static HTML)

3. **Development Server (Optional)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   ```

4. **Access**
   - Navigate to `http://localhost:8000`

---

## Deployment

**Current Hosting:** GitHub Pages (static site)  
**Domain:** https://tobiadebayo.com  
**DNS:** CNAME configured in repository

**Deployment Process:**
1. Push changes to `production` branch
2. GitHub Pages automatically serves latest version
3. No build step required

---

## Contact & Links

**Email:** tobiadebayoart@gmail.com

**Social Media:**
- [Instagram](https://www.instagram.com/tobi_adebayo_)
- [Twitter/X](https://x.com/tobi_adebayo_)
- [Facebook](https://www.facebook.com/share/19VzXrAtHp/)
- [LinkedIn](https://www.linkedin.com/in/tobi-adebayo-13b97b1aa)
- [TikTok](https://www.tiktok.com/@tobiadebayoart)

---

## License

© Tobi Adebayo Studios. All rights reserved.

---

## Repository Information

- **Repository:** tobiadebayo
- **Owner:** peswes
- **Branch:** production
- **Default Branch:** main
- **Last Updated:** November 30, 2025

For migration planning and task tracking, see [TASKS.md](TASKS.md).
