# SIMLABS Website

## Current State
- Multi-page dark-tech website with homepage, Services, Products, Industries, Customers, Projects, Partners, Careers, Contacts pages
- SERVICE_DETAILS in data.tsx has `features` and `industries` arrays for each service slug
- INDUSTRY_SOLUTIONS in data.tsx has `services` and `products` arrays for each industry slug
- IndustryPage.tsx renders "Applicable SIMLABS Services" and "Relevant Products" sections from INDUSTRY_SOLUTIONS
- ServicePage.tsx renders Key Features, Industries Applicable, and Other Services sidebar
- CustomersPage.tsx currently shows Testimonials FIRST, then Our Customers
- Homepage What We Offer section has column titles "Technology Services" and "Our Products"
- ServicesPage.tsx has title "Our Technology Services" and old description
- ProductsPage.tsx has title "Our Products"
- Font sizes: hero description = text-sm, What We Offer intro = text-sm, Why Choose intro = text-sm with max-w-2xl, Get in Touch description = text-muted-foreground (default/base)
- SERVICE_DETAILS type is `{ features: string[]; industries: string[] }`
- IndustryPage.tsx has no Application Areas section
- There is no `applicationAreas` field in SERVICE_DETAILS or INDUSTRY_SOLUTIONS

## Requested Changes (Diff)

### Add
- `applicationAreas` array to SERVICE_DETAILS type and all 6 service entries (VR, AR, MR, VS, DT, AI)
- Application Areas section in ServicePage.tsx rendered between Key Features and Industries Applicable
- Application Areas section in IndustryPage.tsx (using new field from INDUSTRY_SOLUTIONS)
- `applicationAreas` array to INDUSTRY_SOLUTIONS for all 10 industries
- All industries list to each service's `industries` array in SERVICE_DETAILS (all 10 industries)
- New VR tags string derived from VR key features, application areas, and industries

### Modify
- CustomersPage.tsx: swap order so "Our Customers" section comes BEFORE "Testimonials" section
- Homepage WhatWeOffer component: rename column "Technology Services" → "SERVICES WE OFFER", "Our Products" → "PRODUCTS WE OFFER"
- ServicesPage.tsx: title banner from "Our Technology Services" → "Services We Offer"; update description text
- ProductsPage.tsx: title in PageBanner from "Our Products" → "Products We Offer"
- Homepage hero description font: keep text-sm (it already matches Get in Touch which uses text-base/default; user wants them SAME — actually user wants hero desc same as Get in Touch desc. Get in Touch `<p className="text-muted-foreground">` which is text-base default. Hero desc is `text-sm`. Change hero to remove text-sm → use default text-base)
- Homepage What We Offer intro: currently text-sm → change to match Get in Touch (remove text-sm, use default)
- Homepage Why Choose intro: currently text-sm → change to match Get in Touch (remove text-sm)
- SERVICE_DETAILS: replace features array for VR, AR, MR, VS, DT, AI with new points provided
- SERVICE_DETAILS: replace industries array for all 6 services with full 10-industry list
- SERVICES[0].tag: update VR tag string with keywords from features/application areas/industries
- INDUSTRY_SOLUTIONS: add `applicationAreas` arrays
- IndustryPage.tsx: show Application Areas first, then Relevant Services, then Relevant Products

### Remove
- Nothing removed

## Implementation Plan
1. Update SERVICE_DETAILS type in data.tsx to include `applicationAreas?: string[]`
2. Replace VR, AR, MR, VS, DT, AI features in SERVICE_DETAILS with new lists from user
3. Replace all service industries arrays with full 10-industry list
4. Add applicationAreas arrays to all 6 services in SERVICE_DETAILS
5. Add applicationAreas arrays to all 10 industries in INDUSTRY_SOLUTIONS
6. Update VR tag in SERVICES array
7. Update ServicePage.tsx to render Application Areas section
8. Update IndustryPage.tsx to show Application Areas first, then Services, then Products
9. Update CustomersPage.tsx: Our Customers section FIRST, Testimonials SECOND
10. Update App.tsx: rename column headers in WhatWeOffer; fix font sizes on hero desc, What We Offer intro, Why Choose intro
11. Update ServicesPage.tsx: banner title → "Services We Offer", new description
12. Update ProductsPage.tsx: banner title → "Products We Offer"
