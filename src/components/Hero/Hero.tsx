import React from "react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Card } from "@/components/ui/card";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <Card className="w-full mt-8 max-w-7xl">
      <div className="shadow-sm border-neutral-300 dark:border-neutral-800 overflow-hidden bg-background rounded-xl w-full relative">
        <div className="relative px-6 py-8 sm:px-8 sm:py-10">
          <div className="space-y-8">
            {/* Name and Location */}
            <div className="space-y-2 z-10 relative">
              <h1 className="text-6xl font-bold tracking-tight sm:text-7xl text-blue-700 dark:text-white">
                Luis Pinto
              </h1>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-neutral-500 dark:text-white sm:text-2xl">
                Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 relative z-10 max-w-md">
              Focused on UX/UI design and Frontend development.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6 z-10 relative">
              <a
                href="https://github.com/LUISPINTO90"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-blue-700 dark:text-neutral-400 dark:hover:text-white"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/luispintogtz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-blue-700 dark:text-neutral-400 dark:hover:text-white"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://www.instagram.com/luis.pintogtz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-blue-700 dark:text-neutral-400 dark:hover:text-white"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://x.com/luispintogtz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-blue-700 dark:text-neutral-400 dark:hover:text-white"
              >
                <FaXTwitter size={32} />
              </a>
            </div>
          </div>
        </div>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
          ]}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full opacity-50"
          )}
        />
      </div>
    </Card>
  );
}
