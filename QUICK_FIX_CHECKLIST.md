# QUICK FIX CHECKLIST - PASTE-AND-GO CSS

**For Tobi Adebayo Portfolio - Critical Fixes**

---

## 📋 COPY-PASTE READY CSS FIXES

### FIX #1: Image Aspect Ratios (Projects Gallery)

**File to edit:** `style.css`

**Add this CSS:**

```css
/* Gallery Image Aspect Ratio Fix (16:9 landscape) */
.single_gallery_item {
  position: relative;
  overflow: hidden;
}

.single_gallery_item::before {
  content: '';
  display: block;
  padding-bottom: 56.25%; /* 16:9 ratio */
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
```

**Also:** Remove these inline styles from `projects.html`:
- `style="width: 100%; height: 500px;"` on ALL images
- Keep only: `alt=""` and `class="img-fluid"`

---

### FIX #2: Feature Card Aspect Ratios (1:1 Square)

**File to edit:** `style.css`

**Add this CSS:**

```css
/* Feature Cards - 1:1 Aspect Ratio (Square) */
.block-2-item .image {
  position: relative;
  width: 100%;
}

.block-2-item .image::before {
  content: '';
  display: block;
  padding-bottom: 100%; /* 1:1 ratio */
}

.block-2-item .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

---

### FIX #3: Section Padding (80/60/50px)

**File to edit:** `style.css`

**Add this CSS:**

```css
/* Responsive Section Padding */
.site-blocks-2 {
  padding: 80px 0 !important;
}

.mona-projects-area {
  padding: 80px 0 !important;
}

.contact-me-section {
  padding: 80px 0 !important;
}

.mona-casting-form-area {
  padding: 80px 0 !important;
}

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .site-blocks-2,
  .mona-projects-area,
  .contact-me-section,
  .mona-casting-form-area {
    padding: 60px 0 !important;
  }
}

/* Mobile (375px - 767px) */
@media (max-width: 767px) {
  .site-blocks-2,
  .mona-projects-area,
  .contact-me-section,
  .mona-casting-form-area {
    padding: 50px 0 !important;
  }
}

/* Margin Between Sections */
.site-blocks-2,
.mona-projects-area,
.contact-me-section,
.mona-casting-form-area {
  margin-bottom: 80px !important;
}

@media (max-width: 1023px) {
  .site-blocks-2,
  .mona-projects-area,
  .contact-me-section,
  .mona-casting-form-area {
    margin-bottom: 60px !important;
  }
}

@media (max-width: 767px) {
  .site-blocks-2,
  .mona-projects-area,
  .contact-me-section,
  .mona-casting-form-area {
    margin-bottom: 50px !important;
  }
}
```

---

### FIX #4: Responsive Typography

**File to edit:** `style.css`

**Replace existing h1-h6 and p styles with this:**

```css
/* Responsive Headings */
h1 {
  font-size: 48px;
  line-height: 1.2;
  letter-spacing: 1px;
}

@media (max-width: 1023px) {
  h1 {
    font-size: 36px;
    letter-spacing: 0.5px;
  }
}

@media (max-width: 767px) {
  h1 {
    font-size: 28px;
    letter-spacing: 0.3px;
  }
}

h2 {
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

@media (max-width: 1023px) {
  h2 {
    font-size: 28px;
  }
}

@media (max-width: 767px) {
  h2 {
    font-size: 24px;
  }
}

h3 {
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

@media (max-width: 1023px) {
  h3 {
    font-size: 24px;
  }
}

@media (max-width: 767px) {
  h3 {
    font-size: 20px;
  }
}

h4 {
  font-size: 20px;
  line-height: 1.2;
}

@media (max-width: 1023px) {
  h4 {
    font-size: 18px;
  }
}

@media (max-width: 767px) {
  h4 {
    font-size: 16px;
  }
}

h5 {
  font-size: 16px;
}

h6 {
  font-size: 14px;
}

@media (max-width: 767px) {
  h6 {
    font-size: 12px;
  }
}

/* Responsive Body Text */
p {
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 0.3px;
}

@media (max-width: 1023px) {
  p {
    font-size: 16px;
    line-height: 1.7;
  }
}

@media (max-width: 767px) {
  p {
    font-size: 14px;
    line-height: 1.6;
  }
}
```

---

### FIX #5: Gallery Grid Responsive Layout

**File to edit:** `style.css`

**Add this CSS (or update existing `.mona-portfolio`):**

```css
/* Responsive Gallery Grid */
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
    gap: 15px;
    row-gap: 25px;
  }
}

