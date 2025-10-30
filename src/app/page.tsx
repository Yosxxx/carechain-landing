import { Button } from "@/components/ui/button";

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
        <div className="text-lg">
          A unified, blockchain-based medical record network connecting <br />
          hospitals worldwide.
        </div>
        <div className="flex gap-x-5 max-w-md min-w-md">
          <Button variant={"outline"} className="flex-1">
            Get Started
          </Button>
          <Button variant={"outline"} className="flex-1">
            Learn More
          </Button>
        </div>
      </header>
    </main>
  );
}
