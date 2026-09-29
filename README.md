# Coffee Shop Landing Page 2 - Next.js, TypeScript, TailwindCSS Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-blue)](https://tailwindcss.com/)

A modern, responsive coffee shop landing page built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project demonstrates best practices in React component structure, animation, and UI/UX—ideal for learning, customization, and as a template for real-world use. It is a single-page application (SPA) with no backend or API; all content is static and data-driven from local files.

- **Live Demo:** [https://coffeeshop-ui-2.vercel.app/](https://coffeeshop-ui-2.vercel.app/)

![Screenshot 2025-07-28 at 00 31 25](https://github.com/user-attachments/assets/fb885ac2-9e72-4630-a2f9-8e7e1dd526d6)
![Screenshot 2025-07-28 at 00 32 10](https://github.com/user-attachments/assets/7775e932-35b6-4912-a5e9-46ec7bde2f52)
![Screenshot 2025-07-28 at 00 32 32](https://github.com/user-attachments/assets/a4d2ebc3-abc2-433a-aa57-080d53d7ed8f)
![Screenshot 2025-07-28 at 00 33 23](https://github.com/user-attachments/assets/05d561da-f8d3-4011-85f0-90c7014ee965)

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Environment Variables](#environment-variables)
- [Routes & API](#routes--api)
- [Components Walkthrough](#components-walkthrough)
- [Data, Types & Lib](#data-types--lib)
- [How to Reuse Components](#how-to-reuse-components)
- [Libraries & Dependencies](#libraries--dependencies)
- [Customization & Theming](#customization--theming)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Summary

**** is a visually appealing, single-page web app for a coffee shop. It features animated sections (Hero, Services, Banner, App Store promo, Testimonials, Footer), a mobile-friendly layout, and reusable React components. The app uses the **Next.js App Router** with one route: the home page (`/`). There is **no backend or API**—all content comes from TypeScript data files and static assets. The project is ideal for learning modern frontend development, rapid prototyping, or as a starting point for your own business site.

---

## Features

- **Next.js 16 (App Router)** – Single-page app with server-capable layout and client components.
- **TypeScript** – Full type safety; shared types in `src/types`, no `any` in components.
- **Tailwind CSS** – Utility-first styling with custom theme (primary, secondary, fonts).
- **Dark mode support** – Via `dark` class on the root (theme colors in `tailwind.config.js`).
- **AOS (Animate On Scroll)** – Scroll-triggered animations on sections and cards.
- **Responsive design** – Mobile-first layout; breakpoints for sm, md, lg.
- **Modular components** – Navbar, Hero, Services, Banner, AppStore, Testimonials, Footer.
- **Data-driven UI** – Menu, services, testimonials, and footer links live in `src/data`.
- **SEO metadata** – Title, description, Open Graph, Twitter cards, canonical URL in `layout.tsx`.
- **ESLint** – Next.js + TypeScript rules; run with `npm run lint`.
- **Vercel-ready** – `vercel.json` rewrites for SPA-style routing on refresh.

---

## Tech Stack

| Technology                 | Purpose                                                            |
| -------------------------- | ------------------------------------------------------------------ |
| **Next.js 16**             | React framework, App Router, static generation, image optimization |
| **React 19**               | UI library, hooks, client components                               |
| **TypeScript 5.6**         | Type safety, interfaces for data and props                         |
| **Tailwind CSS 3**         | Utility CSS, custom theme, responsive design                       |
| **AOS**                    | Scroll animations (init in `app/page.tsx`)                         |
| **react-slick**            | Testimonials carousel                                              |
| **react-icons**            | FaCoffee, GrSecure, IoFastFood, GiFoodTruck, FaFacebook, etc.      |
| **PostCSS + Autoprefixer** | CSS processing (Tailwind pipeline)                                 |
| **ESLint 9**               | Linting with `eslint-config-next` (flat config)                    |

---

## Project Structure

```bash
coffeeshop-ui-2/
├── public/                    # Static assets (favicon, images)
│   ├── favicon.ico
│   ├── coffee_logo.png
│   ├── coffee2.png
│   ├── coffee-white.png
│   ├── coffee-texture.jpg
│   ├── coffee-beans-bg.png
│   ├── coffee-footer.jpg
│   ├── app_store.png
│   └── play_store.png
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, metadata, global CSS
│   │   ├── page.tsx          # Home page (client; composes all sections)
│   │   └── globals.css       # Tailwind + custom keyframes (e.g. spin)
│   ├── components/
│   │   ├── Navbar/Navbar.tsx
│   │   ├── Hero/Hero.tsx
│   │   ├── Services/Services.tsx
│   │   ├── Banner/Banner.tsx
│   │   ├── AppStore/AppStore.tsx
│   │   ├── Testimonials/Testimonials.tsx
│   │   └── Footer/Footer.tsx
│   ├── data/
│   │   ├── menu.ts            # navMenuItems
│   │   ├── services.ts        # servicesData
│   │   ├── testimonials.ts    # testimonialData
│   │   └── footer.ts          # footerLinks
│   ├── lib/
│   │   └── constants.ts       # ASSETS (image paths)
│   └── types/
│       ├── index.ts           # NavMenuItem, ServiceItem, TestimonialItem, FooterLinkItem
│       └── aos.d.ts           # AOS module declaration
├── eslint.config.mjs         # ESLint 9 flat config (Next + TypeScript)
├── next.config.mjs            # React strict mode, image remotePatterns (picsum.photos)
├── tailwind.config.js         # Theme: colors, fonts, container, animation
├── postcss.config.cjs         # tailwindcss, autoprefixer
├── tsconfig.json              # Path alias @/* -> ./src/*
├── vercel.json                # SPA rewrites: all routes -> /
└── package.json
```

---

## How to Run

**Prerequisites:** Node.js 18+ (recommended 20+ for Next.js 16).

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd coffeeshop-ui-2
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) (or the URL shown in the terminal).

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Run production build locally:**

   ```bash
   npm run start
   ```

5. **Lint the codebase:**

   ```bash
   npm run lint
   ```

---

## Environment Variables

**This project does not require any environment variables to run.** There is no `.env` file in the repository, and the app works out of the box with default configuration.

If you later add features that need configuration (e.g. analytics, feature flags), you can optionally create a `.env.local` file in the project root (this file is typically gitignored). Example:

```bash
# Optional – not used by the current codebase
# NEXT_PUBLIC_SITE_URL=https://coffeeshop-ui-2.vercel.app
```

Next.js automatically loads `.env.local` in development and in production on Vercel when you set variables in the project dashboard. For this educational landing page, no env vars are required.

---

## Routes & API

- **Routes:** The app has a single route: **`/`** (home). All sections (Navbar, Hero, Services, Banner, AppStore, Testimonials, Footer) are rendered on this page. `vercel.json` rewrites every path to `/` so that refreshing on any URL still serves the app (SPA-style behaviour on Vercel).

- **API / Backend:** There is **no API or backend**. Data is imported from `src/data/*.ts` and `src/lib/constants.ts`. The Testimonials section uses external image URLs (e.g. `https://picsum.photos/...`), which are allowed via `next.config.mjs` `images.remotePatterns`.

---

## Components Walkthrough

### Navbar (`src/components/Navbar/Navbar.tsx`)

- **Purpose:** Top bar with logo (Next.js `Image`), navigation links, and an “Order” button with icon.
- **Data:** Uses `navMenuItems` from `@/data/menu` and `ASSETS.logo` from `@/lib/constants`.
- **Learning:** Mapping over an array to render links, semantic markup, `data-aos` for animation.

### Hero (`src/components/Hero/Hero.tsx`)

- **Purpose:** Main headline (“We serve the richest Coffee in the city”), CTA button, and hero image with decorative badges (“Hey Coder”, “Best Coffee”).
- **Learning:** Grid layout, gradient text, AOS attributes, Next.js `Image` with `spin` animation.

### Services (`src/components/Services/Services.tsx`)

- **Purpose:** Grid of coffee cards (Espresso, Americano, Cappuccino) with image, title, and description.
- **Data:** `servicesData` from `@/data/services`.
- **Learning:** `.map()` with `key`, hover states, staggered AOS delays per card.

### Banner (`src/components/Banner/Banner.tsx`)

- **Purpose:** “Premium Blend Coffee” section with image, feature list (icons + labels), and a “Tea Lover” sidebar.
- **Learning:** Inline styles for background image, grid layout, react-icons (GrSecure, IoFastFood, GiFoodTruck).

### AppStore (`src/components/AppStore/AppStore.tsx`)

- **Purpose:** Promo strip for “Cloud Café is available for Android and IOS” with Play Store and App Store badge images.
- **Data:** `ASSETS` for background and badge URLs.
- **Learning:** Responsive image sizing, background image from constants.

### Testimonials (`src/components/Testimonials/Testimonials.tsx`)

- **Purpose:** Carousel of customer reviews (avatar, quote, name) using `react-slick`.
- **Data:** `testimonialData` from `@/data/testimonials` (includes external picsum.photos images).
- **Learning:** Third-party slider, responsive breakpoints in settings, Next.js `Image` with `remotePatterns`.

### Footer (`src/components/Footer/Footer.tsx`)

- **Purpose:** Company name, tagline, YouTube link, “Important Links” and “Quick Links” (same `footerLinks`), address, and social icons (Instagram, Facebook, LinkedIn).
- **Data:** `footerLinks` from `@/data/footer`, `ASSETS.footerBg` for background.
- **Learning:** Reusing the same data array in two lists, external links with `rel="noreferrer"`, aria-labels on icon links.

---

## Data, Types & Lib

- **`src/types/index.ts`** – Shared TypeScript interfaces: `NavMenuItem`, `ServiceItem`, `TestimonialItem`, `FooterLinkItem`. Used by data files and components for type safety.

- **`src/data/menu.ts`** – Exports `navMenuItems` (id, name, link) for the Navbar.

- **`src/data/services.ts`** – Exports `servicesData` (id, img, name, description, aosDelay) for the Services section.

- **`src/data/testimonials.ts`** – Exports `testimonialData` (id, name, text, img) for the Testimonials carousel.

- **`src/data/footer.ts`** – Exports `footerLinks` (title, link) for Footer link columns.

- **`src/lib/constants.ts`** – Exports `ASSETS` object with paths for logo, hero image, banner, app store assets, and footer background. Centralises asset URLs so components stay DRY.

---

## How to Reuse Components

Each component is self-contained and can be copied into another Next.js or React project.

1. **Copy the component folder** (e.g. `Navbar/Navbar.tsx`) and ensure any imports use the same structure or adjust paths (e.g. `@/data/menu` → your data source).

2. **Satisfy dependencies:** Install `next`, `react`, `react-dom`, `react-icons` (and for Testimonials: `react-slick`, `slick-carousel`). For AOS animations, install `aos` and import `aos/dist/aos.css` where AOS is initialised.

3. **Provide data:** Either keep the same data files (`menu`, `services`, `testimonials`, `footer`) and `lib/constants`, or replace them with your own data and types.

4. **Styling:** Components use Tailwind classes and theme tokens (e.g. `primary`, `secondary`, `font-cursive`). Copy the relevant parts of `tailwind.config.js` (theme.extend) and `globals.css` (e.g. `.spin`) into your project so styles match.

5. **Example – using Hero in another page:**

   ```tsx
   import { Hero } from "@/components/Hero/Hero";

   export default function MyPage() {
     return (
       <div>
         <Hero />
         {/* other content */}
       </div>
     );
   }
   ```

To add a new service card, edit `src/data/services.ts` and append an object that matches `ServiceItem`; the Services component will render it automatically.

---

## Libraries & Dependencies

| Package                                                                         | Role                                                                   |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **next**                                                                        | Framework: App Router, SSR/SSG, Image, metadata.                       |
| **react**, **react-dom**                                                        | UI and DOM rendering.                                                  |
| **aos**                                                                         | Animate On Scroll: `AOS.init()` in `page.tsx`, `data-aos` on elements. |
| **react-slick**, **slick-carousel**                                             | Carousel for Testimonials; include slick CSS in layout.                |
| **react-icons**                                                                 | Icon set (Fa*, Gr*, Io*, Gi*); tree-shaken by import path.             |
| **tailwindcss**                                                                 | Utility CSS; config in `tailwind.config.js`.                           |
| **typescript**                                                                  | Type checking; path alias `@/*` in `tsconfig.json`.                    |
| **eslint**, **eslint-config-next**                                              | Linting; flat config in `eslint.config.mjs`.                           |
| **@types/react**, **@types/react-dom**, **@types/react-slick**, **@types/node** | TypeScript definitions.                                                |

---

## Customization & Theming

- **Colors & fonts:** Edit `tailwind.config.js` → `theme.extend.colors` (e.g. `primary`, `secondary`, `brandDark`) and `theme.extend.fontFamily` (e.g. `cursive`, `cursive2`).

- **Animations:** AOS is configured in `src/app/page.tsx` (`AOS.init({ offset, duration, easing, delay })`). Change values or add `data-aos` / `data-aos-delay` on components. The `.spin` class is defined in `src/app/globals.css`.

- **Dark mode:** The layout uses `dark:bg-gray-900 dark:text-white`. Toggle dark mode by adding or removing the `dark` class on `<html>` or `<body>` (e.g. via a theme provider or script).

- **Content:** Update copy and links in `src/data/*.ts` and metadata in `src/app/layout.tsx` (title, description, Open Graph, canonical URL).

---

## Keywords

Coffee, cafe, espresso, americano, cappuccino, coffee shop, coffee beans, barista, landing page, Next.js, TypeScript, Tailwind CSS, React, SPA, AOS, animation, responsive, component, UI, template, frontend, learning, open source.

---

## Conclusion

This project is a complete, production-style coffee shop landing page built with Next.js 16, TypeScript, and Tailwind CSS. It has no backend or environment requirements, making it easy to run and deploy (e.g. on Vercel). Use it to learn component composition, data-driven UI, SEO metadata, and responsive design, or as a base for your own site. Contributions and feedback are welcome.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
