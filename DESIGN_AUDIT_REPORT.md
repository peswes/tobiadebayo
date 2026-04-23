# TOBI ADEBAYO PORTFOLIO - CRITICAL DESIGN AUDIT REPORT

**Audit Date:** 2025  
**Status:** Enterprise-Level Design Specifications  
**Prepared By:** Design Review Team  

---

## EXECUTIVE SUMMARY

This audit identifies **structural design deficiencies** across all 8 pages of the Tobi Adebayo portfolio. The current implementation lacks:

1. **Proper image aspect ratios** - Images stretch to fill containers without consistent sizing
2. **Undefined vertical spacing** - Section gaps and padding are inconsistent
3. **Ambiguous section heights** - No clear height constraints for hero and gallery sections
4. **Responsive breakpoint rules** - Missing specific behavior at 375px, 768px, 1024px+
5. **Typography hierarchy** - Font sizes and line heights not standardized per section type

---

## PART 1: SITE STRUCTURE AUDIT

### Complete Page Inventory

| # | Page Name | URL | Status | Sections Count |
|---|-----------|-----|--------|-----------------|
| 1 | Home | index.html | Has Layout Issues | 4 |
| 2 | About | about.html | Missing Content Details | 3 |
| 3 | Artworks (Projects) | projects.html | Gallery Broken | 2 |
| 4 | AFE Project | afeproject.html | Layout Issues | 2 |
| 5 | Commission | commission.html | Hidden (Commented Out) | N/A |
| 6 | Publications | publications.html | Missing Content Details | 2 |
| 7 | NFTs | nfts.html | Missing Content Details | 2 |
| 8 | Contact | contact.html | Form Issues | 3 |

**Total Pages in Navigation:** 7 active (Commission commented out)

---

## PART 2: DETAILED PAGE SPECIFICATIONS

---

# PAGE 1: HOME (index.html)

## Page Purpose
Primary landing page showcasing artist's work with navigation to key sections.

## Current Structure
```
HEADER (Navigation)
  └─ Logo | Menu Links

SECTION 1: Hero/Feature Grid (site-section site-blocks-2)
  ├─ About Card (Image + Link)
  ├─ Artworks Card (Image + Link)
  ├─ AFEProject Card (Image + Link)
  └─ NFTs Card (Image + Link)

SECTION 2: Call-to-Action (contact-me-section)
  ├─ Heading: "GET IN TOUCH"
  ├─ Description text
  └─ CTA Button: "Contact Me"

FOOTER
  ├─ Logo & description
  ├─ Quick Links
  ├─ Learn More Links
  ├─ Connect section with social media
  └─ Copyright
```

## Design Specifications

### SECTION 1: Feature Grid (Hero/Navigation Grid)

**Current Problem:** Images with no aspect ratio control; padding undefined; gaps vary.

#### EXACT SPECIFICATIONS:

**Container Properties:**
- Width: 100% (responsive container)
- Padding: 
  - Desktop (1024px+): `padding: 60px 0`
  - Tablet (768px-1023px): `padding: 50px 0`
  - Mobile (375px-767px): `padding: 40px 0`
