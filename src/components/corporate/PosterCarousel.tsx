"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posters = [
  { id: 1, title: "I Am Not A Robot", category: "Korean Drama", image: "/I-am-not-a-robot.jpg" },
  { id: 2, title: "Aaincho Paincho", category: "Nepali Movies", image: "/aaincho-paincho.jpg" },
  { id: 3, title: "Imitation Game", category: "Hindi Dubbed", image: "/imitation-game.jpg" },
  { id: 4, title: "Ghar Ek Sapana", category: "Nepali Shows", image: "/ghar-ek-sapana.jpg" },
  { id: 5, title: "NPL: Nepal Premier League", category: "Sports", image: "/Npl-carousel.png" },
  { id: 6, title: "The Jungle Book", category: "KIDS Choice", image: "/jungle-book.jpg" },
];

const CARD_WIDTH = 496;

function TiltPoster({
  poster,
}: {
  poster: (typeof posters)[number];
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${py * -7}deg) rotateY(${px * 9}deg)`;
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group/poster relative aspect-video w-[min(480px,80vw)] shrink-0 overflow-hidden rounded-2xl border border-border/50 bg-secondary shadow-sm transition-transform duration-200 ease-out snap-start"
    >
      {poster.image ? (
        <Image
          src={poster.image}
          alt={poster.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover/poster:scale-105"
        />
      ) : null}

      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/poster:opacity-100" />

      <div className="absolute right-0 bottom-0 left-0 z-20 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover/poster:translate-y-0 group-hover/poster:opacity-100">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-pink">
          {poster.category}
        </span>
        <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
          {poster.title}
        </h3>
      </div>

      <div className="absolute top-0 left-0 z-20 h-1 w-0 bg-brand-gradient transition-all duration-700 group-hover/poster:w-full" />
    </div>
  );
}

export function PosterCarousel() {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [channel, setChannel] = React.useState(1);

  const jump = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * CARD_WIDTH, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / CARD_WIDTH);
    setChannel(Math.min(posters.length, Math.max(1, index + 1)));
  };

  return (
    <section className="overflow-hidden bg-background py-32">
      <div className="container-custom mb-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
              Premium Content
            </span>
            <h2 className="text-4xl font-light tracking-tight text-foreground">
              Featured <span className="font-bold">Showcase</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => jump(-1)}
              aria-label="Previous title"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand-pink hover:text-brand-pink"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-20 text-center font-mono text-xs tracking-[0.2em] text-muted tabular-nums">
              CH {String(channel).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => jump(1)}
              aria-label="Next title"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand-pink hover:text-brand-pink"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posters.map((poster) => (
          <TiltPoster key={poster.id} poster={poster} />
        ))}
      </div>
    </section>
  );
}
