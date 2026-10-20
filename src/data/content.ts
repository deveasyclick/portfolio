// Shared content for both designs. Career facts come from the resume; additional
// independent projects are verified against public GitHub READMEs and metadata.
export const profile = {
  name: "Yusuf Adeniyi",
  photo: "/images/yusuf-adeniyi.png",
  role: "Senior Full-Stack Engineer",
  email: "ydeniyi@gmail.com",
  github: "https://github.com/deveasyclick",
  linkedin: "https://www.linkedin.com/in/yusuf-adeniyi/",
  resume: "/resume/Yusuf_Adeniyi_Resume.pdf",
  productIntro:
    "I’m Yusuf. I build reliable products across the stack, with a focus on backend architecture, payments, and the systems behind a great user experience.",
  editorialIntro:
    "I’m Yusuf Adeniyi, a senior full-stack engineer with 7+ years of experience turning product ideas into dependable production systems.",
  about:
    "I’m Yusuf Adeniyi, a senior full-stack engineer based in Nigeria. I’ve spent 7+ years building products across payments, commerce, and video, working on both the interfaces people use and the systems behind them.",
  aboutDetails:
    "I work with Go, Node.js, TypeScript, and React, with a focus on APIs, payment systems, and background processing. At Goodkind, I was the first engineering hire and helped take the product from MVP to acquisition.",
  education:
    "B.Tech, Computer Science · Federal University of Technology, Akure · 2015–2020",
  skills: [
    "TypeScript",
    "Go",
    "Node.js",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "AWS",
  ],
};

export const career = [
  {
    company: "Elite Africa",
    role: "Senior Software Engineer",
    period: "Aug 2025 – Present",
    start: "2025-08",
    end: null,
    category: "Payments & reliability",
    title: "Making every payment count.",
    summary:
      "Built a multi-provider billing engine with smart fallback and a crypto-to-Naira off-ramp, with PostgreSQL and BullMQ payment tracking at the core.",
    achievements: [
      "Reduced failed payments by 20% with smart provider fallback.",
      "Achieved a 99% transaction success rate on the crypto-to-Naira off-ramp; improved payment tracking reliability by 40%.",
      "Built referral and rewards systems that increased user acquisition by 25%, and integrated chat support that reduced response time by 30%.",
    ],
    metrics: [
      { value: "99%", label: "Off-ramp transaction success" },
      { value: "20%", label: "Fewer failed payments" },
    ],
    stack: ["PostgreSQL", "BullMQ", "Payment systems"],
  },
  {
    company: "Tilvio",
    role: "Senior Software Engineer",
    period: "Jan 2025 – Jul 2025",
    start: "2025-01",
    end: "2025-07",
    category: "Commerce & operations",
    title: "Less waiting. More moving.",
    summary:
      "Built high-throughput Go and Node.js APIs for large-volume order submissions, alongside React and TypeScript dashboards for real-time order and fulfillment management.",
    achievements: [
      "Built high-throughput Go and Node.js APIs supporting large-volume order submissions.",
      "Developed React and TypeScript dashboards for real-time order and fulfillment management.",
      "Improved API response times by 30% through SQL optimization and Redis-backed caching.",
    ],
    metrics: [{ value: "30%", label: "Faster API responses" }],
    stack: ["Go", "Node.js", "React", "Redis"],
  },
  {
    company: "Goodkind",
    role: "Senior Software Engineer",
    period: "Feb 2022 – Jan 2025",
    start: "2022-02",
    end: "2025-01",
    category: "Video & product growth",
    title: "From the first hire to acquisition.",
    summary:
      "As the first engineering hire, helped scale the product from MVP to acquisition. Built personalized video delivery and a caption-editing tool used by 100,000+ users.",
    achievements: [
      "Helped scale the product from MVP to acquisition as the first engineering hire.",
      "Built personalized video delivery that increased revenue by 10%; shipped a caption-editing tool used by 100,000+ users, reducing caption errors by 50%.",
      "Migrated video infrastructure from Cloudinary to Mux while maintaining production reliability and reducing infrastructure costs.",
    ],
    metrics: [
      { value: "100k+", label: "Caption-tool users" },
      { value: "50%", label: "Fewer caption errors" },
    ],
    stack: ["Video infrastructure", "Cloudinary", "Mux"],
  },
  {
    company: "TradeDepot",
    role: "Software Engineer",
    period: "Jul 2021 – Feb 2022",
    start: "2021-07",
    end: "2022-02",
    achievements: [
      "Built and maintained Node.js APIs; improved response times by 20% through AWS serverless optimizations.",
      "Reduced retrieval times by 35% through SQL queries and indexing, and built visit tracking for 200+ field agents.",
    ],
  },
  {
    company: "Givemagic",
    role: "Software Engineer",
    period: "Aug 2018 – May 2021",
    start: "2018-08",
    end: "2021-05",
    achievements: [
      "Built and shipped the MVP and made early product and technical decisions across the stack.",
      "Integrated Stripe and Blackbaud payments, increasing revenue by 30%, and implemented personalized URLs that increased conversion by 15%.",
    ],
  },
];

