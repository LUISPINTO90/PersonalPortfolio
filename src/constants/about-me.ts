// src/constants/about-me.ts

export interface AboutSection {
  id: number;
  title: string;
  content: string;
  category: "hobby" | "interest" | "passion";
}

export const aboutMeSections: AboutSection[] = [
  {
    id: 1,
    title: "Chess",
    content:
      "I'm a big chess fan, I like to be very competitive and rack my brains playing for hours and hours.",
    category: "passion",
  },
  {
    id: 2,
    title: "Music",
    content: "I like punk rock, grunge, shoegaze, and a lot of musical genres.",
    category: "interest",
  },
  {
    id: 3,
    title: "Soccer",
    content:
      "I also love soccer, kicking the ball and running until I can't run anymore.",
    category: "hobby",
  },
  {
    id: 4,
    title: "Art & Culture",
    content:
      "I like art, pop culture, cult movies, good music, and photography.",
    category: "passion",
  },
];
