"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotate?: string;
}

export default function GlowCard({
  children,
  className,
  delay = 0,
  rotate = "0deg",
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "glow-card p-6 md:p-8 transition-shadow duration-300",
        "hover:shadow-[0_0_40px_-8px_rgba(59,130,246,0.35)]",
        className,
      )}
      style={{ rotate }}
    >
      {children}
    </motion.div>
  );
}
