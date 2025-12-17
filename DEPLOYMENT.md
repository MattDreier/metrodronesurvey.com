# MetroDroneSurvey.com - GitHub Pages Deployment Guide

## Status: Ready for Deployment

All configuration files are prepared and verified. Follow the steps below to deploy your website.

---

## Prerequisites Verified

- [x] GitHub Actions workflow configured (`.github/workflows/deploy.yml`)
- [x] Vite config set for custom domain (`base: '/'`)
- [x] CNAME file created (`public/CNAME` with `metrodronesurvey.com`)
- [x] Build process tested (`npm run build` produces `dist/` folder)

---

## Step 1: Initialize Git Repository (if not already done)

```bash
cd /opt/Projects/metrodronesurvey.com
git init
git add .
git commit -m "Complete MetroDroneSurvey website adaptation from Sanchez template"
git branch -M main
```

---

## Step 2: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)

```bash
gh repo create metrodronesurvey.com --public --source=. --remote=origin
git push -u origin main
```

### Option B: Manual Setup

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `metrodronesurvey.com`
3. Set to **Public**
4. Do NOT initialize with README (already have local files)
5. Click "Create repository"

Then connect your local repo:

```bash
git remote add origin https://github.com/YOUR_USERNAME/metrodronesurvey.com.git
git push -u origin main
```

---

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Under "Custom domain":
   - Enter: `metrodronesurvey.com`
   - Click "Save"
5. Enable "Enforce HTTPS" (will activate after DNS propagation)

---

## Step 4: Configure DNS Records

Log into your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) and add these DNS records:

### A Records (for apex domain metrodronesurvey.com)

| Type | Name | Value            | TTL  |
|------|------|------------------|------|
| A    | @    | 185.199.108.153  | 3600 |
| A    | @    | 185.199.109.153  | 3600 |
| A    | @    | 185.199.110.153  | 3600 |
| A    | @    | 185.199.111.153  | 3600 |

### CNAME Record (for www subdomain)

| Type  | Name | Value                        | TTL  |
|-------|------|------------------------------|------|
| CNAME | www  | YOUR_USERNAME.github.io      | 3600 |

**Replace `YOUR_USERNAME` with your actual GitHub username.**

### DNS Configuration Notes

- Remove any existing A or CNAME records for `@` or `www` that conflict
- DNS propagation can take 24-48 hours (usually faster, 1-2 hours)
- You can check DNS propagation at: https://www.whatsmydns.net/

---

## Step 5: Verify Deployment

### After Pushing to GitHub

1. The GitHub Action will automatically trigger on push to `main`
2. Monitor the deployment:
   - Go to **Actions** tab in your GitHub repository
   - Click on the running workflow "Deploy to GitHub Pages"
   - Watch the build and deploy steps complete

### Successful Deployment Indicators

- Green checkmark on the workflow run
- Site accessible at temporary URL: `https://YOUR_USERNAME.github.io/metrodronesurvey.com/`
- After DNS propagation: `https://metrodronesurvey.com`

### Expected Timeline

- **Immediate**: GitHub Actions build completes (2-5 minutes)
- **1-2 hours**: DNS records propagate (test with `nslookup metrodronesurvey.com`)
- **24-48 hours**: Full global DNS propagation guaranteed

---

## Step 6: Test Your Deployment

### Check DNS Resolution

```bash
# Check A records
dig metrodronesurvey.com +short

# Should return GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME for www
dig www.metrodronesurvey.com +short
# Should return: YOUR_USERNAME.github.io
```

### Verify HTTPS Certificate

After DNS propagation:

1. Visit https://metrodronesurvey.com
2. Click the padlock icon in browser
3. Verify valid SSL certificate issued by GitHub

---

## Deployment URLs

- **Custom Domain**: https://metrodronesurvey.com
- **GitHub Subdomain**: https://YOUR_USERNAME.github.io/metrodronesurvey.com/
- **Deployment Status**: https://github.com/YOUR_USERNAME/metrodronesurvey.com/actions

---

## Troubleshooting

### Build Fails in GitHub Actions

**Check:**
- `package-lock.json` is committed
- All dependencies are in `package.json`
- Build works locally (`npm ci && npm run build`)

**View logs:**
```bash
gh run list
gh run view [run-id] --log
```

### DNS Not Resolving

**Wait Time:**
- DNS changes can take up to 48 hours
- Usually faster (1-2 hours)

**Check Current DNS:**
```bash
nslookup metrodronesurvey.com
# or
dig metrodronesurvey.com
```

**Verify Configuration:**
- Ensure A records point to all 4 GitHub IPs
- Ensure no conflicting records exist

### HTTPS Certificate Not Working

**Required:**
- DNS must be fully propagated first
- Custom domain must be saved in GitHub Pages settings
- "Enforce HTTPS" enabled in GitHub Pages settings

**Timeline:**
- Certificate provisioning starts after DNS propagation
- Can take 1-24 hours after DNS resolves

### 404 Errors on Page Refresh

If using React Router and getting 404s on direct URL access:

**Solution:** Add `404.html` that redirects to `index.html`

```bash
cp dist/index.html dist/404.html
```

Or configure in your build process.

---

## Future Updates

### To Deploy Changes

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy (2-5 minutes).

### To Roll Back

```bash
# Find the commit hash to revert to
git log --oneline

# Revert to specific commit
git revert [commit-hash]
git push origin main
```

---

## Configuration Files Summary

### `/opt/Projects/metrodronesurvey.com/.github/workflows/deploy.yml`
- Triggers on push to `main` branch
- Builds with `npm ci && npm run build`
- Deploys `dist/` folder to GitHub Pages
- Uses Node.js 20

### `/opt/Projects/metrodronesurvey.com/vite.config.ts`
- `base: '/'` configured for custom domain
- Resolves environment variables for API keys
- Aliases `@` to project root

### `/opt/Projects/metrodronesurvey.com/public/CNAME`
- Contains: `metrodronesurvey.com`
- Copied to `dist/` during build
- Tells GitHub Pages to serve from custom domain

---

## Security Notes

### Environment Variables

Your `vite.config.ts` references `GEMINI_API_KEY`. For security:

**Never commit API keys to git!**

If you need API keys in production:

1. Use GitHub Secrets:
   - Settings → Secrets and variables → Actions
   - Add secret: `GEMINI_API_KEY`

2. Update workflow (`.github/workflows/deploy.yml`):
   ```yaml
   - name: Build
     run: npm run build
     env:
       GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
   ```

**Current Status:**
- Local `.env` is git-ignored (check `.gitignore`)
- Build will use environment variable if available
- May need to handle missing keys gracefully in code

---

## Support Resources

- **GitHub Pages Documentation**: https://docs.github.com/pages
- **Custom Domain Setup**: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
- **GitHub Actions Status**: https://www.githubstatus.com/
- **DNS Checker**: https://www.whatsmydns.net/

---

## Next Steps Checklist

- [ ] Initialize git repository
- [ ] Create GitHub repository (public)
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages with GitHub Actions source
- [ ] Configure custom domain in GitHub Pages settings
- [ ] Add DNS records at domain registrar
- [ ] Wait for DNS propagation (1-48 hours)
- [ ] Verify HTTPS certificate activates
- [ ] Test website at https://metrodronesurvey.com
- [ ] Set up monitoring/analytics if desired

---

**Deployment Owner**: Replace `YOUR_USERNAME` throughout this guide with your actual GitHub username.

**Last Updated**: 2025-12-17
