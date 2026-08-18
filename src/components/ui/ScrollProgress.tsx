"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-70 h-[2px] origin-left bg-brand-gradient"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
