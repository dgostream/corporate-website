"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import * as React from "react";

type CtaButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  tone?: "gradient" | "solid";
};

export function CtaButton({
  children,
  className,
  href,
  type = "button",
  tone = "solid",
}: CtaButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const wrapRef = React.useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.38);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <>
      {tone === "solid" && (
        <span
          aria-hidden
          className="absolute inset-0 bg-brand-gradient translate-y-[101%] transition-transform duration-500 ease-out group-hover:translate-y-0"
        />
      )}
      {tone === "gradient" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      )}
      <span
        className={cn(
          "relative z-10 flex items-center gap-2 transition-colors duration-300",
          tone === "solid"
            ? "text-background group-hover:text-white"
            : "text-white"
        )}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 translate-y-px opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </span>
    </>
  );

  const classes = cn(
    "group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full px-8 text-sm font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    tone === "solid"
      ? "bg-foreground shadow-lg hover:shadow-[0_12px_40px_-12px_rgba(255,0,189,0.55)]"
      : "bg-brand-gradient text-white shadow-lg shadow-brand-pink/25 hover:shadow-[0_12px_40px_-12px_rgba(255,0,189,0.55)]",
    className
  );

  return (
    <motion.div
      ref={wrapRef}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-flex", className?.includes("w-full") && "w-full")}
    >
      {href ? (
        <Link href={href} className={classes}>
          {content}
        </Link>
      ) : (
        <button type={type} className={classes}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
