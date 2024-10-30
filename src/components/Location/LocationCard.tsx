import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { CobeGlobe } from "../Globe/CobeGlobe";

export function LocationCard() {
  return (
    <Card className="col-span-12 md:col-span-6">
      <CardHeader className="flex flex-row items-center gap-2">
        <MapPin className="w-4 h-4" />
        <span>Colima, México</span>
      </CardHeader>
      <CardContent className="relative h-[300px] overflow-hidden">
        <CobeGlobe />
      </CardContent>
    </Card>
  );
}
