"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  Globe,
  Palette,
  Braces,
  FileType,
  Atom,
  SquareCode,
  Database,
  Layers,
  Server,
  GitBranch,
  Figma,
  Layout,
  Wind,
  Workflow,
  Shield,
  Network,
  Cloud,
  DatabaseBackup,
  Lock,
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Frontend & Frameworks",
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileType },
      { name: "React", icon: Atom },
      { name: "Next.js", icon: SquareCode },
      { name: "TanStack Query", icon: Database },
      { name: "Material-UI", icon: Layers },
      { name: "Shadcn/ui", icon: Layout },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Workflow },
      { name: "Nest.js", icon: Shield },
      { name: "RESTful APIs", icon: Network },
      { name: "NextAuth.js", icon: Lock },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Figma", icon: Figma },
      { name: "Vercel", icon: Cloud },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: DatabaseBackup },
    ],
  },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("technical-skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="technical-skills"
      className="bg-slate-900/50 py-20 px-6 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-cyan-400 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Technical Skills
          </h2>
          <p
            className={`text-gray-300 text-lg max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            A comprehensive overview of my technical expertise and proficiency
            levels across different technologies and tools.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <h3
                className={`text-2xl font-semibold text-white mb-6 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                {category.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <Card
                      key={skill.name}
                      className={`bg-slate-800/80 border-slate-700 p-6 hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group backdrop-blur-sm ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                      style={{
                        transitionDelay: `${
                          categoryIndex * 200 + skillIndex * 100
                        }ms`,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                        </div>
                        <h4 className="text-white font-medium text-lg group-hover:text-cyan-300 transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div
            className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 font-medium text-lg">
                Forever curious, always evolving
              </span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
          <p
            className={`text-gray-400 mt-4 text-sm transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Embracing the endless journey of discovery in the ever-expanding
            digital universe
          </p>
        </div>
      </div>
    </section>
  );
}
