# CSS STANDARDS & IMPLEMENTATION REFERENCE

**For Tobi Adebayo Portfolio Redesign**

---

## TABLE OF CONTENTS
1. Global Standards
2. Component-Specific CSS
3. Responsive Mixins
4. Implementation Examples
5. Common Patterns

---

## 1. GLOBAL CSS STANDARDS

### Root Variables (Custom Properties)

```css
:root {
  /* Colors */
  --primary-black: #000000;
  --accent-red: #EE0101;
  --text-gray: #666666;
  --white: #FFFFFF;
  --bg-gray: #F0F0F0;
  --border-gray: #EBEBEB;
  --dark-gray: #333333;
  --secondary-gray: #A6A6A6;
  --light-gray: #CCCCCC;
  --off-white: #E8E8E8;
  
  /* Typography */
  --font-primary: 'Bahnschrift Regular', sans-serif;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Spacing */
  --space-xs: 8px;
  --space-sm: 15px;
  --space-md: 20px;
  --space-lg: 30px;
  --space-xl: 40px;
  --space-2xl: 60px;
  --space-3xl: 80px;
  
  /* Breakpoints */
  --bp-mobile: 375px;
  --bp-tablet: 768px;
  --bp-desktop: 1024px;
  --bp-large: 1200px;
  
  /* Transitions */
  --transition-fast: 0.3s ease;
  --transition-standard: 0.5s ease;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 10px;
  --radius-xl: 20px;
  --radius-full: 30px;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.15);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

### Base Element Styling

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  color: var(--text-gray);
  line-height: 1.8;
  background-color: var(--white);
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  color: var(--primary-black);
  line-height: 1.2;
  letter-spacing: 0.5px;
}

h1 { font-size: 48px; }
h2 { font-size: 36px; }
h3 { font-size: 28px; }
h4 { font-size: 20px; }
h5 { font-size: 16px; }
h6 { font-size: 14px; }

/* Links */
a {
  color: var(--primary-black);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover,
a:focus {
  color: var(--accent-red);
  outline: none;
}

/* Images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Lists */
ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  list-style: none;
}

/* Paragraphs */
p {
  margin-bottom: var(--space-md);
}

/* Form Elements */
input, textarea, select {
  font-family: var(--font-primary);
  font-size: inherit;
}
```

---

## 2. COMPONENT-SPECIFIC CSS

### HEADER & NAVIGATION

```css
/* Header Container */
.header-area {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 20px 0;
}

/* Navigation Bar */
.classy-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 0 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo */
.nav-brand img {
  width: 96px;
  height: 25px;
  display: block;
}

/* Desktop Menu */
.classy-menu {
  display: flex;
  gap: 40px;
}

.classynav ul {
  display: flex;
  gap: 40px;
  align-items: center;
}

.classynav li a {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  color: var(--primary-black);
  text-transform: capitalize;
  position: relative;
  transition: color var(--transition-fast);
}

.classynav li a:hover {
  color: var(--accent-red);
}

.classynav li a.active {
  color: var(--accent-red);
  border-bottom: 2px solid var(--accent-red);
}

/* Mobile Hamburger */
.classy-navbar-toggler {
  display: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
}

.classy-navbar-toggler span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--primary-black);
  transition: all var(--transition-fast);
}

/* Mobile Menu */
@media (max-width: 1023px) {
  .classy-navbar-toggler {
    display: flex;
  }
  
  .classy-menu {
    position: fixed;
    top: 65px;
    left: 0;
    width: 100%;
    background-color: var(--white);
    flex-direction: column;
    gap: 0;
    padding: 20px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .classynav ul {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
  }
}
```

---

### HERO & FEATURE CARDS

