"use client";

import * as React from "react";
import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

const WATCH_URL = "https://www.watchdgo.com/";
const KNOB = 40;
const PAD = 4;

export function WatchNowSlider() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const maxXRef = React.useRef(0);
  const [maxX, setMaxX] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const next = Math.max(0, el.offsetWidth - KNOB - PAD * 2);
      maxXRef.current = next;
      setMaxX(next);
      if (x.get() > next) x.set(next);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [x]);

  useMotionValueEvent(x, "change", (latest) => {
    const limit = maxXRef.current;
    if (latest < 0) x.set(0);
    else if (latest > limit) x.set(limit);
  });

  const fillWidth = useTransform(x, (value) => Math.max(0, value + KNOB / 2 + PAD));
  const fillOpacity = useTransform(x, [0, 16], [0, 1]);
  const labelOpacity = useTransform(x, [0, Math.max(maxX * 0.35, 1)], [1, 0]);

  const complete = React.useCallback(() => {
    if (done) return;
    setDone(true);
    animate(x, maxXRef.current, { type: "spring", stiffness: 380, damping: 32 });
    window.setTimeout(() => {
      window.location.href = WATCH_URL;
    }, 260);
  }, [done, x]);

  const onDragEnd = () => {
    const limit = maxXRef.current;
    const current = Math.min(Math.max(0, x.get()), limit);
    x.set(current);
    if (current >= limit * 0.78) {
      complete();
      return;
    }
    animate(x, 0, { type: "spring", stiffness: 420, damping: 34 });
  };

  return (
    <div
      ref={trackRef}
      className="relative h-12 w-full max-w-[22rem] overflow-hidden touch-none rounded-full border border-white/20 bg-white/10"
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Slide to watch now on DGO"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <motion.div
          aria-hidden
          className="absolute inset-y-0 left-0 bg-brand-gradient"
          style={{ width: fillWidth, opacity: fillOpacity }}
        />
      </div>

      <motion.div
        style={{ opacity: labelOpacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center gap-0.5 pl-8 text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-[11px]"
      >
        Slide to watch now
        <ChevronRight className="h-3.5 w-3.5 opacity-80" />
        <ChevronRight className="-ml-2 h-3.5 w-3.5 opacity-45" />
      </motion.div>

      <motion.button
        type="button"
        drag={done || maxX === 0 ? false : "x"}
        dragConstraints={{ left: 0, right: maxX }}
        dragElastic={0}
        dragMomentum={false}
        dragPropagation={false}
        style={{ x }}
        onDragEnd={onDragEnd}
        disabled={done}
        className="absolute top-1 left-1 z-10 flex h-10 w-10 shrink-0 cursor-grab items-center justify-center rounded-full bg-white text-black shadow-md active:cursor-grabbing"
        aria-label="Slide to watch now"
      >
        <Play className="h-3.5 w-3.5 translate-x-px fill-current" />
      </motion.button>
    </div>
  );
}
