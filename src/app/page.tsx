import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  Lock,
  Archive,
  CheckCheck,
  KeyRound,
  Database,
  ShieldCheck,
} from "lucide-react";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const FEATURES: FeatureItem[] = [
  {
    id: "secure-on-chain-verification",
    title: "On-Chain Verification",
    description:
      "Each medical record is permanently verifiable on Solana’s blockchain, ensuring authenticity, tamper resistance, and transparent auditability.",
    Icon: Lock,
  },
  {
    id: "encrypted-medical-bundles",
    title: "Encrypted Record Bundles",
    description:
      "Medical data is packaged into encrypted ZIP bundles containing structured metadata and attached files, enabling secure, portable, and interoperable sharing across institutions.",
    Icon: Archive,
  },
  {
    id: "hospital-patient-co-sign",
    title: "Hospital-Patient Co-Sign",
    description:
      "Records are validated through dual signatures — one from the hospital and one from the patient — establishing undeniable proof of authenticity and consent on-chain.",
    Icon: CheckCheck,
  },
  {
    id: "granular-access-grants",
    title: "Granular Access Control",
    description:
      "Patients retain full control over their data, granting and revoking permissions for hospitals or doctors at any time with cryptographically enforced policies.",
    Icon: KeyRound,
  },
  {
    id: "off-chain-indexing",
    title: "Off-Chain Indexing",
    description:
      "Supabase provides efficient off-chain indexing and querying of encrypted record metadata, optimizing retrieval speed while maintaining data privacy.",
    Icon: Database,
  },
  {
    id: "zero-trust-architecture",
    title: "Zero-Trust Infrastructure",
    description:
      "Built on cryptographic principles, CareChain operates without centralized trust — every verification, signature, and access request is provable and independently verifiable.",
    Icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="min-h-screen flex justify-center items-center flex-col gap-y-5 text-center">
        <div className="uppercase font-bold text-6xl">
          Revolutionizing <br />
          Global Healthcare
          <br />
          Infrastructure
        </div>
        <div className="text-lg text-muted-foreground">
          A unified, blockchain-based medical record network connecting <br />
          hospitals worldwide.
        </div>
        <div className="flex gap-x-5 max-w-md min-w-md">
          <Button variant={"outline"} className="flex-1">
            Request Access
          </Button>
          <Button variant={"outline"} className="flex-1">
            Learn More
          </Button>
        </div>
      </header>

      {/* Vision Section */}
      <section className="min-h-screen flex max-w-3xl min-w-3xl mx-auto space-x-40 justify-center items-center">
        <div>
          <div className="text-4xl font-bold">
            <TextAnimate animation="blurIn" as="h1">
              THE
            </TextAnimate>
            <TextAnimate animation="blurIn" as="h1">
              PROBLEM
            </TextAnimate>
          </div>
          <div className="mt-5 text-muted-foreground">
            <TextAnimate animation="blurIn" as="h1">
              Today, hospitals worldwide run isolated systems. Patients must
              physically return to their original hospital just to retrieve and
              share medical records with other facilities.
            </TextAnimate>
          </div>
        </div>
        <div>
          <div className="text-4xl font-bold ">
            <TextAnimate animation="blurIn" as="h1">
              THE
            </TextAnimate>
            <TextAnimate animation="blurIn" as="h1">
              SOLUTION
            </TextAnimate>
          </div>
          <div className="mt-5 text-muted-foreground">
            <TextAnimate animation="blurIn" as="h1">
              CareChain creates a unified ecosystem where medical records move
              with patients, not locations. Cryptographic verification ensures
              data integrity while patients maintain complete ownership through
              secure key-based access.
            </TextAnimate>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <section className="min-h-screen max-w-[1400px] mx-auto flex items-center flex-col justify-center">
        <div className="space-y-10 text-center ">
          <h1 className="text-4xl font-bold">How it Works.</h1>
          <p className="text-muted-foreground">
            A streamlined process ensuring security, ownership, and
            interoperability
          </p>
        </div>

        <div></div>
      </section> */}

      {/* Core Features */}
      <section className="grid grid-cols-3 max-w-[1400px] mx-auto min-h-screen justify-center items-center my-10">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="h-[80vh] flex justify-center flex-col items-center gap-y-10 p-5 
                 relative transition-all 
                 hover:bg-card/40 
                 outline outline-border/30 hover:outline-border/60"
          >
            <div className="text-muted-foreground">
              <feature.Icon size={200} />
            </div>
            <div className="text-center">
              <h1 className="font-bold text-4xl">{feature.title}</h1>
              <p className="text-muted-foreground mt-5 max-w-[480px] mx-auto leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