```css
/* Feature Grid Container */
.site-blocks-2 {
  width: 100%;
  padding: var(--space-3xl) 0;
  background-color: var(--white);
  margin-bottom: var(--space-3xl);
}

@media (max-width: 1023px) {
  .site-blocks-2 {
    padding: 60px 0;
    margin-bottom: 60px;
  }
}

@media (max-width: 767px) {
  .site-blocks-2 {
    padding: 50px 0;
    margin-bottom: 50px;
  }
}

/* Feature Card Container */
.block-2-item {
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
  transition: all var(--transition-fast);
}

.block-2-item:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-lg);
}

.block-2-item:hover .image img {
  opacity: 0.95;
}

/* Card Image */
.block-2-item .image {
  position: relative;
  width: 100%;
  background-color: var(--bg-gray);
  overflow: hidden;
}

/* Image with aspect-ratio preservation */
.block-2-item .image::before {
  content: '';
  display: block;
  padding-bottom: 100%; /* 1:1 aspect ratio */
}

.block-2-item .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: opacity var(--transition-fast);
}

/* Card Text Overlay */
.block-2-item .text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: var(--white);
  padding: 20px;
  text-align: left;
}

@media (max-width: 1023px) {
  .block-2-item .text {
    padding: 18px;
  }
}

@media (max-width: 767px) {
  .block-2-item .text {
    padding: 15px;
  }
}

.block-2-item .text h3 {
  font-size: 28px;
  color: var(--white);
  margin: 0;
  font-weight: var(--font-weight-semibold);
  text-transform: capitalize;
  letter-spacing: 0.5px;
}

@media (max-width: 1023px) {
  .block-2-item .text h3 {
    font-size: 24px;
  }
}

@media (max-width: 767px) {
  .block-2-item .text h3 {
    font-size: 20px;
  }
}
```

---

### GALLERY SECTIONS

```css
/* Gallery Container */
.mona-projects-area {
  width: 100%;
  padding: var(--space-3xl) 0;
  background-color: var(--white);
  margin-bottom: var(--space-3xl);
}

@media (max-width: 1023px) {
  .mona-projects-area {
    padding: 60px 0;
    margin-bottom: 60px;
  }
}

@media (max-width: 767px) {
  .mona-projects-area {
    padding: 50px 0;
    margin-bottom: 50px;
  }
}

/* Gallery Grid */
.mona-portfolio {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  row-gap: 40px;
}

@media (max-width: 1023px) {
  .mona-portfolio {
    grid-template-columns: 1fr;
    gap: 20px;
    row-gap: 30px;
  }
}

@media (max-width: 767px) {
  .mona-portfolio {
    grid-template-columns: 1fr;
    gap: 10px;
    row-gap: 25px;
  }
}

/* Gallery Item */
.single_gallery_item {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--bg-gray);
}

/* Aspect Ratio Preservation (16:9) */
.single_gallery_item::before {
  content: '';
  display: block;
  padding-bottom: 56.25%; /* 16:9 ratio */
}

.single_gallery_item {
  position: relative;
}

.single_gallery_item img,
.single_gallery_item video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.single_gallery_item:hover img,
.single_gallery_item:hover video {
  transform: scale(1.02);
}

/* Label Overlay */
.label-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  color: var(--white);
  padding: 30px;
  text-align: left;
  z-index: 10;
}

@media (max-width: 1023px) {
  .label-content {
    padding: 25px;
  }
}

@media (max-width: 767px) {
  .label-content {
    padding: 20px;
  }
}

.label-content h4 {
  font-size: 20px;
  color: var(--white);
  margin: 0 0 10px 0;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 1023px) {
  .label-content h4 {
    font-size: 18px;
  }
}

@media (max-width: 767px) {
  .label-content h4 {
    font-size: 16px;
  }
}

.label-content h6 {
  font-size: 14px;
  color: var(--off-white);
  margin: 0;
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.3px;
}

@media (max-width: 1023px) {
  .label-content h6 {
    font-size: 13px;
  }
}

@media (max-width: 767px) {
  .label-content h6 {
    font-size: 12px;
  }
}
```

---

### CALL-TO-ACTION SECTION