/* Gallery Label Sizes */
.label-content {
  padding: 30px;
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
  margin-bottom: 10px;
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

### FIX #6: Form Input Styling

**File to edit:** `style.css` and `contact.html`

**Remove from ALL inputs in contact.html:**
```html
<!-- REMOVE THIS: -->
style="padding: 20px;"
```

**Add this CSS:**

```css
/* Form Input Styling */
.form-control {
  width: 100%;
  padding: 15px !important;
  font-size: 14px;
  color: #333333;
  background-color: #FFFFFF;
  border: 1px solid #D0D0D0 !important;
  border-radius: 4px;
  font-family: 'Bahnschrift Regular', sans-serif;
  line-height: 1.5;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

@media (max-width: 767px) {
  .form-control {
    padding: 12px !important;
    font-size: 13px;
  }
}

.form-control:focus {
  border-color: #000000 !important;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  outline: none;
}

textarea.form-control {
  min-height: 150px;
  resize: vertical;
}

@media (max-width: 767px) {
  textarea.form-control {
    min-height: 120px;
  }
}

/* Form Labels */
.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 8px;
  display: block;
}

@media (max-width: 767px) {
  .form-group label {
    font-size: 13px;
  }
}

.form-group {
  margin-bottom: 25px;
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
```

---

### FIX #7: Button Styling

**File to edit:** `style.css`

**Add this CSS:**

```css
/* Unified Button Styling */
.btn-prim,
.mona-btn {
  display: inline-block;
  background-color: #000000 !important;
  color: #FFFFFF !important;
  border: 2px solid #000000 !important;
  padding: 14px 30px !important;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-decoration: none;
}

@media (max-width: 1023px) {
  .btn-prim,
  .mona-btn {
    padding: 12px 25px !important;
    font-size: 13px;
  }
}

@media (max-width: 767px) {
  .btn-prim,
  .mona-btn {
    padding: 10px 20px !important;
    font-size: 12px;
  }
}

.btn-prim:hover,
.mona-btn:hover {
  background-color: #EE0101 !important;
  border-color: #EE0101 !important;
  color: #FFFFFF !important;
  box-shadow: 0 6px 20px rgba(238, 1, 1, 0.2);
}

.btn-prim:focus,
.mona-btn:focus {
  background-color: #EE0101 !important;
  border-color: #EE0101 !important;
  outline: 2px solid #EE0101;
  outline-offset: 2px;
}
```

---

### FIX #8: CTA Section (GET IN TOUCH)

**File to edit:** `style.css`

**Add this CSS (or update existing `.contact-me-section`):**

```css
/* CTA Section Responsive Typography */
.contact-me-section .section-title {
  font-size: 42px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 30px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.2;
}

@media (max-width: 1023px) {
  .contact-me-section .section-title {
    font-size: 36px;
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .contact-me-section .section-title {
    font-size: 28px;
    margin-bottom: 15px;
  }
}

.contact-me-section p {
  font-size: 18px;
  color: #FFFFFF;
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
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .contact-me-section p {
    font-size: 14px;
    margin-bottom: 15px;
  }
}
```

---

## 🔧 HTML CHANGES NEEDED

### Change 1: Remove inline height styles from projects.html

**Find all instances of:**
```html
style="width: 100%; height: 500px;"
```

**Replace with:**
```html
alt=""
```

Example - BEFORE:
```html
<img src="images/happiness.jpg" alt="" style="width: 100%; height: 500px;">
```

Example - AFTER:
```html
<img src="images/happiness.jpg" alt="">
```

**Do this for ALL images in projects.html gallery (about 10 images)**

---

### Change 2: Remove padding styles from form inputs in contact.html

**Find all:**
```html
style="padding: 20px;"
```

**Replace with:** (nothing - remove the style attribute)

Example - BEFORE:
```html
<input type="text" class="form-control" name="full-name" placeholder="Full Name" id="name" style="padding: 20px;" required>
```

Example - AFTER:
```html
<input type="text" class="form-control" name="full-name" placeholder="Full Name" id="name" required>
```

**Do this for:**
- name input
- email input
- phone input
- message textarea
- Total: 4 form elements

---

## ✅ TESTING CHECKLIST

After applying fixes, test on these widths:

### At 375px (Mobile)
- [ ] Gallery images show 1 column (not 2)
- [ ] Images are 211px tall (16:9 ratio)
- [ ] Feature cards are 300px (1:1 square)
- [ ] Text sizes: h2=24px, body=14px
- [ ] Section padding: 50px
- [ ] Grid gaps: 15px (gallery), 20px+ (feature)
- [ ] Buttons: 10px 20px padding
- [ ] Form inputs: 12px padding, readable
- [ ] No horizontal scrolling

### At 768px (Tablet)
- [ ] Gallery images show 1 column
- [ ] Images are 422px tall (16:9 ratio)
- [ ] Feature cards are 350px (1:1 square)
- [ ] Text sizes: h2=28px, body=16px
- [ ] Section padding: 60px
- [ ] Grid gaps: 20px
- [ ] Buttons: 12px 25px padding
- [ ] Form inputs: 14px padding
- [ ] All readable, no scrolling

### At 1024px (Desktop)
- [ ] Gallery images show 2 columns
- [ ] Gallery grid gap: 30px
- [ ] Feature cards show 2-4 columns per page
- [ ] Image height: 338px (gallery), 400px (cards)
- [ ] Text sizes: h2=36px, body=18px
- [ ] Section padding: 80px
- [ ] Buttons: 14px 30px padding
- [ ] Form inputs: 15px padding
- [ ] All perfect spacing

---

## 🚀 DEPLOYMENT STEPS

1. **Backup Current CSS**
   ```powershell
   Copy-Item style.css style.css.bak
   ```

2. **Apply CSS Fixes** (in order)
   - Add FIX #1 (Image Aspect Ratios)
   - Add FIX #2 (Feature Card Ratios)
   - Add FIX #3 (Section Padding)
   - Add FIX #4 (Typography)
   - Add FIX #5 (Gallery Grid)
   - Add FIX #6 (Form Inputs)
   - Add FIX #7 (Buttons)
   - Add FIX #8 (CTA Section)

3. **Make HTML Changes**
   - Remove inline height styles from projects.html images (10 instances)
   - Remove inline padding styles from contact.html form inputs (4 instances)

4. **Test at 375px, 768px, 1024px**

5. **Deploy**

---

## 💡 QUICK REFERENCE

| Issue | Fix | File | Time |
|-------|-----|------|------|
| Gallery images distort | Add aspect-ratio CSS | style.css | 5 min |
| Feature cards wrong size | Add 1:1 ratio CSS | style.css | 5 min |
| Uneven section spacing | Add padding classes | style.css | 10 min |
| Text too small on mobile | Update typography | style.css | 15 min |
| Gallery grid broken | Add responsive grid | style.css | 10 min |
| Form inputs ugly | Fix input styling | style.css | 10 min |
| Buttons inconsistent | Standardize buttons | style.css | 10 min |
| Remove inline styles | Edit HTML | projects.html, contact.html | 15 min |
| **TOTAL** | | | **90 minutes** |

---

**Start with FIX #1-#5 (Critical). These solve 80% of issues in 30 minutes.**

Then do FIX #6-#8 (Polish) when ready.
