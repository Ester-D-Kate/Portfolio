import { completedProjects, incompleteProjects } from "@/data/portfolio";
import { ProjectGroup } from "@/components/site/project-group";
import { Arrow, SectionHeading } from "@/components/site/section-heading";

export function Projects() {
  return (
    <section className="mx-auto w-[min(1280px,calc(100%-1.5rem))] py-24 md:w-[min(1280px,calc(100%-3rem))] md:py-36" id="work">
      <SectionHeading
        eyebrow="Selected work · 01"
        title="Things I’ve made real."
        copy="Completed builds first, followed by active projects with working demos. Every project opens its verified repository on GitHub."
      />
      <ProjectGroup
        label="Completed projects"
        note="Finished systems, ordered from strongest work to earliest build."
        projects={completedProjects}
        featureFirst
      />
      <ProjectGroup
        label="In progress"
        note="Not fully complete yet, but each has a working demo."
        projects={incompleteProjects}
      />
      <a
        className="mt-12 flex items-center justify-between border-b border-line pb-4 text-sm font-bold text-mocha transition hover:border-mocha focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
        href="https://github.com/Ester-D-Kate?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>There’s more in the workshop</span>
        <span className="inline-flex items-center gap-2">Browse every repository <Arrow /></span>
      </a>
    </section>
  );
}