```css
/* CTA Container */
.contact-me-section {
  width: 100%;
  background-color: var(--primary-black);
  padding: var(--space-3xl) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (max-width: 1023px) {
  .contact-me-section {
    padding: 60px 0;
  }
}

@media (max-width: 767px) {
  .contact-me-section {
    padding: 50px 0;
  }
}

/* CTA Heading */
.contact-me-section .section-title {
  font-size: 42px;
  font-weight: var(--font-weight-bold);
  color: var(--white);
  margin: 0 0 30px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.2;
}

@media (max-width: 1023px) {
  .contact-me-section .section-title {
    font-size: 36px;
  }
}

@media (max-width: 767px) {
  .contact-me-section .section-title {
    font-size: 28px;
    margin-bottom: 20px;
  }
}

/* CTA Paragraph */
.contact-me-section p {
  font-size: 18px;
  color: var(--white);
  line-height: 1.8;
  letter-spacing: 0.3px;
  margin: 0 0 30px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1023px) {
  .contact-me-section p {
    font-size: 16px;
  }
}

@media (max-width: 767px) {
  .contact-me-section p {
    font-size: 14px;
    margin-bottom: 20px;
  }
}

/* CTA Button */
.contact-me-section .btn-prim {
  display: inline-block;
  background-color: var(--primary-black);
  color: var(--white);
  border: 2px solid var(--white);
  padding: 14px 30px;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
  letter-spacing: 0.5px;
  margin-top: 30px;
  text-decoration: none;
}

@media (max-width: 1023px) {
  .contact-me-section .btn-prim {
    padding: 12px 25px;
    font-size: 13px;
    margin-top: 20px;
  }
}

@media (max-width: 767px) {
  .contact-me-section .btn-prim {
    padding: 10px 20px;
    font-size: 12px;
  }
}

.contact-me-section .btn-prim:hover {
  background-color: var(--white);
  color: var(--primary-black);
  border-color: var(--white);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
}

.contact-me-section .btn-prim:focus {
  background-color: var(--accent-red);
  color: var(--white);
  border-color: var(--accent-red);
}
```

---

### CONTACT FORM

```css
/* Form Container */
.mona-casting-form-area {
  width: 100%;
  padding: var(--space-3xl) 0;
  background-color: var(--white);
}

@media (max-width: 1023px) {
  .mona-casting-form-area {
    padding: 60px 0;
  }
}

@media (max-width: 767px) {
  .mona-casting-form-area {
    padding: 50px 0;
  }
}

.mona-casting-form-area .row {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

@media (max-width: 1023px) {
  .mona-casting-form-area .row {
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .mona-casting-form-area .row {
    flex-direction: column;
    gap: 0;
  }
}

/* Image Container */
.casting-form-thumbnail {
  flex: 0 0 50%;
  margin-bottom: var(--space-3xl);
}

@media (max-width: 767px) {
  .casting-form-thumbnail {
    flex: 1 1 100%;
    margin-bottom: 30px;
  }
}

.casting-form-thumbnail img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  object-fit: cover;
  display: block;
}

/* Form Container */
.mona-contact-form {
  flex: 0 0 50%;
  margin-bottom: var(--space-3xl);
}

@media (max-width: 767px) {
  .mona-contact-form {
    flex: 1 1 100%;
  }
}

/* Form Heading */
.contact-heading h2 {
  font-size: 36px;
  font-weight: var(--font-weight-bold);
  color: var(--primary-black);
  margin: 0 0 15px 0;
  text-align: left;
}

@media (max-width: 1023px) {
  .contact-heading h2 {
    font-size: 28px;
  }
}

@media (max-width: 767px) {
  .contact-heading h2 {
    font-size: 24px;
  }
}

.contact-heading p {
  font-size: 16px;
  color: var(--text-gray);
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

@media (max-width: 767px) {
  .contact-heading p {
    font-size: 14px;
  }
}

/* Form Groups */
.form-group {
  margin-bottom: 25px;
  display: block;
}

@media (max-width: 1023px) {
  .form-group {
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .form-group {
    margin-bottom: 18px;
  }
}

.form-group label {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  color: var(--primary-black);
  display: block;
  margin-bottom: 8px;
  text-transform: capitalize;
}

@media (max-width: 767px) {
  .form-group label {
    font-size: 13px;
  }
}

/* Form Inputs */
.form-control {
  width: 100%;
  padding: 15px;
  font-size: 14px;
  color: #333333;
  background-color: var(--white);
  border: 1px solid var(--border-gray);
  border-radius: var(--radius-sm);
  font-family: var(--font-primary);
  line-height: 1.5;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

@media (max-width: 767px) {
  .form-control {
    padding: 12px;
    font-size: 13px;
  }
}

.form-control:focus {
  border-color: var(--primary-black);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  outline: none;
}

/* Textarea */
textarea.form-control {
  min-height: 150px;
  resize: vertical;
}

@media (max-width: 767px) {
  textarea.form-control {
    min-height: 120px;
  }
}

/* Submit Button */
.mona-btn {
  display: inline-block;
  background-color: var(--primary-black);
  color: var(--white);
  border: 1px solid var(--primary-black);
  padding: 14px 30px;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  letter-spacing: 0.5px;
  margin-top: 15px;
  text-decoration: none;
}

@media (max-width: 1023px) {
  .mona-btn {
    padding: 12px 25px;
    font-size: 13px;
    margin-top: 12px;
  }
}

@media (max-width: 767px) {
  .mona-btn {
    padding: 10px 20px;
    font-size: 12px;
  }
}

.mona-btn:hover {
  background-color: var(--accent-red);
  border-color: var(--accent-red);
  color: var(--white);
  box-shadow: 0 4px 12px rgba(238, 1, 1, 0.3);
}

.mona-btn:focus {
  background-color: var(--accent-red);
  border-color: var(--accent-red);
}
```

