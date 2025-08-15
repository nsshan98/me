import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  current: boolean;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: "1",
      position: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      current: true,
      description:
        "Leading development of enterprise web applications and mentoring junior developers.",
      achievements: [
        "Architected and developed a microservices-based e-commerce platform serving 100K+ users",
        "Improved application performance by 40% through code optimization and caching strategies",
        "Led a team of 5 developers and established best practices for code quality and testing",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
      companyUrl: "https://techcorp.com",
    },
    {
      id: "2",
      position: "Full Stack Developer",
      company: "InnovateLab",
      location: "Remote",
      period: "2020 - 2022",
      current: false,
      description:
        "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Built 15+ responsive web applications for various clients across different industries",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with UX/UI designers to create pixel-perfect user interfaces",
      ],
      technologies: ["React", "Vue.js", "Python", "Django", "MySQL", "Azure"],
      companyUrl: "https://innovatelab.com",
    },
    {
      id: "3",
      position: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2018 - 2020",
      current: false,
      description:
        "Focused on creating engaging user experiences and implementing responsive designs.",
      achievements: [
        "Developed the company's main product interface used by 50K+ daily active users",
        "Reduced page load times by 50% through optimization and lazy loading techniques",
        "Implemented accessibility standards achieving WCAG 2.1 AA compliance",
      ],
      technologies: ["JavaScript", "React", "SASS", "Webpack", "Jest", "Figma"],
      companyUrl: "https://startupxyz.com",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-slate-800/50 backdrop-blur-sm relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My journey through various roles and the impact I&apos;ve made along the
            way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 opacity-50 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative">
                {/* Timeline dot - desktop only */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-800 shadow-lg hidden md:block z-10" />

                <div className="md:ml-20">
                  <Card className="group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border-slate-600/50 hover:border-blue-400/50 bg-slate-700/80 hover:bg-slate-700/90 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="text-xl md:text-2xl text-white group-hover:text-blue-400 transition-colors">
                            {experience.position}
                          </CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-blue-400">
                                {experience.company}
                              </span>
                              {experience.companyUrl && (
                                <ExternalLink className="w-4 h-4 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer" />
                              )}
                            </div>
                            <div className="flex items-center gap-1 text-slate-400 text-sm">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span className="text-sm font-medium text-slate-300">
                            {experience.period}
                          </span>
                          {experience.current && (
                            <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardDescription className="text-base leading-relaxed mt-3 text-slate-300">
                        {experience.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-6">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-white mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-slate-300"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                <span className="text-sm leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs bg-slate-600/50 hover:bg-blue-500/20 hover:border-blue-400/50 transition-colors border-slate-500/50 text-slate-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300">
              Want to know more about my experience?
            </span>
            <ExternalLink className="w-4 h-4 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
