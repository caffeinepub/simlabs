# SIMLABS Website

## Current State
- Multi-page dark tech website with React/TypeScript
- Hero slideshow uses fixed min/max height (420px-620px) with object-cover, no enforced 16:9 ratio
- Service/Product/Industry card images use fixed heights (h-36, h-40, h-28) with object-cover — images get cropped
- All secondary pages (Services, Products, Industries, Customers, Projects, Careers, Contact) have `py-24` top padding after `pt-20`, creating excessive gap from header
- Partners page uses `py-20` top padding — less gap, more aligned
- Careers page only shows 'No open positions' card, no job listings
- Customers page description is generic

## Requested Changes (Diff)

### Add
- 6 job listings to CareersPage: Application Developer, 3D Artist, Electronics Engineer, Intern App Dev, Intern 3D Artist, Intern Business Development — each with title, job description, experience, skills required, good to have, location
- Updated Customers page description (two paragraphs)

### Modify
- Hero slideshow: enforce 16:9 aspect ratio using aspect-video (or padding-top 56.25%) so images fully display without cropping
- Card images in Services, Products, Industries pages: use aspect-video (16:9) with object-contain or object-cover ensuring full image visibility
- Project tile images: ensure full visibility with object-contain
- Industry-specific pages (IndustryPage, ServicePage, ProductPage): fix any header images being cropped
- Reduce top gap on all secondary pages (Services, Products, Industries, Customers, Projects, Careers, Contact): change section from `py-24` to `py-12` to match Partners page spacing style
- Customers page description updated to new two-paragraph text

### Remove
- Nothing removed

## Implementation Plan
1. Fix hero slideshow container: use aspect ratio 16:9 instead of fixed min/max heights
2. Fix card images on ServicesPage, ProductsPage, IndustriesPage: use aspect-video wrapper div with object-contain so full image shows
3. Fix project tile images in ProjectsPage: use aspect-video with object-contain
4. Fix ServicePage, ProductPage, IndustryPage header images if any
5. Reduce top padding on all secondary pages from py-24 to py-12 (or equivalent matching Partners)
6. Update CustomersPage description
7. Add all 6 job listings to CareersPage with proper styling matching the website theme
