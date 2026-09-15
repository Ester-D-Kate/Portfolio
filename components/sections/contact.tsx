import { Arrow } from "@/components/site/section-heading";

const socialLinks = [
  ["GitHub", "https://github.com/Ester-D-Kate"],
  ["LinkedIn", "https://www.linkedin.com/in/arunya-436bb128a/"],
  ["X / Twitter", "https://x.com/Ester_D_Kate"],
  ["Instagram", "https://www.instagram.com/ester.d.kate/"],
] as const;

export function Contact() {
  return (
    <section className="relative mx-auto w-[min(1280px,calc(100%-1.5rem))] overflow-hidden py-28 md:w-[min(1280px,calc(100%-3rem))] md:py-44" id="contact">
      <div className="absolute right-[8%] top-20 hidden size-48 rounded-full border border-line md:block" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/20" />
      </div>
      <p className="font-mono text-xs uppercase tracking-[.13em] text-mocha">Say hello · 04</p>
      <h2 className="mt-6 max-w-4xl font-serif text-[clamp(3.4rem,8vw,8rem)] leading-[.86] tracking-[-.075em]">
        Have an odd, difficult,
        <br />
        <em className="text-mocha">wonderful</em> idea?
      </h2>
      <p className="mt-10 max-w-xl text-base leading-8 text-muted">
        I&apos;m always happy to talk about intelligent systems, privacy, unusual hardware, useful robots—or the right way to make coffee.
      </p>
      <a className="mt-10 inline-flex items-center gap-3 border-b-2 border-mocha pb-3 font-serif text-2xl text-mocha transition hover:gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha" href="mailto:mahajanarunya@gmail.com">
        mahajanarunya@gmail.com <Arrow />
      </a>
      <div className="mt-20 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-5 text-sm font-bold text-mocha">
        {socialLinks.map(([label, href]) => (
          <a
            className="inline-flex items-center gap-2 transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={label}
          >
            {label}
            <Arrow />
          </a>
        ))}
      </div>
    </section>
  );
}
