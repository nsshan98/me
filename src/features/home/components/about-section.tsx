import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: Heart, label: "Happy Clients", value: "25+" },
    { icon: Users, label: "Team Collaborations", value: "10+" },
  ];

  const interests = [
    "Open Source",
    "AI/ML",
    "Web3",
    "Mobile Development",
    "UI/UX Design",
    "DevOps",
    "Performance Optimization",
    "Accessibility",
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 bg-slate-800/50 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-slate-700/20 to-slate-900/40" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="p-8 bg-slate-700/30 border-slate-600/30 backdrop-blur-sm hover:bg-slate-700/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  My Journey
                </h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I started my journey in web development 5 years ago, driven
                    by curiosity and a passion for creating digital solutions
                    that make a difference. What began as a hobby quickly
                    evolved into a career I absolutely love.
                  </p>
                  <p>
                    I specialize in full-stack development with a focus on
                    modern JavaScript frameworks, cloud technologies, and user
                    experience design. I believe in writing clean, maintainable
                    code and building applications that not only work well but
                    feel great to use.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me contributing to open
                    source projects, mentoring junior developers, or exploring
                    the latest trends in technology. I&apos;m always eager to learn
                    and share knowledge with the community.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-slate-700/30 border-slate-600/30 backdrop-blur-sm hover:bg-slate-700/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  What Drives Me
                </h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <p>Creating intuitive and accessible user experiences</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p>Solving complex problems with elegant solutions</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <p>Continuous learning and professional growth</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <p>Collaborating with talented teams and individuals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Interests */}
          <div className="space-y-6">
            <Card className="p-8 bg-slate-700/30 border-slate-600/30 backdrop-blur-sm hover:bg-slate-700/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  By the Numbers
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 mb-3 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                        <stat.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300" />
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-slate-700/30 border-slate-600/30 backdrop-blur-sm hover:bg-slate-700/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Current Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="px-3 py-1 bg-slate-600/50 text-slate-200 border-slate-500/30 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
