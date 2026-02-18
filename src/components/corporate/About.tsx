"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Verified Users", value: "670k+" },
  { label: "VOD Titles", value: "375+" },
  { label: "Live Channels", value: "200+" },
];

export function AboutSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light mb-12 tracking-tight leading-[1.15] text-foreground dark:text-white">
              Leading the <span className="text-gradient font-bold italic inline-block pb-[0.12em] pr-[0.08em]">Digital Revolution</span> <br />
              in Nepal.
            </h2>
            
            <div className="space-y-8 text-lg font-normal leading-relaxed text-foreground dark:text-white">
              <p>
                DGO (formerly DishHomeGo) is the market leader in digital entertainment, 
                boasting over 670,000 verified users. We are the definitive destination 
                for premium South Asian content, aggregating the finest local cinema 
                and international hits into a single, high-performance platform.
              </p>
              <p>
                Our mission is singular: democratizing access to premium digital 
                entertainment through technological excellence and strategic content 
                acquisition, creating unparalleled value for viewers, creators, 
                and investors alike.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Stats & Philosophy */}
          <div className="space-y-16 pt-4">
            <div className="grid grid-cols-3 gap-12 border-b border-border pb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="text-4xl font-bold text-foreground dark:text-white mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black text-black dark:text-muted uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <blockquote className="text-2xl font-normal text-foreground dark:text-white leading-normal mb-6">
                "Our mission is to democratize access to premium digital entertainment through 
                technological excellence and strategic partnerships."
              </blockquote>
              <cite className="text-xs font-bold text-foreground dark:text-white not-italic uppercase tracking-widest block">
                — Board of Directors
              </cite>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
