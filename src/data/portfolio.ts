import { Experience, Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "BillPay Platform",
    description:
      "Demo Payment platform for airtime, data, electricity and TV bills.",
    stack: ["NestJS", "Next.js", "Postgres", "Redis", "BullMQ", "Jest"],
    image: "/projects/billpay.png",
    color: "bg-blue-900/80",
    link: "https://billspay.vercel.app",
    github: "https://github.com/deveasyclick/billpay",
  },
  {
    title: "BillPay SDK",
    description:
      "Unified bill payment SDK abstracting multiple providers (Interswitch, VTPass).",
    stack: ["TypeScript", "Node.js", "Vitest"],
    image: "/projects/sdk.png",
    color: "bg-green-900/80",
    link: "https://github.com/deveasyclick/billpay-sdk",
    github: "https://github.com/deveasyclick/billpay-sdk",
  },
];

export const experience: Experience[] = [
  {
    company: "Elite Africa",
    role: "Senior Software Engineer",
    period: "Aug 2025 - Present",
    achievements: [
      "Referral system increased acquisition by 25%",
      "Built crypto off-ramp",
      "99% payment success rate",
      "Multi-provider billing engine",
    ],
  },
  {
    company: "Tilvio",
    role: "Senior Software Engineer",
    period: "Jan 2025 - Jul 2025",
    achievements: [
      "High throughput APIs",
      "Redis caching",
      "30% faster API responses",
    ],
  },
  {
    company: "Goodkind",
    role: "Senior Software Engineer",
    period: "Feb 2022 - Jan 2025",
    achievements: [
      "First engineering hire",
      "MVP to acquisition",
      "100K+ users",
    ],
  },
];
