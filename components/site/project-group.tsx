import type { Project } from "@/data/portfolio";
import { ProjectCard } from "./project-card";

export function ProjectGroup({
  label,
  note,
  projects,
  featureFirst = false,
}: {
  label: string;
  note: string;
  projects: Project[];
  featureFirst?: boolean;
}) {
  return (
    <div className="mt-16">
      <div className="mb-6 flex flex-col gap-2 border-b border-line pb-4 md:flex-row md:items-end md:justify-between">
        <h3 className="font-serif text-3xl tracking-[-.04em]">{label}</h3>
        <p className="max-w-sm text-xs leading-6 text-muted md:text-right">{note}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            featured={featureFirst && index === 0}
          />
        ))}
      </div>
    </div>
  );
}
