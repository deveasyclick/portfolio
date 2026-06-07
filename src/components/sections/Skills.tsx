import { Server, Database, Globe, Cloud } from "lucide-react";
import SkillCard from "@/components/ui/SkillCard";
import SectionHeading from "@/components/ui/SectionHeading";

const skillCategories = [
  {
    icon: Server,
    title: "Backend",
    skills: ["TypeScript", "Go", "NestJS", "Node.js", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle", "TypeORM"],
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React", "Next.js", "Turborepo", "Tailwind CSS"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Terraform", "Nginx"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Expertise" title="Skills & Technologies" />
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
