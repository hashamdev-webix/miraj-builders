# Miraj Builders — Project Context

This document is the working reference for developers and AI agents contributing to the Miraj Builders public website. Read it before changing layouts, adding routes, or creating page content.

## Project Overview

Miraj Builders is a premium construction and architecture company serving Pakistan. This repository contains its public marketing website. The current product is content-led and statically rendered; backend features, authentication, dashboards, quote logic, and online booking are outside the present scope.

The Home and About pages are the canonical visual references. New pages must extend their existing patterns rather than introduce a different visual language.

## Current State

- Fully designed pages: Home (`/`), About (`/about/`), Services (`/services/`), Contact (`/contact/`), and Our Process (`/process/`)
- Services hub: `/services/`, with reusable featured, medium, and compact service cards
- Individual service route system: `/services/[slug]/`
- Turnkey Construction is implemented as a dedicated canonical service page at `/services/turnkey-construction/`; the older `/turnkey-construction/` route redirects to it.
- Other top-level pages currently use the shared `ComingSoon` placeholder
- Header and footer are global through the root layout

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14, App Router |
| Language | TypeScript with strict mode |
| UI | React 18 |
| Styling | Tailwind CSS v4 with CSS-first `@theme` tokens |
| Fonts | Sora for headings, Inter for body text via `next/font/google` |
| Icons | `lucide-react` |
| Images | `next/image` with local assets in `public/` |
| Deployment target | Vercel |

The project uses the `@/*` TypeScript alias for imports from the repository root.

## Folder Structure

```text
app/
  layout.tsx                    Global fonts, metadata, Header, and Footer
  globals.css                  Tailwind import, design tokens, base styles
  page.tsx                     Home page composition and SEO
  about/page.tsx               About page composition and SEO
  services/page.tsx            Services hub composition, metadata, and schema
  process/page.tsx             Our Process composition, metadata, and schema
  services/[slug]/page.tsx     Dynamic individual service placeholders
  */page.tsx                   Other top-level routes
  not-found.tsx                Shared not-found presentation

components/
  Header.tsx                   Responsive global navigation and services menu
  Footer.tsx                   Global footer
  ComingSoon.tsx               Shared placeholder page
  home/                        Home-specific sections and shared SectionHeader
  about/                       About-specific sections
  services/                    Services Hub sections, content, and service cards
  contact/                     Contact hero, details, validated form, location, and CTA
  process/                     Process hero, phase timelines, tracking preview, and CTA
  FaqAccordion.tsx             Reusable FAQ accordion with FAQPage schema
  ProcessTimeline.tsx          Reusable five-step process timeline

lib/
  site.ts                      Brand, contact, social, and asset constants
  routes.ts                    Public routes, service taxonomy, and slug helpers
  metadata.ts                  No-index metadata helper for unfinished pages

public/
  brand/                       Logos
  home/                        Home imagery and service card imagery
  about/                       About page imagery
```

## Routing Architecture

The project uses file-system routing through the Next.js App Router.

### Top-level routes

Routes are listed centrally in `lib/routes.ts` as `PUBLIC_ROUTES`, while actual pages live under `app/`.

- `/`
- `/about/`
- `/services/`
- `/projects/`
- `/construction-rates/`
- `/process/`
- `/blog/`
- `/contact/`
- `/booking/`
- `/services/turnkey-construction/`

The Next.js configuration enables `trailingSlash: true`. Internal links and canonical paths should therefore use trailing slashes consistently, except the root `/`.

### Service routes

`SERVICE_GROUPS` in `lib/routes.ts` is the source of truth for the services navigation taxonomy. It drives:

- The desktop services mega menu
- The mobile services list
- Priority service links in the footer
- Static parameters for dynamic service pages

Items with a `slug` are collected into `ALL_SERVICE_ROUTES` and generated through `app/services/[slug]/page.tsx`. Unknown slugs call `notFound()`.

Construction Rates is an intentional exception that uses a dedicated top-level route. Turnkey Construction follows the canonical service URL `/services/turnkey-construction/` through a dedicated static service page; keep the old `/turnkey-construction/` route as a redirect only.

When adding or renaming a service, update `SERVICE_GROUPS` first and ensure its `href`, `slug`, page route, metadata, and internal links agree.

## Layout Architecture

`app/layout.tsx` is the single root layout. It:

1. Loads Sora and Inter as CSS variables.
2. defines default metadata and `metadataBase`.
3. renders the sticky global Header.
4. renders route content.
5. renders the global Footer.

There are no nested route layouts at present.

Pages are generally thin composition files. Page-level files own metadata and structured data, while section components own visual markup and local content.

## Shared Components

### Header

`components/Header.tsx` is a client component because it manages:

- Mobile menu open/close state
- Desktop services mega-menu state
- Active navigation styling via `usePathname`

