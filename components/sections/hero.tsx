import { Arrow } from "@/components/site/section-heading";
import { CoffeeScene } from "@/components/site/coffee-scene";
import { TermDefinition } from "@/components/site/term-definition";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[min(900px,100svh)] w-[min(1280px,calc(100%-1.5rem))] items-center gap-10 pb-20 pt-36 md:w-[min(1280px,calc(100%-3rem))] md:grid-cols-[.9fr_1.1fr] md:grid-rows-[1fr_auto] md:pb-12 md:pt-28" id="top">
      <div className="relative z-10 max-w-xl">
        <p className="mb-7 font-mono text-[.68rem] font-bold uppercase tracking-[.13em] text-mocha">
          <TermDefinition
            align="left"
            definition="Designing systems that can plan, use tools, and act toward a goal."
            term="Agentic Engineering"
          />
          <span aria-hidden="true"> · </span>
          <TermDefinition
            definition="Starting without a complete map, then learning by building, testing, and understanding each layer."
            term="Zero-Knowledge (ZK)"
          />
          <span aria-hidden="true"> · </span>
          <TermDefinition
            align="right"
            definition="The physical layer: circuits, sensors, embedded boards, and robots."
            term="Hardware"
          />
        </p>
        <h1 className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[.86] tracking-[-.075em]">
          I build intelligence
          <br />
          <em className="text-mocha">you can touch.</em>
        </h1>
        <p className="mt-8 max-w-lg text-base leading-8 text-muted md:text-lg">
          I&apos;m Arunya—an Agentic Engineer and Zero-Knowledge (ZK) Engineer
          who moves freely between agents, protocols, circuits, and robots.
          Complex systems, brewed with patience.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
          Here, zero knowledge is a way of working: I start without a complete
          map, learn each process by building it, and let every working layer
          teach the next.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Button asChild>
            <a href="#work">See selected work <span aria-hidden="true">↓</span></a>
          </Button>
          <a
            className="inline-flex items-center gap-2 text-sm font-bold text-mocha transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
            href="https://github.com/Ester-D-Kate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit GitHub <Arrow />
          </a>
        </div>
      </div>
      <CoffeeScene />
      <div className="hidden items-end justify-between gap-6 border-t border-line pt-4 pr-4 text-[.68rem] font-bold uppercase tracking-[.11em] text-muted md:col-span-2 md:flex">
        <p className="shrink-0">Based in Amritsar, India<br />Building everywhere.</p>
        <p className="flex min-w-0 items-center justify-end gap-2 text-right leading-5">
          <span className="size-2 shrink-0 rounded-full bg-sage" />
          <span>Open to ambitious experiments</span>
        </p>
      </div>
    </section>
  );
}
