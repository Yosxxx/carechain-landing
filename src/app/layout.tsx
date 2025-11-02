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

        {children}
      </body>
    </html>
  );
}