Desktop behavior:

- Sticky, 80px-high navy header
- Services is a link to `/services/`
- Hovering or focusing Services opens the category mega menu
- Active routes use gold text and an underline
- “Book Consultation” is a gold CTA

Mobile behavior:

- Hamburger-controlled vertical menu
- Services is a direct link to `/services/`
- Service groups and individual links remain visible beneath it
- Selecting a link closes the mobile menu

Path matching normalizes trailing slashes. Any route under `/services/`, plus `/turnkey-construction/`, activates the Services navigation item.

### Footer

`components/Footer.tsx` uses a four-column desktop layout:

- Brand summary and social links
- Priority services from the first `SERVICE_GROUPS` group
- Company navigation
- Centralized contact information

It collapses naturally on smaller screens. Contact and brand data come from `lib/site.ts`; do not hardcode replacements inside the Footer.

### SectionHeader

`components/home/SectionHeader.tsx` is the standard light-section heading pattern:

- Optional gold uppercase eyebrow
- Navy Sora H2
- Short gold divider
- Centered by default, with an optional left alignment

Reuse it for standard content sections unless the page requires the established dark hero or CTA heading treatment.

### ComingSoon

`components/ComingSoon.tsx` is the shared full-height placeholder for unfinished routes. It follows the brand palette and should be paired with `createComingSoonMetadata`, which sets `noindex, nofollow`.

## Home and About: Canonical Page Patterns

### Home page flow

The Home page establishes the fullest set of reusable patterns:

1. Dark split hero with one H1, gold eyebrow, body copy, two CTAs, image, and trust strip
2. Image-and-copy About section
3. Service card grid
4. Compact icon-tile strip
5. Numbered process timeline
6. Feature cards, dark estimate panel, and stats
7. Service-area chips
8. FAQ accordion with structured data
9. Testimonials
10. Dark closing CTA

### About page flow

The About page confirms the inner-page language:

1. Dark split hero matching the Home hero
2. Alternating light content sections
3. Image-and-copy introduction
4. White feature cards on soft grey
5. Icon-led differentiator cards
6. Dark closing CTA

### Our Process page flow

The Process page turns a long operational workflow into modular, responsive sections:

1. Established dark split hero with process introduction and two CTAs
2. Four-card client clarity strip
3. Reusable eight-step Phase 0 pre-project timeline
4. Design approval highlight panel
5. Reusable eight-step Phase 1 construction timeline
6. Compact electrical, plumbing, and solar service timelines
7. CSS-built dashboard/mobile tracking preview with visible tracking features
8. Payment and milestone update panel
9. Four-card process benefits grid
10. Image-backed closing CTA with booking and WhatsApp actions

Process copy is centralized in `components/process/processContent.ts`. The dashboard artwork is a presentational preview only; no authenticated dashboard or mobile application is implemented in this repository.

### Core composition rules

- Use a maximum content width of `max-w-7xl`.
- Use horizontal page padding of `px-6`; the Header/Footer add `lg:px-8`.
- Standard sections use `py-16 lg:py-24`.
- Compact strips use `py-12`.
- Closing CTA sections use `py-16 lg:py-20`.
- Split layouts commonly use `gap-12` and `lg:grid-cols-2`.
- Cards usually use `gap-6`, a white background, subtle border, `rounded-card`, and `shadow-card` where emphasis is needed.
- Long copy is constrained with `max-w-xl`, `max-w-2xl`, or `max-w-3xl`.

## Design System

All design tokens are declared in `app/globals.css` with Tailwind v4 `@theme`. Do not introduce raw hex colors in components.

### Color palette

| Token | Hex | Primary use |
| --- | --- | --- |
| `brand-900` | `#021F4F` | Header, footer, heroes, dark panels, key headings |
| `brand-700` | `#0A3478` | Navy hover/support tone and gradients |
| `brand-100` | `#E7EEF8` | Text/tint on dark sections |
| `accent-500` | `#D4A63A` | Gold CTAs, icons, dividers, active states |
| `accent-600` | `#B88C24` | Gold hover/support tone |
| `accent-100` | `#FBF2DA` | Soft icon and badge backgrounds |
| `surface-50` | `#F8F9FA` | Main page background |
| `surface-100` | `#EEF1F5` | Alternating section background |
| `ink-900` | `#1F2937` | Primary body/card text |
| `ink-500` | `#5B6470` | Secondary body text |
| `ink-300` | `#A6ADB8` | Subtle borders and muted states |

Semantic success, warning, danger, and info tokens also exist but are not prominent in the current marketing pages.

### Typography

