"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posters = [
  { id: 1, title: "I Am Not A Robot", category: "Korean Drama", image: "/I-am-not-a-robot.jpg" },
  { id: 2, title: "Aaincho Paincho", category: "Nepali Movies", image: "/aaincho-paincho.jpg" },
  { id: 3, title: "Imitation Game", category: "Hindi Dubbed", image: "/imitation-game.jpg" },
  { id: 4, title: "Ghar Ek Sapana", category: "Nepali Shows", image: "/ghar-ek-sapana.jpg" },
  { id: 5, title: "NPL: Nepal Premier League", category: "Sports", image: "/Npl-carousel.png" },
  { id: 6, title: "The Jungle Book", category: "KIDS Choice", image: "/jungle-book.jpg" },
];

export function PosterCarousel() {
  // Duplicate posters for seamless infinite loop
  const duplicatedPosters = [...posters, ...posters, ...posters];

  return (
    <section className="py-32 bg-background overflow-hidden select-none">
      <div className="container-custom mb-16">
        <div className="flex justify-between items-end pb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-4">
              Premium Content
            </span>
            <h2 className="text-4xl font-light tracking-tight text-foreground">
              Featured <span className="font-bold">Showcase</span>
            </h2>
          </div>
        </div>
      </div>
      
      <div className="relative flex">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-6 px-6"
        >
          {duplicatedPosters.map((poster, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[480px] aspect-video bg-secondary group overflow-hidden rounded-2xl border border-border/50 shadow-sm"
            >
              {/* Base Layer: Image or Subtle Gradient */}
              {poster.image ? (
                <Image
                  src={poster.image}
                  alt={poster.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background group-hover:scale-110 transition-transform duration-1000 ease-out" />
              )}
              
              {/* Subtle Gradient Overlay behind text for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Glassmorphic Overlay - Fixed at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <span className="text-[10px] font-bold text-brand-pink uppercase tracking-[0.2em] mb-2 block">
                    {poster.category}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">
                    {poster.title}
                  </h3>
                </div>
              </div>

              {/* Hover Glow/Darken Effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Clean Brand Accent Line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-brand-gradient transition-all duration-700 ease-in-out" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
