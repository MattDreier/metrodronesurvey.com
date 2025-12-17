# MetroDroneSurvey.com - GitHub Pages Deployment

This project is ready for deployment to GitHub Pages with a custom domain.

---

## Quick Start

### Option 1: Automated Deployment (Recommended)

```bash
cd /opt/Projects/metrodronesurvey.com
chmod +x deploy.sh
./deploy.sh
```

Then follow the prompts to create your GitHub repository and push your code.

### Option 2: Manual Deployment

```bash
# Initialize git
git init
git add .
git commit -m "Complete MetroDroneSurvey website adaptation from Sanchez template"
git branch -M main

# Create GitHub repository
gh repo create metrodronesurvey.com --public --source=. --remote=origin

# Push to GitHub
git push -u origin main
```

---

## Documentation Files

| File | Purpose |
|------|---------|
| `DEPLOYMENT-CHECKLIST.md` | Step-by-step checklist to track progress |
| `DEPLOYMENT.md` | Complete deployment guide with troubleshooting |
| `DNS-CONFIGURATION.md` | DNS setup instructions for all major registrars |
| `deploy.sh` | Automated deployment script |

---

## What Happens Next

1. **GitHub Actions builds your site** (2-5 minutes)
   - Watch progress: `https://github.com/YOUR_USERNAME/metrodronesurvey.com/actions`

2. **Configure GitHub Pages**
   - Go to: Settings → Pages
   - Source: GitHub Actions
   - Custom domain: `metrodronesurvey.com`

3. **Configure DNS** (see `DNS-CONFIGURATION.md`)
   - Add 4 A records pointing to GitHub Pages
   - Add 1 CNAME record for www subdomain

4. **Wait for propagation** (1-48 hours)
   - Check status: `dig metrodronesurvey.com +short`

5. **HTTPS activates automatically**
   - Enable "Enforce HTTPS" in GitHub Pages settings

---

## Project Structure

```
/opt/Projects/metrodronesurvey.com/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── CNAME                   # Custom domain configuration
├── src/                        # React source code
├── vite.config.ts              # Vite configuration (base: '/')
├── deploy.sh                   # Automated deployment script
├── DEPLOYMENT.md               # Detailed deployment guide
├── DNS-CONFIGURATION.md        # DNS setup instructions
└── DEPLOYMENT-CHECKLIST.md     # Step-by-step checklist
```

---

## Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Domain:** metrodronesurvey.com (custom domain)

---

## Key Configuration

### Vite Config (`vite.config.ts`)
```typescript
export default defineConfig({
  base: '/',  // Required for custom domain
  // ...
});
```

### CNAME File (`public/CNAME`)
```
metrodronesurvey.com
```

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Triggers: Push to `main` branch
- Build: `npm ci && npm run build`
- Deploy: `dist/` folder to GitHub Pages

---

## Security Notes

- `.gitignore` configured to exclude `.env` files and API keys
- Environment variables should be added as GitHub Secrets for production
- HTTPS enforced via GitHub Pages

### Environment Variables

If your app uses environment variables (like `GEMINI_API_KEY`):

1. Go to: Settings → Secrets and variables → Actions
2. Add secret: `GEMINI_API_KEY`
3. Update `.github/workflows/deploy.yml`:
   ```yaml
   - name: Build
     run: npm run build
     env:
       GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
   ```

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment URLs

- **Production:** https://metrodronesurvey.com
- **WWW Redirect:** https://www.metrodronesurvey.com
- **GitHub Subdomain:** https://YOUR_USERNAME.github.io/metrodronesurvey.com/
- **Actions Status:** https://github.com/YOUR_USERNAME/metrodronesurvey.com/actions

---

## Support

**Questions?** See the detailed guides:
- First time deploying? → `DEPLOYMENT-CHECKLIST.md`
- Need detailed steps? → `DEPLOYMENT.md`
- DNS configuration help? → `DNS-CONFIGURATION.md`

**GitHub Pages Documentation:** https://docs.github.com/pages

---

## License

Replace this section with your license information.

---

**Last Updated:** 2025-12-17
**Status:** Ready for Deployment
