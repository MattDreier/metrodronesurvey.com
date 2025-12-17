# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MetroDroneSurvey is a professional drone photography website built with React 19, TypeScript, Vite 6, and Tailwind CSS 4. The site showcases aerial photography services for real estate, solar installations, construction projects, and custom creative work in the Kansas City Metro area.

**Tech Stack:**
- React 19.2.3 + TypeScript (strict mode)
- Vite 6.2.0 (dev server + build tool)
- Tailwind CSS 4.0.0 (utility-first styling)
- Framer Motion 12.23.26 (animations)
- Lucide React 0.561.0 (icons)

**Contact Information:**
- Email: desmond@metrodronesurvey.com
- Phone: (816) 719-2540
- Location: Kansas City Metro Area

## Working with This Codebase

### Agent Orchestration (CRITICAL)

**ALWAYS orchestrate specialized agents for multi-step tasks to preserve your context window.**

This project has been built using agent orchestration to maximize efficiency and context preservation. Future work should follow the same pattern:

**When to orchestrate agents:**
- Multi-component updates (updating 3+ React components)
- Content transformations across multiple files
- Asset management + optimization workflows
- SEO/metadata updates across index.html, sitemap.xml, and legal pages
- Deployment setup with documentation generation

**Available specialized agents:**
- `senior-frontend-engineer` - Component updates, React/TypeScript work
- `devops-deployment-engineer` - Deployment, CI/CD, infrastructure
- `ux-ui-designer` - Design system changes, accessibility audits
- `qa-test-automation-engineer` - Testing, validation, Lighthouse audits

**Example orchestration pattern:**
```
User asks to: "Add a new service category and update all relevant sections"

Instead of doing it sequentially yourself:
1. Launch senior-frontend-engineer agent → Update Services.tsx, Features.tsx
2. Launch another senior-frontend-engineer agent → Update Footer.tsx, metadata
3. Launch qa-test-automation-engineer agent → Validate changes, test build

Run agents IN PARALLEL when possible (single message, multiple Task tool calls).
```

**Why this matters:**
- This website was built in <100K context tokens by orchestrating 3 agents in parallel
- Complex tasks completed in minutes instead of hours
- Each agent has full context of the plan and can work independently
- Your context window stays clean for high-level orchestration

**Do not:** Try to manually update all 7 components yourself sequentially. **Do:** Spawn 2-3 agents to handle component groups in parallel.

## Development Commands