- Heading font: Sora (`font-heading`)
- Body and UI font: Inter (`font-body`)
- Hero H1: `text-4xl sm:text-5xl`, bold, tight tracking, approximately `leading-[1.1]`
- Section H2: `text-3xl sm:text-4xl`, bold, navy
- Card H3: usually `text-base` or `text-lg`, bold, navy
- Body copy: usually `text-base leading-relaxed text-ink-500`
- Supporting/card copy: usually `text-sm leading-relaxed text-ink-500`
- Eyebrows: `text-xs font-semibold uppercase tracking-[0.2em] text-accent-500`
- Buttons: typically `text-sm font-semibold`

Maintain one H1 per page. Section titles should be H2; titles within grids/cards should be H3.

### Shape, borders, and shadows

- Cards: `rounded-card` = 1rem
- Buttons: `rounded-button` = 0.625rem
- Icon badges/chips: often `rounded-full`
- Card shadow: `shadow-card`
- Standard card border: `border border-ink-300/20`
- Gold emphasis border: commonly `border-accent-500/40`

### Buttons

Primary button:

```text
rounded-button bg-accent-500 ... text-brand-900 hover:bg-accent-600
```

Dark-section secondary button:

```text
rounded-button border border-surface-50/30 ... text-surface-50
hover:border-accent-500 hover:text-accent-500
```

Buttons are generally inline-flex, vertically centered, and use horizontal padding between `px-6` and `px-8`.

### Imagery

- Use `next/image`, not raw `<img>`.
- Local images belong in a meaningful folder under `public/`.
- Split hero/content imagery generally uses `aspect-4/3`.
- Service cards use `aspect-16/10`.
- Include descriptive alt text tied to the visible subject and page context.
- Use `fill`, `object-cover`, and a responsive `sizes` attribute.
- Use `priority` only for above-the-fold images.
- Established image treatment: rounded crop, subtle shadow, optional gold offset border, and optional dark gradient overlay.

## Styling Conventions

- Styling is utility-first Tailwind CSS; there are no CSS Modules or styled-components.
- Global CSS should remain limited to theme tokens and true base styles.
- Use design-token utilities (`bg-brand-900`, `text-ink-500`) instead of arbitrary colors.
- Follow Tailwind v4 syntax, such as `bg-linear-to-br`, `aspect-4/3`, and `aspect-16/10`.
- Use arbitrary values only when no stable token or standard utility fits.
- Prefer responsive mobile-first classes (`sm:`, `lg:`).
- Pure white (`bg-white`) is used intentionally for cards over off-white/grey surfaces.

## Responsive Patterns

- Mobile defaults to a single-column flow.
- `sm` commonly introduces two-column grids or horizontal CTA groups.
- `lg` introduces split heroes, three-to-six-column grids, and desktop navigation.
- Avoid fixed content heights. Use aspect ratios for media and content-driven card heights.
- Desktop-only decoration and connector lines are hidden below `lg`.
- CTA groups stack vertically on mobile and align horizontally from `sm`.

Match these breakpoints and behaviors rather than inventing page-specific responsiveness.

## Animation and Interaction Patterns

Motion is restrained and functional:

- Color transitions for links and buttons
- Card lift: `hover:-translate-y-1`
- Border/shadow emphasis on hover
- Image zoom: `duration-500 group-hover:scale-105`
- Arrow nudge: `group-hover:translate-x-1`
- FAQ expansion: CSS grid rows plus opacity over 300ms
- Chevron rotation for expanded state

There is no animation framework. Do not add one without an explicit project-level decision. Avoid large entrance animations or motion that changes the established premium, restrained feel.

## SEO Implementation

### Global metadata

`app/layout.tsx` provides:

- Default title and title template
- Default description
- `metadataBase` for `https://mirajbuilders.com`
- Base Open Graph type and site name

### Completed-page metadata

Home and About define page-specific:

- Search-focused title
- Meta description
- Canonical URL
- Open Graph title and description

Home uses an absolute title to bypass the global title template. About currently includes the brand in its page title and also passes through the global template. `createComingSoonMetadata` also appends the brand before the layout template appends it again. Review these duplicated title patterns when revising metadata.

### Structured data

- Home includes `GeneralContractor` JSON-LD.
- Home FAQ includes `FAQPage` JSON-LD.
- About includes `AboutPage` JSON-LD with a `GeneralContractor` main entity.
- Services includes `CollectionPage` JSON-LD with its visible service list.
- Our Process includes `WebPage` JSON-LD with an `ItemList` of the 16 visible pre-project and construction stages.

Structured data is rendered as `<script type="application/ld+json">`. It must accurately reflect visible content.

### Unfinished pages

`createComingSoonMetadata` sets `index: false` and `follow: false`. Keep placeholders no-indexed. Replace this helper with deliberate page metadata and a canonical only when real page content is implemented.

### SEO rules for new pages