---

### CONTACT INFO CARDS

```css
/* Cards Container */
.contact-info-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
}

@media (max-width: 1023px) {
  .contact-info-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 767px) {
  .contact-info-container {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}

/* Single Contact Card */
.single-contact-card {
  background-color: var(--white);
  border: 1px solid var(--border-gray);
  padding: 40px;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  margin-bottom: var(--space-3xl);
}

@media (max-width: 1023px) {
  .single-contact-card {
    padding: 30px;
    margin-bottom: 60px;
  }
}

@media (max-width: 767px) {
  .single-contact-card {
    padding: 25px;
    margin-bottom: 50px;
  }
}

.single-contact-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

/* Card Heading */
.single-contact-card h2 {
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  color: var(--primary-black);
  margin: 0 0 15px 0;
  line-height: 1.3;
  text-align: left;
}

/* Card Content */
.single-contact-card h6,
.single-contact-card p,
.single-contact-card a {
  font-size: 16px;
  color: var(--text-gray);
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

@media (max-width: 767px) {
  .single-contact-card h6,
  .single-contact-card p,
  .single-contact-card a {
    font-size: 14px;
  }
}

.single-contact-card a {
  color: var(--primary-black);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.single-contact-card a:hover {
  color: var(--accent-red);
}

/* Social Media Icons */
#social-media-icons {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}

#social-media-icons a {
  display: inline-flex;
  font-size: 24px;
  color: var(--primary-black);
  text-decoration: none;
  transition: color var(--transition-fast);
}

#social-media-icons a:hover {
  color: var(--accent-red);
}
```

---

### FOOTER

