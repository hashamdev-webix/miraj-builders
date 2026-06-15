# Miraj Builders

Public marketing website for **Miraj Builders** — a premium construction and architecture firm based in Pakistan.

## Scope

This repository contains the **public marketing website only**.

- ✅ Landing pages & service pages
- ✅ Brand identity & design system
- ❌ Backend / API (future phase)
- ❌ Authentication (future phase)
- ❌ Client dashboard (future phase)
- ❌ Booking / quote logic (future phase)

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Sora (headings) · Inter (body) |
| Deployment | Vercel (planned) |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```

Development server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/              # Next.js App Router pages & layouts
  globals.css     # Tailwind v4 @theme design tokens
  layout.tsx      # Root layout (fonts, metadata)
  page.tsx        # Homepage
components/       # Shared UI components
lib/
  site.ts         # Central brand config (name, contact, socials)
public/           # Static assets
```

## Design Tokens

All tokens live in `app/globals.css` under `@theme`. Raw hex values must **never** be used in components — use token classes like `bg-brand-900`, `text-accent-500`, `font-heading`, etc.

## Brand Config

Update `lib/site.ts` with real contact details, phone, WhatsApp, email, and social links before launch.
