// src/app/projects/[slug]/page.tsx
"use client";

import { projects } from "@/constants/projects";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightFromSquare, ArrowLeft } from "lucide-react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mb-4">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>
      <Card className="w-full max-w-4xl z-10">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
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
            <div className="flex gap-4">
              {project.url && (
                <Button
                  className="bg-blue-600 hover:text-blue-600 hover:bg-neutral-300 text-white flex items-center gap-2 max-w-xs"
                  asChild
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ArrowUpRightFromSquare className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {project.urlGithub && (
                <Button
                  className="bg-blue-600 hover:text-blue-600 hover:bg-neutral-300 text-white flex items-center gap-2 max-w-xs"
                  asChild
                >
                  <a
                    href={project.urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository
                    <ArrowUpRightFromSquare className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Image Carousel */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent className="h-96">
                {project.photos.map((photo, index) => (
                  <CarouselItem
                    key={index}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={photo}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="rounded-lg"
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        quality={100}
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Description */}
          <div className="flex justify-center items-center prose dark:prose-invert max-w-none">
            <p className="pt-4 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
