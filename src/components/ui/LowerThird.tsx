"use client";

import { motion } from "framer-motion";

export function LowerThird({
  kicker = "DGO",
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ x: -28, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mb-6 inline-flex items-stretch overflow-hidden rounded-sm"
    >
      <span className="bg-brand-gradient px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white">
        {kicker}
      </span>
      <span className="border border-l-0 border-border bg-secondary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground">
        {title}
      </span>
    </motion.div>
  );
}