- Background: White (#FFFFFF)
- Margin Bottom: `80px`

**Grid Layout:**
- Framework: Bootstrap Grid (Bootstrap 4/5)
- Desktop (1024px+): 
  - 4 columns: `col-lg-3` (25% width each)
  - Gap between items: `30px` (margin-right on cols)
  - Item padding: `15px` (internal spacing)
- Tablet (768px-1023px):
  - 2 columns: `col-md-6` (50% width each)
  - Gap: `20px`
  - Item padding: `12px`
- Mobile (375px-767px):
  - 1 column: `col-sm-12` (100% width)
  - Gap: `15px`
  - Item padding: `10px`

**Individual Card Element (.block-2-item):**
- Display: Block with relative positioning
- Background: Transparent
- Border-radius: `20px` (already inline in HTML)
- Box-shadow: None on desktop, subtle `0 4px 12px rgba(0,0,0,0.1)` on hover
- Transition: `all 0.3s ease`

**Image Properties (figure.image img):**
- **Aspect Ratio:** 1:1 (Square format - CRITICAL)
- **Dimensions:**
  - Desktop: 
    - Width: 100% (of column)
    - Height: 400px (fixed height for square appearance)
    - object-fit: cover
  - Tablet: 
    - Width: 100%
    - Height: 350px
  - Mobile:
    - Width: 100%
    - Height: 300px
- Border-radius: 20px
- Display: Block
- Box-shadow: `0 2px 8px rgba(0,0,0,0.15)`

**Text Overlay (.text inside .block-2-item):**
- Position: Absolute (bottom of card)
- Background: `rgba(0, 0, 0, 0.7)` semi-transparent black
- Width: 100%
- Padding: `20px`
- Color: #FFFFFF (white text)

**Text Hierarchy:**
- h3 heading:
  - Font-size: 
    - Desktop: 28px
    - Tablet: 24px
    - Mobile: 20px
  - Font-weight: 600
  - Color: #FFFFFF
  - Line-height: 1.3
  - Margin: 0
  - Letter-spacing: 0.5px

**Hover State:**
- Opacity of image: 0.95
- Text background opacity: 0.9
- Scale: 1.02 (subtle)

---

### SECTION 2: Call-to-Action (GET IN TOUCH)

**Current Problem:** Padding and margin inconsistent; text sizing not defined; button styling varies.

#### EXACT SPECIFICATIONS:

**Container (.contact-me-section):**
- Background-color: #000000 (pure black)
- Padding:
  - Desktop (1024px+): `80px 0`
  - Tablet (768px-1023px): `60px 0`
  - Mobile (375px-767px): `50px 0`
- Margin: `0 auto`
- Width: 100%
- Display: Flex
- Flex-direction: Column
- Align-items: Center
- Justify-content: Center
- Text-align: Center

**Heading (.section-title):**
- Font-size:
  - Desktop: 42px
  - Tablet: 36px
  - Mobile: 28px
- Font-weight: 700
- Color: #FFFFFF
- Line-height: 1.2
- Letter-spacing: 1px
- Margin: 
  - Top: 0
  - Bottom: 30px
  - Side: 0
- Font-family: Bahnschrift Regular
- Text-transform: UPPERCASE

**Description Paragraph:**
- Font-size:
  - Desktop: 18px
  - Tablet: 16px
  - Mobile: 14px
- Color: #FFFFFF (rgb(255,255,255))
- Line-height: 1.8
- Letter-spacing: 0.3px
- Margin:
  - Top: 0
  - Bottom: 30px
  - Max-width: 600px
  - Margin-left: auto
  - Margin-right: auto
- Font-weight: 400

**Button (.btn-prim):**
- Display: Inline-block
- Background-color: #000000 (black)
- Color: #FFFFFF (white)
- Border: 2px solid #FFFFFF
- Padding: 
  - Vertical: 14px
  - Horizontal: 30px
- Font-size: 14px
- Font-weight: 600
- Text-transform: UPPERCASE
- Border-radius: 30px
- Cursor: Pointer
- Transition: `all 0.3s ease`
- Letter-spacing: 0.5px
- Margin-top: 30px

**Button Hover State:**
- Background-color: #FFFFFF
- Color: #000000
- Border-color: #FFFFFF
- Box-shadow: `0 6px 20px rgba(255,255,255,0.2)`

**Button Active/Focus State:**
- Background-color: #EE0101 (red accent)
- Color: #FFFFFF
- Border-color: #EE0101

---

### HOME PAGE - RESPONSIVE BEHAVIOR

#### Desktop (1024px and above)
- Feature grid: 4 columns, 30px gaps
- Card height: 400px × 400px images
- CTA section: 80px padding
- Full-width layout with container max-width: 1200px

#### Tablet (768px to 1023px)
- Feature grid: 2 columns, 20px gaps
- Card height: 350px × 350px images
- CTA section: 60px padding
- Container padding: 20px sides

#### Mobile (375px to 767px)
- Feature grid: 1 column, stacked
- Card height: 300px × 300px images
- CTA section: 50px padding
- Container padding: 15px sides
- Typography reduced to 20px (h3), 14px (paragraph)

---

## PAGE 2: ABOUT (about.html)

### Page Purpose
Biographical information and artist statement. Should include professional background, artistic approach, and credentials.

### Current Issues
- HTML file not fully reviewed (size > 20KB)
- Likely missing: hero image section, biography text sections, credentials grid
- Probable layout problems matching home page style

### Expected Sections (Based on Design Pattern)

```
HEADER (Navigation)
  └─ Logo | Menu Links

SECTION 1: Breadcrumb Navigation
  ├─ "About" page title
  └─ Breadcrumb trail: Home > About

SECTION 2: Hero Section (Image + Bio)
  ├─ Large profile/hero image (16:9 aspect ratio)
  ├─ Biography text (left or right aligned)
  └─ Call-to-action button (optional)

SECTION 3: Content Sections (Alternating)
  ├─ Credentials/Experience section
  ├─ Awards section
  ├─ Skills/Mediums section
  └─ Philosophy/Approach section

FOOTER
  └─ (Standard footer - see Footer section below)
```

### Design Specifications (RECOMMENDED)

#### HERO SECTION (About Page Header)

**Container:**
- Width: 100%
- Padding: 
  - Desktop: 80px 0
  - Tablet: 60px 0
  - Mobile: 50px 0
- Background: #FFFFFF
- Display: Grid (2 columns on desktop, 1 on mobile)

**Image Container:**
- Desktop: 
  - Width: 50%
  - Height: 500px
  - Aspect ratio: Flexible (allow image to breathe)
- Tablet:
  - Width: 100%
  - Height: 400px
- Mobile:
  - Width: 100%
  - Height: 350px

**Image Properties:**
- Width: 100%
- Height: 100%
- object-fit: cover
- object-position: center
- Border-radius: 0 or 10px (consistent with design)

**Text Content Container:**
- Desktop:
  - Width: 50%
  - Padding: 0 40px
  - Display: Flex
  - Flex-direction: Column
  - Justify-content: Center
- Tablet:
  - Width: 100%
  - Padding: 40px 20px
- Mobile:
  - Width: 100%
  - Padding: 30px 15px

**Biography Heading (h1 or h2):**
- Font-size:
  - Desktop: 48px
  - Tablet: 36px
  - Mobile: 28px
- Font-weight: 700
- Color: #000000
- Line-height: 1.2
- Margin-bottom: 20px

**Biography Text (p):**
- Font-size:
  - Desktop: 18px
  - Tablet: 16px
  - Mobile: 14px
- Color: #666666
- Line-height: 1.8
- Margin-bottom: 20px

---

## PAGE 3: ARTWORKS (projects.html) - GALLERY PAGE

### Page Purpose
Display portfolio of artwork in grid gallery format with full-resolution lightbox viewing.

### Current Structure
```
HEADER (Navigation)
  └─ Logo | Menu Links

SECTION 1: Breadcrumb
  ├─ "ArtWorks" title
  └─ Breadcrumb: Home > Portfolio > Projects

SECTION 2: Gallery Grid (mona-projects-area)
  ├─ 9 Gallery items (8 images + 1 video)
  ├─ Each item: image with overlay label
  ├─ Labels include title and medium/year info
  └─ Links to full-size images

FOOTER
  └─ (Standard footer)
```

### CRITICAL ISSUE IDENTIFIED
**Current HTML has inline styles with fixed heights:**
```html
<img src="images/happiness.jpg" alt="" style="width: 100%; height: 500px;">
```
This breaks responsive design and forces aspect ratio distortion on mobile.

### EXACT DESIGN SPECIFICATIONS

#### BREADCRUMB SECTION

**Container:**
- Background: #F5F5F5 (light gray)
- Padding: 40px 0
- Margin: 0
- Border-bottom: 1px solid #E0E0E0

**Title (h2.title):**
- Font-size:
  - Desktop: 42px
  - Tablet: 36px
  - Mobile: 28px
- Font-weight: 700
- Color: #000000
- Text-align: Center
- Margin-bottom: 20px

**Breadcrumb Navigation:**
- Font-size: 14px
- Color: #666666
- Links color: #000000
- Active link color: #EE0101 (red)

---

#### GALLERY SECTION (mona-projects-area)

**Container Properties:**
- Padding:
  - Desktop: `80px 0`
  - Tablet: `60px 0`
  - Mobile: `50px 0`
- Background: #FFFFFF
- Margin-bottom: `80px`

**Grid Layout:**
- Framework: Bootstrap Grid
- Desktop (1024px+):
  - 2 columns: `col-lg-6` (50% width each)
  - Gutter: `30px` (15px on each side)
  - Row gap: `40px` (margin-bottom on items)
- Tablet (768px-1023px):
  - 1 column: `col-md-12` (100% width)
  - Gutter: `20px`
  - Row gap: `30px`
- Mobile (375px-767px):
  - 1 column: `col-sm-12` (100% width)
  - Gutter: `10px`
  - Row gap: `25px`

**Gallery Item Container (.single_gallery_item):**
- Position: Relative
- Display: Block
- Width: 100%
- Overflow: Hidden
- Transition: `transform 0.3s ease, box-shadow 0.3s ease`

**Gallery Item On Hover:**
- Transform: `scale(1.02)`
- Box-shadow: `0 10px 30px rgba(0,0,0,0.2)`

**Image Element:**
- **CRITICAL ASPECT RATIO:** 16:9 (Landscape format)
- Width: 100%
- Height: auto (calculated from aspect ratio)
- Display: Block
- object-fit: cover
- object-position: center
- Background: #F0F0F0 (fallback)

**Aspect Ratio Preservation (CSS):**
```css
.single_gallery_item::before {
  content: '';
  display: block;
  padding-bottom: 56.25%; /* 16:9 ratio */
}

.single_gallery_item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
```

**Image Responsive Heights (Calculated):**
- Desktop: 
  - Column width: 50% of ~1200px = 600px
  - Image height: 600px × (9/16) = 338px
- Tablet:
  - Column width: 100% of ~750px = 750px
  - Image height: 750px × (9/16) = 422px
- Mobile:
  - Column width: 100% of 375px = 375px
  - Image height: 375px × (9/16) = 211px

**Label Overlay (.label-content):**
- Position: Absolute
- Bottom: 0
- Left: 0
- Width: 100%
- Background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)`
- Padding:
  - Desktop: 30px
  - Mobile: 20px
- Color: #FFFFFF
- Text-align: Left

**Label Heading (h4):**
- Font-size:
  - Desktop: 20px
  - Tablet: 18px
  - Mobile: 16px
- Font-weight: 700
- Color: #FFFFFF
- Margin: 0 0 10px 0
- Text-transform: UPPERCASE
- Letter-spacing: 0.5px

**Label Subheading (h6):**
- Font-size:
  - Desktop: 14px
  - Tablet: 13px
  - Mobile: 12px
- Font-weight: 400
- Color: #E8E8E8 (slightly off-white)
- Margin: 0
- Letter-spacing: 0.3px

**Video Element (Smile artwork):**
- Width: 100%
- Height: auto
- Controls: visible (YouTube-style player)
- Autoplay: enabled (muted)
- Loop: enabled
- Aspect ratio: Same 16:9 as images

---

### PROJECTS PAGE - RESPONSIVE BEHAVIOR

#### Desktop (1024px+)
- 2-column grid with 30px gutters
- Image height: ~338px (16:9 ratio)
- Labels bottom-aligned with gradient overlay
- Hover effect: subtle scale 1.02

#### Tablet (768px-1023px)
- 1-column layout
- Image height: ~422px (full width - 20px margins)
- Labels prominent and readable
- Tap-friendly: larger touch targets

#### Mobile (375px-767px)
- 1-column, full width
- Image height: ~211px (smaller screen)
- Labels compressed but readable (12px font)
- Reduced padding for smaller screens

---

## PAGE 4: AFE PROJECT (afeproject.html)

### Page Purpose
Information about the Art for Everyone Project NGO with alternating text/image layout.

### Current Structure
```
HEADER (Navigation)

