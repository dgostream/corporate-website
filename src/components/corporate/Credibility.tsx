"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LowerThird } from "@/components/ui/LowerThird";

const credentials = [
  {
    label: "Licensed",
    title: "First OTT licence in Nepal",
    points: [
      "Licensed by the Department of Information & Broadcasting",
      "Aligned with Nepal's broadcasting regulations",
      "Official, authorised and compliant streaming",
    ],
  },
  {
    label: "Rights-backed",
    title: "FIFA World Cup 2026 · Nepal",
    points: [
      "Official digital broadcaster in Nepal",
      "Exclusive access to all 104 matches",
      "HD streaming with Nepali and English commentary",
    ],
  },
  {
    label: "Group-backed",
    title: "Part of Dish Media Network",
    points: [
      "Serving Nepal's pay-TV market since 2010",
      "IPTV and fibre broadband footprint",
      "Established billing, distribution and service network",
    ],
  },
];

export function Credibility() {
  return (
    <section id="credibility" className="py-20 md:py-32 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mb-16 md:mb-24">
          <LowerThird title="Credibility" />
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-6">
            Built into the model
          </h2>
          <p className="text-lg text-muted font-normal leading-relaxed">
            DGO operates within Nepal&apos;s regulatory framework, backed by
            established media expertise and access to premium live-content
            rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <SpotlightCard className="h-full rounded-[2.5rem] bg-secondary p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-xs font-bold text-brand-pink uppercase tracking-widest">
                  {item.label}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-4 mb-8">
                  {item.title}
                </h3>
                <ul className="space-y-4">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm font-medium text-muted leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
