"use client";

import { motion } from "framer-motion";
import { LowerThird } from "@/components/ui/LowerThird";

const platforms = [
  { name: "iOS", src: "/brands/apple.svg", invert: true },
  { name: "Android", src: "/brands/android.svg" },
  { name: "Web", src: "/brands/chrome.svg" },
  { name: "Android TV", src: "/brands/android-tv.svg" },
  { name: "Smart TV", src: "/brands/smart-tv.svg" },
];

const payments = [
  { name: "Khalti", src: "/brands/khalti.svg" },
  { name: "eSewa", src: "/brands/esewa.png" },
  { name: "Getpay", src: "/brands/getpay-wordmark.png" },
  { name: "ConnectIPS", src: "/brands/connectips.png" },
  { name: "Fonepay", src: "/brands/fonepay.png" },
];

function BrandTile({
  name,
  src,
  invert,
  plate,
}: {
  name: string;
  src: string;
  invert?: boolean;
  plate?: boolean;
}) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-secondary px-3 py-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/5">
      <div
        className={
          plate
            ? "flex h-14 w-full max-w-28 items-center justify-center rounded-xl bg-white px-3"
            : "flex h-14 w-full max-w-28 items-center justify-center"
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className={
            invert
              ? "h-8 w-auto max-h-8 max-w-20 object-contain dark:invert"
              : "h-8 w-auto max-h-8 max-w-20 object-contain"
          }
        />
      </div>
      <span className="whitespace-nowrap text-[11px] font-medium tracking-tight text-foreground">
        {name}
      </span>
    </div>
  );
}

function BrandRow({
  title,
  items,
  plate,
}: {
  title: string;
  items: { name: string; src: string; invert?: boolean }[];
  plate?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[2.5rem] border border-border p-8 md:p-10"
    >
      <h3 className="mb-8 text-xs font-bold uppercase tracking-widest text-muted">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <BrandTile key={item.name} {...item} plate={plate} />
        ))}
      </div>
    </motion.div>
  );
}

export function Platforms() {
  return (
    <section id="platforms" className="bg-background py-20 md:py-32">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl md:mb-24">
          <LowerThird title="Watch anywhere" />
          <h2 className="mb-6 text-4xl font-light tracking-tight text-foreground md:text-5xl">
            One account. Every screen.
          </h2>
          <p className="text-lg font-normal leading-relaxed text-muted">
            HD streaming with adaptive bitrate delivery, offline downloads,
            watchlists and recommendations — available in Nepal and across
            15+ countries.
          </p>
        </div>

        <div className="space-y-8">
          <BrandRow title="Platforms" items={platforms} />
          <BrandRow title="Local payments" items={payments} plate />
        </div>
      </div>
    </section>
  );
}
