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
    profilePhoto: "/projects/miudc/05.png",
    title: "MiUDC",
    description:
      "A dynamic student communication platform built with Next.js that connects prospective University of Colima students with current students and alumni. The platform enables users to explore authentic testimonials and engage in direct conversations about specific university programs, providing valuable insights for their academic journey.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    photos: [
      "/projects/miudc/05.png",
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
      "A comprehensive space management system developed for the Telematics Faculty at the University of Colima. This intuitive platform streamlines the reservation process for laboratories and classrooms, featuring an automated availability tracking system that optimizes resource utilization for both students and professors.",
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
    title: "Fernando Del Paso Museum",
    description:
      "An innovative digital platform developed in collaboration with the General Directorate of Cultural Heritage at the University of Colima. This custom-built museum landing page enhances visitor engagement through interactive virtual tours, making cultural experiences accessible to a broader audience.",
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
