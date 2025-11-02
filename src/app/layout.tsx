import Navbar from "@/components/navbar";
import "./globals.css";
import { LightRays } from "@/components/ui/light-rays";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <LightRays />
        <Navbar />
        <main className="min-w-[1400px] max-w-[1400px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
