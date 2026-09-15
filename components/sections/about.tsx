import { CatMark } from "@/components/site/cat-mark";

export function About() {
  return (
    <section className="mx-auto w-[min(1280px,calc(100%-1.5rem))] py-24 md:w-[min(1280px,calc(100%-3rem))] md:py-36" id="about">
      <div className="grid gap-12 md:grid-cols-[.45fr_1.55fr] md:gap-20">
        <div className="flex items-start gap-4">
          <CatMark className="w-12 shrink-0 text-mocha" />
          <p className="pt-1 text-xs leading-6 text-muted">A maker at every layer</p>
        </div>
        <div>
          <blockquote className="max-w-5xl font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[.95] tracking-[-.06em]">
            I like the point where an idea stops being a prompt and starts
            <em className="text-mocha"> sensing, proving, moving, or helping.</em>
          </blockquote>
          <div className="mt-12 grid gap-6 text-sm leading-7 text-muted md:grid-cols-2">
            <p>My work lives between the digital and physical: agentic AI, privacy-minded systems, embedded electronics, robotics, and assistive technology.</p>
            <p>I define the problem, learn what the system needs, and build across the stack until the whole thing works—not just the demo.</p>
          </div>
        </div>
      </div>
      <div className="mt-20 grid border-y border-line md:grid-cols-3">
        {[
          ["10+", "complete hardware–software systems"],
          ["2", "engineering degrees in progress"],
          ["’23—now", "learning by making"],
        ].map(([value, label]) => (
          <div className="flex min-h-40 items-end justify-between gap-5 border-line p-5 md:min-h-52 md:border-r md:p-7 last:md:border-r-0" key={value}>
            <strong className="whitespace-nowrap font-serif text-5xl tracking-[-.06em] md:text-7xl">{value}</strong>
            <span className="max-w-32 text-right text-xs leading-5 text-muted">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
