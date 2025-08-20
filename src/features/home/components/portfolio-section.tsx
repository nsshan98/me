"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Bikroy+",
    subTitle: "Simplifying POS, sales, and order management.",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    technologies: ["Next.js", " React Hook Form", "Zod", "Material UI"],
    image: "/bikroy+.png",
    externalLink: "https://bikroyplus.com/",
  },
];

export default function PortfolioSection() {
  return (
    <section
      className="bg-slate-900/50 backdrop-blur-sm py-16 px-6 relative"
      id="portfolio"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <div>
            <h2 className="text-white text-5xl align-center font-bold">
              PROJECTS
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 group border border-slate-700/50 hover:border-blue-500/30"
            >
              {/* Project Image Placeholder */}
              <div className="h-60 bg-slate-700/50 flex items-center justify-center border-b border-slate-600/50 relative overflow-hidden">
                {/* Default state */}
                <div className="flex flex-col items-center text-slate-500 transition-opacity duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-900/40 to-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  {/* Project title on hover */}
                  <h3 className="text-white text-lg font-semibold">
                    {project.title}
                  </h3>

                  {/* Action buttons */}
                  <div className="flex gap-2 self-end">
                    <Button
                      size="icon"
                      className="bg-white/90 hover:bg-white text-gray-800 h-8 w-8"
                    >
                      <Link href={project.externalLink} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-slate-800/90 p-6">
                <p className="text-white text-2xl font-semibold mb-2">
                  {project.title}
                </p>
                <p className="text-white text-sm font-medium mb-3">
                  {project.subTitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
