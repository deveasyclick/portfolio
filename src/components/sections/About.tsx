"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 p-8 md:p-12 bg-white/5"
        >
          <span className="text-blue-500 uppercase tracking-wider text-sm font-medium">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Builder. Problem Solver. Owner.
          </h2>

          <p className="mt-6 text-zinc-400 max-w-4xl leading-relaxed text-lg">
            Senior engineer with 7+ years building products across fintech,
            ecommerce, creator tools, and payments.
          </p>

          <p className="mt-4 text-zinc-400 max-w-4xl leading-relaxed text-lg">
            I&apos;ve helped scale startups from MVP to acquisition, built
            systems handling real money, and designed APIs powering thousands
            of users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
