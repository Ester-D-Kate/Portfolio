import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";

export function Capabilities() {
  const ticker = ["FastAPI", "ESP32", "RAG", "OpenCV", "ROS", "TypeScript", "MQTT", "Circuits"];
  return (
    <section className="mx-auto w-[min(1760px,calc(100%-1.5rem))] py-24 md:w-[min(1760px,calc(100%-3rem))] md:py-36" id="capabilities">
      <SectionHeading
        eyebrow="What I work with · 02"
        title="Across the whole machine."
        copy="The interesting problems rarely stay inside one discipline. Neither do I."
        titleClassName="max-w-[36rem]"
        copyClassName="max-w-[26rem]"
      />
      <div className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article className="bg-background p-6 md:p-8" key={group.title}>
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-mocha">0{index + 1}</span>
              <span className="text-right text-xs text-muted">{group.note}</span>
            </div>
            <h3 className="mt-16 font-serif text-4xl tracking-[-.05em]">{group.title}</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  className="rounded-full border border-line px-3 py-2 text-xs text-muted"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-y border-line py-5 font-mono text-xs uppercase tracking-[.12em] text-mocha" aria-label="Selected technologies">
        {ticker.map((item) => (
          <span className="inline-flex items-center gap-6" key={item}>
            {item}
            <i aria-hidden="true">✦</i>
          </span>
        ))}
      </div>
    </section>
  );
}
