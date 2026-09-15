# Tailwind Component Architecture Implementation Plan

> For agentic workers: REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

Goal: Replace the portfolio's large CSS-only styling surface with Tailwind CSS v4, reusable owned UI primitives, accessible interaction primitives, and focused site components without changing the portfolio's visual identity or content.

Architecture: Tailwind v4 provides the utility layer and semantic theme tokens. Small shadcn/ui-style primitives in components/ui provide typed variants and composability, while Radix handles focus and keyboard behavior for mobile navigation and tooltips. Site-specific components in components/site and components/sections own composition; data/portfolio.ts remains content-only.

Tech Stack: Next.js 16 App Router, React 19, TypeScript, Bun, Tailwind CSS v4, PostCSS, class-variance-authority, clsx, tailwind-merge, Radix Dialog/Tooltip primitives, Lucide React icons.

Spec: docs/superpowers/specs/2026-09-15-tailwind-component-architecture-design.md

## Global Constraints

- Preserve Next.js App Router and Bun as the package manager/runtime.
- Keep the site frontend-only and static-export compatible.
- Keep local development on localhost; do not deploy as part of this migration.
- Preserve the existing project data, order, GitHub links, Agentic Engineer terminology, and SVG artwork unless a change is required for componentization.
- Avoid introducing backend state, authentication, a database, or speculative interaction.
- Keep the motion lightweight and respectful of prefers-reduced-motion.
- bun run lint and bun run build must pass before completion.

---

### Task 1: Add Tailwind v4 foundations and utility helpers