// Display order is intentionally different from the reverse-chronological career.
export const contributions = [career[0], career[2], career[1]];

export const independentProjects = [
  {
    name: "Iwifunni",
    category: "Independent project",
    title: "One platform. Every notification.",
    description:
      "Multi-tenant notification infrastructure for email, SMS, and push delivery using asynchronous queues.",
    stack: ["Go", "Next.js", "TypeScript", "PostgreSQL", "Redis"],
    github: "https://github.com/deveasyclick/iwifunni",
    website: "https://iwifunni.cc",
  },
  {
    name: "BillPay SDK",
    category: "Open source",
    title: "Payments, without the plumbing.",
    description:
      "A unified TypeScript SDK for Interswitch and VTPass with strict types and retry logic, reducing provider integration complexity.",
    stack: ["TypeScript", "Interswitch", "VTPass"],
    github: "https://github.com/deveasyclick/billpay-sdk",
    website: null,
  },
  {
    name: "GitX",
    category: "Independent project",
    title: "A more thoughtful Git workflow.",
    description:
      "An AI-powered command-line Git assistant for generating commit messages, pull request descriptions, and changelogs, with user approval before committing.",
    stack: ["Go", "CLI", "AI"],
    github: "https://github.com/deveasyclick/gitx",
    website: null,
  },
  {
    name: "Feature Flags",
    category: "Independent project",
    title: "Release at your own pace.",
    description:
      "Feature management with environment-specific configuration, user targeting, gradual rollouts, and an audit trail for configuration changes.",
    stack: ["TypeScript", "Next.js", "Hono", "PostgreSQL"],
    github: "https://github.com/deveasyclick/feature-flags",
    website: null,
  },
  {
    name: "Zendo",
    category: "Independent project",
    title: "A closer connection to customers.",
    description:
      "A real-time customer support platform with an embeddable chat widget, an agent dashboard, and persistent conversation history.",
    stack: ["Go", "Next.js", "WebSockets", "PostgreSQL"],
    github: "https://github.com/deveasyclick/zendo",
    website: null,
  },
  {
    name: "OpenB2B",
    category: "Open source",
    title: "Every order, in order.",
    description:
      "A multi-tenant ordering and invoicing platform for small wholesalers, with product management, PDF invoices, and organization-level roles.",
    stack: ["Go", "Chi", "React", "PostgreSQL"],
    github: "https://github.com/deveasyclick/openb2b",
    website: "https://openb2b-web.vercel.app",
  },
  {
    name: "BillPay",
    category: "Independent project",
    title: "Everyday bills, one platform.",
    description:
      "A full-stack bill payment platform for airtime, data, cable TV, and electricity, with provider routing, background retries, and reconciliation.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "BullMQ"],
    github: "https://github.com/deveasyclick/billpay",
    website: "https://billspay.vercel.app",
  },
];

// Keep the curated first row consistent in both designs.
const featuredNames = ["Feature Flags", "GitX", "BillPay SDK"];
export const featuredProjects = featuredNames.flatMap((name) =>
  independentProjects.filter((project) => project.name === name),
);
export const moreProjects = independentProjects.filter(
  (project) => !featuredNames.includes(project.name),
);