```css
/* Footer Container */
footer {
  background-color: var(--primary-black);
  color: var(--light-gray);
  padding: 80px 0 40px 0;
  margin-top: var(--space-3xl);
}

@media (max-width: 1023px) {
  footer {
    padding: 60px 0 30px 0;
    margin-top: 60px;
  }
}

@media (max-width: 767px) {
  footer {
    padding: 50px 0 20px 0;
    margin-top: 50px;
  }
}

/* Footer Grid */
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

@media (max-width: 1023px) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 0 20px;
  }
}

@media (max-width: 767px) {
  .footer {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 0 15px;
  }
}

.singlefoot {
  padding: 0;
  margin-bottom: 40px;
}

/* Footer Logo */
.first-footer img {
  width: 100px;
  height: auto;
  display: block;
  margin-bottom: 20px;
}

/* Footer Heading */
footer h2 {
  font-size: 16px;
  font-weight: var(--font-weight-bold);
  color: var(--white);
  margin-bottom: 20px;
  text-align: left;
  text-transform: capitalize;
}

/* Footer Text */
.footer-text p,
.copywrite-text p {
  font-size: 13px;
  color: var(--light-gray);
  line-height: 1.7;
  margin-bottom: 15px;
  text-align: left;
}

/* Footer Links */
footer li p a,
footer a {
  font-size: 13px;
  color: var(--light-gray);
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  transition: color var(--transition-fast);
}

footer li p a:hover,
footer a:hover {
  color: var(--accent-red);
}

/* Footer Icons */
#icones {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

#icones a {
  font-size: 18px;
  color: var(--white);
  text-decoration: none;
  transition: color var(--transition-fast);
  display: inline-block;
}

#icones a:hover {
  color: var(--accent-red);
}

/* Footer Copyright */
.copywrite-text {
  font-size: 12px;
  color: #999999;
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid #333333;
  padding-top: 20px;
}

.copywrite-text p {
  margin-bottom: 0;
}

/* Mobile Footer Text */
.text2 {
  display: none;
}

@media (max-width: 767px) {
  .text2 {
    display: block;
  }
}
```

---

### BREADCRUMB

```css
/* Breadcrumb Container */
.breadcumb-area {
  background-color: var(--bg-gray);
  padding: 40px 0;
  border-bottom: 1px solid var(--border-gray);
}

.breadcumb--con {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.breadcumb--con .title {
  font-size: 42px;
  font-weight: var(--font-weight-bold);
  color: var(--primary-black);
  text-align: center;
  margin: 0 0 20px 0;
}

@media (max-width: 1023px) {
  .breadcumb--con .title {
    font-size: 36px;
  }
}

@media (max-width: 767px) {
  .breadcumb--con .title {
    font-size: 28px;
  }
}

/* Breadcrumb Navigation */
.breadcrumb {
  background-color: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.breadcrumb-item {
  font-size: 14px;
  color: var(--text-gray);
}

.breadcrumb-item a {
  color: var(--primary-black);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.breadcrumb-item a:hover {
  color: var(--accent-red);
}

.breadcrumb-item.active {
  color: var(--accent-red);
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  margin: 0 8px;
  color: var(--text-gray);
}
```

---

## 3. RESPONSIVE MIXINS & UTILITIES

```css
/* Media Query Mixins (if using SCSS/SASS) */
@mixin mobile {
  @media (max-width: 767px) { @content; }
}

@mixin tablet {
  @media (min-width: 768px) and (max-width: 1023px) { @content; }
}

@mixin desktop {
  @media (min-width: 1024px) { @content; }
}

@mixin large-desktop {
  @media (min-width: 1200px) { @content; }
}

/* Utility Classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

@media (max-width: 1023px) {
  .container {
    padding: 0 20px;
  }
}

@media (max-width: 767px) {
  .container {
    padding: 0 15px;
  }
}

/* Margin Utilities */
.mt-80 { margin-top: 80px; }
.mt-60 { margin-top: 60px; }
.mt-40 { margin-top: 40px; }
.mt-30 { margin-top: 30px; }
.mt-20 { margin-top: 20px; }
.mt-15 { margin-top: 15px; }

.mb-80 { margin-bottom: 80px; }
.mb-60 { margin-bottom: 60px; }
.mb-50 { margin-bottom: 50px; }
.mb-40 { margin-bottom: 40px; }
.mb-30 { margin-bottom: 30px; }
.mb-20 { margin-bottom: 20px; }
.mb-15 { margin-bottom: 15px; }

/* Padding Utilities */
.pt-80 { padding-top: 80px; }
.pb-80 { padding-bottom: 80px; }
.px-30 { padding-left: 30px; padding-right: 30px; }
.py-80 { padding-top: 80px; padding-bottom: 80px; }

/* Text Utilities */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-primary { color: var(--primary-black); }
.text-secondary { color: var(--text-gray); }
.text-white { color: var(--white); }
.text-accent { color: var(--accent-red); }

/* Display Utilities */
.d-flex { display: flex; }
.d-grid { display: grid; }
.d-none { display: none; }
.d-block { display: block; }

/* Visibility */
@media (max-width: 767px) {
  .hide-mobile { display: none !important; }
}

@media (min-width: 768px) {
  .show-mobile { display: none !important; }
}

/* Image Utilities */
.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-cover {
  object-fit: cover;
  object-position: center;
}
```

