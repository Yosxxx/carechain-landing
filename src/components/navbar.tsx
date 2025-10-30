"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If user scrolls to bottom or near-bottom
      if (scrollTop + windowHeight >= docHeight - 10) {
        setIsSolid(true);
      } else {
        setIsSolid(scrollTop > 80); // Also make solid after 80px scroll
      }
    };

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
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isSolid
          ? "bg-white/90 dark:bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <main className="flex max-w-[1400px] mx-auto justify-between min-w-[1400px] py-5">
        <h1 className="text-2xl font-bold font-architekt tracking-wide">
          CARECHAIN
        </h1>
        <div className="space-x-5">
          {LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant="ghost">{link.name}</Button>
            </Link>
          ))}
        </div>
        <Link href="#">
          <Button variant="outline">Request Access</Button>
        </Link>
      </main>
    </nav>
  );
}
