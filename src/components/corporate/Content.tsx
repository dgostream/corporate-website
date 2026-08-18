"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { BroadcastClock, Equalizer } from "@/components/ui/BroadcastBits";
import { LowerThird } from "@/components/ui/LowerThird";

export function Content() {
  return (
    <section id="content" className="py-20 md:py-32 bg-background">
      <div className="container-custom">
        <div className="mb-16 md:mb-24">
          <LowerThird title="Content" />
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight max-w-3xl">
            Live sport wins attention.{" "}
            <span className="font-bold">Entertainment keeps it.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="h-full rounded-[2.5rem] bg-secondary p-10 transition-transform duration-500 hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-bold text-brand-pink uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  Live sport
                </span>
                <BroadcastClock />
              </div>
              <h3 className="text-3xl font-bold text-foreground mt-4 mb-6">
                The big games, officially
              </h3>
              <p className="text-muted font-normal leading-relaxed mb-10 max-w-sm">
                Licensed live sport in HD, with Nepali and English commentary —
                from tentpole tournaments to domestic leagues and national-team
                fixtures.
              </p>
              <ul className="space-y-4">
                <li className="text-sm font-medium text-foreground">
                  Official digital broadcaster for FIFA World Cup 2026 in Nepal
                </li>
                <li className="text-sm font-medium text-foreground">
                  All 104 matches, streamed in HD
                </li>
                <li className="text-sm font-medium text-foreground">
                  Event passes for marquee live moments
                </li>
              </ul>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <SpotlightCard className="h-full rounded-[2.5rem] bg-secondary p-10 transition-transform duration-500 hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-pink uppercase tracking-widest">
                  Entertainment
                </span>
                <Equalizer />
              </div>
              <h3 className="text-3xl font-bold text-foreground mt-4 mb-6">
                Content that feels like home
              </h3>
              <p className="text-muted font-normal leading-relaxed mb-10 max-w-sm">
                Nepali films, series and live television — the stories, music and
                cultural moments that keep audiences coming back between events.
              </p>
              <ul className="space-y-4">
                <li className="text-sm font-medium text-foreground">
                  Nepali films, series and short films
                </li>
                <li className="text-sm font-medium text-foreground">
                  Live television and catch-up programming
                </li>
                <li className="text-sm font-medium text-foreground">
                  Reality, music and cultural programming
                </li>
              </ul>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
