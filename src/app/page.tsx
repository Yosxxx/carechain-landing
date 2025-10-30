import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";

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
            Get Started
          </Button>
          <Button variant={"outline"} className="flex-1">
            Learn More
          </Button>
        </div>
      </header>

      {/* Vision Section */}
      <section className="min-h-[50vh] flex max-w-3xl min-w-3xl mx-auto space-x-40">
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
              PROBLEM
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
    </main>
  );
}
