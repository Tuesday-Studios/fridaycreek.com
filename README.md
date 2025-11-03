# Friday Creek Retreat - React Website

A modern Next.js 15 website combining Friday Creek Retreat's content with a professional hotel design template.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Carousels**: Swiper
- **Package Manager**: pnpm

## Project Structure

```
site/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage with integrated content
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation with scroll behavior
│   │   ├── Footer.tsx      # Footer with links and contact
│   │   ├── Section.tsx     # Reusable section wrapper
│   │   └── Container.tsx   # Content container
│   └── ui/
│       ├── Button.tsx      # Primary/Secondary buttons
│       ├── Card.tsx        # Cottage cards
│       ├── ImageSlider.tsx # Hero slider (Swiper)
│       ├── AnimatedText.tsx # GSAP text animations
│       └── SectionSeparator.tsx # SVG wave separators
├── building/
│   └── crawled-data/       # JSON content from Friday Creek
│       ├── homepage.json
│       ├── about.json
│       ├── facilities.json
│       ├── contact.json
│       └── cottages.json
└── reference-site/         # Design reference

## Design Tokens

### Colors
- **Cream**: #f7f7ee (background)
- **Olive**: #5b6647 (primary brand color)
- **Navy**: #03364f (dark sections)

### Typography
- **Display**: PP Woodland (custom serif)
- **Body**: DM Sans (400, 500)

### Spacing
- **Section Padding**: xl, l, m, s, xs (responsive with clamp)

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Features Implemented

### Homepage
- ✅ Hero image slider with autoplay
- ✅ Welcome section with features list
- ✅ Direct booking CTA section
- ✅ Featured cottages grid with cards
- ✅ Pet-friendly CTA section
- ✅ Responsive design
- ✅ GSAP scroll animations

### Components
- ✅ Sticky header with scroll hide/show
- ✅ Comprehensive footer with links
- ✅ Reusable section wrapper
- ✅ Button component (primary/secondary)
- ✅ Card component for cottages
- ✅ Image slider with Swiper
- ✅ Animated text with GSAP
- ✅ SVG section separators

## Next Steps

1. **Add Lenis smooth scrolling**
2. **Create additional pages** (About, Cottages, Facilities, Contact)
3. **Add mobile navigation menu**
4. **Implement cottage detail pages**
5. **Add contact form functionality**
6. **Optimize images**
7. **Test animations and responsiveness**
8. **Build and deploy**

## Content Source

All content crawled from https://www.fridaycreek.com using Firecrawl and structured into JSON files in `building/crawled-data/`.

## Design Reference

Design template from `reference-site/` - a luxury hotel website with earth-toned color scheme and organic shapes.
