"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/types/portfolio";
import GlowCard from "./GlowCard";
import { Github } from "@/icons/Github";

const imageGradients = [
  "from-blue-600/30 via-cyan-500/20 to-blue-800/30",
  "from-purple-600/30 via-pink-500/20 to-purple-800/30",
  "from-emerald-600/30 via-teal-500/20 to-emerald-800/30",
  "from-orange-600/30 via-rose-500/20 to-orange-800/30",
  "from-violet-600/30 via-indigo-500/20 to-violet-800/30",
  "from-amber-600/30 via-yellow-500/20 to-amber-800/30",
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageGradient = imageGradients[index % imageGradients.length];

  return (
    <GlowCard
      delay={index * 0.1}
      rotate={index % 2 === 0 ? "-2deg" : "2deg"}
      className={`flex flex-col gap-0 p-0 overflow-hidden h-full ${project.color}`}
    >
      {/* Image */}
      <div
        className={`relative w-full h-44 rounded-none shrink-0 bg-linear-to-br ${imageGradient}`}
      >
        {project.image && !imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 384px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id={`grid-${index}`} width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="8" cy="8" r="1" fill="white" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
            </svg>
            <span className="relative text-white/60 text-xs font-medium tracking-wider uppercase">
              {project.title}
            </span>
          </div>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`Visit ${project.title}`}
          />
        )}
        <div className="absolute inset-0 border border-white/10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-6`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>

        <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Spacer pushes GitHub to bottom */}
        <div className="flex-1" />

        {/* Links */}
        <div className="flex items-center justify-between pt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition rounded-lg px-3 py-1.5"
            >
              <ArrowUpRight size={14} />
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition"
            >
              <Github className="w-6 h-6 fill-white" />
            </a>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
