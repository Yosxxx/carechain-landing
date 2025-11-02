import "./globals.css";
import Navbar from "@/components/navbar";
import { LightRays } from "@/components/ui/light-rays";
import LenisScroll from "@/components/LenisScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <LenisScroll />
        <LightRays />
        <Navbar />
        <main className="min-w-[1400px] max-w-[1400px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
