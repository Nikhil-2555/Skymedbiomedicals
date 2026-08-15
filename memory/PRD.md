# Vanta Biomedical — Product Requirements Document

## Original Problem Statement
Clean, responsive portfolio site for a biomedical retailer & laboratory-setup specialist. Present an organised product catalog, describe installation & maintenance services, and highlight client testimonials. Mobile-first, fast, easy nav for research institutions & hospital procurement teams. Basic on-page SEO. Static site — no admin dashboard, no quote flow — customer contacts via phone/email.

## User Personas
- **Hospital Procurement Officer** — needs quick catalog access and specs to compile purchase orders.
- **Research Lab Head** — evaluates equipment credibility and support before institutional purchase.
- **Clinical Facility Manager** — engages installation/maintenance services.

## Core Requirements (static)
1. Product catalog (200+ items planned) with category filtering and search.
2. Individual product pages, SEO-indexable (title + meta description per page).
3. Services section (installation / calibration / maintenance).
4. Testimonials section.
5. About + direct contact block (phone/email only, no form/quote).
6. Fully static — no backend, no login, no dashboard. Products edited in `/app/frontend/src/data/products.js`.

## Tech Stack
- React 19 + React Router 7 + Tailwind + shadcn/ui.
- Motion: framer-motion + lenis (smooth momentum scroll) + react-fast-marquee.
- Icons: @phosphor-icons/react.
- Fonts: Cabinet Grotesk (Fontshare) + IBM Plex Sans + IBM Plex Mono (Google Fonts).

## Implemented (Dec 2025)
- **Home**: Kinetic hero with masked line-by-line reveal, subtle parallax on background image, animated stat counters (0 → target in 1.2s), editorial marquee ribbon, technical bento catalog grid with sliding tab indicator + skeleton shimmer during filter/search transitions, numbered services chapters (01/02/03), auto-advancing testimonial carousel with pause-on-hover, dark high-contrast about + contact block with click-to-copy phone/email (sonner toasts), massive-type footer.
- **Product Detail**: `/product/:slug` with hero image, technical specs table (exposed grid), highlights, direct contact CTA, related products. SEO title + meta per product.
- **Motion**: framer-motion scroll-reveal (24px slide-up, ease-out) on every section; product cards stagger 80ms; only-hover lift + image zoom via CSS `@media (hover: hover)`; `prefers-reduced-motion` respected.
- **Responsive**: Auto-fit grids for stats + catalog (4→2→1 reflow), lg-breakpoint hamburger drawer with dark overlay and slide-in animation for tablet + mobile, clamp() fluid hero headline, all lazy-loaded images.
- **Data**: 16 sample products across 6 categories in `/app/frontend/src/data/products.js`; brand, contact, services and testimonials in `/app/frontend/src/data/site.js` — both easily editable.

## Prioritised Backlog

### P0 — Blocking real launch
- Replace stock brand logo with client-supplied logo (drop into `BRAND.logo` in `site.js`).
- Populate remaining ~184 real products with photos in `products.js`.

### P1 — High value enhancements
- **Claude AI Product Assistant** — floating chatbot answering catalog/spec questions (asked-for, currently deferred).
- WhatsApp click-to-chat button in header + About section.
- Downloadable PDF spec sheet per product.
- Multi-image gallery per product.

### P2 — Nice to have
- Sitemap.xml + robots.txt for stronger SEO indexation.
- Category landing pages (e.g. `/category/microscopy`) with descriptive intros.
- ISO/certification badge strip near hero.
- Blog / case-studies section.

## How To Edit
- **Add a product**: append an object in `/app/frontend/src/data/products.js` — needs unique `id`, `slug`, `name`, `category`, `image`, `code`, `specs[]`, `features[]`, `description`. It appears automatically in the catalog with its own `/product/<slug>` page.
- **Update contact/brand/testimonials/services**: edit `/app/frontend/src/data/site.js`.
- **Replace hero/services image**: swap URLs in `HERO_IMAGE` / `SERVICES_IMAGE` inside `site.js`.
