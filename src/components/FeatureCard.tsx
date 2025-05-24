import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:shadow-brand-blue/20 border border-white/10 hover:scale-105",
        className
      )}
    >
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};
