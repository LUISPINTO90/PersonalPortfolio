import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Pinto - Portfolio",
  description: "Luis Pinto's portfolio website",
  keywords: "Luis Pinto, web developer, software engineer",
  // Add the image metadata
  openGraph: {
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-0 left-0 right-0 bg-none z-50">
            <div className="flex justify-center items-center relative h-20">
              <Navbar />
            </div>
          </div>

          <main className="flex-1 pb-8 pt-14">{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>

        {/* Dot Pattern Background */}
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
