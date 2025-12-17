# DNS Configuration for metrodronesurvey.com

## Quick Reference

Configure these DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)

---

## Required DNS Records

### A Records (Apex Domain)

Add **all four** A records for `metrodronesurvey.com`:

```
Type: A
Name: @ (or leave blank for apex domain)
Value: 185.199.108.153
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### CNAME Record (WWW Subdomain)

Add **one** CNAME record for `www.metrodronesurvey.com`:

```
Type: CNAME
Name: www
Value: YOUR_GITHUB_USERNAME.github.io
TTL: 3600
```

**IMPORTANT:** Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username!

---

## Table Format (for easy reference)

| Record Type | Name/Host | Value/Points To      | TTL  |
|-------------|-----------|----------------------|------|
| A           | @         | 185.199.108.153      | 3600 |
| A           | @         | 185.199.109.153      | 3600 |
| A           | @         | 185.199.110.153      | 3600 |
| A           | @         | 185.199.111.153      | 3600 |
| CNAME       | www       | YOUR_USERNAME.github.io | 3600 |

---

## Common Registrar Interfaces

### GoDaddy
1. Log into GoDaddy
2. Go to "My Products" → "DNS" next to your domain
3. Click "Add" for each record
4. For A records: Type=A, Name=@, Value=[IP address]
5. For CNAME: Type=CNAME, Name=www, Value=[username].github.io

### Namecheap
1. Log into Namecheap
2. Domain List → Manage → Advanced DNS
3. Add New Record
4. For A records: Type=A Record, Host=@, Value=[IP address]
5. For CNAME: Type=CNAME Record, Host=www, Value=[username].github.io

### Cloudflare
1. Log into Cloudflare
2. Select your domain
3. DNS → Add record
4. For A records: Type=A, Name=@, IPv4 address=[IP], Proxy status=DNS only (initially)
5. For CNAME: Type=CNAME, Name=www, Target=[username].github.io, Proxy status=DNS only

**Note:** You can enable Cloudflare proxy after HTTPS is working

### Google Domains / Squarespace Domains
1. Log into Google Domains
2. My domains → Manage → DNS
3. Custom records section
4. For A records: Host name=@, Type=A, Data=[IP address]
5. For CNAME: Host name=www, Type=CNAME, Data=[username].github.io

---

## Before You Start

### Check Existing Records

**Remove or replace** any existing records for:
- `@` (apex domain)
- `www` subdomain

Common conflicting records to look for:
- Old A records pointing to different IPs
- CNAME records for @ (not allowed with A records)
- URL redirects or forwards

---

## Verification Commands

### After configuring DNS, verify with these commands:

```bash
# Check A records (should return GitHub IPs)
dig metrodronesurvey.com +short

# Expected output:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME for www
dig www.metrodronesurvey.com +short

# Expected output:
# YOUR_USERNAME.github.io
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### Alternative verification (if dig not available):

```bash
nslookup metrodronesurvey.com
nslookup www.metrodronesurvey.com
```

### Online DNS Checker

Check propagation status worldwide:
- https://www.whatsmydns.net/#A/metrodronesurvey.com
- https://www.whatsmydns.net/#CNAME/www.metrodronesurvey.com

---

## Timeline Expectations

| Stage | Time | Description |
|-------|------|-------------|
| DNS Update | Immediate | Records saved at registrar |
| Local Propagation | 5-30 min | Your ISP's DNS cache updates |
| Regional Propagation | 1-4 hours | Most DNS servers worldwide update |
| Full Propagation | 24-48 hours | Guaranteed complete propagation |
| HTTPS Certificate | 1-24 hours after DNS | GitHub provisions SSL certificate |

---

## Troubleshooting

### DNS Not Resolving After 24 Hours

**Check:**
1. Verify all 4 A records are added correctly
2. Ensure no conflicting records exist
3. Confirm CNAME points to `[username].github.io` (with trailing period if required)
4. Check registrar's DNS nameservers are active

**Test with authoritative nameservers:**
```bash
# Find your domain's nameservers
dig NS metrodronesurvey.com

# Query specific nameserver
dig @ns1.example.com metrodronesurvey.com
```

### WWW Not Working

**Check:**
1. CNAME record for `www` exists
2. Value is exactly: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME)
3. No typos in username
4. No conflicting A records for www

### Mixed Content Warnings

After HTTPS is enabled, if you see mixed content warnings:
1. Ensure all resources load via HTTPS
2. Check `index.html` for `http://` links
3. Use protocol-relative URLs: `//example.com/resource`

---

## GitHub Pages Custom Domain Setup

After DNS is configured:

1. Go to your GitHub repository
2. Settings → Pages
3. Custom domain: `metrodronesurvey.com`
4. Click Save
5. Wait for DNS check (green checkmark)
6. Enable "Enforce HTTPS"

GitHub will automatically:
- Verify DNS configuration
- Provision SSL certificate
- Redirect www to apex (or vice versa)
- Serve your site over HTTPS

---

## Reference

- **GitHub Pages IPs**: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain
- **DNS Basics**: https://www.cloudflare.com/learning/dns/what-is-dns/
- **HTTPS Troubleshooting**: https://docs.github.com/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

---

**Your GitHub Username**: _______________
**Configuration Date**: _______________
**Registrar**: _______________
**DNS Propagation Confirmed**: [ ] Yes [ ] No
**HTTPS Working**: [ ] Yes [ ] No
