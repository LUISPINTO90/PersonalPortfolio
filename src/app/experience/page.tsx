// src/app/experience/page.tsx
import { Card } from "@/components/ui/card";
import { experiences } from "@/constants/experience";
import { Clock, Building2, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Asegúrate de importar el componente Badge

export default function Experience() {
  return (
    <div className="flex flex-col items-center space-y-6 pb-8">
      <Card className="w-full mt-8 max-w-7xl z-10">
        <div className="overflow-hidden bg-background rounded-xl w-full relative">
          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="space-y-8">
              <div className="space-y-2 z-10">
                <h1 className="text-6xl font-bold tracking-tight sm:text-7xl text-blue-700 dark:text-white">
                  Experience
                </h1>
              </div>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 relative z-10 max-w-md">
                Doing software engineer activities
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="w-full max-w-7xl space-y-6 z-10">
        {experiences.map((exp) => (
          <Card key={exp.id} className="p-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h2 className="text-3xl font-bold text-blue-700 dark:text-white">
                  {exp.role}
                </h2>
                <span className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                  <Clock className="h-4 w-4" />
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <Building2 className="h-4 w-4" />
                <span>{exp.company}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                  <Workflow className="h-4 w-4" />
                  <span className="font-medium">Responsibilities:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400 ml-4">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="p-2 rounded-full backdrop-blur-md border border-neutral-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
