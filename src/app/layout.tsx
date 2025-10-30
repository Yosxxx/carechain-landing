import Navbar from "@/components/navbar";
import "./globals.css";
import { LightRays } from "@/components/ui/light-rays";
import LenisScroll from "@/components/LenisScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark antialiased">
        <LenisScroll />
        <LightRays />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
