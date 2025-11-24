import Image from "next/image";

const SOLANA_STATS = [
  { value: "<1s", label: "Transaction Finality" },
  { value: "65K+", label: "Transactions / Second" },
  { value: "$0.00025", label: "Avg. Transaction Cost" },
  { value: "100%", label: "Immutability" },
];

export default function SolanaSection() {
  return (
    <main>
      <section
        className="min-h-screen flex max-w-6xl mx-auto justify-between items-center px-10 py-20 max-xl:flex-col-reverse"
        id="technology"
      >
        {/* LEFT: Content */}
        <div className="space-y-6 max-w-md">
          <h1 className="text-5xl font-bold flex items-center gap-3 max-xl:text-2xl max-xl:mt-10">
            Built on
            <Image
              src="/solanaLogo.png"
              alt="Solana Logo"
              width={200}
              height={80}
              className="inline-block max-xl:w-40"
            />
          </h1>

          <p className="text-muted-foreground">
            CareChain leverages Solana&apos;s high-performance blockchain to
            achieve sub-second transaction finality, verifiable record
            integrity, and cryptographic guarantees at scale ensuring healthcare
            data remains fast, secure, and immutable.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            {SOLANA_STATS.map((stat) => (
              <div key={stat.label}>
                <h2 className="text-2xl font-bold bg-linear-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(153,69,255,0.4)]">
                  {stat.value}
                </h2>

                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Code Block */}
        <div className="relative group max-xl:mx-4 max-xl:mt-8">
          {/* Outer Solana Glow */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#9945FF]/50 to-[#14F195]/50 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity" />

          <pre
            className="relative font-mono bg-[#0A0A0A]/95 rounded-2xl p-8 border border-[#2a2a2a] backdrop-blur-md text-gray-100 leading-relaxed tracking-wide shadow-[0_0_25px_rgba(153,69,255,0.2)]
  max-xl:p-4 max-xl:text-xs max-xl:overflow-x-auto max-xl:whitespace-pre-wrap max-xl:leading-snug"
          >
            <code>
              <span className="text-[#14F195] font-semibold">fn</span>{" "}
              verify_record(
              <br />
              &nbsp;&nbsp;record_hash:{" "}
              <span className="text-[#9945FF] font-medium">&amp;str</span>,
              <br />
              &nbsp;&nbsp;signature:{" "}
              <span className="text-[#9945FF] font-medium">&amp;Signature</span>
              <br />) -&gt;{" "}
              <span className="text-[#14F195] font-semibold">Result</span>
              &lt;<span className="text-[#9945FF] font-medium">
                bool
              </span>&gt; {"{"}
              <br />
              &nbsp;&nbsp;
              <span className="text-[#14F195] font-semibold">let</span> account
              = fetch_onchain_data(
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;record_hash
              <br />
              &nbsp;&nbsp;)?;
              <br />
              &nbsp;&nbsp;
              <span className="text-[#14F195] font-semibold">
                verify_signature
              </span>
              (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;account.data,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;signature
              <br />
              &nbsp;&nbsp;)
              <br />
              {"}"}
            </code>
          </pre>
        </div>
      </section>
    </main>
  );
}