Files:
- Create: postcss.config.mjs
- Create: lib/utils.ts
- Modify: package.json and bun.lock
- Modify: app/globals.css
- Modify: tsconfig.json only if the existing @/* alias is missing

Interfaces:
- Produces cn(...inputs: ClassValue[]): string from lib/utils.ts for every UI and site component.
- Produces semantic Tailwind tokens for background, foreground, muted, espresso, mocha, clay, sage, rose, and line.

- [ ] Step 1: Add dependencies with Bun

Run:

    bun add tailwindcss @tailwindcss/postcss class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-dialog @radix-ui/react-tooltip

Expected: package.json and bun.lock contain the dependencies and no pnpm/npm package-manager metadata is added.

- [ ] Step 2: Configure PostCSS

Create postcss.config.mjs with the @tailwindcss/postcss plugin.

- [ ] Step 3: Add the class-merging helper

Create lib/utils.ts with a cn helper that combines clsx and tailwind-merge.

- [ ] Step 4: Replace the stylesheet entry with Tailwind tokens

Import Tailwind, define the coffee palette through @theme inline, and preserve only document reset and reduced-motion rules until sections migrate.

- [ ] Step 5: Verify the foundation

Run bun run lint and bun run build. Both must exit 0.

---

### Task 2: Build owned UI primitives

Files:
- Create: components/ui/button.tsx
- Create: components/ui/badge.tsx
- Create: components/ui/card.tsx
- Create: components/ui/separator.tsx
- Create: components/ui/sheet.tsx
- Create: components/ui/tooltip.tsx

Interfaces:
- Button exports buttonVariants and supports variant, size, and typed anchor/button usage.
- Badge supports default, outline, and status variants.
- Card exports Card, CardHeader, CardContent, CardFooter, and CardTitle.
- Sheet exports Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, and SheetClose.
- Tooltip exports Tooltip, TooltipTrigger, TooltipContent, and TooltipProvider.

- [ ] Step 1: Implement Button with class-variance-authority, cn, visible focus rings, and primary/secondary/ghost/link variants.
- [ ] Step 2: Implement Badge and Separator as semantic, composable primitives.
- [ ] Step 3: Implement Card slots with shared surface, border, radius, and transition classes.
- [ ] Step 4: Wrap Radix Dialog and Tooltip with accessible Sheet and Tooltip APIs.
- [ ] Step 5: Run bun run lint and bunx tsc --noEmit. Both must exit 0.

---

### Task 3: Extract shared site chrome and cat behavior

Files:
- Create: components/site/cat-mark.tsx
- Create: components/site/header.tsx
- Create: components/site/footer.tsx
- Create: components/site/section-heading.tsx
- Modify: app/page.tsx and app/globals.css
- Delete after migration: components/SiteChrome.tsx

Interfaces:
- CatMark({ className?: string, interactive?: boolean }): JSX.Element renders the shared mask and head-rock animation.
- SiteHeader(): JSX.Element renders desktop links and a mobile Sheet menu.
- SiteFooter(): JSX.Element renders the footer brand and links.
- SectionHeading({ eyebrow, title, copy }): JSX.Element preserves the existing heading contract.

- [ ] Step 1: Replace text arrow glyphs with Lucide ArrowUpRight.
- [ ] Step 2: Extract CatMark with shared body/head layers and reduced-motion handling.
- [ ] Step 3: Extract the header and add a labelled mobile Sheet menu with Escape-to-close and link-close behavior.
- [ ] Step 4: Extract footer and section heading components.
- [ ] Step 5: Update page imports and run bun run lint and bun run build.

---

### Task 4: Convert hero artwork and layout

Files:
- Create: components/site/coffee-scene.tsx
- Create: components/sections/hero.tsx
- Modify: app/globals.css
- Delete after migration: components/CoffeeScene.tsx and components/Hero.tsx

Interfaces:
- CoffeeScene(): JSX.Element preserves the moka pot, cup, cat, beans, steam, note, and accessible label.
- Hero(): JSX.Element preserves Agentic Engineer copy and GitHub CTA.

- [ ] Step 1: Move the scene into components/site/coffee-scene.tsx and convert layout/sizing to Tailwind utilities.
- [ ] Step 2: Keep only SVG mask geometry and keyframes in a labelled art section of app/globals.css.
- [ ] Step 3: Convert hero layout and actions using responsive Tailwind classes and Button.
- [ ] Step 4: Verify artwork layering, bean placement, steam, scene entrance, and reduced-motion behavior in localhost.

---

### Task 5: Build the reusable project card system

Files:
- Create: components/site/project-card.tsx
- Create: components/site/project-group.tsx
- Create: components/sections/projects.tsx
- Modify: data/portfolio.ts only if a presentation-safe field is required
- Delete after migration: components/Projects.tsx

Interfaces:
- ProjectCard({ project, featured? }): JSX.Element consumes the existing Project type.
- ProjectGroup({ label, note, projects, featureFirst? }): JSX.Element renders a heading and responsive card grid.
- Projects(): JSX.Element renders completed and in-progress groups in current order.

- [ ] Step 1: Compose Card, Badge, CatMark, icons, and the repository link in ProjectCard.
- [ ] Step 2: Implement ProjectGroup with responsive Tailwind grid utilities and an explicit featured prop.
- [ ] Step 3: Preserve all seven verified repositories, names, statuses, descriptions, and order.
- [ ] Step 4: Verify all seven repository hrefs and accessible names in a DOM check or browser preview.

---

### Task 6: Convert remaining portfolio sections

Files:
- Create: components/sections/about.tsx
- Create: components/sections/capabilities.tsx
- Create: components/sections/journey.tsx
- Create: components/sections/contact.tsx
- Modify: app/page.tsx
- Delete after migration: components/About.tsx, components/Capabilities.tsx, components/Journey.tsx, components/Contact.tsx

Interfaces:
- Each section exports a zero-argument React component and consumes only typed data or shared UI/site primitives.

- [ ] Step 1: Convert About and stats with CatMark and Tailwind grid utilities; keep ’23—now nowrap.
- [ ] Step 2: Convert Capabilities and ticker using Card and existing skill copy.
- [ ] Step 3: Convert Journey and recognition using semantic timeline markup and Separator.
- [ ] Step 4: Convert Contact using existing email/social destinations and link variants.
- [ ] Step 5: Update page composition and run lint/build.

---

### Task 7: Remove obsolete CSS and complete verification

Files:
- Modify: app/globals.css
- Modify: README.md
- Modify: component imports as required after migration

- [ ] Step 1: Delete obsolete header, card, grid, section, and typography selectors. Keep Tailwind import, theme variables, document base styles, SVG masks, art keyframes, and reduced-motion rules.
- [ ] Step 2: Update README with Bun commands, Tailwind v4, UI primitives, site components, localhost usage, and the frontend-only boundary.
- [ ] Step 3: Run bun run lint, bunx tsc --noEmit, and bun run build. All must exit 0.
- [ ] Step 4: Start bun run dev and verify desktop and 390px mobile widths: no overflow, mobile Sheet behavior, visible focus rings, correct projects/links, aligned ’23—now, cat hover motion, reduced motion, and no console errors.
- [ ] Step 5: Record final status and localhost URL. Do not deploy.
