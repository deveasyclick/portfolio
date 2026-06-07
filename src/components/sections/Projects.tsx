"use client";

import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Work" title="Featured Projects" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
