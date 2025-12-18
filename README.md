# MetroDroneSurvey Website

## Overview
A professional drone photography website for MetroDroneSurvey built with React, TypeScript, and Vite, deployed on GitHub Pages with a custom domain at [metrodronesurvey.com](https://metrodronesurvey.com). Showcasing aerial photography services for real estate, solar installations, construction projects, and custom creative work in the Kansas City Metro area.

## Technology Stack
- React 19.2.3 + TypeScript (strict mode)
- Vite 6.2.0
- Tailwind CSS 4.0.0
- Framer Motion 12.23.26 for animations
- Lucide React 0.561.0 for icons
- GitHub Pages for hosting
- GitHub Actions for CI/CD

## Performance Optimizations
The project implements several optimization strategies:

**Images**: Converted to WebP format with automated optimization pipeline at 85% quality (25-75% size reduction)

**Code Splitting**: Below-the-fold components (Services, Testimonials, CallToAction) are lazy-loaded with React.Suspense to reduce initial bundle size

**Component Loading Strategy**:
- **Eager-loaded**: Header, Hero, Features, Footer (critical rendering path)
- **Lazy-loaded**: Services, Testimonials, CallToAction (below-the-fold content)

**Build Process**: Vite handles minification, tree shaking, and optimized chunk splitting. Images are automatically optimized during the prebuild hook.

**Lighthouse Targets**:
- Performance: 90+
- Accessibility: 95+ (WCAG AA)
- SEO: 95+
- Best Practices: 90+

## Getting Started

**Installation and Development**:
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build (includes image optimization)
npm run preview  # Preview production build locally
```

**Additional Scripts**:
- `npm run optimize-images` — Convert images to WebP (85% quality)
- `npm run generate-icons` — Create favicons from MDS Logo.png

## Project Structure
Components directory contains 7 modular React elements:
- **Header.tsx** — Navigation bar with dark mode toggle, logo, and social links
- **Hero.tsx** — Landing section with animated carousel (4 service highlights, 3.5s rotation)
- **Features.tsx** — Three feature cards (Professional Equipment, Fast & Flexible, Licensed & Insured)
- **Services.tsx** — Three service categories with images
- **Testimonials.tsx** — Three client testimonials with 5-star ratings
- **CallToAction.tsx** — Conversion section with email/phone CTAs
- **Footer.tsx** — Multi-column footer with services, company info, contact details

Public assets include optimized WebP images, favicons, and CNAME configuration. Scripts folder holds automation tools for image optimization and icon generation.

## Design System

**Brand Colors** (defined in `tailwind.config.js`):
```javascript
brand: {
  teal: '#0f3430',         // Primary (13.5:1 contrast - WCAG AAA)
  'teal-light': '#1a4f48', // Hover states
  'teal-dark': '#0a2320',  // Depth/shadows
  lime: '#e4ea6b',         // Accent (decorative only)
  'lime-bright': '#fff86b',
  'lime-dark': '#c5cc4e',  // Better contrast for text
}
```

**Dark Mode**: Implemented using Tailwind's `class` strategy with localStorage persistence. All components use `dark:` variants.

## Deployment
Automatic deployment to GitHub Pages occurs on push to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`).

**Workflow**:
1. Push to main
2. GitHub Actions runs `npm ci && npm run build`
3. Deploys `dist/` folder to GitHub Pages
4. Site live at metrodronesurvey.com

**Configuration Files**:
- `public/CNAME` — Custom domain configuration
- `vite.config.ts` — `base: '/'` for custom domain
- `.github/workflows/deploy.yml` — Deployment workflow

**DNS Setup**: A records point to GitHub Pages IPs with HTTPS enforced. See `DNS-CONFIGURATION.md` for detailed setup instructions.

## SEO & Metadata
The site includes:
- JSON-LD structured data for ProfessionalService schema
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Sitemap.xml with all pages
- Static legal pages (privacy.html, terms.html) with MetroDroneSurvey branding

## Contact Information
- **Email**: desmond@metrodronesurvey.com
- **Phone**: (816) 719-2540
- **Service Area**: Kansas City Metro Area

## Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

**Responsive Breakpoints**:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Documentation
- **CLAUDE.md** — Comprehensive project guide for AI-assisted development
- **DEPLOYMENT.md** — Detailed deployment instructions
- **DEPLOYMENT-SUMMARY.md** — Quick start deployment guide
- **DNS-CONFIGURATION.md** — DNS setup for various registrars

## License
© 2024 MetroDroneSurvey. All rights reserved.
