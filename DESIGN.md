# Design System

<!-- impeccable:design-schema 1 -->

## Visual Authority & Reference

- **Inspiration:** Inspired by `portfolio27-theta.vercel.app` (high-craft, dark-mode software engineer showcase).
- **Aesthetic:** Minimalist, high-contrast, engineering-focused dark mode. Deep black canvas, subtle ambient glows, crisp typography, and macOS-style code snippet previews.

## Color Palette

- **Ground (Canvas):** `#000000` (pure black) with secondary dark zinc `#09090b` and `#18181b`.
- **Text Primary:** `#ffffff` (pure white for prominent headings and titles).
- **Text Secondary:** `#a1a1aa` (zinc-400 for descriptions and subheadings).
- **Text Muted:** `#71717a` (zinc-500 for metadata, timestamps, and borders).
- **Accent Primary:** `#3b82f6` (electric blue for brand dots, active link underlines, and hover highlights).
- **Accent Emerald:** `#10b981` (emerald green for operational status, success pills, and live tags).
- **Borders & Rules:** `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)` for cards and dividers.
- **Surface Elevation:** `rgba(24, 24, 27, 0.6)` with `backdrop-filter: blur(12px)`.

## Typography

- **Font Family:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- **Monospace Stack:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`.
- **Scale:**
  - Hero Display: `clamp(3.5rem, 10vw, 8rem)` font-weight `800`, letter-spacing `-0.04em`.
  - Section Headings: `clamp(2.25rem, 5vw, 3.5rem)` font-weight `700`, letter-spacing `-0.03em`.
  - Subheadings & Meta: `0.85rem` to `1rem` tracking `0.15em` uppercase monospace.
  - Body: `1rem` to `1.125rem` line-height `1.7`.

## Components & Topology

1. **Floating Top Navigation:** Fixed top bar with glassmorphism backdrop (`backdrop-blur-md bg-black/75`), logo with accent dot, responsive links, and smooth hover underlines.
2. **Hero Section:** Hero name typography (`Vephito` in white, `Dasai.` in zinc with blue dot), monospace subline with horizontal lines, CTA button with animated arrow, and infinite scrolling tech logo ticker.
3. **Experience Timeline:** Alternating cards with company badge, role, date tag, and detailed bullet points with custom styled markers.
4. **Project Cards:** Dual-column showcase with code editor / terminal window preview (traffic light dots, syntax highlights) alongside project description and tech badges.
5. **Technical Arsenal (Skills):** Categorized glass cards with category icons and interactive skill pills.
6. **Education & Credentials:** Minimalist academic cards with university details, degree, and coursework tags.
7. **Contact & Footer:** Clean call to action with direct mail, resume download, and verified social channels.
