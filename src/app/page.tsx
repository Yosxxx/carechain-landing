import Header from "@/sections/header";
import Vision from "@/sections/vision";
import HowItWorks from "@/sections/how-it-works";
import CoreFeatures from "@/sections/core-features";
import SolanaSection from "@/sections/solana-section";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto">
      <Header />
      <Vision />
      <HowItWorks />
      <CoreFeatures />
      <SolanaSection />
    </main>
  );
}
