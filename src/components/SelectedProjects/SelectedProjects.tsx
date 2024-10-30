import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constants/projects";

const SelectedProjects = () => {
  return (
    <Card className="w-full mt-8 max-w-7xl">
      <h1 className="pt-8 pl-4 text-4xl font-bold tracking-tight sm:text-5xl text-blue-700 dark:text-white">
        Selected Projects
      </h1>
      <div className="w-full pt-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* First two projects for small and medium screens, three for large screens */}
          {projects.slice(0, 2).map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
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
                  <p className="text-neutral-400 dark:text-neutral-200">
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

          {/* Third project only visible on large screens */}
          <Link
            href={`/projects/${projects[2].slug}`}
            className="hidden lg:block"
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <div className="p-4 space-y-4 h-full flex flex-col">
                <div className="flex-grow">
                  <Image
                    src={projects[2].profilePhoto}
                    alt={projects[2].title}
                    className="w-full h-48 object-contain rounded-lg"
                    width={500}
                    height={300}
                    quality={100}
                  />
                </div>
                <hr className="border-t dark:border-neutral-800" />
                <h2 className="text-xl font-semibold">{projects[2].title}</h2>
                <p className="text-neutral-400 dark:text-neutral-200">
                  {projects[2].description.length > 100
                    ? projects[2].description.substring(0, 100) + "..."
                    : projects[2].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[2].tags.map((tag) => (
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
        </div>
      </div>

      <div className="flex justify-center py-6">
        <Link
          href="/projects"
          className="bg-blue-600 hover:text-blue-600 hover:bg-neutral-300 text-white py-2 px-4 rounded-lg transition-colors"
        >
          View Full Project Archive
        </Link>
      </div>
    </Card>
  );
};

export default SelectedProjects;
