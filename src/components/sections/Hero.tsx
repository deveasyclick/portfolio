"use client";

import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 font-medium">Hi, I&apos;m</span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-4 leading-tight">
            YUSUF
            <br />
            <span className="text-blue-500">ADENIYI</span>
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl font-semibold">
            Senior Software Engineer
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
            I build scalable products that process payments, handle millions of
            API requests, and grow startups from MVP to acquisition.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <span className="badge">Backend</span>
            <span className="badge">Payments</span>
            <span className="badge">Distributed Systems</span>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Book a Call
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full" />
          <div className="relative z-10 rounded-3xl aspect-square max-w-md mx-auto border border-white/10 bg-linear-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">👨‍💻</div>
              <p className="text-zinc-400 text-sm">Yusuf Adeniyi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
