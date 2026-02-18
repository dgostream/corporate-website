"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import * as React from "react";

export function CorporateHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const heroImage = mounted && theme === "dark" ? "/hero-image-dark.jpeg" : "/hero-image-light.jpeg";

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          {/* Main Hero Image - Switches based on theme */}
          <div className="absolute inset-0">
            {mounted && (
              <Image 
                src={heroImage} 
                alt="DGO Hero" 
                fill 
                className="object-cover opacity-60 transition-opacity duration-500"
                priority
                quality={100}
              />
            )}
          </div>

          {/* Motif with left-to-right fading and screen blend mode */}
          <div className="absolute inset-0 z-10 opacity-20">
            <Image 
              src="/motif.jpeg" 
              alt="" 
              fill 
              className="object-cover mix-blend-screen"
              priority
            />
            {/* Harsher gradient mask for fading from 0 opacity at left to full at right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-20" />
          </div>
        </div>
        {/* Dark Readability Overlay */}
        <div className="absolute inset-0 bg-black/40 z-30" />
      </div>

      <div className="w-full relative z-40 pt-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="font-medium tracking-[0.2em] uppercase mb-8 text-xs text-foreground dark:text-white">
                Nepal's Premier Digital Platform
              </h5>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-7xl md:text-9xl font-bold leading-none tracking-tighter mb-12"
            >
              <span className="text-foreground dark:text-white">Digital</span> <br />
              <span className="text-gradient">Revolution</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-normal max-w-xl leading-relaxed mb-16 text-foreground dark:text-white"
            >
              DGO is the definitive OTT destination for South Asian content.
              We connect millions of viewers with the movies, shows, and live TV they love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
               <Link 
                href="/contact" 
                className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest transition-colors text-foreground dark:text-white hover:text-brand-pink"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
