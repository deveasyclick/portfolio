import type { LucideIcon } from "lucide-react";
import GlowCard from "./GlowCard";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  index: number;
}

export default function SkillCard({
  icon: Icon,
  title,
  skills,
  index,
}: SkillCardProps) {
  return (
    <GlowCard delay={index * 0.1}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="badge">
            {skill}
          </span>
        ))}
      </div>
    </GlowCard>
  );
}
