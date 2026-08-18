"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import { LowerThird } from "@/components/ui/LowerThird";

const stats = [
  { label: "Registered Users", value: "1.3M" },
  { label: "Monthly Active Users", value: "350K" },
  { label: "Daily Active Users", value: "20K" },
  { label: "Countries Reached", value: "15+" },
];

const pillars = [
  {
    title: "Trust",
    subtitle: "Licensed, authorized, and secure.",
    body: "Viewers know the content is legitimate, the payment is safe, and the stream is official.",
  },
  {
    title: "Cultural connection",
    subtitle: "Content that feels like home.",
    body: "Sport, film, series and moments that keep Nepalese connected wherever they are.",
  },
  {
    title: "Convenience",
    subtitle: "Simple. Seamless. Everywhere.",
    body: "One account across mobile, web, and TV, supported by easy local payment.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background scroll-mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LowerThird title="Who we are" />
            <h2 className="text-3xl md:text-4xl font-light mb-8 md:mb-12 tracking-tight leading-[1.15] text-foreground dark:text-white">
              Built to connect Nepalese with{" "}
              <span className="text-gradient font-bold italic inline-block pb-[0.12em] pr-[0.08em]">
                what matters
              </span>
            </h2>

            <div className="space-y-8 text-lg font-normal leading-relaxed text-foreground dark:text-white">
              <p>
                DGO brings live sport, entertainment, television and cultural
                content to audiences across mobile, web and connected devices
                in Nepal and worldwide.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12 md:space-y-16 pt-2 md:pt-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-4">
                Our vision
              </span>
              <blockquote className="text-2xl font-normal text-foreground dark:text-white leading-normal">
                To become Nepal&apos;s most important streaming platform and the
                primary screen through which Nepal is watched, felt and shared
                worldwide.
              </blockquote>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-24 border-y border-border py-10 md:py-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 tracking-tighter">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[10px] font-black text-black dark:text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-10">
            The brand rests on three pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="rounded-2xl p-2 -m-2 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="text-xs font-bold text-brand-pink mb-3">
                  0{index + 1}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h4>
                <p className="text-foreground font-medium mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-muted font-normal leading-relaxed">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
