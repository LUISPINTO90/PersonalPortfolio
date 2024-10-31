import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// Reemplaza esto con tu dominio real
const baseUrl = "https://luispintogtz.netlify.app/";

export const metadata: Metadata = {
  title: "Luis Pinto - Portfolio",
  description: "Luis Pinto's portfolio website",
  keywords: "Luis Pinto, web developer, software engineer",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Luis Pinto - Portfolio",
    description: "Luis Pinto's portfolio website",
    url: baseUrl,
    siteName: "Luis Pinto Portfolio",
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Luis Pinto Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Pinto - Portfolio",
    description: "Luis Pinto's portfolio website",
    images: [`${baseUrl}/logo.png`],
    creator: "@tuhandle",
  },
  icons: {
    icon: "/logo.png",
  },
  // Agregamos estos meta tags adicionales para mejor compatibilidad
  other: {
    "og:image": `${baseUrl}/logo.png`,
    "og:image:secure_url": `${baseUrl}/logo.png`,
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
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
            <div className="flex justify-center items-center relative h-16">
              <Navbar />
            </div>
          </div>
          <main className="flex-1 pb-8 pt-14">{children}</main>
          <Footer />
        </ThemeProvider>
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
