// src/components/AboutMe/AboutMe.tsx
import React from "react";
import { LocationCard } from "../Location/LocationCard";
import Skills from "../Skills/Skills";
import Interests from "../Interests/Interests"; // Importa el nuevo componente Interests
import { Card } from "@/components/ui/card";

const AboutMe: React.FC = () => {
  return (
    <Card className="w-full mt-8 max-w-7xl">
      <h1 className="pt-8 pl-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-700 dark:text-white">
        About Me
      </h1>
      <div className="w-full pt-6 grid grid-cols-12 gap-4 text-white p-4">
        <LocationCard />
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
          <div className="h-48">
            <Skills />
          </div>
          <Interests /> {/* Usa el componente Interests */}
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
