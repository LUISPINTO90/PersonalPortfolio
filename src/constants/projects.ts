// src/constants/projects.ts

export interface Project {
  slug: string;
  profilePhoto: string;
  title: string;
  description: string;
  tags: string[];
  photos: string[];
  url?: string;
  urlGithub?: string;
}

export const projects: Project[] = [
  {
    slug: "miudc",
    profilePhoto: "/projects/miudc/02.png",
    title: "MiUDC",
    description:
      "Student communication platform. Where future students of the University of Colima can consult testimonials and ask questions about university careers to current students or graduates. Built with Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    photos: [
      "/projects/miudc/02.png",
      "/projects/miudc/01.png",
      "/projects/miudc/03.png",
      "/projects/miudc/04.png",
    ],
    url: "https://dev--miudc.netlify.app/",
    urlGithub: "https://github.com/MyUDC/MiUDC",
  },
  {
    slug: "control-prestamos-aulas",
    profilePhoto: "/projects/control-prestamos/01.png",
    title: "Control of Classroom and Laboratory loans",
    description:
      "This system allows students and professors of the Telematics Faculty of the University of Colima to reserve laboratories and classrooms quickly and easily, keeping an automated control of the availability and use of these spaces.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    photos: [
      "/projects/control-prestamos/01.png",
      "/projects/control-prestamos/02.png",
      "/projects/control-prestamos/03.png",
    ],
    url: "https://control-prestamo-aulas-laboratorios.vercel.app/",
    urlGithub:
      "https://github.com/LUISPINTO90/ControlPrestamoAulasLaboratorios",
  },
  {
    slug: "museo-fernando-del-paso",
    profilePhoto: "/projects/museo/01.png",
    title: "Museo Fernando Del Paso",
    description: `Platform, which together with the "Dirección General del Patrimonio Cultural" of the University of Colima. The museum's landing page was developed for the sale of virtual tours.`,
    tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    photos: [
      "/projects/museo/01.png",
      "/projects/museo/02.png",
      "/projects/museo/03.png",
      "/projects/museo/04.png",
      "/projects/museo/05.png",
    ],
    urlGithub: "https://github.com/VR-EnElDelPaso",
  },
];
