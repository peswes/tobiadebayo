# PHASE 0: PREPARATION & CLEANUP
## Immediate Execution Guide

**Status:** Ready to start  
**Tasks:** 5 specific items  
**Effort:** ~1-2 hours  
**Success Criteria:** All tasks marked 'done' in SQL, no build errors

---

## 📋 PHASE 0 TASKS (In Order)

### TASK 1: phase0-backup-originals
**Objective:** Verify all original files are safely backed up

**Description:** Document and verify backup of original HTML/CSS/JS files

**Instructions:**
1. Verify all original files are in git (backed up)
2. Run: `git status` — ensure nothing uncommitted in root
3. Create a list of all original files to keep as reference:
   - HTML pages: index.html, about.html, projects.html, afeproject.html, commission.html, publications.html, nfts.html, contact.html
   - CSS files: style.css, style-2.css, and files in css/ directory
   - JS files: main.js and files in js/ directory
   - Images: all files in images/ directory
   - Fonts: all files in fonts/ directory

**Acceptance Criteria:**
- [ ] All original HTML files present in root
- [ ] All CSS files present in css/ directory
- [ ] All JS files present in js/ directory
- [ ] All images present in images/ directory
- [ ] All fonts present in fonts/ directory
- [ ] Git shows no uncommitted changes (clean working tree)

**CLI Commands:**
```powershell
# Check git status (should show no uncommitted)
git status

# Verify all original files exist (run from repo root)
Test-Path ".\index.html"
Test-Path ".\about.html"
Test-Path ".\projects.html"
Test-Path ".\afeproject.html"
Test-Path ".\commission.html"
Test-Path ".\publications.html"
Test-Path ".\nfts.html"
Test-Path ".\contact.html"
Test-Path ".\css\style.css"
Test-Path ".\js\main.js"
Test-Path ".\images\" # Should have 18+ images
Test-Path ".\fonts\" # Should have custom fonts
```

**Time Estimate:** 15 minutes

---

### TASK 2: phase0-analyze-thelight
**Objective:** Audit the existing Thelight Next.js project for issues

**Description:** Review package.json, all components, pages, and config files. Document what works and what needs fixing.

**Instructions:**
1. Navigate to `Thelight/` directory
2. Examine key files:
   - `package.json` — Dependencies, scripts
   - `tsconfig.json` — TypeScript configuration
   - `tailwind.config.ts` — Tailwind setup
   - `next.config.ts` — Next.js configuration
3. Check for issues:
   - Missing dependencies (check lock file)
   - Broken imports (look for 404 in dependencies)
   - Missing environment variables (.env.local)
   - Syntax errors in TypeScript files

**Acceptance Criteria:**
- [ ] package.json reviewed (Next.js 16.0.6, React 19.2.0)
- [ ] All dependency versions noted
- [ ] tsconfig.json is valid JSON
- [ ] tailwind.config.ts has proper Tailwind 4 configuration
- [ ] next.config.ts is present and valid
- [ ] No broken imports in components/
- [ ] No TypeScript compilation errors (verify with `pnpm install`)

**CLI Commands:**
```powershell
# Navigate to Thelight
cd Thelight

# Check dependencies
cat package.json | Select-String '"dependencies"' -A 20

# Verify TypeScript config
cat tsconfig.json | ConvertFrom-Json

# Check for syntax issues (this will install and compile)
pnpm install
pnpm build
```

**Time Estimate:** 30 minutes

---

### TASK 3: phase0-cleanup-thelight
**Objective:** Remove broken/incomplete code from previous migration attempt

**Description:** Remove any half-finished components, fix syntax errors, ensure all imports resolve correctly.

**Instructions:**
1. Fix any TypeScript compilation errors found in Task 2
2. Check for broken imports:
   - Components that import non-existent files
   - Pages that reference missing components
   - API routes with missing dependencies

3. Common issues to look for:
   - Missing image files in `public/images/` (will be added in Task 5)
   - Broken CSS imports
   - Missing component exports
   - Half-finished components with incomplete code

4. Clean up dead code:
   - Remove `response.html` if it's a test file
   - Remove any `.test.tsx` or `.spec.tsx` files if they exist
   - Remove TODO comments about incomplete work

