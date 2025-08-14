import React from "react";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    category: string;
    description?: string;
    icon?: string;
  };
  index: number;
}

const SkillCardSection = ({ skill, index }: SkillCardProps) => {
  return (
    <div
      className="skill-card group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {skill.icon && (
            <div className="text-2xl p-2 rounded-lg bg-primary/10 text-primary group-hover:animate-float">
              {skill.icon}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
            <Badge variant="secondary" className="text-xs mt-1">
              {skill.category}
            </Badge>
          </div>
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          {skill.level}%
        </span>
      </div>

      {skill.description && (
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {skill.description}
        </p>
      )}

      <div className="skill-progress h-2">
        <div
          className="skill-progress-bar animate-skill-progress"
          style={
            {
              "--progress-width": `${skill.level}%`,
              animationDelay: `${index * 0.1 + 0.5}s`,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};

export default SkillCardSection;
