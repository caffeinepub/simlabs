# SIMLABS Website Updates

## Current State
- PRODUCTS array in data.tsx has REMO3D (not "Remo 3D"), no REMOSCAPE entry
- No dedicated Remoscape product page or PRODUCT_DETAILS entry
- PageBanner shows icon in the banner itself for products and services (via `icon` prop)
- After the banner, product/service pages show icon again in the content section below
- WhatWeOffer section uses a tabbed layout with WhatWeOfferTile (dot bullet + uppercase text + hover tooltip)
- Tiles currently don't show icons — just a small dot bullet
- Customer logos in appData.tsx and /assets/logos/ — need to be updated from alllogos zip (already extracted to /assets/logos/)
- PRODUCT_DETAILS for trian3dbuilder and remo3d have basic features/highlights; need to be replaced with comprehensive content from user
- PRODUCT_DETAILS for prodoc needs to be updated with full content from user
- No "Typical Application Areas" section in ProductPage rendering

## Requested Changes (Diff)

### Add
- REMOSCAPE product to PRODUCTS array (next to Remo 3D), with appropriate icon, desc, image
- Dedicated PRODUCT_DETAILS entry for remoscape with full description/features/application areas
- Remoscape banner image
- "Typical Application Areas" / applicationAreas rendering in ProductPage component
- PRODUCT_BANNERS entry for remoscape

### Modify
- Rename REMO3D → "Remo 3D" everywhere in data.tsx and all references (INDUSTRY_SOLUTIONS products arrays)
- Rename TRIAN3DBUILDER → "Trian3DBuilder" in display name (keep slug trian3dbuilder)
- Update PRODUCT_DETAILS.trian3dbuilder with full features from user (comprehensive list)
- Update PRODUCT_DETAILS.remo3d with full features from user + add applicationAreas
- Update PRODUCT_DETAILS.prodoc with full features from user (comprehensive list)
- PageBanner: remove `icon` prop usage in ProductPage and ServicePage (icon should NOT appear in banner)
- ProductPage and ServicePage: ensure icon appears in the content section below banner (already there, just need to remove from banner)
- WhatWeOffer tiles: add respective icon before the label text (SERVICES use service icons, PRODUCTS use product icons, INDUSTRIES use industry icons)
- Customer logos in appData.tsx: update paths to use newer files from alllogos zip where better versions exist

### Remove
- Icon from PageBanner call in ProductPage (remove `icon` prop)
- Icon from PageBanner call in ServicePage (remove `icon` prop)

## Implementation Plan
1. Update data.tsx:
   - Rename REMO3D → "Remo 3D" in PRODUCTS array and all INDUSTRY_SOLUTIONS.products references
   - Add REMOSCAPE entry to PRODUCTS array right after Remo 3D
   - Update PRODUCT_DETAILS.trian3dbuilder with full feature list + application areas
   - Update PRODUCT_DETAILS.remo3d with full feature list + application areas  
   - Update PRODUCT_DETAILS.prodoc with full feature list + application areas
   - Add PRODUCT_DETAILS.remoscape with full content
2. Update ProductPage.tsx:
   - Remove `icon` prop from PageBanner call
   - Add PRODUCT_BANNERS entry for remoscape
   - Add applicationAreas rendering (after Key Features section)
3. Update ServicePage.tsx:
   - Remove `icon` prop from PageBanner call (icon shown in Overview section below)
4. Update App.tsx WhatWeOffer:
   - WhatWeOfferTile: replace dot bullet with the item's actual icon
   - Update tile component to accept and display an icon node
5. Update appData.tsx CUSTOMER_LOGOS:
   - Use better/updated logo files from the extracted alllogos zip
6. Generate Remoscape product images (banner + card)
