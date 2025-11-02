export default function Vision() {
  return (
    <main className="min-h-screen grid gap-5 max-w-4xl mx-auto">
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
      <div className="grid grid-cols-2 gap-x-20">
        <div>
          Today, hospitals worldwide run isolated systems. Patients must
          physically return to their original hospital just to retrieve and
          share medical records with other facilities.
        </div>
        <div>
          CareChain creates a unified ecosystem where medical records move with
          patients, not locations. Cryptographic verification ensures data
          integrity while patients maintain complete ownership through secure
          key-based access.
        </div>
      </div>
    </main>
  );
}
