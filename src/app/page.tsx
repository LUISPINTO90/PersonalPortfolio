"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="p-2 mx-auto">
      {/* Contenedor del Hero */}
      <div className="flex justify-center items-center relative z-10 h-full">
        <Hero />
      </div>
      <div className="flex justify-center items-center relative z-10 h-full">
        <AboutMe />
      </div>
    </div>
  );
}
