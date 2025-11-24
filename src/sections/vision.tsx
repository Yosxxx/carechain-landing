"use client";

import { useEffect, useState } from "react";

export default function Vision() {
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsXL(window.innerWidth >= 1280);
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // -----------------------
  // 🖥 XL and above layout
  // -----------------------
  if (isXL) {
    return (
      <main className="min-h-screen grid gap-5 max-w-4xl mx-auto" id="vision">
        <div className="grid grid-cols-2 gap-x-20">
          <div className="flex flex-col justify-end text-4xl font-bold">
            <div>THE</div>
            <div>PROBLEM</div>
          </div>
          <div className="flex flex-col justify-end text-4xl font-bold">
            <div>THE</div>
            <div>SOLUTION</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-20 text-base text-muted-foreground">
          <div>
            Today, hospitals worldwide run isolated systems. Patients must
            physically return to their original hospital just to retrieve and
            share medical records with other facilities.
          </div>
          <div>
            CareChain creates a unified ecosystem where medical records move
            with patients, not locations. Cryptographic verification ensures
            data integrity while patients maintain complete ownership through
            secure key-based access.
          </div>
        </div>
      </main>
    );
  }

  // -----------------------
  // 📱 Below XL layout
  // -----------------------
  return (
    <main
      className="min-h-[50vh] grid gap-5 max-w-4xl mx-auto px-5"
      id="vision"
    >
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">
            <div>THE</div>
            <div>PROBLEM</div>
          </div>
          <div className="text-muted-foreground text-sm">
            Today, hospitals worldwide run isolated systems. Patients must
            physically return to their original hospital just to retrieve and
            share medical records with other facilities.
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-2xl font-bold">
            <div>THE</div>
            <div>SOLUTION</div>
          </div>
          <div className="text-muted-foreground text-sm">
            CareChain creates a unified ecosystem where medical records move
            with patients, not locations. Cryptographic verification ensures
            data integrity while patients maintain complete ownership through
            secure key-based access.
          </div>
        </div>
      </div>
    </main>
  );
}
