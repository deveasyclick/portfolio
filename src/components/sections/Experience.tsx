"use client";

import { experience } from "@/data/portfolio";
import TimelineCard from "@/components/ui/TimelineCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Career" title="Experience" />
        <div className="relative">
          {/* Central timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-blue-500/20 to-transparent" />
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 blur-xl bg-blue-500/10" />

          <div className="space-y-12 md:space-y-16 relative">
            {experience.map((exp, i) => (
              <div key={exp.company} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-dark z-10" />

                <TimelineCard
                  experience={exp}
                  index={i}
                  side={i % 2 === 0 ? "left" : "right"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
