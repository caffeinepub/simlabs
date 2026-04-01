# SIMLABS

## Current State
Multi-page dark tech website with hero slideshow, customer logo section, products/services/industries pages, customers page with testimonials.

## Requested Changes (Diff)

### Add
- White background on all customer logo tiles in homepage

### Modify
- Hero paragraph font size: reduce from text-lg to text-sm
- Customer logo tiles: white background, uniform tile size, logos fit without cropping
- Logo sources: use newly extracted logos from zip in /assets/logos/
- PRODOC desc: "Interactive product document creator" (remove "tool")
- COLLAB desc: "Solution for collaborative virtual reality" (remove "applications")
- LAYAR desc: "ML based AR tool"
- Customers page badge: "Customers Feedback" → "What Our Clients Say"
- All secondary pages: remove max-w-6xl to match home page margins
- Hero image: increase by making hero section taller, image larger
- ServicePage/ProductPage header: text starts from 50% left (middle of image)

### Remove
- Nothing removed

## Implementation Plan
1. App.tsx: reduce hero paragraph font size; increase hero image container; white bg on logo tiles
2. data.tsx: update PRODOC, COLLAB, LAYAR descriptions
3. CustomersPage.tsx: change badge text
4. ServicesPage, ProductsPage, IndustriesPage, CustomersPage, ProjectsPage: remove max-w-6xl
5. ServicePage, ProductPage: move header text to start from center-left of image
