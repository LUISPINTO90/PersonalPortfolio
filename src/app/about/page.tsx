// src/app/about/page.tsx
import { Card } from "@/components/ui/card";
import { aboutMeSections } from "@/constants/about-me";
import { Music, Camera, Crown, Volleyball } from "lucide-react";

const getCategoryIcon = (title: string) => {
  switch (title) {
    case "Chess":
      return <Crown className="h-6 w-6" />;
    case "Music":
      return <Music className="h-6 w-6" />;
    case "Soccer":
      return <Volleyball className="h-6 w-6" />;
    case "Art & Culture":
      return <Camera className="h-6 w-6" />;
    default:
      return null;
  }
};

export default function About() {
  return (
    <div className="flex flex-col items-center space-y-6 pb-8 p-2">
      {/* Header Card */}
      <Card className="w-full mt-8 max-w-7xl z-10">
        <div className="overflow-hidden bg-background rounded-xl w-full relative">
          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="space-y-8">
              <div className="space-y-2 z-10 relative">
                <h1 className="text-6xl font-bold tracking-tight sm:text-7xl text-blue-700 dark:text-white">
                  About Me
                </h1>
              </div>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 relative z-10 max-w-2xl">
                List of the things I enjoy in life
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Interests Section */}
      <Card className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 p-4 z-10">
        {aboutMeSections.map((section) => (
          <Card
            key={section.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 dark:bg-neutral-300 rounded-lg text-blue-700 dark:text-neutral-800">
                {getCategoryIcon(section.title)}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </Card>
    </div>
  );
}