### Core Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build (runs prebuild hook)
npm run preview      # Preview production build locally
```

### Asset Pipeline
```bash
npm run optimize-images    # Convert images to WebP (85% quality)
npm run generate-icons     # Generate favicons from MDS Logo.png
```

**Note:** `npm run build` automatically runs `optimize-images` via the `prebuild` hook.

## Architecture

### Component Loading Strategy

**App.tsx** uses a split loading approach for performance:

**Eager-loaded (critical rendering path):**
- Header (navigation, dark mode toggle)
- Hero (above-the-fold content)
- Features (why choose us section)
- Footer (site footer)

**Lazy-loaded with React.Suspense (below-the-fold):**
- Services (service showcase)
- Testimonials (client reviews)
- CallToAction (contact CTAs)

This pattern reduces initial bundle size and improves LCP (Largest Contentful Paint).

### Component Architecture

All 7 components are located in `/components/*.tsx`:

1. **Header.tsx** - Navigation bar with dark mode toggle, logo, and social links
2. **Hero.tsx** - Landing section with animated carousel (4 service highlights rotating every 3.5s)
3. **Features.tsx** - Three feature cards (Professional Equipment, Fast & Flexible, Licensed & Insured)
4. **Services.tsx** - Three service categories with images
5. **Testimonials.tsx** - Three client testimonials with 5-star ratings
6. **CallToAction.tsx** - Conversion section with email/phone CTAs
7. **Footer.tsx** - Multi-column footer with services, company info, contact details

**Pattern:** All components use Framer Motion for entrance/hover animations and Tailwind for styling.

### Brand Colors

The design system uses a teal/lime palette defined in `tailwind.config.js`:

```javascript
brand: {
  teal: '#0f3430',        // Primary (13.5:1 contrast - WCAG AAA)
  'teal-light': '#1a4f48', // Hover states
  'teal-dark': '#0a2320',  // Depth/shadows
  lime: '#e4ea6b',         // Accent (use sparingly - low contrast)
  'lime-bright': '#fff86b',
  'lime-dark': '#c5cc4e',  // Better contrast for text
}
```

**Accessibility Note:** Lime colors have low contrast ratios. Use `teal` for text and interactive elements. Reserve `lime` for large decorative elements or backgrounds.

### Dark Mode

Dark mode is implemented using Tailwind's `class` strategy:
- Toggle in Header.tsx
- Persisted in localStorage
- All components use `dark:` variants for colors

### Image Pipeline

**Asset locations:**
- Source images: `/public/assets/*.jpg|*.png`
- Optimized WebP: `/public/assets/optimized/*.webp`
- Logo: `/public/assets/MDS Logo.png`

**Optimization script (`scripts/optimize-images.js`):**
- Converts all JPG/PNG images to WebP format at 85% quality
- Special handling: `MDS Logo.png` → `logo.webp`
- Maintains original dimensions
- Typically achieves 25-75% file size reduction

**Icon generation script (`scripts/generate-icons.js`):**
- Generates favicons from `MDS Logo.png`
- Creates: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png
- Generates `site.webmanifest` with MetroDroneSurvey branding and teal theme color

**Adding new images:**
1. Place original image in `/public/assets/`
2. Run `npm run optimize-images`
3. Reference in component: `/assets/optimized/[filename].webp`

## Deployment

### Automated GitHub Pages Deployment

The site auto-deploys to GitHub Pages on every push to `main` branch via GitHub Actions (`.github/workflows/deploy.yml`).

**Workflow:**
1. Push to main
2. GitHub Actions runs `npm ci && npm run build`
3. Deploys `dist/` folder to GitHub Pages
4. Site live at custom domain (metrodronesurvey.com) or GitHub subdomain

**Configuration files:**
- `public/CNAME` - Custom domain configuration
- `vite.config.ts` - `base: '/'` for custom domain
- `.github/workflows/deploy.yml` - Deployment workflow

**Deployment guides available:**
- `DEPLOYMENT-SUMMARY.md` - Quick start
- `DEPLOYMENT.md` - Detailed instructions
- `DNS-CONFIGURATION.md` - DNS setup for registrars

### Local Build Testing

```bash
npm run build        # Creates dist/ folder
npm run preview      # Serves production build on localhost:4173
```

## Environment Variables

The project references `GEMINI_API_KEY` in `vite.config.ts` but this is unused in the current implementation (legacy from template).

**If adding API integrations:**
1. Create `.env.local` (git-ignored)
2. Add keys: `GEMINI_API_KEY=your_key_here`
3. Access via: `import.meta.env.VITE_*` (must prefix with `VITE_`)

**Security:** Never commit `.env` or `.env.local` files. They are protected by `.gitignore`.

## SEO & Metadata

### Structured Data

`index.html` includes JSON-LD schema for ProfessionalService:
- Business name, contact info, location
- Geo coordinates for Kansas City
- Service types: Aerial Photography, 3D Modeling, Solar Site Analysis, etc.

**Updating metadata:**
1. Edit `index.html` - Meta tags, JSON-LD
2. Edit `metadata.json` - App name and description
3. Update `public/sitemap.xml` - Add/remove pages

### Legal Pages

Static HTML pages with MetroDroneSurvey branding:
- `privacy.html` - Privacy policy
- `terms.html` - Terms of service (includes FAA Part 107 references)

## Important Patterns

### Contact Methods

All contact CTAs use direct links (no forms):
- **Email:** `mailto:desmond@metrodronesurvey.com?subject=Project%20Quote%20Request`
- **Phone:** `tel:+18167192540`

**Do not add:** Typeform, Calendly, or external form services. This is intentional to keep the site simple and maintenance-free.

### Animation Pattern

Components use Framer Motion with this pattern:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

Hero.tsx includes an auto-rotating carousel (3.5s interval) using `AnimatePresence`.

### Color Class Usage

**Correct:**
```tsx
className="bg-brand-teal text-white hover:bg-brand-teal-light"
className="text-brand-teal dark:text-brand-lime"
```

**Avoid:**
```tsx
className="text-brand-lime"  // Low contrast on white backgrounds
```

### Asset References

**Correct:**
```tsx
<img src="/assets/optimized/Hero Drone Shot.webp" alt="..." />
```

**Avoid:**
```tsx
<img src="/assets/Hero Drone Shot.jpg" alt="..." />  // Use optimized WebP
```

## Testing & Quality

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+ (WCAG AA)
- SEO: 95+
- Best Practices: 90+

### Cross-browser Support
- Chrome, Safari, Firefox, Edge (desktop + mobile)
- iOS Safari, Chrome Mobile, Samsung Internet

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Tailwind uses mobile-first approach (`md:`, `lg:` prefixes for larger screens).

## Git Workflow

### Branch Strategy
- `main` - Production branch (auto-deploys)
- Feature branches - Create for significant changes

### Commit Messages
Follow conventional commits format for clarity:
```
feat: Add new service category for agriculture photography
fix: Resolve Hero carousel animation timing issue
style: Update testimonial card hover effects
docs: Add troubleshooting section to DEPLOYMENT.md
```

## Troubleshooting

### Dev Server Issues

**Port conflict (3000 in use):**
- Vite auto-increments to 3001, 3002, etc.
- Or kill existing process: `lsof -ti:3000 | xargs kill`

**TypeScript errors:**
- Strict mode is enabled
- Ensure all props have types defined
- Use `React.FC` for functional components

### Build Issues

**Image optimization fails:**
- Ensure Sharp is installed: `npm install sharp`
- Check source images exist in `/public/assets/`
- Verify filenames don't have special characters (use spaces, not underscores)

**Tailwind classes not applying:**
- Check `tailwind.config.js` extends the correct color names
- Purge cache: Delete `node_modules/.vite`
- Restart dev server

### Deployment Issues

**GitHub Actions build fails:**
- Check Actions tab logs
- Verify `package-lock.json` is committed
- Test locally: `npm ci && npm run build`

**Custom domain not working:**
- Verify `public/CNAME` contains correct domain
- Check DNS records point to GitHub Pages IPs
- Wait 24-48 hours for DNS propagation

## Code Standards

### TypeScript
- Use strict mode
- Define interfaces for component props
- Avoid `any` types

### React
- Use functional components with hooks
- Use `React.FC` for component types
- Memoize expensive calculations with `useMemo`
- Use `useCallback` for event handlers passed to child components

### Styling
- Use Tailwind utilities over custom CSS
- Follow mobile-first responsive design
- Use semantic color names from config (`brand-teal`, not hex values)
- Maintain dark mode support with `dark:` variants

### Accessibility
- All images must have descriptive alt text
- Maintain 4.5:1 contrast ratio minimum (WCAG AA)
- Use semantic HTML (header, main, footer, section)
- Ensure keyboard navigation works (Tab, Enter, Space)
