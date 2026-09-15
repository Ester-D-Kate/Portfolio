import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";

const timeline = [
  ["Dec ’25 — May ’26", "Software Development Intern", "Autonomic Solutions Inc.", "Agentic Engineering & Backend", "Built a multi-tenant RAG-as-a-Service platform with agentic orchestration, dynamic and main agents, and multiple connectors."],
  ["Jun — Aug ’25", "Research Intern", "IIT Kanpur", "HCI, Robotics & Assistive Technology", "Developed wearable and remote eye tracking, an eye-controlled TurtleBot interface for ICU patients, and a spherical Ball Bot proof of concept."],
  ["2024 — 2028", "BS · Electronics & Systems", "IIT Madras", "Building the systems foundation", ""],
  ["2023 — 2027", "BTech · Electronics & Communication", "Guru Nanak Dev University", "Where the making started", ""],
];

export function Journey() {
  return (
    <>
      <section className="mx-auto w-[min(1280px,calc(100%-1.5rem))] py-24 md:w-[min(1280px,calc(100%-3rem))] md:py-36" id="experience">
        <SectionHeading
          eyebrow="The journey · 03"
          title="Learning in public."
          copy="Research, production software, two degrees, and a lot of workbench experiments."
        />
        <div className="divide-y divide-line border-y border-line">
          {timeline.map(([date, role, place, detail, description]) => (
            <article className="grid gap-5 py-8 md:grid-cols-[.32fr_1fr_1fr] md:gap-8" key={date}>
              <p className="font-mono text-xs uppercase tracking-[.1em] text-mocha">{date}</p>
              <div>
                <p className="text-sm text-muted">{role}</p>
                <h3 className="mt-2 font-serif text-3xl tracking-[-.04em]">{place}</h3>
              </div>
              <div>
                <p className="text-sm font-semibold">{detail}</p>
                {description ? <p className="mt-3 max-w-md text-sm leading-7 text-muted">{description}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-espresso py-24 text-paper-light md:py-32">
        <div className="mx-auto grid w-[min(1280px,calc(100%-1.5rem))] gap-14 md:w-[min(1280px,calc(100%-3rem))] md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.13em] text-clay">Small victories</p>
            <h2 className="mt-5 font-serif text-6xl leading-[.86] tracking-[-.06em] md:text-8xl">Built, broken,<br /><em className="text-clay">awarded.</em></h2>
          </div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {achievements.map((achievement, index) => (
              <div className="flex items-center justify-between py-4 text-sm" key={achievement}>
                <span className="font-mono text-xs text-clay">0{index + 1}</span>
                <strong>{achievement}</strong>
                <i aria-hidden="true" className="text-clay">✦</i>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