SECTION 1: Breadcrumb
  ├─ Title: "AFEProject"
  └─ Breadcrumb: Home > AFEProject

SECTION 2: Content Sections (4 alternating layouts)
  ├─ Text on left, image on right
  ├─ Text on right, image on left
  ├─ Text on left, image on right
  └─ Text on right, image on left

SECTION 3: Social Media Links
  ├─ Instagram link
  └─ Twitter/X link

FOOTER
```

### EXACT DESIGN SPECIFICATIONS

#### ALTERNATING SECTION LAYOUT

**Container (.afep-container):**
- Width: 100%
- Max-width: 80% of viewport (from inline styles)
- Margin: `0 auto`
- Padding:
  - Top: 70px (from inline style)
  - Bottom: 80px
  - Left/Right: 0
- Display: Flex
- Flex-direction: Column
- Gap: 40px (from inline style)

**Individual Section (.afep-section):**
- Display: Flex
- Align-items: Center (vertical center)
- Gap: 40px (from inline style)
- Margin-bottom: 40px
- Flex-wrap: Wrap (for mobile)

**Text Container (.afep-text):**
- Flex: 1 1 45% (flexible, minimum 45% of width)
- Desktop: 
  - Width: ~45%
  - Padding: 0 20px
- Tablet:
  - Width: 100%
  - Text-align: Center
  - Padding: 0 15px
- Mobile:
  - Width: 100%
  - Text-align: Center
  - Padding: 0 10px

**Paragraph Text (p):**
- Font-size:
  - Desktop: 18px
  - Tablet: 16px
  - Mobile: 14px
- Color: #666666
- Line-height: 1.8
- Letter-spacing: 0.3px
- Margin-bottom: 20px (last paragraph)
- Font-weight: 400

**Image Container (.image):**
- Flex: 1 1 45%
- Width: ~45% (desktop)
- Height: auto
- Display: Block

**Image Element:**
- Width: 100%
- Height: auto
- Border-radius: 10px (from inline style)
- Display: Block
- object-fit: cover

**Alternating Layout (Even Sections):**
- Applied to: .afep-section:nth-child(even)
- Flex-direction: row-reverse
- This reverses the text/image order for visual rhythm

#### Responsive Breakpoint (768px)

```css
@media (max-width: 768px) {
  .afep-section {
    flex-direction: column !important;
    text-align: center;
  }
  
  .afep-section .image {
    order: -1; /* Images appear first on mobile */
  }
  
  .afep-text {
    width: 100% !important;
  }
}
```

---

## PAGE 5: COMMISSION (commission.html) - HIDDEN

**Status:** Currently commented out in navigation and not implemented.

**When Implementing, Should Include:**
- Commission inquiry form
- Pricing tiers
- Timeline/process information
- Examples of commission work
- Terms and conditions

---

## PAGE 6: PUBLICATIONS (publications.html)

### Page Purpose
Showcase published work, articles, or featured appearances.

### Current Issues
- Content structure not fully analyzed
- Likely missing from detailed HTML review

### Recommended Structure
```
HEADER (Navigation)

