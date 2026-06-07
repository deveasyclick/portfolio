"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { type Experience } from "@/types/portfolio";

interface TimelineCardProps {
  experience: Experience;
  index: number;
  side: "left" | "right";
}

export default function TimelineCard({
  experience,
  index,
  side,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`flex w-full md:w-[calc(50%-2rem)] ${
        side === "left" ? "md:ml-0" : "md:ml-auto"
      }`}
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 w-full">
        <div className="flex items-center gap-2 text-blue-500 mb-1">
          <Building2 size={16} />
          <span className="text-sm font-medium">{experience.company}</span>
        </div>
        <h3 className="text-xl font-bold">{experience.role}</h3>
        <div className="flex items-center gap-1.5 text-zinc-400 text-sm mt-1">
          <Calendar size={14} />
          {experience.period}
        </div>
        <ul className="mt-4 space-y-2">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-2 text-sm text-zinc-300"
            >
              <span className="text-blue-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
