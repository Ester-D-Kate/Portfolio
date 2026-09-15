# Portfolio Tailwind Component Architecture

## Status

Draft for review

## Goal

Migrate the portfolio from a large handcrafted CSS surface to a production-oriented Tailwind CSS v4 architecture with reusable, accessible UI primitives and clear component boundaries, while preserving the existing coffee, cat, peacefulness visual identity and local Bun/Next.js workflow.

## Constraints

- Preserve Next.js App Router and Bun as the package manager/runtime.
- Keep the site frontend-only and static-export compatible.
- Keep local development on localhost; do not deploy as part of this migration.
- Preserve the existing project data, order, GitHub links, Agentic Engineer terminology, and SVG artwork unless a change is required for componentization.
- Avoid introducing backend state, authentication, a database, or speculative interaction.
- Keep the motion lightweight and respectful of `prefers-reduced-motion`.

## Recommended stack

- Tailwind CSS v4 through the official PostCSS plugin.
- shadcn/ui-style components owned in this repository rather than a remote runtime dependency.
- Radix primitives only where behavior is non-trivial and accessibility-sensitive.
- `class-variance-authority` for typed component variants.
- `clsx` and `tailwind-merge` behind a shared `cn()` utility.
- `lucide-react` for interface icons and directional controls.

This keeps the visual implementation local and editable while avoiding duplicated accessibility logic for interactive primitives.

## Target structure

```text
app/
  globals.css                  Tailwind import, theme tokens, base rules
  layout.tsx                   Metadata and root document
  page.tsx                     Page composition only

components/
  ui/
    badge.tsx                  Status and technology labels
    button.tsx                 Typed action/link variants
    card.tsx                   Surface primitives
    separator.tsx              Semantic visual divider
    sheet.tsx                  Accessible mobile navigation panel
    tooltip.tsx                Accessible icon/utility hints
  site/
    cat-mark.tsx               Shared animated cat mark
    coffee-scene.tsx           Hero illustration composition
    footer.tsx                 Site footer
    header.tsx                 Site header and mobile navigation
    project-card.tsx           Project presentation primitive
    project-group.tsx          Completed/in-progress grouping
    section-heading.tsx        Shared section heading pattern
  sections/
    about.tsx
    capabilities.tsx
    contact.tsx
    hero.tsx
    journey.tsx
    projects.tsx

lib/
  utils.ts                     cn() and small presentation helpers

data/
  portfolio.ts                 Typed portfolio content only

public/
  cat.svg
  moka-pot.svg
  project-icons/*.svg
```

## Component design

### Theme and tokens

`app/globals.css` will become intentionally small. It will import Tailwind, define the coffee palette and typography through Tailwind v4 theme variables, and contain only global resets, document defaults, reduced-motion rules, and the small number of selectors required by SVG masks or animation internals.

The existing colors map to semantic tokens such as `background`, `foreground`, `muted`, `espresso`, `mocha`, `clay`, `sage`, and `line`. Components will consume semantic tokens instead of repeating raw hex values.

### UI primitives

- `Button`: primary, secondary, ghost, and link variants; supports both buttons and anchors.
- `Badge`: status and technology variants with compact mono typography.
- `Card`: shared border, radius, surface, and hover treatment.
- `Separator`: semantic or decorative divider.
- `Sheet`: mobile navigation with focus management and Escape handling.
- `Tooltip`: only for icon-only or ambiguous controls; avoid decorative tooltip noise.

These primitives will be small, typed, and composable. They will not contain portfolio-specific content.

### Site components

- `Header` owns navigation, brand mark, mobile trigger, and the Sheet instance.
- `CatMark` owns the shared SVG mask and hover head-rock animation. The hero, brand, About, footer, and Crack Lane card all use this component.
- `CoffeeScene` owns the moka pot, cup, steam, beans, and cat composition. Its art-specific CSS stays scoped to the component through Tailwind arbitrary properties or a minimal local style block where masks require it.
- `ProjectCard` owns status, icon, title, description, technologies, and repository link.
- `ProjectGroup` owns the heading and responsive card grid for completed and in-progress projects.

### Sections

Sections become mostly declarative compositions of UI and site components. They should not contain large blocks of styling logic or duplicate navigation/card markup.

## Migration sequence

1. Add the Tailwind v4 PostCSS integration and utility dependencies with Bun.
2. Add `lib/utils.ts`, theme tokens, and the first UI primitives.
3. Extract header/footer/navigation into `components/site` and add accessible mobile navigation.
4. Extract the project card/group system and migrate project data consumers.
5. Convert the remaining sections to Tailwind classes and shared primitives.
6. Move only essential global rules and art-specific masks/animations into the reduced `globals.css`.
7. Remove obsolete selectors and verify there are no stale CSS-only component rules.
8. Run lint, production build, static export validation, and localhost visual checks at desktop and mobile widths.

## Accessibility and interaction

- Preserve visible focus rings and keyboard navigation.
- Mobile navigation uses an accessible Sheet with a labelled trigger and Escape-to-close.
- Repository links keep clear accessible names and open in a new tab with `rel="noreferrer"`.
- Decorative SVGs remain hidden from assistive technology.
- Cat motion and scene animation stop or reduce under `prefers-reduced-motion`.
- The site remains usable without hover, pointer precision, or JavaScript-dependent navigation.

## Verification criteria

- `bun run lint` exits successfully.
- `bun run build` exits successfully and retains static export output.
- No database, API, backend, or deployment files are introduced.
- No `GenAI`, `Generative AI`, or `Identic` terminology remains in portfolio-facing content; the title remains Agentic Engineer.
- All seven project cards render in the expected order and point to the verified repositories.
- Desktop and mobile previews show the same visual identity without horizontal overflow.
- Header navigation works with keyboard and touch; mobile Sheet opens and closes correctly.
- All cat marks use the shared component and retain the subtle continuous hover head-rock behavior.

## Out of scope

- Backend, authentication, CMS, database, analytics, or contact-form submission.
- Deployment or hosting changes.
- Replacing the custom coffee/cat artwork with a third-party template.
- Adding a component catalog that is not used by the portfolio.
