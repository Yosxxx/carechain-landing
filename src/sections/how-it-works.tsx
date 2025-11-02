import { Building2, FileCheck2, KeyRound, ShieldCheck } from "lucide-react";

const CARECHAIN_STEPS = [
  {
    id: 1,
    title: "Hospital Onboards",
    description:
      "Medical facilities register on the CareChain network with verified credentials.",
    Icon: Building2,
  },
  {
    id: 2,
    title: "Doctor Issues Records",
    description:
      "Authorized physicians create and co-sign encrypted medical records.",
    Icon: FileCheck2,
  },
  {
    id: 3,
    title: "Patient Owns Key",
    description:
      "Patients receive cryptographic keys for complete record ownership.",
    Icon: KeyRound,
  },
  {
    id: 4,
    title: "Cross-Hospital Verification",
    description:
      "Any authorized facility can verify and access records with patient consent.",
    Icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  return (
    <main className="space-y-10 min-h-screen flex flex-col justify-center items-center p-2">
      <header>
        <div className="text-4xl font-bold text-center">How It Works.</div>
        <div className="text-muted-foreground text-center">
          A streamlined process ensuring security, ownership, and
          interoperability
        </div>
      </header>
      <div className="grid grid-cols-4 gap-5 max-xl:grid-cols-2">
        {CARECHAIN_STEPS.map((step) => (
          <div
            key={step.id}
            className="outline-1 outline-sidebar-border p-5 space-y-2"
          >
            <div className="p-2 outline-1 outline-sidebar-border w-fit">
              <step.Icon className="w-15 h-15" />
            </div>
            <div className="text-xl font-bold max-xl:text-sm">
              Step {step.id}
            </div>
            <div className="text-xl font-bold max-xl:text-sm">{step.title}</div>
            <div className="text-sm text-muted-foreground max-xl:text-xs">
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
