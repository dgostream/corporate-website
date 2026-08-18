"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import * as React from "react";
import { withAssetVersion } from "@/lib/assets";
import { WatchNowSlider } from "@/components/ui/WatchNowSlider";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function CorporateHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 420], [1, 0.15]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";
  const heroImage = withAssetVersion(
    isDark ? "/hero-image-dark.jpeg" : "/hero-image-light.jpeg"
  );
  const motifImage = withAssetVersion(
    isDark ? "/motif-dark.jpeg" : "/motif-light.jpeg"
  );

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        <div className={isDark ? "absolute inset-0 bg-black" : "absolute inset-0 bg-white"}>
          {/* Main Hero Image - Switches based on theme */}
          <div className="absolute inset-0">
            {mounted && (
              <Image 
                src={heroImage} 
                alt="DGO Hero" 
                fill 
                unoptimized
                className={isDark ? "object-cover opacity-60 transition-opacity duration-500" : "object-cover opacity-85 transition-opacity duration-500"}
                priority
                quality={100}
              />
            )}
          </div>

          {/* Motif with left-to-right fading and screen blend mode */}
          <div className={isDark ? "absolute inset-0 z-10 opacity-20" : "absolute inset-0 z-10 opacity-[0.12]"}>
            <Image 
              src={motifImage} 
              alt="" 
              fill 
              unoptimized
              className={isDark ? "object-cover mix-blend-screen" : "object-cover mix-blend-soft-light"}
              priority
            />
            {/* Harsher gradient mask for fading from 0 opacity at left to full at right */}
            <div
              className={
                isDark
                  ? "absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-20"
                  : "absolute inset-0 bg-linear-to-r from-white/95 via-white/75 to-transparent z-20"
              }
            />
          </div>
        </div>
        {/* Theme-aware readability overlay */}
        <div className={isDark ? "absolute inset-0 bg-black/40 z-30" : "absolute inset-0 bg-white/10 z-30"} />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="w-full relative z-40 pt-24 md:pt-20"
      >
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="font-medium tracking-[0.2em] uppercase mb-8 text-xs text-foreground dark:text-white">
                Nepal&apos;s OTT Home
              </h5>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tighter mb-10 md:mb-12"
            >
              <span className="text-foreground dark:text-white">Connecting Nepalese,</span>{" "}
              <span className="text-gradient text-gradient-shift">everywhere.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-normal max-w-xl leading-relaxed mb-6 md:mb-7 text-foreground dark:text-white"
            >
              Live sports and Nepali entertainment, streamed worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3 md:mb-4 max-w-2xl"
            >
              {[
                { label: "Licensed", value: "First OTT licence in Nepal" },
                { label: "Content", value: "Live sport + Nepali entertainment" },
              ].map((item) => (
                <SpotlightCard
                  key={item.label}
                  className="rounded-2xl border border-border bg-background/60 px-6 py-6 md:px-8 md:py-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-pink/40"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-pink mb-2">
                    {item.label}
                  </div>
                  <div className="text-base font-medium text-foreground dark:text-white leading-snug">
                    {item.value}
                  </div>
                </SpotlightCard>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <WatchNowSlider />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
