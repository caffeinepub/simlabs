# SIMLABS Website

## Current State
Multi-page dark tech website with HomePage, ServicePage, ProductPage, IndustryPage, and others. Data lives in `data.tsx` (SERVICES, PRODUCTS, INDUSTRIES, SERVICE_DETAILS, PRODUCT_DETAILS, INDUSTRY_SOLUTIONS). App.tsx has the WhatWeOffer section with three columns. ProductPage.tsx and ServicePage.tsx each have a sidebar with Other Products/Services links, and a main content area with features/application areas. IndustryPage.tsx shows application areas, relevant services (as tabs), and relevant products.

## Requested Changes (Diff)

### Add
- Back button/link on ProductPage, ServicePage, IndustryPage (uses browser history / navigate(-1)), showing at the top of the main content area below the banner
- `overviewParagraph` field to PRODUCT_DETAILS for all products — a well-structured paragraph description from the provided product content
- Image displayed above Key Features section on ServicePage and IndustryPage (use product.image / service.image, displayed as a rounded image block)
- Image displayed above the product overview paragraph on ProductPage
- Hover tooltip on "Other Products" sidebar items (show product.desc on hover), and on "Other Services" sidebar items (show service.desc on hover), and on "Other Industries" sidebar items (show industry.desc on hover)

### Modify
- **Homepage WhatWeOffer section**:
  - Intro paragraph font size: change from `text-sm` to match the `Get in Touch` section text which uses default `text-muted-foreground` with no explicit small override (remove the `text-sm` class, use same size as `ContactCTA` paragraph)
  - Section headings "SERVICES WE OFFER", "PRODUCTS WE OFFER", "INDUSTRIES WE SERVE": change text color to orange (text-primary which is already orange) — make the `h3` heading text explicitly `text-[oklch(0.75_0.18_55)]` (orange)
  - "View All →" links: move from top of each column (next to heading) to the bottom of each column's tile list
  - All tile labels: convert from ALL CAPS to proper title case (e.g. "Virtual Reality (VR)", "Augmented Reality (AR)", "Trian3DBuilder", "Remo 3D", "Remoscape", "SSG", "SilverLining", "Triton", "VIDERE", "VRSAFE", "AUGMENTOR", "FARNISH", "PRODOC", "LAYAR", "INTBOT", "PAINTX", "TORQUE", "COLLAB", "Aerospace", "Defense", etc.)
- **Product name**: Change "SMART SCENARIO GENERATOR" to "SSG" everywhere (PRODUCTS array, PRODUCT_DETAILS key, all page references, navigation text)
- **VIDERE key features**: Remove "Extrude meshes directly from surfaces", "Multi-user collaboration in a shared virtual space", "Modify and refine meshes within the virtual environment"; Add "Real-time measurements"
- **ProductPage**: Add `overviewParagraph` display block between the icon/name header and Key Features section; move product image above the overview paragraph; rename "Key Features" section heading to "Key Features & Capabilities"
- **ServicePage**: Add product image above Key Features section (after the icon/title header block)
- **IndustryPage**: Add industry image above Key Features/Application Areas section
- **Replace all "Key Features" headings** with "Key Features & Capabilities" on ProductPage
- **Product overview paragraphs**: Add structured paragraph for each product in PRODUCT_DETAILS based on provided content

### Remove
- Nothing removed structurally

## Implementation Plan
1. Update `data.tsx`:
   - Rename "SMART SCENARIO GENERATOR" → "SSG" in PRODUCTS array and PRODUCT_DETAILS
   - Add `overviewParagraph` field to all entries in PRODUCT_DETAILS with the provided paragraph text
   - Fix VIDERE features (remove 3, add "Real-time measurements")
2. Update `App.tsx` (WhatWeOffer section):
   - Change intro paragraph font size to match ContactCTA paragraph (remove text-sm)
   - Make section headings orange color
   - Move "View All" links to bottom of each column
   - Convert tile labels to proper title case in SERVICES/PRODUCTS/INDUSTRIES display (update label rendering or update underlying data names to title case)
   - Note: SERVICES titles are already title case. PRODUCTS names need update in data.tsx too. INDUSTRIES names are already fine.
3. Update `ProductPage.tsx`:
   - Add Back button at top of main content
   - Add product image above overview paragraph
   - Add overview paragraph block between header and Key Features
   - Rename "Key Features" to "Key Features & Capabilities"
   - Add tooltip on hover for Other Products sidebar items (show product.desc)
4. Update `ServicePage.tsx`:
   - Add Back button
   - Add service image below the icon/title block, above Key Features
   - Add tooltip on hover for Other Services sidebar items
5. Update `IndustryPage.tsx`:
   - Add Back button
   - Add industry image below icon/title block, above Application Areas
   - Add tooltip on hover for Other Industries sidebar items
6. Update `PRODUCT_DETAILS` in data.tsx to add `overviewParagraph` for all 16 products
