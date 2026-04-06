# SIMLABS Website Updates

## Current State
The SIMLABS website is a multi-page dark tech-themed React/TypeScript frontend. Key data is in `src/frontend/src/data.tsx`. Pages include:
- `ServicesPage.tsx`, `ServicePage.tsx` (individual service pages for VR, AR, MR, VS, DT, AI)
- `ProductsPage.tsx`, `ProductPage.tsx` (individual product pages for 15 products)
- `IndustriesPage.tsx`, `IndustryPage.tsx` (individual industry pages for 10 industries)
- `App.tsx` (homepage with `WhatWeOffer` section)

Services are displayed with their full names like "Virtual Reality (VR)", "Augmented Reality (AR)", etc. Products include Trian3DBuilder, REMO 3D, Remoscape, SSG, SilverLining, Triton, VIDERE, VRSAFE, AUGMENTOR, FARNISH, PRODOC, LAYAR, INTBOT, PAINTX, TORQUE, COLLAB. Industries include Aerospace, Defense, Homeland Security, Automotive, Engineering, Mining, Transport, Healthcare, Manufacturing, Gaming.

SSG desc in PRODUCTS array: "Advanced simulation scenario creation platform"
SSG overviewParagraph in PRODUCT_DETAILS.ssg: smart scenario generator description.

In ServicePage.tsx: layout is `lg:grid-cols-3` with main content (2 cols) on left, sidebar (CTA + Other Services) on right. Service image is ABOVE Key Features in the main column. CTA section in sidebar is titled "Ready to get started?".

In ProductPage.tsx: layout is `lg:grid-cols-3` with main content on left, sidebar on right. Product image is ABOVE overview paragraph in main column. CTA section in sidebar is titled "Request a Demo".

In IndustryPage.tsx: layout is `lg:grid-cols-3` with main content on left, sidebar on right. Industry image is above Application Areas in main column. CTA section in sidebar is titled "Explore What We Offer".

Aerospace applicationAreas in INDUSTRY_SOLUTIONS.aerospace is a flat array of strings.
Defense applicationAreas in INDUSTRY_SOLUTIONS.defense is a flat array of strings.

## Requested Changes (Diff)

### Add
- In service/product/industry specific pages: place the service/product/industry image on the RIGHT SIDE of the page, above the respective CTA section ("Ready to get started?" for services, "Request a Demo" for products, "Explore What We Offer" for industries). The image should be sized appropriately for the sidebar column.
- New structured Application Areas for Aerospace industry page (grouped by VR, AR, MR, VS, Digital Twins, AI - displayed in two columns)
- New structured Application Areas for Defense industry page (grouped by VR, AR, MR, VS, Digital Twins, AI - displayed in two columns)

### Modify
- **ALL CAPS for names**: In WhatWeOffer in App.tsx (homepage), show service/product/industry tile labels in ALL CAPS. In ServicesPage.tsx, show service cards with ALL CAPS titles. In ProductsPage.tsx, show product cards with ALL CAPS titles. In IndustriesPage.tsx show industry cards with ALL CAPS titles. In ServicePage.tsx sidebar "Other Services" list, show ALL CAPS. In ProductPage.tsx sidebar "Other Products" list, show ALL CAPS. In IndustryPage.tsx sidebar "Other Industries" list, show ALL CAPS. In IndustryPage.tsx Relevant Services tabs and Relevant Products tabs, show ALL CAPS. Also update PageBanner title on specific pages and the icon+name header. The SERVICES, PRODUCTS, INDUSTRIES arrays in data.tsx should NOT change names (slugify logic depends on them) - only the display text should be ALL CAPS using `.toUpperCase()` in JSX.
- **SSG description**: Update `desc` field of SSG in PRODUCTS array to "War gaming simulation and scenario creation software". Update `overviewParagraph` in PRODUCT_DETAILS.ssg to start with "SSG (Smart Scenario Generator) is a war gaming and advanced simulation platform..."
- **Aerospace applicationAreas**: Replace flat array in INDUSTRY_SOLUTIONS.aerospace.applicationAreas with new structured grouped data (by VR, AR, MR, VS, Digital Twins, AI sub-categories, each with bullet points). Displayed in two columns on the page.
- **Defense applicationAreas**: Replace flat array in INDUSTRY_SOLUTIONS.defense.applicationAreas with new structured grouped data (by VR, AR, MR, VS, Digital Twins, AI sub-categories). Displayed in two columns.

### Remove
- Image from the main left column on service/product/industry pages (it moves to the RIGHT sidebar above the CTA)

## Implementation Plan

1. **data.tsx changes**:
   - Update SSG desc and overviewParagraph
   - Update `INDUSTRY_SOLUTIONS.aerospace.applicationAreas` to new grouped structure (use a new data structure: array of `{category: string, items: string[]}` objects)
   - Update `INDUSTRY_SOLUTIONS.defense.applicationAreas` to new grouped structure
   - Update the INDUSTRY_SOLUTIONS type definition to support grouped application areas

2. **ServicePage.tsx changes**:
   - Move service image from main column to sidebar, placing it ABOVE the "Ready to get started?" CTA card
   - Display all text names in ALL CAPS (service title in header, other services list)
   - In PageBanner, show service title ALL CAPS

3. **ProductPage.tsx changes**:
   - Move product image from main column to sidebar, placing it ABOVE the "Request a Demo" CTA card
   - Display all product/other product names in ALL CAPS
   - In PageBanner, show product name ALL CAPS

4. **IndustryPage.tsx changes**:
   - Move industry image from main column to sidebar, placing it ABOVE "Explore What We Offer" CTA card
   - Display industry name and other industries in ALL CAPS
   - Render grouped applicationAreas in 2-column layout (category as heading, items as bullet list)
   - Handle both old flat-array format and new grouped format

5. **App.tsx WhatWeOffer section**:
   - Show service/product/industry tile labels in ALL CAPS

6. **ServicesPage.tsx**: Show service card titles in ALL CAPS
7. **ProductsPage.tsx**: Show product card titles in ALL CAPS  
8. **IndustriesPage.tsx**: Show industry card titles in ALL CAPS