SECTION 1: Breadcrumb
  ├─ Title: "Publications"
  └─ Breadcrumb: Home > Publications

SECTION 2: Publications Grid/List
  ├─ Publication cards with thumbnails
  ├─ Title, date, and description
  ├─ Links to full articles
  └─ Multiple formats (articles, interviews, features)

FOOTER
```

---

## PAGE 7: NFTs (nfts.html)

### Page Purpose
Display NFT collections and blockchain art projects.

### Current Issues
- Content structure not fully analyzed
- Likely missing grid layout specification

### Recommended Structure
```
HEADER (Navigation)

SECTION 1: Breadcrumb
  ├─ Title: "NFTs"
  └─ Breadcrumb: Home > NFTs

SECTION 2: NFT Gallery Grid
  ├─ Multiple columns (3-4 desktop, 2 tablet, 1 mobile)
  ├─ Square image containers (1:1 aspect ratio)
  ├─ NFT title and blockchain info
  ├─ Links to marketplace/contract
  └─ Hover effects

FOOTER
```

---

## PAGE 8: CONTACT (contact.html)

### Page Purpose
Contact form and contact information.

### Current Structure
```
HEADER (Navigation)

SECTION 1: Breadcrumb
  ├─ Title: "Contact"
  └─ Breadcrumb: Home > Contact me

SECTION 2: Contact Form + Image
  ├─ Left: Contact image (profile photo)
  ├─ Right: Contact form with:
  │   ├─ Name input
  │   ├─ Email input
  │   ├─ Phone input
  │   └─ Message textarea
  └─ Submit button

SECTION 3: Contact Information Cards
  ├─ Email card
  ├─ Social media card (Instagram, Twitter, Facebook, LinkedIn, TikTok)
  └─ Social icons

FOOTER
```

### EXACT DESIGN SPECIFICATIONS

#### CONTACT FORM SECTION

**Container (.mona-casting-form-area):**
- Padding:
  - Desktop: 80px 0
  - Tablet: 60px 0
  - Mobile: 50px 0
- Background: #FFFFFF
- Margin: 0

**Content Layout:**
- Display: Flex/Grid
- Desktop: 2 columns (50% | 50%)
- Tablet: 2 columns (mobile-friendly)
- Mobile: 1 column (stacked)

**Image Container (.casting-form-thumbnail):**
- Desktop:
  - Width: 50%
  - Margin-bottom: 80px
  - Padding: 0 40px 0 0
- Mobile:
  - Width: 100%
  - Margin-bottom: 30px
  - Padding: 0

**Thumbnail Image:**
- Width: 100%
- Height: auto
- Border-radius: 20px
- Display: Block
- object-fit: cover

**Form Container (.mona-contact-form):**
- Desktop:
  - Width: 50%
  - Padding: 0 0 0 40px
  - Margin-bottom: 80px
- Tablet:
  - Width: 100%
  - Padding: 0 20px
  - Margin-bottom: 60px
- Mobile:
  - Width: 100%
  - Padding: 0 15px
  - Margin-bottom: 50px

**Contact Heading (.contact-heading):**
- Margin-bottom: 30px

**Contact Heading h2:**
- Font-size:
  - Desktop: 36px
  - Tablet: 28px
  - Mobile: 24px
- Font-weight: 700
- Color: #000000
- Line-height: 1.2
- Margin: 0 0 15px 0
- Text-align: Left

**Contact Heading p:**
- Font-size:
  - Desktop: 16px
  - Tablet: 14px
  - Mobile: 13px
- Color: #666666
- Line-height: 1.6
- Margin: 0
- Text-align: Left

**Form Groups (.form-group):**
- Margin-bottom: 25px
- Display: Block

**Form Labels:**
- Font-size: 14px
- Font-weight: 600
- Color: #000000
- Display: Block
- Margin-bottom: 8px
- Text-transform: CAPITALIZE

**Form Inputs & Textarea (.form-control):**
- Width: 100%
- Padding: 
  - Vertical: 15px
  - Horizontal: 15px
- Font-size: 14px
- Color: #333333
- Background: #FFFFFF
- Border: 1px solid #D0D0D0
- Border-radius: 4px
- Transition: `border-color 0.3s ease, box-shadow 0.3s ease`
- Font-family: Bahnschrift Regular
- Line-height: 1.5

**Form Input Focus State:**
- Border-color: #000000
- Box-shadow: `0 0 0 3px rgba(0,0,0,0.1)`
- Outline: None

**Form Textarea (message):**
- Min-height: 150px
- Resize: vertical
- Same styles as input
- Rows attribute: 8

**Submit Button (.btn.mona-btn.btn-2):**
- Display: Inline-block
- Background-color: #000000
- Color: #FFFFFF
- Border: 1px solid #000000
- Padding: 
  - Vertical: 14px
  - Horizontal: 30px
- Font-size: 14px
- Font-weight: 600
- Text-transform: UPPERCASE
- Border-radius: 4px
- Cursor: Pointer
- Transition: `all 0.3s ease`
- Letter-spacing: 0.5px
- Margin-top: 15px

**Button Hover State:**
- Background-color: #EE0101 (red)
- Border-color: #EE0101
- Color: #FFFFFF

---

#### CONTACT INFORMATION CARDS

**Cards Container:**
- Display: Grid
- Grid-columns:
  - Desktop: 3 columns (repeat(3, 1fr))
  - Tablet: 2 columns (repeat(2, 1fr))
  - Mobile: 1 column (1fr)
- Gap: 40px
- Margin-top: 60px

**Individual Card (.single-contact-card):**
- Background: #FFFFFF
- Border: 1px solid #EBEBEB
- Padding: 40px
- Border-radius: 8px
- Transition: `all 0.3s ease`
- Margin-bottom: 80px

**Card Hover State:**
- Box-shadow: `0 10px 30px rgba(0,0,0,0.1)`
- Transform: `translateY(-5px)`

**Card Heading (h2):**
- Font-size: 20px
- Font-weight: 700
- Color: #000000
- Margin-bottom: 15px
- Line-height: 1.3

**Card Content (h6, h3, p, a):**
- Font-size: 16px
- Color: #666666
- Line-height: 1.6
- Margin: 0

**Card Links (a):**
- Color: #000000
- Text-decoration: None
- Transition: `color 0.3s ease`

**Card Links Hover:**
- Color: #EE0101 (red)

**Social Media Icons:**
- Font-size: 24px
- Color: #000000
- Margin-right: 20px
- Transition: `color 0.3s ease`
- Display: Inline-block

**Social Icon Hover:**
- Color: #EE0101

---

### CONTACT PAGE - RESPONSIVE BEHAVIOR

#### Desktop (1024px+)
- 2-column form layout (image | form)
- 3-column contact info cards
- Full width padding: 80px
- Form inputs: full width

#### Tablet (768px-1023px)
- 2-column form layout maintained
- 2-column contact cards
- Padding: 60px
- Adjusted font sizes

#### Mobile (375px-767px)
- 1-column stacked layout (image above form)
- 1-column contact cards
- Padding: 50px (15px actual)
- Smaller font sizes (13-14px)
- Input padding: 12px (mobile-optimized)

---

## PART 3: HEADER & FOOTER SPECIFICATIONS

---

## HEADER COMPONENT

### Navigation Structure
```
HEADER
├─ Logo (96px × 25px)
├─ Navigation Menu (desktop)
│   ├─ Home
│   ├─ About
│   ├─ Artworks
│   ├─ AFEProject
│   ├─ Publications
│   ├─ NFTs
│   └─ Contact me
└─ Mobile Hamburger Menu (responsive)
```

### HEADER DESIGN SPECIFICATIONS

**Header Container (.header-area):**
- Position: Fixed or Static (verify in implementation)
- Top: 0
- Width: 100%
- Z-index: 1000 (above content)
- Background: #FFFFFF
- Box-shadow: `0 2px 10px rgba(0,0,0,0.05)`
- Height: auto
- Padding: 20px 0

**Navigation (.classy-navbar):**
- Display: Flex
- Justify-content: Space-between
- Align-items: Center
- Height: 65px
- Padding: 0 30px

**Logo (.nav-brand img):**
- Width: 96px
- Height: 25px
- Display: Block

**Nav Menu (Desktop):**
- Display: Flex
- Gap: 40px
- Align-items: Center

**Nav Link (a):**
- Font-size: 14px
- Font-weight: 600
- Color: #000000
- Text-decoration: None
- Text-transform: CAPITALIZE
- Transition: `color 0.3s ease`
- Position: Relative

**Nav Link Hover:**
- Color: #EE0101 (red)

**Nav Link Active:**
- Color: #EE0101
- Border-bottom: 2px solid #EE0101

**Mobile Hamburger (.classy-navbar-toggler):**
- Display: None (desktop)
- Display: Block (mobile: 767px and below)
- Cursor: Pointer
- Height: 30px
- Width: 30px

**Mobile Menu Behavior:**
- Appears on screens ≤ 767px
- Full-width overlay (or side drawer)
- Stacked vertical menu
- Same styling as desktop links

---

## FOOTER COMPONENT

### Footer Structure
```
FOOTER
├─ Container 1: Logo & Description
│   ├─ Logo image
│   ├─ Description text
│   └─ Copyright
├─ Container 2: Quick Links (2 columns)
│   ├─ Column 1: Artworks, Commission, AFEProject, NFTs
│   └─ Column 2: About, Publications, Contact
└─ Container 3: Social Media & Contact
    ├─ Email
    └─ Social icons (Instagram, Twitter, Facebook, LinkedIn, TikTok)
