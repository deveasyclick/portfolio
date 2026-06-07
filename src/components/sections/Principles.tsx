"use client";

import { ShieldCheck, TrendingUp, Code2, UserCog } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    icon: ShieldCheck,
    title: "Reliability First",
    description:
      "Systems that don't break. Redundancy, monitoring, and rigorous testing at every layer.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description:
      "Code that moves metrics. Every line should tie back to user value or revenue.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Code2,
    title: "Simplicity Wins",
    description:
      "Clear over clever. Readable, maintainable code that the next engineer can pick up fast.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: UserCog,
    title: "Ownership",
    description:
      "End-to-end responsibility. From spec to production to post-mortem — I own it.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function Principles() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Philosophy"
          title="Engineering Principles"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
            >
              <div
                className={`p-3 rounded-xl ${principle.bg} ${principle.color} w-fit`}
              >
                <principle.icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
