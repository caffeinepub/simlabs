# SIMLABS Website

## Current State
Multi-page React site with Services (VR, AR, MR, VS), Products (10 COTS tools), Industries (7 segments), Customers, Jobs, and Contact sections. SharedHeader and dedicated pages for each Service, Product, and Industry.

## Requested Changes (Diff)

### Add
- **Manufacturing** industry segment with dedicated page and image
- **LAYAR** product (ML-based object recognition and AR augmentation tool)
- **INTBOT** product (AI-based chatbot for products, spare parts, and services)
- **Artificial Intelligence (AI)** technology service with dedicated page mentioning Machine Learning
- **Cookie consent banner**: bottom-of-screen banner with Accept/Decline buttons; stores choice in localStorage; disappears on acceptance
- **Privacy Policy page**: accessible via `/privacy-policy` route and linked from cookie banner and footer
- Generate images: AI service, Manufacturing industry, LAYAR product, INTBOT product

### Modify
- **Header images on all pages**: fully visible (no cropping) – use `object-contain` with dark bg or natural height, removing fixed-height crop
- **SIMLABS logo**: ensure it hyperlinks to Home page (`href="/"` in SharedHeader, `href="#home"` in App.tsx Header)
- **VR icon**: change from `Headset` to `Glasses` (VR goggles look)
- **Remove "Get in Touch" CTA button** from top nav (both App.tsx Header and SharedHeader)
- **Remove COTS word**: change badge from "COTS Software" to "Software Products"; update descriptions
- **"Explore Solutions" → "Explore What We Offer"**: in Hero button and IndustryPage sidebar CTA
- **Remove Follow Us social media links** from Contact section (right side panel)
- **Footer "Connect" heading → "Follow Us"**
- **Hover colors**: change all blue/primary hover effects to orange – update CSS primary color to orange in index.css or use Tailwind orange classes throughout
- **Footer**: add Privacy Policy link

### Remove
- "Get in Touch" button from navigation header
- Social media links block from the Contact section (next to contact form)
- "COTS" word from all occurrences

## Implementation Plan
1. Update index.css primary color token to orange (oklch orange value)
2. Update data.tsx: add Manufacturing to INDUSTRIES + INDUSTRY_SOLUTIONS; add LAYAR and INTBOT to PRODUCTS + PRODUCT_DETAILS; add Artificial Intelligence to SERVICES + SERVICE_DETAILS
3. Update App.tsx: remove Get in Touch button from Header nav; change VR icon to Glasses; change "COTS Software" badge to "Software Products"; update hero button text; update footer heading; remove social links from Contact; add Privacy Policy footer link
4. Update SharedHeader.tsx: remove Get in Touch button; ensure logo links to home
5. Update ServicePage.tsx: fix header image to show fully (object-contain or auto-height)
6. Update ProductPage.tsx: fix header image; change COTS badge to Software Products
7. Update IndustryPage.tsx: fix header image; update CTA text to "Explore What We Offer"
8. Create CookieBanner.tsx component with localStorage persistence
9. Create PrivacyPolicyPage.tsx with full privacy policy content
10. Register /privacy-policy route in router
11. Mount CookieBanner in App.tsx root
