import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Pinto - Portfolio",
  description: "Luis Pinto's portfolio website",
  keywords: "Luis Pinto, web developer, software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Contenedor del Navbar */}
          <div className="flex justify-center items-center relative z-10 h-20">
            <Navbar />
          </div>
          {children}
        </ThemeProvider>

        {/* Fondo de Patrón de Puntos */}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full opacity-40"
          )}
        />
      </body>
    </html>
  );
}
