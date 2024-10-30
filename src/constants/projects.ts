// src/constants/projects.ts

export interface Project {
  slug: string;
  profilePhoto: string;
  title: string;
  description: string;
  tags: string[];
  photos: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "miudc",
    profilePhoto: "/logo.png",
    title: "MiUDC",
    description:
      "A comprehensive dashboard for managing an e-commerce platform. Features include real-time analytics, inventory management, order processing, and customer insights. Built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    photos: ["/logo.png", "/logo.png", "/logo.png"],
    url: "https://example.com/dashboard",
  },
  {
    slug: "control-prestamos-aulas",
    profilePhoto: "/logo.png",
    title: "Control of Classroom and Laboratory loans",
    description:
      "An innovative AI-powered image generation tool that creates unique artwork based on text descriptions. Utilizes state-of-the-art machine learning models and provides an intuitive user interface for creative expression.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    photos: ["/logo.png", "/logo.png", "/logo.png"],
    url: "https://example.com/ai-generator",
  },
  {
    slug: "museo-fernando-del-paso",
    profilePhoto: "/logo.png",
    title: "Museo Fernando Del Paso",
    description:
      "A powerful analytics platform that helps businesses track and optimize their social media performance across multiple platforms. Includes sentiment analysis, engagement metrics, and automated reporting features.",
    tags: ["React", "Node.js", "Express"],
    photos: ["/logo.png", "/logo.png", "/logo.png"],
    url: "https://example.com/analytics",
  },
];
