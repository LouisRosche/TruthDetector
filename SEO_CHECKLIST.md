# SEO Implementation Checklist
## Truth Hunters - Quick Reference

Use this checklist to track SEO fixes. Check off items as you complete them.

---

## Phase 1: Critical Fixes (1-2 hours) 🔴

### File Creation
- [ ] Create `/public/robots.txt`
- [ ] Create `/public/sitemap.xml`
- [ ] Create `/public/og-image.png` (1200x630px)
- [ ] Create `/public/twitter-card.png` (1200x675px)

### Meta Tags in `/index.html`
- [ ] Add canonical URL: `<link rel="canonical" href="https://...">`
- [ ] Add og:url: `<meta property="og:url" content="https://...">`
- [ ] Add og:image: `<meta property="og:image" content="https://.../og-image.png">`
- [ ] Add og:image:width: `<meta property="og:image:width" content="1200">`
- [ ] Add og:image:height: `<meta property="og:image:height" content="630">`
- [ ] Add og:image:alt: `<meta property="og:image:alt" content="...">`
- [ ] Add twitter:image: `<meta name="twitter:image" content="https://.../twitter-card.png">`
- [ ] Add twitter:image:alt: `<meta name="twitter:image:alt" content="...">`

### Structured Data in `/index.html`
- [ ] Add JSON-LD script with Schema.org SoftwareApplication markup

---

## Phase 2: High Priority (30 minutes) 🟠

### Social Media Optimization
- [ ] Change Twitter card type to: `<meta name="twitter:card" content="summary_large_image">`
- [ ] Add og:locale: `<meta property="og:locale" content="en_US">`
- [ ] Expand twitter:description to ~120 characters

### CMS Page
- [ ] Add meta tags to `/cms/index.html` OR add noindex directive

---

## Phase 3: Long-term (3-5 hours) 🟡

### PWA & Icons
- [ ] Create `/public/manifest.json`
- [ ] Create `/public/favicon.ico`
- [ ] Create `/public/favicon-16x16.png`
- [ ] Create `/public/favicon-32x32.png`
- [ ] Create `/public/apple-touch-icon.png` (180x180px)
- [ ] Link manifest in index.html: `<link rel="manifest" href="/manifest.json">`
- [ ] Add favicon links in index.html

### Performance
- [ ] Add preload tags for critical JS
- [ ] Add preload tags for critical fonts
- [ ] Add preconnect/dns-prefetch for external resources

### Internationalization (when ready)
- [ ] Add hreflang tags for language versions
- [ ] Create language-specific sitemaps

### Routing
- [ ] Consider React Router for clean URLs (/teacher instead of ?teacher=true)
- [ ] Implement 404 NotFound component
- [ ] Update sitemap with clean URLs

---

## Validation & Testing ✅

### After Phase 1:
- [ ] Test robots.txt: Visit https://yoursite.com/robots.txt
- [ ] Test sitemap: Visit https://yoursite.com/sitemap.xml
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Test JSON-LD: https://search.google.com/test/rich-results

### After Phase 2:
- [ ] Test LinkedIn sharing: https://www.linkedin.com/post-inspector/
- [ ] Check social previews on multiple platforms

### After Phase 3:
- [ ] Test PWA installation on mobile devices
- [ ] Run Google PageSpeed Insights
- [ ] Verify all favicon sizes display correctly
- [ ] Test 404 page behavior

---

## Analytics Setup 📊

- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Link GA4 and Search Console
- [ ] Set up social media analytics tracking
- [ ] Configure UTM parameters for campaigns

---

## Quick Reference: Recommended Image Sizes

| Asset | Dimensions | Format | Location |
|-------|-----------|--------|----------|
| Open Graph | 1200x630px | PNG/JPG | `/public/og-image.png` |
| Twitter Card | 1200x675px | PNG/JPG | `/public/twitter-card.png` |
| Favicon ICO | 32x32px | ICO | `/public/favicon.ico` |
| Favicon PNG 16 | 16x16px | PNG | `/public/favicon-16x16.png` |
| Favicon PNG 32 | 32x32px | PNG | `/public/favicon-32x32.png` |
| Apple Touch | 180x180px | PNG | `/public/apple-touch-icon.png` |
| Manifest Icon 192 | 192x192px | PNG | `/public/icon-192.png` |
| Manifest Icon 512 | 512x512px | PNG | `/public/icon-512.png` |

---

## Priority Order

**Week 1 (Critical):**
1. robots.txt
2. sitemap.xml
3. og:image
4. Canonical URL
5. JSON-LD

**Week 2 (High):**
6. Twitter optimizations
7. CMS SEO

**Week 3+ (Medium/Low):**
8. PWA manifest
9. Favicons
10. Performance optimizations

---

**Last Updated:** 2025-12-25
**Current SEO Score:** 52/100
**Target Score:** 95/100
