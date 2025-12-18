# MetroDroneSurvey

A production website for MetroDroneSurvey built with React, TypeScript, and Vite. Showcasing aerial photography services for real estate, solar installations, construction projects, and custom creative work in the Kansas City Metro area.

🌐 **Live**: [mattdreier.github.io/metrodronesurvey.com](https://mattdreier.github.io/metrodronesurvey.com/)

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React (icons)
- GitHub Pages (hosting)
- GitHub Actions (CI/CD)

## Performance Optimizations

- **Images**: Converted to WebP format with automated optimization pipeline (25-75% size reduction)
- **Code Splitting**: Lazy loading and dynamic imports to reduce initial bundle size
- **Fonts**: Async loading with `font-display: swap` to prevent render blocking
- **Build**: Minification, tree shaking, and optimized chunk splitting via Vite

**Lighthouse targets:**
- Performance: 90+
- Accessibility: 95+ (WCAG AA)
- SEO: 95+
- Best Practices: 90+

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run optimize-images` - Convert and optimize images to WebP
- `npm run generate-icons` - Generate favicon variations from logo

## Project Structure

```
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── CallToAction.tsx
│   └── Footer.tsx
├── public/
│   ├── assets/         # Optimized images
│   └── CNAME          # Custom domain config
├── scripts/
│   ├── optimize-images.js
│   └── generate-icons.js
├── App.tsx
├── index.tsx
└── vite.config.ts
```

## Deployment

Automatically deploys to GitHub Pages on push to `main` via GitHub Actions.

### Custom Domain Setup

**DNS Configuration:**

A Records for apex domain:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

CNAME for www subdomain:
```
www → mattdreier.github.io
```

**GitHub Pages:**
- Custom domain: `metrodronesurvey.com`
- HTTPS enforced (Let's Encrypt)
- Build source: GitHub Actions

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2024 MetroDroneSurvey. All rights reserved.
