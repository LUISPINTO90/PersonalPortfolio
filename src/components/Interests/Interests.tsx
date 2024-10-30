// src/components/Interests/Interests.tsx
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MdInterests } from "react-icons/md";

const Interests: React.FC = () => {
  return (
    <Card className="h-48">
      <CardHeader className="flex flex-row items-center gap-2">
        <MdInterests className="w-4 h-4" />
        <span>Interests</span>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-start gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
        <p>Creativity</p>
        <p>Clean Design</p>
        <p>Intuitive Interfaces</p>
      </CardContent>
    </Card>
  );
};

export default Interests;