```

### FOOTER DESIGN SPECIFICATIONS

**Footer Container:**
- Background: #000000 (black)
- Padding:
  - Desktop: 80px 0 40px 0
  - Tablet: 60px 0 30px 0
  - Mobile: 50px 0 20px 0
- Color: #FFFFFF
- Margin-top: 80px

**Footer Content Grid:**
- Display: Grid
- Grid-columns:
  - Desktop: 3 columns (repeat(3, 1fr))
  - Tablet: 2 columns
  - Mobile: 1 column (stacked)
- Gap: 40px
- Max-width: 1200px
- Margin: 0 auto
- Padding: 0 30px

**Footer Section (.singlefoot, .first-footer, .second-footer, .fourth-footer):**
- Padding: 0 (handled by grid gap)
- Margin-bottom: 40px

**Footer Logo:**
- Width: 100px
- Height: auto
- Display: Block
- Margin-bottom: 20px

**Footer Heading (h2):**
- Font-size: 16px
- Font-weight: 700
- Color: #FFFFFF
- Margin-bottom: 20px
- Text-transform: CAPITALIZE

**Footer Text (p, .footer-text):**
- Font-size: 13px
- Color: #CCCCCC
- Line-height: 1.7
- Margin-bottom: 15px

**Footer Links:**
- Font-size: 13px
- Color: #CCCCCC
- Text-decoration: None
- Transition: `color 0.3s ease`
- Display: Block
- Margin-bottom: 8px

**Footer Links Hover:**
- Color: #EE0101 (red)

**Social Icons (#icones):**
- Display: Flex
- Gap: 15px
- Margin-bottom: 20px

**Social Icon (a):**
- Font-size: 18px
- Color: #FFFFFF
- Transition: `color 0.3s ease`
- Display: Inline-block
- Text-decoration: None

**Social Icon Hover:**
- Color: #EE0101

**Copyright Text (.copywrite-text):**
- Font-size: 12px
- Color: #999999
- Margin-top: 20px
- Text-align: Center
- Border-top: 1px solid #333333
- Padding-top: 20px

**Footer Mobile (.text2):**
- Display: None (desktop)
- Display: Block (mobile)
- Border-top: 1px solid #333333
- Padding-top: 20px
- Margin-top: 20px

---

## PART 4: COMPONENT CSS REFERENCE TABLE

---

## COMPONENT 1: HERO SECTIONS

### Hero - Full Width Image + Text Overlay

**Usage:** Home page feature cards, gallery hero sections

| Property | Desktop Value | Tablet Value | Mobile Value |
|----------|---------------|--------------|--------------|
| **Height** | 400px | 350px | 300px |
| **Aspect Ratio** | 1:1 (square) | 1:1 | 1:1 |
| **Image object-fit** | cover | cover | cover |
| **Padding** | 60px 0 | 50px 0 | 40px 0 |
| **Gap (grid)** | 30px | 20px | 15px |
| **Border-radius** | 20px | 20px | 20px |
| **Box-shadow** | 0 2px 8px rgba(0,0,0,0.15) | same | same |
| **Text Overlay BG** | rgba(0,0,0,0.7) | rgba(0,0,0,0.75) | rgba(0,0,0,0.8) |
| **Text Padding** | 20px | 18px | 15px |

---

## COMPONENT 2: GALLERY SECTIONS

### Gallery - Image Grid with Labels

**Usage:** Projects page, Artworks, NFTs pages

| Property | Desktop Value | Tablet Value | Mobile Value |
|----------|---------------|--------------|--------------|
| **Columns** | 2 (col-lg-6) | 1 (col-md-12) | 1 (col-sm-12) |
| **Gutters** | 30px | 20px | 10px |
| **Row Gap** | 40px | 30px | 25px |
| **Image Aspect Ratio** | 16:9 (landscape) | 16:9 | 16:9 |
| **Image Height (calculated)** | ~338px | ~422px | ~211px |
| **object-fit** | cover | cover | cover |
| **Label Position** | Bottom overlay | Bottom overlay | Bottom overlay |
| **Label BG Gradient** | linear-gradient(180deg...) | same | same |
| **Label Padding** | 30px | 25px | 20px |
| **Hover Effect** | scale(1.02) | No scale | No scale (touch) |
| **Border-radius** | 0 (sharp) | 0 | 0 |

---

## COMPONENT 3: TEXT SECTIONS

### Text Content Blocks

| Property | Desktop Value | Tablet Value | Mobile Value |
|----------|---------------|--------------|--------------|
| **Font-size (body)** | 18px | 16px | 14px |
| **Font-size (h1)** | 48px | 36px | 28px |
| **Font-size (h2)** | 36px | 28px | 24px |
| **Font-size (h3)** | 28px | 24px | 20px |
| **Line-height** | 1.8 | 1.7 | 1.6 |
| **Letter-spacing** | 0.3px | 0.2px | 0.1px |
| **Color** | #666666 | #666666 | #333333 |
| **Max-width** | 600px (CTA), 80% | 90% | 100% |
| **Margin-bottom** | 20px | 18px | 15px |
| **Font-weight** | 400 (body), 700 (heading) | same | same |

---

## COMPONENT 4: CALL-TO-ACTION SECTIONS

### CTA - Text + Button Block

**Usage:** "Get in Touch" sections, promotional blocks

| Property | Desktop Value | Tablet Value | Mobile Value |
|----------|---------------|--------------|--------------|
| **Background** | #000000 | #000000 | #000000 |
| **Padding** | 80px 0 | 60px 0 | 50px 0 |
| **Heading Font-size** | 42px | 36px | 28px |
| **Heading Color** | #FFFFFF | #FFFFFF | #FFFFFF |
| **Description Font-size** | 18px | 16px | 14px |
| **Description Color** | #FFFFFF | #FFFFFF | #FFFFFF |
| **Button BG** | #000000 | #000000 | #000000 |
| **Button Border** | 2px solid #FFFFFF | 2px solid #FFFFFF | 2px solid #FFFFFF |
| **Button Padding** | 14px 30px | 12px 25px | 10px 20px |
| **Button Font-size** | 14px | 13px | 12px |
| **Button Hover BG** | #FFFFFF | #FFFFFF | #EE0101 |
| **Button Hover Text** | #000000 | #000000 | #FFFFFF |
| **Text-align** | center | center | center |
| **Max-content-width** | 600px | 80% | 100% |

---

## COMPONENT 5: FORM SECTIONS

### Contact Form Layout

| Property | Desktop Value | Tablet Value | Mobile Value |
|----------|---------------|--------------|--------------|
| **Layout** | 2-column (50%\|50%) | 2-column | 1-column stacked |
| **Padding** | 80px 0 | 60px 0 | 50px 0 |
| **Image Container Width** | 50% | 100% | 100% |
| **Form Width** | 50% | 100% | 100% |
| **Form Gap/Gutter** | 40px | 20px | 15px |
| **Input Padding** | 15px | 14px | 12px |
| **Input Font-size** | 14px | 13px | 13px |
| **Input Border** | 1px solid #D0D0D0 | same | same |
| **Label Font-size** | 14px | 13px | 12px |
| **Label Font-weight** | 600 | 600 | 600 |
| **Textarea Min-height** | 150px | 120px | 100px |
| **Button Padding** | 14px 30px | 12px 25px | 10px 20px |
| **Button Font-size** | 14px | 13px | 12px |
| **Form Group Gap** | 25px | 20px | 18px |
| **Image Border-radius** | 20px | 20px | 15px |

---

## PART 5: COLOR & TYPOGRAPHY STANDARDS

---

## COLOR PALETTE

### Primary Colors

| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| Black (Primary) | #000000 | rgb(0,0,0) | Headers, text, backgrounds, borders |
| Red (Accent) | #EE0101 | rgb(238,1,1) | Links hover, active states, CTA emphasis |
| White | #FFFFFF | rgb(255,255,255) | Text on dark backgrounds, overlays |
| Gray (Text) | #666666 | rgb(102,102,102) | Body text, secondary content |
| Gray (Dark) | #333333 | rgb(51,51,51) | Alternative heading color |
| Gray (Light) | #F0F0F0 | rgb(240,240,240) | Backgrounds, sections |
| Gray (Lighter) | #EBEBEB | rgb(235,235,235) | Borders, dividers |
| Gray (Secondary) | #A6A6A6 | rgb(166,166,166) | Secondary text (per original spec) |
| Off-white | #CCCCCC | rgb(204,204,204) | Footer text |
| Off-white 2 | #E8E8E8 | rgb(232,232,232) | Secondary labels |

### Color Usage Map

| Component | Primary Color | Secondary | Accent |
|-----------|---------------|-----------|--------|
| Headings | #000000 | - | - |
| Body Text | #666666 | #A6A6A6 | - |
| Links | #000000 | - | #EE0101 (hover) |
| Buttons | #000000 (bg) | - | #EE0101 (hover) |
| CTA Sections | #FFFFFF (text) | - | #EE0101 (border) |
| Footer | #CCCCCC (text) | - | #EE0101 (links hover) |
| Backgrounds | #FFFFFF | #F0F0F0 | #000000 |
| Borders | #EBEBEB | - | - |

---

## TYPOGRAPHY STANDARDS

### Font Family
- **Primary:** Bahnschrift Regular
- **Fallback:** Sans-serif (system default)

### Font Weight Scale

| Weight | Usage |
|--------|-------|
| 400 | Body text, paragraphs, regular content |
| 600 | Form labels, secondary headings |
| 700 | Headings (h1-h6), button text, emphasis |

### Font Size Scale (Desktop → Tablet → Mobile)

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| **h1** | 48px | 36px | 28px |
| **h2** | 36px | 28px | 24px |
| **h3** | 28px | 24px | 20px |
| **h4** | 20px | 18px | 16px |
| **h6** | 14px | 13px | 12px |
| **Body Text** | 18px | 16px | 14px |
| **Small Text** | 14px | 13px | 12px |
| **Form Labels** | 14px | 13px | 12px |
| **Navigation** | 14px | 13px | 12px |
| **Footer** | 13px | 12px | 11px |

### Line Height & Letter Spacing

| Element | Line-height | Letter-spacing |
|---------|------------|-----------------|
| **Headings** | 1.2 - 1.4 | 0.5px - 1px |
| **Body Text** | 1.6 - 1.8 | 0.3px |
| **Labels** | 1.4 | 0.2px |
| **Uppercase Text** | 1.2 | 0.5px - 1px |
| **Navigation** | 1.4 | 0.3px |

---

## PART 6: SPACING & PADDING STANDARDS

---

## VERTICAL SPACING (Margins between sections)

### Section Padding Scale

| Size | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| **Extra Large** | 80px top/bottom | 60px | 50px |
| **Large** | 60px top/bottom | 50px | 40px |
| **Medium** | 40px top/bottom | 30px | 25px |
| **Small** | 30px top/bottom | 20px | 15px |
| **Extra Small** | 15px top/bottom | 10px | 8px |

### Section Bottom Margins (Space between sections)

| Section Type | Margin-bottom |
|--------------|---------------|
| Feature Grid | 80px |
| Gallery | 80px |
| CTA Block | 80px |
| Contact Form | 60px |
| Hero Section | 60px |
| Text Section | 40px |

---

## HORIZONTAL SPACING (Gutters, padding)

### Container Padding

| Viewport | Padding Sides | Max-width |
|----------|--------------|-----------|
| Desktop (1024px+) | 30px | 1200px |
| Tablet (768px-1023px) | 20px | 100% |
| Mobile (375px-767px) | 15px | 100% |

### Grid Gutters

| Grid Type | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| 2-Column Grid | 30px | 20px | 10px |
| 3-Column Grid | 30px | 20px | 10px |
| 4-Column Grid | 30px | 20px | 10px |
| 1-Column (Full) | 0 | 0 | 0 |

### Element Internal Padding

| Element | Padding |
|---------|---------|
| Cards | 40px (desktop), 30px (tablet), 20px (mobile) |
| Buttons | 14px vertical, 30px horizontal (desktop) |
| Form Inputs | 15px vertical, 15px horizontal |
| Text Overlays | 30px (desktop), 20px (mobile) |
| Sections | See Section Padding Scale above |

---

## PART 7: RESPONSIVE DESIGN BREAKPOINTS

---

## BREAKPOINT DEFINITIONS

### Official Breakpoints (Bootstrap-based)

| Breakpoint | Viewport Width | CSS Media Query | Usage |
|-----------|----------------|-----------------|-------|
| **Mobile** | 375px - 575px | max-width: 575px | Small phones (iPhone SE, etc.) |
| **Small Tablet** | 576px - 767px | min-width: 576px | Large phones, small tablets |
| **Tablet** | 768px - 1023px | min-width: 768px | iPad, tablets |
| **Desktop** | 1024px+ | min-width: 1024px | Desktops, large screens |
| **Large Desktop** | 1200px+ | min-width: 1200px | Widescreen, 4K |

### Audit Breakpoints (Testing)

Test these specific widths:
- **375px** - iPhone 12/13 Mini (mobile edge case)
- **414px** - iPhone 12/13 Pro (common mobile)
- **768px** - iPad (tablet edge case)
- **1024px** - iPad Pro / Small desktop (desktop edge case)
- **1440px** - Common desktop resolution

---

## RESPONSIVE RULES BY COMPONENT

### Navigation

```css
/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .classy-navbar {
    display: flex;
    gap: 40px;
  }
  .classy-navbar-toggler {
    display: none;
  }
}

