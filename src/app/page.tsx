import { CorporateHero } from "@/components/corporate/Hero";
import { PosterCarousel } from "@/components/corporate/PosterCarousel";
import { AboutSection } from "@/components/corporate/About";
import { Ventures } from "@/components/corporate/Ventures";

export default function Home() {
  return (
    <>
      <CorporateHero />
      <PosterCarousel />
      <AboutSection />
      <Ventures />
    </>
  );
}
