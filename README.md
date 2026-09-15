# Arunya Portfolio

A local-first Next.js portfolio for Arunya, an Agentic Engineer and Zero-Knowledge (ZK) Engineer. The visual language is built around coffee, cats, quiet motion, and hands-on systems work.

## Stack

- Next.js 16 App Router
- React 19
- Bun for install, scripts, and local development
- Tailwind CSS v4 through @tailwindcss/postcss
- Small, owned UI primitives inspired by shadcn/ui
- Radix UI Dialog for the accessible mobile navigation sheet
- Lucide React for interface icons
- Static export-compatible configuration

## Run locally

    bun install
    bun run dev

Open http://localhost:3000.

## Build and run with Docker

The production image follows AudioFlow's landing-page pattern: Bun installs and builds the Next.js app, then a small Node runtime serves the generated standalone server.

    docker build --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.example -t arunya-portfolio .
    docker run --rm -p 3000:3000 arunya-portfolio

Open http://localhost:3000 after the container starts.

## Share previews

The site includes Open Graph and Twitter card metadata plus a compressed 1200×800 JPEG social preview image at `public/og.jpg`. Set the public HTTPS URL before deploying so shared links resolve to the correct canonical URL and preview image:

    NEXT_PUBLIC_SITE_URL=https://your-domain.example

The local fallback is `http://localhost:3000`, which is useful for development but should not be used for a public deployment. For a Docker build, pass the public URL as the `NEXT_PUBLIC_SITE_URL` build argument shown above so the prerendered HTML contains public canonical and preview URLs.

## Verify

    bun run lint
    bunx tsc --noEmit
    bun run build

## Source structure

app/
  globals.css             Tailwind theme + art-specific SVG/motion layer
  layout.tsx              Metadata and document shell
  page.tsx                Page composition
Dockerfile                Multi-stage standalone Next.js production image
dockerignore              Local-only files excluded from the image
    components/
      sections/               Hero, projects, about, capabilities, journey, contact
      site/                   Header, footer, cat mark, coffee scene, project cards
      ui/                     Reusable button, card, badge, sheet, tooltip primitives
    data/
      portfolio.ts            Typed project, skill, and achievement data
    lib/
      utils.ts                cn() class composition helper
    public/
      cat.svg                  Lightweight cat mark
      audioflow-brewing-*.svg  Stable moka-pot art copied from AudioFlow
      project-icons/          Project-specific SVG marks

The site stays frontend-only for now. There is no database or backend dependency in the runtime.
