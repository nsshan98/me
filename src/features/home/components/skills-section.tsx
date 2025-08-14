"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const skills = [
  {
    name: "React & Next.js",
    percentage: 95,
    category: "Frontend",
    description:
      "Building modern, scalable web applications with React ecosystem",
    icon: "⚛️",
    categoryColor: "bg-emerald-500",
  },
  {
    name: "TypeScript",
    percentage: 90,
    category: "Language",
    description: "Type-safe development for robust applications",
    icon: "📘",
    categoryColor: "bg-emerald-500",
  },
  {
    name: "Node.js & Express",
    percentage: 85,
    category: "Backend",
    description: "Server-side development and API creation",
    icon: "🟢",
    categoryColor: "bg-emerald-500",
  },
  {
    name: "Tailwind CSS",
    percentage: 92,
    category: "Styling",
    description: "Utility-first CSS framework for rapid UI development",
    icon: "🎨",
    categoryColor: "bg-emerald-500",
  },
  {
    name: "MongoDB & PostgreSQL",
    percentage: 80,
    category: "Database",
    description: "Database design and management for web applications",
    icon: "🗄️",
    categoryColor: "bg-emerald-500",
  },
  {
    name: "AWS & Docker",
    percentage: 75,
    category: "DevOps",
    description: "Cloud deployment and containerization",
    icon: "☁️",
    categoryColor: "bg-emerald-500",
  },
  {
    name: "Python & Django",
    percentage: 88,
    category: "Backend",
    description: "Full-stack development with Python ecosystem",
    icon: "🐍",
    categoryColor: "bg-emerald-500",
  },
  {
    name: "GraphQL & REST APIs",
    percentage: 85,
    category: "API",
    description: "Modern API design and implementation",
    icon: "🔗",
    categoryColor: "bg-emerald-500",
  },
  {
    name: "Git & GitHub",
    percentage: 93,
    category: "Tools",
    description: "Version control and collaborative development",
    icon: "📦",
    categoryColor: "bg-emerald-500",
  },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>(
    new Array(skills.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger the progress bar animations
            skills.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedBars((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
            });
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
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
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
            A comprehensive overview of my technical capabilities and expertise
            in modern web development technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`bg-slate-700/80 border-slate-600 p-6 hover:bg-slate-650 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group backdrop-blur-sm ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <Badge
                        className={`${skill.categoryColor} text-white text-xs mt-1 group-hover:shadow-lg transition-shadow duration-300`}
                      >
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                  <span className="text-gray-200 font-bold text-lg group-hover:text-cyan-300 group-hover:drop-shadow-lg transition-all duration-300">
                    {skill.percentage}%
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  {skill.description}
                </p>

                <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden relative">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-2000 ease-out relative ${
                      animatedBars[index] ? "opacity-100" : "opacity-0"
                    } group-hover:shadow-lg group-hover:shadow-emerald-500/50`}
                    style={{
                      width: animatedBars[index]
                        ? `${skill.percentage}%`
                        : "0%",
                      transition: "width 2s ease-out, opacity 0.5s ease-out",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div
            className={`inline-flex items-center gap-3 bg-slate-700/80 px-6 py-3 rounded-full border border-slate-600 backdrop-blur-sm hover:bg-slate-600/80 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="w-6 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full relative overflow-hidden">
              <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
            <span className="text-gray-300 hover:text-cyan-300 transition-colors duration-300">
              Always learning and growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
