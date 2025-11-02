import Header from "@/sections/header";
import Vision from "@/sections/vision";
import HowItWorks from "@/sections/how-it-works";
import CoreFeatures from "@/sections/core-features";
import SolanaSection from "@/sections/solana-section";

export default function Home() {
  return (
    <main>
      <Header />
      <Vision />
      <HowItWorks />
      <CoreFeatures />
      <SolanaSection />
    </main>
  );
}