/* Mobile (max-width: 1023px) */
@media (max-width: 1023px) {
  .classy-navbar-toggler {
    display: block;
  }
  .classy-menu {
    position: fixed;
    top: 65px;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    flex-direction: column;
  }
  .classynav ul {
    flex-direction: column;
    gap: 20px;
  }
}
```

### Feature Grid

```css
/* Desktop */
@media (min-width: 1024px) {
  .col-lg-6 { width: 50%; }
  .site-blocks-2 { padding: 60px 0; }
  .block-2-item .image img { height: 400px; }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .col-md-6 { width: 50%; }
  .site-blocks-2 { padding: 50px 0; }
  .block-2-item .image img { height: 350px; }
}

/* Mobile */
@media (max-width: 767px) {
  .col-sm-6, .col-sm-12 { width: 100%; }
  .site-blocks-2 { padding: 40px 0; }
  .block-2-item .image img { height: 300px; }
  .text h3 { font-size: 20px; }
}
```

### Gallery Grid

```css
/* Desktop: 2 columns */
@media (min-width: 1024px) {
  .col-lg-6 { width: 50%; }
  .mona-projects-area { padding: 80px 0; }
  .mona-portfolio { gap: 30px; }
}

/* Tablet: 1 column */
@media (min-width: 768px) and (max-width: 1023px) {
  .col-md-12 { width: 100%; }
  .mona-projects-area { padding: 60px 0; }
  .mona-portfolio { gap: 20px; }
}

