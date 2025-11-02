import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex min-h-screen items-center justify-center flex-col gap-y-5">
      <div className="xl:text-6xl font-bold text-center max-xl:text-4xl">
        Revolutionizing <br />
        Global Healthcare <br />
        Infrastructure
      </div>
      <div className="text-center text-muted-foreground max-xl:text-xs max-xl:w-2/4">
        A unified, blockchain-based medical record network connecting <br />
        hospitals worldwide.
      </div>
      <div className="flex gap-x-5">
        <Button asChild variant={"outline"} className="flex-1">
          <Link href={"#"} passHref={true}>
            Request Access
          </Link>
        </Button>
        <Button asChild variant={"outline"} className="flex-1">
          <Link href={"#"}>Learn More</Link>
        </Button>
      </div>
    </header>
  );
}
