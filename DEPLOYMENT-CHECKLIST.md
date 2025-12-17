# MetroDroneSurvey.com Deployment Checklist

Quick reference checklist for deploying to GitHub Pages with custom domain.

---

## Pre-Deployment Verification

- [x] GitHub Actions workflow exists (`.github/workflows/deploy.yml`)
- [x] Vite config has `base: '/'` for custom domain
- [x] CNAME file created with `metrodronesurvey.com`
- [x] `.gitignore` protects sensitive files (`.env`, API keys)
- [ ] Local build succeeds: `npm run build`
- [ ] Review build output in `dist/` folder

---

## Step 1: Git & GitHub Setup

- [ ] Git initialized: `git init`
- [ ] All files committed: `git add . && git commit -m "Initial commit"`
- [ ] Branch renamed to main: `git branch -M main`
- [ ] GitHub repository created: `metrodronesurvey.com` (public)
- [ ] Remote added: `git remote add origin [URL]`
- [ ] Code pushed: `git push -u origin main`

**Quick Command:**
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Step 2: GitHub Pages Configuration

- [ ] Navigate to: Settings → Pages
- [ ] Set Source to: **GitHub Actions**
- [ ] Add custom domain: `metrodronesurvey.com`
- [ ] Click "Save"
- [ ] Wait for DNS check (will show warning until DNS configured)
- [ ] Keep "Enforce HTTPS" unchecked (enable after DNS works)

**URL:** `https://github.com/YOUR_USERNAME/metrodronesurvey.com/settings/pages`

---

## Step 3: DNS Configuration

Login to your domain registrar and add these records:

### A Records (all 4 required)
- [ ] `@ → 185.199.108.153`
- [ ] `@ → 185.199.109.153`
- [ ] `@ → 185.199.110.153`
- [ ] `@ → 185.199.111.153`

### CNAME Record
- [ ] `www → YOUR_USERNAME.github.io`

**Reference:** See `DNS-CONFIGURATION.md` for detailed instructions per registrar.

---

## Step 4: Verification

### GitHub Actions
- [ ] Go to: Actions tab
- [ ] Verify "Deploy to GitHub Pages" workflow succeeded (green checkmark)
- [ ] Check deployment time (should be 2-5 minutes)

### DNS Propagation
- [ ] Run: `dig metrodronesurvey.com +short`
- [ ] Verify GitHub IPs returned
- [ ] Check online: https://www.whatsmydns.net/#A/metrodronesurvey.com
- [ ] Wait for global propagation (can take 1-48 hours)

### Website Access
- [ ] Test temporary URL: `https://YOUR_USERNAME.github.io/metrodronesurvey.com/`
- [ ] After DNS: Test `http://metrodronesurvey.com`
- [ ] After DNS: Test `http://www.metrodronesurvey.com`
- [ ] Verify both redirect to HTTPS

### HTTPS Certificate
- [ ] Wait 1-24 hours after DNS propagates
- [ ] GitHub Pages shows "HTTPS enforced" with checkmark
- [ ] Enable "Enforce HTTPS" in GitHub Pages settings
- [ ] Visit `https://metrodronesurvey.com` - verify padlock icon
- [ ] Check certificate: Click padlock → Valid certificate from GitHub

---

## Step 5: Post-Deployment

### Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images load (drone footage, logos, etc.)
- [ ] Contact form functions (if applicable)
- [ ] Mobile responsive design works
- [ ] Test in different browsers (Chrome, Safari, Firefox)

### Performance
- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Check page load speed
- [ ] Verify images are optimized
- [ ] Test on 3G/4G connection

### SEO & Analytics (Optional)
- [ ] Add Google Analytics (if needed)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags and descriptions
- [ ] Check Open Graph tags for social sharing

---

## Troubleshooting Checklist

### Build Fails
- [ ] Check Actions tab for error logs
- [ ] Verify `package-lock.json` is committed
- [ ] Test build locally: `npm ci && npm run build`
- [ ] Check Node.js version matches workflow (20)

### DNS Not Working
- [ ] Verify all 4 A records added correctly
- [ ] Check CNAME has correct username
- [ ] Remove conflicting DNS records
- [ ] Wait additional time (up to 48 hours)
- [ ] Clear browser cache and try incognito mode

### HTTPS Certificate Issues
- [ ] Ensure DNS is fully propagated first
- [ ] Verify custom domain saved in GitHub Pages
- [ ] Wait 24 hours after DNS propagation
- [ ] Try removing and re-adding custom domain

### 404 Errors
- [ ] Check GitHub Actions deployment succeeded
- [ ] Verify `dist/` folder has content after build
- [ ] Ensure CNAME file is in `public/` folder
- [ ] For SPA routing issues, may need `404.html` redirect

---

## Future Updates

### Making Changes
```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build and verify
npm run build

# 4. Commit and push
git add .
git commit -m "Description of changes"
git push origin main

# 5. Wait 2-5 minutes for automatic deployment
```

### Monitoring
- [ ] Bookmark Actions page: `https://github.com/YOUR_USERNAME/metrodronesurvey.com/actions`
- [ ] Set up email notifications for failed builds
- [ ] Monitor site uptime (UptimeRobot, Pingdom, etc.)

---

## Emergency Rollback

If deployment breaks the site:

```bash
# Find last working commit
git log --oneline

# Revert to specific commit
git revert [commit-hash]
git push origin main

# Or force push previous commit (use with caution)
git reset --hard [commit-hash]
git push --force origin main
```

---

## Contact Information

**Project Directory:** `/opt/Projects/metrodronesurvey.com`

**Documentation Files:**
- Detailed deployment guide: `DEPLOYMENT.md`
- DNS configuration: `DNS-CONFIGURATION.md`
- This checklist: `DEPLOYMENT-CHECKLIST.md`

**Quick Deploy Script:** `./deploy.sh`

**GitHub Repository:** `https://github.com/YOUR_USERNAME/metrodronesurvey.com`

**Live Site:** `https://metrodronesurvey.com`

---

## Deployment Timeline Reference

| Task | Expected Time |
|------|---------------|
| Initial push to GitHub | 1-2 minutes |
| GitHub Actions build | 2-5 minutes |
| DNS propagation (first signs) | 5-30 minutes |
| DNS fully propagated | 1-48 hours |
| HTTPS certificate provisioned | 1-24 hours after DNS |
| Total time to live HTTPS site | 2-72 hours typical |

---

**Date Started:** _______________
**Date Completed:** _______________
**GitHub Username:** _______________
**Domain Registrar:** _______________

---

**Status:**
- [ ] In Progress
- [ ] Deployed (HTTP)
- [ ] Deployed (HTTPS)
- [ ] Production Ready
