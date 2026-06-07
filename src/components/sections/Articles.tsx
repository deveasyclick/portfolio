"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const articles = [
  {
    title:
      "Designing for Failure: Building Reliable Crypto-to-Utility Payments with Provider Failover",
    description: "Lessons from building multi-provider bill payment platform",
    platform: "Dev.to",
    href: "https://dev.to/easyclick/designing-for-failure-building-reliable-crypto-to-utility-payments-with-provider-failover-3jck",
  },
  {
    title: "My Git Workflow and Essential Commands",
    description: "",
    platform: "Dev.to",
    href: "https://dev.to/easyclick/my-git-workflow-and-essential-commands-2plj",
  },
];

export default function Articles() {
  return (
    <section id="writing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Writing" title="Articles & Talks" />

        <div className="space-y-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/30 transition"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                <FileText size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold group-hover:text-blue-400 transition">
                    {article.title}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="text-zinc-500 group-hover:text-blue-400 transition shrink-0"
                  />
                </div>
                <p className="mt-1 text-sm text-zinc-400">
                  {article.description}
                </p>
                <span className="inline-block mt-2 text-xs text-zinc-500">
                  {article.platform}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
