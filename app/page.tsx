import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { HowItWorks } from "@/components/HowItWorks";
import { Proof } from "@/components/Proof";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <HowItWorks />
      <Proof />
      <FinalCta />
    </>
  );
}
