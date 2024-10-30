// src/app/projects/page.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { projects } from "@/constants/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <Card className="w-full mt-8 max-w-7xl z-10">
        <div className="shadow-sm border-neutral-300 dark:border-neutral-800 overflow-hidden bg-background rounded-xl w-full relative">
          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="space-y-8">
              <div className="space-y-2 z-10 relative">
                <h1 className="text-6xl font-bold tracking-tight sm:text-7xl text-blue-700 dark:text-white">
                  Projects
                </h1>
              </div>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 relative z-10 max-w-md">
                List of some of my projects
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="flex justify-center items-center w-full max-w-7xl p-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <Card className="hover:shadow-lg transition-shadow duration-300 h-[400px] max-w-lg">
                <div className="p-4 space-y-4 h-full flex flex-col">
                  <div className="flex-grow">
                    <Image
                      src={project.profilePhoto}
                      alt={project.title}
                      className="w-full h-48 object-contain rounded-lg"
                      width={500}
                      height={300}
                      quality={100}
                      priority
                    />
                  </div>
                  <hr className="border-t dark:border-neutral-800" />
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p>
                    {project.description.length > 100
                      ? project.description.substring(0, 100) + "..."
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="p-2 rounded-full backdrop-blur-md border border-neutral-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
