# Skills & Commands Reference

## 🛠️ Required Agent Skills

The following skills are installed in this repository to assist with development:

- **harky-profile**: Harky's personal developer configuration and structured thinking.
- **frontend-design**: High-quality UI/UX creation and styling standards.
- **ui-design-system**: Tailwind CSS, Radix UI, and Shadcn/ui integration.
- **full-scope-code-review-security**: Security auditing and quality control.
- **nodejs-backend-patterns**: Production-ready backend services and API design.
- **messaging-system**: Supabase Realtime and chat architecture.
- **write-coding-standards-from-file**: Standards extraction from existing files.
- **find-skills**: Discover and install new capabilities.

---

## 💻 Common Commands

### Next.js Development (`Thelight/`)
Navigate to the `Thelight` directory before running these:
```bash
cd Thelight

# Install dependencies (from fresh state)
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

### Static Site Development (Root)
```bash
# Simple local server for root portfolio
npx http-server
```

### Security & Cleanup
```bash
# Purge local modules if infection suspected
rm -rf node_modules
cd Thelight
rm -rf node_modules
```

---

## 🚀 Environment Setup

1.  **Node.js**: Version 18 or higher required.
2.  **Environment Variables**: Create `Thelight/.env.local` based on the project requirements (Resend API keys, etc.).
3.  **Git**: Clean your repo before pushing using the remediation steps in the Implementation Plan.
