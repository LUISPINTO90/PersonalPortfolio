// src/constants/experience.ts
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Museo Universitario Fernando del Paso",
    period: "OCT. 2024 — PRESENT",
    responsibilities: [
      "Proposal and implementation of a responsive Figma prototype for the museum's landing page",
      "Development of features on the landing page of the university museum",
      "Integration and design of modular components using React, TypeScript, Tailwind CSS",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: 2,
    role: "Designer and Developer",
    company: "MiUDC Personal Project",
    period: "APR. 2024 — PRESENT",
    responsibilities: [
      "Proposal and implementation of a responsive Figma prototype",
      "Implementation of features through development of modular components and pages",
      "Implementation of backend server actions using Next.js",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    role: "Designer and Frontend Developer",
    company: "Dirección General de Recursos Educativos Digitales",
    period: "OCT. 2023 — APR. 2024",
    responsibilities: [
      "Proposal and implementation of a Figma prototype for university's general counsel platform",
      "Resolution of frontend issues on GitHub for a Laravel project with Vue.js",
      "Integration and design of modular components using Vue.js",
    ],
    technologies: ["Vue.js", "Laravel", "Figma", "GitHub"],
  },
];
