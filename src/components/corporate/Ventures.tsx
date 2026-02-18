"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copyright } from "lucide-react";

export function Ventures() {
  return (
    <section className="py-32 bg-background">
      <div className="container-custom">
        <div className="mb-24">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-4">
            Our Business
          </h3>
          <h2 className="text-5xl font-light text-foreground tracking-tight">
            Core Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: DGO Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-secondary p-10 rounded-[2.5rem] hover:opacity-80 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="mb-8">
               <span className="text-xs font-bold text-muted group-hover:text-foreground uppercase tracking-widest transition-colors">Platform</span>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-6">
              The DGO Platform
            </h3>
            <p className="text-muted font-normal leading-relaxed mb-10 max-w-sm">
              Nepal's premier OTT service with over 670,000 verified downloads. 
              A comprehensive ecosystem delivering premium entertainment across 
              mobile, web, and smart TV platforms.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center text-sm font-medium text-foreground">
                Exclusive NPL (Nepal Premier League) Rights
              </li>
              <li className="flex items-center text-sm font-medium text-foreground">
                200+ Live Linear Channels
              </li>
              <li className="flex items-center text-sm font-medium text-foreground">
                Korean Drama Powerhouse (46+ Titles)
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Rights & Acquisition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-secondary p-10 rounded-[2.5rem] hover:opacity-80 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="mb-8">
               <span className="text-xs font-bold text-muted group-hover:text-foreground uppercase tracking-widest transition-colors">Acquisition</span>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Content Acquisition
            </h3>
            <p className="text-muted font-normal leading-relaxed mb-10 max-w-sm">
              Strategic partnerships with global studios and local production 
              houses to secure exclusive digital rights for the South Asian 
              and diaspora markets.
            </p>

             <ul className="space-y-4">
              <li className="flex items-center text-sm font-medium text-foreground">
                50+ Nepali Movie Titles (Market Leader)
              </li>
              <li className="flex items-center text-sm font-medium text-foreground">
                Hindi-Dubbed International Content
              </li>
              <li className="flex items-center text-sm font-medium text-foreground">
                Strategic Digital Sub-licensing
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
