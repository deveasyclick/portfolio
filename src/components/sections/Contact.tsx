"use client";

import { motion } from "framer-motion";
import { Check, Mail, Github, Linkedin, FileDown } from "lucide-react";

const services = [
  "Backend Architecture",
  "Payment Systems",
  "API Design",
  "Scaling Systems",
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-linear-to-br from-blue-500/5 to-purple-500/5 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Let&apos;s Build Something{" "}
                <span className="text-blue-500">Reliable</span>
              </h2>

              <ul className="mt-8 space-y-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-500">
                      <Check size={14} />
                    </span>
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="mailto:ydeniyi@gmail.com"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium"
                >
                  <Mail size={18} />
                  ydeniyi@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/deveasyclick"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yusuf-adeniyi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="/resume/Yusuf_Adeniyi_Fullstack_Engineer.pdf"
                download
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <FileDown size={20} />
                <span className="font-medium">Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