---

## 4. IMPLEMENTATION EXAMPLES

### Example: Hero Section with Proper Spacing

```html
<section class="hero-section mt-80 mb-80">
  <div class="container">
    <div class="hero-content">
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my latest works and projects</p>
      <a href="#portfolio" class="btn btn-primary">View Portfolio</a>
    </div>
  </div>
</section>
```

```css
.hero-section {
  background-color: var(--white);
  padding: var(--space-3xl) 0;
}

@media (max-width: 1023px) {
  .hero-section {
    padding: 60px 0;
  }
}

@media (max-width: 767px) {
  .hero-section {
    padding: 50px 0;
  }
}

.hero-content {
  text-align: center;
}

.hero-content h1 {
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  color: var(--text-gray);
  margin-bottom: 30px;
}
```

### Example: Gallery Grid with Aspect Ratio

```html
<section class="gallery-section">
  <div class="container">
    <h2>Recent Works</h2>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="image.jpg" alt="Artwork">
        <div class="gallery-label">
          <h4>Title</h4>
          <p>Details</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  row-gap: 40px;
}

@media (max-width: 1023px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    row-gap: 30px;
  }
}

.gallery-item {
  position: relative;
}

.gallery-item::before {
  content: '';
  display: block;
  padding-bottom: 56.25%; /* 16:9 */
}

.gallery-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 5. COMMON PATTERNS

### Pattern: Button Group

```html
<div class="button-group">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
</div>
```

```css
.button-group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

@media (max-width: 767px) {
  .button-group {
    flex-direction: column;
  }
  
  .button-group button {
    width: 100%;
  }
}
```

### Pattern: Text with Image (Alternating)

```html
<section class="alt-section">
  <div class="container">
    <div class="alt-content">
      <div class="alt-text">
        <h2>Title</h2>
        <p>Content...</p>
      </div>
      <div class="alt-image">
        <img src="image.jpg" alt="">
      </div>
    </div>
  </div>
</section>

<!-- Next section reverses -->
<section class="alt-section alt-section--reverse">
  <!-- Same structure -->
</section>
```

```css
.alt-content {
  display: flex;
  gap: 40px;
  align-items: center;
}

@media (max-width: 1023px) {
  .alt-content {
    flex-direction: column;
    gap: 30px;
  }
}

.alt-text {
  flex: 1;
}

.alt-image {
  flex: 1;
}

.alt-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
}

.alt-section--reverse .alt-content {
  flex-direction: row-reverse;
}

@media (max-width: 1023px) {
  .alt-section--reverse .alt-content {
    flex-direction: column;
  }
}
```

### Pattern: Card Hover Effect

```html
<div class="card">
  <div class="card-image">
    <img src="image.jpg" alt="">
  </div>
  <div class="card-content">
    <h3>Card Title</h3>
    <p>Card description...</p>
  </div>
</div>
```

```css
.card {
  border: 1px solid var(--border-gray);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-fast);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

.card-image {
  overflow: hidden;
  background-color: var(--bg-gray);
}

.card-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-fast);
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin: 0 0 10px 0;
}

.card-content p {
  margin: 0;
  color: var(--text-gray);
}
```

---

**End of CSS Standards Reference**
