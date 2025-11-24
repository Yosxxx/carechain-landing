"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const LINKS = [
  { name: "Vision", href: "#vision" },
  { name: "Features", href: "#features" },
  { name: "Platform", href: "#platform" },
  { name: "Technology", href: "#technology" },
];

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSolid(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with offset for fixed navbar
  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // Height of navbar (tweak if needed)
    const NAV_OFFSET = 80;

    const rect = el.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - NAV_OFFSET;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    // Update URL hash without triggering instant jump
    window.history.pushState(null, "", href);
  };

  return (
    <nav
      className={`fixed top-0 py-5 flex w-full transition-colors duration-300 backdrop-blur-xl max-xl:hidden ${
        isSolid
          ? "bg-white/60 dark:bg-neutral-900/50 border-b border-sidebar-accent"
          : "bg-transparent"
      }`}
    >
      <main className="flex max-w-[1400px] mx-auto justify-between min-w-[1400px]">
        <h1 className="text-2xl font-bold">CARECHAIN</h1>

        <div>
          {LINKS.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
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