- Preserve supplied SEO content and meaning.
- Use one clear H1 and logical H2/H3 nesting.
- Use semantic sections, lists, figures, and navigation where appropriate.
- Add a unique title, description, canonical, and Open Graph data.
- Add structured data only when supported by the visible page.
- Link naturally to related services and conversion routes.
- Keep image alt text descriptive, concise, and non-spammy.
- Avoid hidden keyword blocks, duplicate titles, and artificial keyword repetition.

Before launch, reconcile the custom-domain `metadataBase` with the Vercel URLs currently hardcoded in existing JSON-LD.

## Naming Conventions

- React components and component files: PascalCase (`ServicesOverview.tsx`)
- Route folders and URL slugs: lowercase kebab-case (`grey-structure-construction`)
- Utility/library files: lowercase (`routes.ts`, `metadata.ts`)
- Component data arrays: descriptive camelCase (`trustBadges`, `differentiators`)
- Exported route constants: uppercase snake case (`SERVICE_GROUPS`)
- Component sections should be named by purpose, not visual position.
- Prefer default exports for page and component files, matching the existing codebase.

## Reusable Patterns

Use these existing patterns before creating new abstractions:

- `SectionHeader` for light-section H2 headings
- Home/About split hero for inner-page heroes
- `AboutSection` / `WhoWeAre` for image-and-copy sections
- `ServicesOverview` for image-led card grids
- `WhyChooseUs` / `WhatMakesUsDifferent` for icon feature grids
- `FinishingStrip` for compact service tiles
- `ProcessTimeline` for ordered multi-step content
- `components/process/PhaseTimeline.tsx` for longer eight-step project phases
- `components/process/processContent.ts` for process stages, tracking features, service timelines, and benefit data
- `FaqAccordion` for interactive FAQs and FAQ schema
- `HomeCTA` / `AboutCTA` for dark closing conversion bands
- `ComingSoon` plus `createComingSoonMetadata` for unfinished pages
- `SITE` for brand/contact data
- `SERVICE_GROUPS` for navigation and service taxonomy

Page-specific components should live in a route-oriented folder under `components/` (for example, `components/services/`) while genuinely shared primitives can remain at the component root or in the most established shared location.

## Important Development Rules

1. Do not redesign the site or introduce a parallel design system.
2. Treat Home and About as the primary visual and structural references.
3. Reuse existing components, tokens, spacing, and interaction patterns.
4. Do not hardcode brand/contact data that belongs in `lib/site.ts`.
5. Do not duplicate service route data outside `lib/routes.ts` without a page-specific content reason.
6. Keep route URLs and internal links trailing-slash consistent.
7. Use semantic HTML and preserve a valid heading hierarchy.
8. Keep unfinished routes no-indexed.
9. Use `next/image` with meaningful alt text and responsive sizing.
10. Preserve mobile-first responsiveness and verify desktop and mobile navigation.
11. Keep client components limited to UI that actually requires browser state.
12. Do not add dependencies when the existing stack can solve the problem.
13. Do not publish placeholder facts as verified claims.
14. Run a production build after meaningful route, metadata, or component changes.

## Known Pre-Launch Items

- Confirm the tagline in `lib/site.ts`.
- Add the final Facebook and Instagram profile URLs in `lib/site.ts`.
- Replace placeholder testimonials with real client testimonials.
- Confirm the project, experience, client, and worker statistics.
- Update hardcoded Vercel URLs in JSON-LD to the final canonical domain.
- Remove duplicated brand text from About and placeholder-page titles while preserving the global title template.
- Implement real content and indexable metadata for all placeholder routes.

## Services Hub Implementation

`/services/` is an indexable Services Hub built from the approved SEO document. It includes:

1. A split dark hero with the approved H1, introduction, and CTAs.
2. Large core-service cards for Turnkey, Grey Structure, and New Home Construction.
3. Medium Design & Planning and Renovation cards.
4. Compact Finishing & Installation service cards.
5. The shared five-step process timeline.
6. A page-specific FAQ accordion with FAQPage structured data.
7. A dark final CTA.

Service-card content is stored in `components/services/serviceContent.ts`, while `ServiceCard.tsx` provides featured, medium, and compact variants. Keep future Services Hub edits aligned with this data/component split. Individual service routes remain under the existing routing architecture.

## Contact Page Implementation

`/contact/` is an indexable, conversion-focused contact page built from the approved SEO document. It includes:

1. A split dark hero with the approved H1, introduction, and CTA labels.
2. A two-column contact-information and project-estimate section.
3. A client-side validated form with all approved fields and service options.
4. A “Why Contact Miraj Builders?” trust section.
5. A branded office-location placeholder and visit-booking content.
6. A dark project-consultation CTA.

The current project has no submission API. `ContactForm.tsx` therefore validates locally and prepares a prefilled email in the visitor’s default email application. Replace this mailto workflow with a real API/server action when a lead-delivery backend is approved. Real phone, WhatsApp, email, and office-address values must be updated centrally in `lib/site.ts`.