**Acceptance Criteria:**
- [ ] No TypeScript compilation errors (except missing images — that's OK)
- [ ] All imports resolve (or are marked as TODO for images)
- [ ] No broken component exports
- [ ] Dead code removed
- [ ] pnpm build completes (even if with warnings about missing images)

**CLI Commands:**
```powershell
# Still in Thelight/

# Check for TypeScript errors
pnpm build

# Look for unresolved imports
grep -r "from '[./]" components/ --include="*.tsx"

# Look for TODO comments about incomplete work
grep -r "TODO\|FIXME" . --include="*.tsx" --include="*.ts"

# Remove test files if they exist
Remove-Item -Path "**/*.test.tsx" -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path "**/*.spec.tsx" -Recurse -ErrorAction SilentlyContinue

# Remove response.html if it's just a test file
Remove-Item -Path "response.html" -ErrorAction SilentlyContinue
```

**Time Estimate:** 45 minutes

---

### TASK 4: phase0-fresh-setup
**Objective:** Verify Next.js 16, dependencies, and config files are all correct

**Description:** Ensure package.json has correct versions. Verify tsconfig.json, tailwind.config.ts, next.config.ts are all present and valid.

**Instructions:**
1. Verify package.json has these key dependencies:
   ```json
   {
     "next": "16.0.6",
     "react": "19.2.0",
     "react-dom": "19.2.0",
     "react-hook-form": "^7.50.0",
     "zod": "^3.22.0",
     "swiper": "^11.0.0",
     "aos": "^2.3.4",
     "resend": "^3.0.0"
   }
   ```

2. Clean install to ensure lock file is fresh:
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item pnpm-lock.yaml
   pnpm install
   ```

3. Verify config files:
   - tsconfig.json: Check `"strict": true` (good for quality)
   - tailwind.config.ts: Check `extend` section for colors/fonts
   - next.config.ts: Check it exports a config object
   - postcss.config.mjs: Check Tailwind is in plugins

**Acceptance Criteria:**
- [ ] package.json has correct dependencies (or newer patch versions)
- [ ] pnpm install succeeds without errors
- [ ] pnpm build succeeds (except for missing images)
- [ ] All config files are valid
- [ ] No warnings about deprecated dependencies

**CLI Commands:**
```powershell
# Still in Thelight/

# Verify key dependencies
pnpm ls next react react-dom react-hook-form zod swiper aos resend

# Clean install
Remove-Item -Recurse -Force node_modules
Remove-Item pnpm-lock.yaml
pnpm install

# Verify build works
pnpm build

# Check config file syntax
node -e "console.log('Config check complete')"
```

**Time Estimate:** 30 minutes

---

### TASK 5: phase0-copy-assets
**Objective:** Move images and fonts from root to Thelight/public/

**Description:** Copy all images from root/images/ to Thelight/public/images/. Copy fonts to Thelight/public/fonts/. Verify no broken image paths.

**Instructions:**
1. Create target directories (if they don't exist):
   ```powershell
   New-Item -ItemType Directory -Path "public/images" -Force
   New-Item -ItemType Directory -Path "public/fonts" -Force
   ```

2. Copy images:
   ```powershell
   Copy-Item -Path "..\images\*" -Destination ".\public\images\" -Recurse -Force
   ```

3. Copy fonts:
   ```powershell
   Copy-Item -Path "..\fonts\*" -Destination ".\public\fonts\" -Recurse -Force
   ```

4. Verify all files copied:
   ```powershell
   Get-ChildItem -Path "public/images" | Measure-Object
   Get-ChildItem -Path "public/fonts" | Measure-Object
   ```

5. Expected results:
   - public/images/ should have: tobi.jpg, dreamgirl.jpg, AFEProjects.jpg, nfts.jpg, afepy2.jpg, afepy3.jpg, tobinft.jpg, peter.jpg, tobitak.png, smile.mp4, logo.png, black-logo.png, favicon.jpg, happiness.jpg, ajudua.jpg, lookman.jpg, messi.jpg, discrepancy.jpg, bfwo.jpg (18 images + 1 video)
   - public/fonts/ should have: icomoon/ folder and other font files

6. Verify image references work:
   - Open `public/images/` and count files
   - Spot-check a few files are readable (not corrupted)

**Acceptance Criteria:**
- [ ] public/images/ directory exists
- [ ] public/fonts/ directory exists
- [ ] All 18 images copied to public/images/
- [ ] Video file (smile.mp4) copied to public/images/
- [ ] All fonts copied to public/fonts/
- [ ] No corrupted files (verify by opening a few in image viewer)
- [ ] File counts match original

**CLI Commands:**
```powershell
# Navigate to Thelight/ if not already there
cd Thelight

# Create directories
New-Item -ItemType Directory -Path "public/images" -Force
New-Item -ItemType Directory -Path "public/fonts" -Force

# Copy images (from Thelight directory)
Copy-Item -Path "..\images\*" -Destination ".\public\images\" -Recurse -Force

# Copy fonts
Copy-Item -Path "..\fonts\*" -Destination ".\public\fonts\" -Recurse -Force

# Verify
Write-Host "Images copied:"
(Get-ChildItem -Path "public/images" -File).Count
Write-Host "Fonts copied:"
(Get-ChildItem -Path "public/fonts" -Recurse -File).Count

# List all image files to verify
Get-ChildItem -Path "public/images" -File | Select-Object Name
```

**Time Estimate:** 15 minutes

---

## ✅ PHASE 0 COMPLETION CHECKLIST

When all 5 tasks are done:

- [ ] Task 1 (phase0-backup-originals): All original files verified in git
- [ ] Task 2 (phase0-analyze-thelight): Thelight project analyzed, issues documented
- [ ] Task 3 (phase0-cleanup-thelight): Broken code removed, build succeeds
- [ ] Task 4 (phase0-fresh-setup): Dependencies installed, configs verified
- [ ] Task 5 (phase0-copy-assets): Images and fonts copied to public/

## 🎯 Success Criteria for Phase 0

When complete, you should be able to:
1. ✅ Run `git status` in repo root and see clean working tree
2. ✅ Run `cd Thelight && pnpm build` and have it succeed (except for missing images in components is OK)
3. ✅ See all image files in `Thelight/public/images/`
4. ✅ See all font files in `Thelight/public/fonts/`
5. ✅ Have no TypeScript compilation errors (except pending implementation)

## 📝 SQL Status Updates

As you complete each task:
```sql
UPDATE todos SET status = 'in_progress' WHERE id = 'phase0-backup-originals';
-- Do the work...
UPDATE todos SET status = 'done' WHERE id = 'phase0-backup-originals';

-- Repeat for tasks 2, 3, 4, 5
```

## 🚀 What's Next?

After Phase 0 completes:
- Phase 1 (Component Library) automatically becomes available
- Build 8 reusable components (Button, Card, Modal, Grid, etc.)
- Everything builds on these components in later phases

**Phase 0 is the foundation. Do it carefully!**

---

**Created:** 2026-03-15  
**Effort:** 1-2 hours  
**Next Phase:** Phase 1 (Component Library - 8 components)
