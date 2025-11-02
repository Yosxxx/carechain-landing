import {
  Archive,
  CheckCheck,
  Database,
  KeyRound,
  ShieldCheck,
  Lock,
} from "lucide-react";

const FEATURES = [
  {
    id: "secure-on-chain-verification",
    title: "On-Chain Verification",
    description:
      "Each medical record is permanently verifiable on Solana's blockchain, ensuring authenticity, tamper resistance, and transparent auditability.",
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

export default function CoreFeatures() {
  return (
    <main className="min-h-screen space-y-10">
      <header>
        <div className="text-4xl font-bold text-center">How It Works.</div>
        <div className="text-muted-foreground text-center">
          A streamlined process ensuring security, ownership, and
          interoperability
        </div>
      </header>

      <div className="grid grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="h-[60vh] flex flex-col items-center justify-center text-center space-y-10 outline-1 outline-sidebar-border p-2 hover:bg-card/50 transition"
          >
            <feature.Icon className="w-24 h-24 text-muted-foreground" />
            <div className="text-4xl font-bold">{feature.title}</div>
            <div className="text-muted-foreground">{feature.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
