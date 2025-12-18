# MetroDroneSurvey Website

## Overview
A production website for MetroDroneSurvey built with React, TypeScript, and Vite, deployed on [GitHub Pages](https://mattdreier.github.io/metrodronesurvey.com/). Showcasing aerial photography services for real estate, solar installations, construction projects, and custom creative work in the Kansas City Metro area.

## Technology Stack
- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion for animations
- Lucide React for icons
- GitHub Pages for hosting
- GitHub Actions for CI/CD

## Performance Optimizations
The project implements several optimization strategies:

**Images**: "Converted to WebP format with automated optimization pipeline (25-75% size reduction)"

**Code Splitting**: Lazy loading and dynamic imports reduce the initial bundle size

**Fonts**: Async loading with `font-display: swap` prevents render-blocking behavior

**Build Process**: Vite handles minification, tree shaking, and optimized chunk splitting

**Lighthouse Targets**:
- Performance: 90+
- Accessibility: 95+ (WCAG AA)
- SEO: 95+
- Best Practices: 90+

## Getting Started

**Installation and Development**:
```
npm install
npm run dev      # http://localhost:3000
npm run build
npm run preview
```

**Additional Scripts**:
- `npm run optimize-images` — Convert images to WebP
- `npm run generate-icons` — Create favicon variations

## Project Structure
Components directory contains modular React elements (Header, Hero, Features, Services, Testimonials, CallToAction, Footer). Public assets include optimized images and CNAME configuration. Scripts folder holds automation tools for image optimization and icon generation.

## Deployment
Automatic deployment to GitHub Pages occurs on push to the main branch via GitHub Actions. The custom domain uses A records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) with HTTPS enforced through Let's Encrypt.

## Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**License**: © 2024 MetroDroneSurvey. All rights reserved.