/* Mobile: 1 column, full width */
@media (max-width: 767px) {
  .col-sm-12 { width: 100%; }
  .mona-projects-area { padding: 50px 0; }
  .mona-portfolio { gap: 15px; }
  .label-content h4 { font-size: 16px; }
  .label-content h6 { font-size: 12px; }
}
```

### Contact Form

```css
/* Desktop: Side-by-side */
@media (min-width: 1024px) {
  .casting-form-thumbnail { width: 50%; }
  .mona-contact-form { width: 50%; }
  .mona-casting-form-area { padding: 80px 0; }
}

/* Mobile: Stacked */
@media (max-width: 767px) {
  .casting-form-thumbnail { width: 100%; }
  .mona-contact-form { width: 100%; }
  .mona-casting-form-area { padding: 50px 0; }
  .form-control { padding: 12px; }
  .contact-heading h2 { font-size: 24px; }
}
```

---

## PART 8: IMPLEMENTATION CHECKLIST

---

## Critical Fixes Required

### Immediate (High Priority)

- [ ] **Remove inline style height fixes** from all images
  - Remove `style="height: 500px"` from projects.html images
  - Use CSS aspect-ratio or padding-bottom hack instead
  
- [ ] **Add aspect-ratio preservation** to all image containers
  - Gallery images: 16:9 aspect ratio
  - Hero cards: 1:1 aspect ratio
  - Use CSS `aspect-ratio` property with fallbacks

- [ ] **Define section padding/spacing** consistently
  - Add `section-padding-*` classes to all sections
  - Use `mb-80` for between-section margins
  - Ensure 80px, 60px, 50px cascade by viewport

- [ ] **Fix responsive breakpoints**
  - Test at 375px, 768px, 1024px minimum
  - Verify all text sizes scale appropriately
  - Confirm grid columns change correctly

- [ ] **Standardize typography**
  - All headings use Bahnschrift Regular
  - h1: 48/36/28px, h2: 36/28/24px, h3: 28/24/20px
  - Body text: 18/16/14px
  - Line-height: 1.8 for body, 1.2 for headings

### Secondary (Medium Priority)

- [ ] **Fix color consistency**
  - Primary black: #000000
  - Red accent: #EE0101
  - Text gray: #666666
  - Update all to hex codes (no rgb)

- [ ] **Add hover/focus states** to all interactive elements
  - Links: color: #EE0101
  - Buttons: background: #EE0101
  - Forms: focus border: #000000

- [ ] **Optimize footer**
  - 3-column grid (desktop), 1-column (mobile)
  - Consistent social icon styling
  - Fix copyright padding/margins

- [ ] **Implement contact form styling**
  - All inputs: 15px padding, #D0D0D0 border
  - Labels: 14px, font-weight: 600
  - Button: black background, white border

- [ ] **Add breadcrumb styling**
  - Light gray background (#F5F5F5)
  - 40px padding top/bottom
  - Active link: red (#EE0101)

### Tertiary (Low Priority - Polish)

- [ ] **Add transition effects**
  - Links: 0.3s ease
  - Buttons: 0.3s ease
  - Images on hover: 0.3s ease

- [ ] **Refine card shadows**
  - Gallery cards: 0 2px 8px rgba(0,0,0,0.15)
  - Contact cards: 0 10px 30px rgba(0,0,0,0.1) on hover
  - CTA section: no shadow

- [ ] **Mobile-specific optimizations**
  - Increase touch targets to 44px minimum
  - Reduce form input padding on mobile
  - Stack columns earlier (768px vs 1024px)

- [ ] **Accessibility improvements**
  - Add focus outlines (4px blue/red)
  - Increase contrast ratios
  - Ensure all interactive elements are keyboard-accessible

---

## FINAL SUMMARY TABLE

| Issue | Current State | Required State | Priority |
|-------|---------------|-----------------|----------|
| **Image Aspect Ratios** | Undefined, stretched | Gallery: 16:9, Cards: 1:1 | HIGH |
| **Section Padding** | Inconsistent | 80/60/50px desktop/tablet/mobile | HIGH |
| **Typography Sizes** | Mixed | 48/36/28px for h1, etc. | HIGH |
| **Responsive Breakpoints** | Missing explicit rules | 375, 768, 1024px defined | HIGH |
| **Color Consistency** | Some inline styles | All #000000, #EE0101, #666666 | MEDIUM |
| **Hover Effects** | Minimal | All links/buttons: #EE0101 | MEDIUM |
| **Button Styling** | Inconsistent | Uniform 14px, 14px30px, border-radius 30px | MEDIUM |
| **Form Inputs** | Basic styling | 15px padding, #D0D0D0 border, consistent | MEDIUM |
| **Footer Layout** | Functional but dense | 3-column grid, 40px gaps | MEDIUM |
| **Transitions** | Missing | 0.3s ease on all interactive elements | LOW |

---

**END OF DESIGN AUDIT REPORT**

---

## Appendix: Quick Reference Card

### Master Spacing Guide
```
SECTIONS: 80px (desktop) | 60px (tablet) | 50px (mobile)
GRID GAP: 30px (desktop) | 20px (tablet) | 15px (mobile)
PADDING: 30px sides (desktop) | 20px (tablet) | 15px (mobile)
BUTTON: 14px vert | 30px horiz
INPUT: 15px all sides
```

### Master Typography Guide
```
H1: 48px | 36px | 28px
H2: 36px | 28px | 24px
H3: 28px | 24px | 20px
BODY: 18px | 16px | 14px
SMALL: 14px | 13px | 12px
LINE-HEIGHT: 1.8 (body) | 1.2 (heading)
```

### Master Color Guide
```
PRIMARY BLACK: #000000
ACCENT RED: #EE0101
TEXT GRAY: #666666
BG WHITE: #FFFFFF
BG GRAY: #F0F0F0
BORDER: #EBEBEB
FOOTER TEXT: #CCCCCC
```

### Master Breakpoint Guide
```
MOBILE: max-width: 767px
TABLET: 768px - 1023px
DESKTOP: 1024px+
TEST WIDTHS: 375px, 768px, 1024px, 1440px
```
