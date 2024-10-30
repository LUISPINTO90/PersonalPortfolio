// src/components/Skills/Skills.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { FaJs, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiDocker,
  SiGithub,
  SiFigma,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiGit,
} from "react-icons/si";

import { FaBolt } from "react-icons/fa6";

const allSkills = [
  { name: "JS", icon: FaJs },
  { name: "TS", icon: SiTypescript },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "PHP", icon: FaPhp },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MUI", icon: SiMui },
  { name: "Framer", icon: SiFramer },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Netlify", icon: SiNetlify },
  { name: "Vercel", icon: SiVercel },
  { name: "Firebase", icon: SiFirebase },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Figma", icon: SiFigma },
];

// Create duplicated array for seamless infinite scroll effect
const duplicatedSkills = [...allSkills, ...allSkills];

const Skills: React.FC = () => {
  return (
    <Card className="col-span-12 md:col-span-6 h-48">
      <CardHeader className="flex flex-row items-center gap-2">
        <FaBolt className="w-4 h-4" />
        <span>Skills</span>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          className="skills-swiper"
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 },
            480: { slidesPerView: 4, spaceBetween: 15 },
            640: { slidesPerView: 5, spaceBetween: 15 },
            768: { slidesPerView: 6, spaceBetween: 20 },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <SwiperSlide key={`${skill.name}-${index}`}>
              <div className="flex flex-col items-center justify-center p-4 transition-transform hover:scale-110 text-neutral-600 hover:text-blue-700 dark:text-neutral-400 dark:hover:text-white">
                <skill.icon className={`w-8 h-8`} />
                <span className="text-xs mt-2 select-none">{skill.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
    </Card>
  );
};

export default Skills;
