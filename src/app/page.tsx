import { CorporateHero } from "@/components/corporate/Hero";
import { PosterCarousel } from "@/components/corporate/PosterCarousel";
import { AboutSection } from "@/components/corporate/About";
import { Credibility } from "@/components/corporate/Credibility";
import { Content } from "@/components/corporate/Content";
import { Platforms } from "@/components/corporate/Platforms";

export default function Home() {
  return (
    <>
      <CorporateHero />
      <PosterCarousel />
      <AboutSection />
      <Credibility />
      <Content />
      <Platforms />
    </>
  );
}
