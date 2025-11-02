"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSolid(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LINKS = [
    { name: "Vision", href: "#vision" },
    { name: "Features", href: "#Features" },
    { name: "Platform", href: "#Platform" },
    { name: "Technology", href: "#Technology" },
  ];

  return (
    <nav
      className={`fixed top-0 py-5 flex w-full transition-colors duration-300 backdrop-blur-xl ${
        isSolid
          ? "bg-white/60 dark:bg-neutral-900/50 border-b border-sidebar-accent"
          : "bg-transparent"
      }`}
    >
      <main className="flex max-w-[1400px] mx-auto justify-between min-w-[1400px]">
        <h1 className="text-2xl font-bold">CARECHAIN</h1>
        <div>
          {LINKS.map((link) => (
            <Button asChild variant="ghost" key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>
        <Button asChild variant="secondary">
          <Link href="#">Request Access</Link>
        </Button>
      </main>
    </nav>
  );
}
