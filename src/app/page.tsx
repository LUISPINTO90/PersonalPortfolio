"use client";

import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen p-2 overflow-hidden mx-auto">
      {/* Contenedor del Hero */}
      <div className="flex justify-center items-center relative z-10 h-full">
        <Hero />
      </div>
    </div>
  );
}
