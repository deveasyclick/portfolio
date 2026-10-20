"use client";

import { useId, useState } from "react";
import { Braces, Flag, GitBranch, Boxes, ChevronDown } from "lucide-react";
import { featuredProjects, moreProjects } from "@/data/content";
import { Arrow, Tags, MoreProjectsLink } from "./Shared";

type Project = (typeof featuredProjects)[number];

function ProjectCard({
  project,
  editorial,
}: {
  project: Project;
  editorial: boolean;
}) {
  const Icon =
    project.name === "Feature Flags"
      ? Flag
      : project.name === "GitX"
        ? GitBranch
        : project.name === "BillPay SDK"
          ? Braces
          : Boxes;
  return (
    <article className={editorial ? "editorial-project" : "independent-card"}>
      {!editorial && (
        <div className="project-symbol" aria-hidden="true">
          <Icon size={26} strokeWidth={1.5} />
        </div>
      )}
      <p className="eyebrow">{project.category}</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <Tags items={project.stack} />
      <div className="project-links">
        {project.website && (
          <a href={project.website}>
            Visit project <Arrow />
          </a>
        )}
        <a href={project.github}>
          View source <span className="sr-only">for {project.name}</span>
          <Arrow />
        </a>
      </div>
    </article>
  );
}

export default function ProjectCollection({
  editorial = false,
}: {
  editorial?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const moreId = useId();
  const gridClass = editorial ? "editorial-project-grid" : "project-grid";
  return (
    <>
      <div className={gridClass}>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            editorial={editorial}
          />
        ))}
      </div>
      <div id={moreId} hidden={!expanded} className="extra-projects">
        <div className={gridClass}>
          {moreProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              editorial={editorial}
            />
          ))}
        </div>
      </div>
      <div className="project-discovery">
        <button
          type="button"
          className="view-projects"
          aria-expanded={expanded}
          aria-controls={moreId}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "View fewer projects" : "View more projects"}
          <ChevronDown size={16} aria-hidden="true" />
        </button>
        <MoreProjectsLink />
      </div>
    </>
  );
}
