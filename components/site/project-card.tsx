import type { CSSProperties } from "react";
import { AudioWaveform } from "lucide-react";
import { Arrow } from "./section-heading";
import { CatMark } from "./cat-mark";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Project, ProjectIcon } from "@/data/portfolio";

const toneClasses: Record<string, string> = {
  cream: "bg-[#f5efe3] text-espresso",
  sage: "bg-[#dbe2d2] text-espresso",
  sand: "bg-[#ead8ba] text-espresso",
  clay: "bg-[#e7b79d] text-espresso",
  moss: "bg-[#cdd4bb] text-espresso",
  blue: "bg-[#c9d7db] text-espresso",
  rose: "bg-[#e5c4bd] text-espresso",
};

const iconPaths: Record<Exclude<ProjectIcon, "cat" | "audio">, string> = {
  eye: "/project-icons/eye.svg",
  "hand-pointer": "/project-icons/hand-pointer.svg",
  robot: "/project-icons/robot.svg",
  microchip: "/project-icons/microchip.svg",
  recycle: "/project-icons/recycle.svg",
  "heart-pulse": "/project-icons/heart-pulse.svg",
};

function ProjectIconMark({ icon }: { icon: ProjectIcon }) {
  if (icon === "cat") {
    return (
      <CatMark
        className="relative w-24 text-mocha transition duration-500 group-hover:rotate-3"
      />
    );
  }

  if (icon === "audio") {
    return (
      <AudioWaveform
        className="relative size-16 text-mocha transition duration-500 group-hover:scale-110"
        aria-hidden="true"
      />
    );
  }

  const iconStyle: CSSProperties = {
    maskImage: `url(${iconPaths[icon]})`,
    WebkitMaskImage: `url(${iconPaths[icon]})`,
  };

  return (
    <span
      className="relative block size-16 bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
      style={iconStyle}
      aria-hidden="true"
    />
  );
}

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Card
      className={
        "group relative overflow-hidden rounded-[2rem] border-line p-0 shadow-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(49,34,29,.12)] " +
        (toneClasses[project.tone] ?? toneClasses.cream) +
        (featured ? " md:col-span-2" : "")
      }
    >
      <CardHeader className="gap-8 p-6 md:p-8">
        <div className="flex items-center justify-between gap-4 text-[.65rem] font-bold uppercase tracking-[.13em] text-mocha">
          <span>{project.number}</span>
          <Badge variant="status">{project.status}</Badge>
          <span className="ml-auto text-right">{project.type}</span>
        </div>
        <div className="relative flex min-h-28 items-center justify-center">
          <span className="absolute size-24 rounded-full border border-current/20 transition duration-500 group-hover:scale-110" />
          <ProjectIconMark icon={project.icon} />
        </div>
        <div>
          <h3 className="font-serif text-4xl leading-none tracking-[-.05em] md:text-5xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            {project.description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-7 md:px-8">
        <ul className="flex flex-wrap gap-2" aria-label={project.name + " technologies"}>
          {project.stack.map((item) => (
            <li
              className="rounded-full border border-current/15 px-3 py-1.5 font-mono text-[.65rem] uppercase tracking-[.08em] text-mocha"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-between gap-4 border-t border-current/10 px-6 py-5 md:px-8">
        <span className="text-xs font-semibold text-muted">
          {project.source === "release" ? "Release build" : "Open source build"}
        </span>
        <div className="flex flex-wrap items-center justify-end gap-4">
          <a
            className="inline-flex items-center gap-2 text-xs font-bold text-mocha transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Open " + project.name + " on GitHub"}
          >
            Repository <Arrow />
          </a>
          {project.liveHref ? (
            <a
              className="inline-flex items-center gap-2 text-xs font-bold text-mocha transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={"Open the live " + project.name + " site"}
            >
              Live site <Arrow />
            </a>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
