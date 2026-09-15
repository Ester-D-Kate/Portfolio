import { Arrow } from "@/components/site/section-heading";
import { CoffeeScene } from "@/components/site/coffee-scene";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[min(900px,100svh)] w-[min(1280px,calc(100%-1.5rem))] items-center gap-10 pb-20 pt-36 md:w-[min(1280px,calc(100%-3rem))] md:grid-cols-[.9fr_1.1fr] md:pb-12 md:pt-28" id="top">
      <div className="relative z-10 max-w-xl">
        <p className="mb-7 font-mono text-[.68rem] font-bold uppercase tracking-[.13em] text-mocha">
          Agentic Engineering · Zero-Knowledge (ZK) · Hardware
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
      <div className="absolute bottom-7 left-0 right-0 hidden items-end justify-between border-t border-line pt-4 text-[.68rem] font-bold uppercase tracking-[.11em] text-muted md:flex">
        <p>Based in Amritsar, India<br />Building everywhere.</p>
        <p className="flex items-center gap-2"><span className="size-2 rounded-full bg-sage" /> Open to ambitious experiments</p>
      </div>
    </section>
  );
}
