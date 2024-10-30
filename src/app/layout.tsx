import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";

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
      <ThemeProvider>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
