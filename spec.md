# SIMLABS Website

## Current State
Full SIMLABS website with sections: Hero, About, Services (VR/AR/MR/VS), Products (10 items), Industries (7 sectors), Why SIMLABS, Customers (testimonials + badges), Jobs, Contact form, Footer. Uses icon-only cards for all sections. Contact form has no captcha. Email shown as info@simlabs.in. Header logo uses Cpu icon + gradient SIM + white LABS text.

## Requested Changes (Diff)

### Add
- Images to each Service card (VR/AR/MR/VS) using generated images
- Images to each Product card (10 products) using generated images
- Images to each Industry card (7 industries) using generated images
- Customer logo images in Customers section (replace plain text badges), 18 customers with generated logo PNGs
- SIMLABS logo (fetched from simlabs.in as simlabs-logo.png) displayed in header top right corner area, replacing Cpu icon
- Simple math-based CAPTCHA field in contact form before submit button

### Modify
- SIMLABS word in header and footer: ALL letters same color (currently SIM=gradient, LABS=foreground) - use gradient-text for entire SIMLABS
- Contact email: change from clickable mailto:info@simlabs.in to displayed text "info at simlabs dot in" (both the href/display)
- Customers section: replace the CUSTOMER_ORGS text badges with logo image grid showing all 18 customer logos

### Remove
- Old plain text customer org badges

## Implementation Plan
1. Update Header: use simlabs-logo.png in place of Cpu icon; make full SIMLABS text same gradient color
2. Update Footer: make full SIMLABS text same gradient color
3. Update Services section: add image at top of each card
4. Update Products section: add image to each product card (image above the icon+text)
5. Update Industries section: add image to each industry card
6. Update Customers section: show 18 customer logo images in a responsive grid
7. Update Contact form: add simple math captcha (e.g. "What is 3 + 5?") with random numbers, validate before submit
8. Update Contact email: change to display "info at simlabs dot in" without mailto href
