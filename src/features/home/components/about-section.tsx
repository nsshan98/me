import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {

  const drives = [
    {
      text: "Creating intuitive and accessible user experiences",
      color: "bg-cyan-400",
    },
    {
      text: "Solving complex problems with elegant solutions",
      color: "bg-blue-400",
    },
    {
      text: "Continuous learning and professional growth",
      color: "bg-teal-400",
    },
    {
      text: "Collaborating with talented teams and individuals",
      color: "bg-purple-400",
    },
    {
      text: "Building inclusive and user-first designs",
      color: "bg-pink-400",
    },
    {
      text: "Attention to detail with pixel-perfect UIs",
      color: "bg-green-400",
    },
    {
      text: "Optimizing performance for fast, smooth experiences",
      color: "bg-yellow-400",
    },
    {
      text: "Merging creativity with clean, maintainable code",
      color: "bg-orange-400",
    },
    {
      text: "Staying ahead of the curve with modern frameworks & tools",
      color: "bg-indigo-400",
    },
    {
      text: "Crafting smooth animations and micro-interactions",
      color: "bg-rose-400",
    },
  ];

  return (
    <section
      className="relative min-h-screen py-20 px-4 bg-slate-800/50 backdrop-blur-sm overflow-hidden"
      id="about-me"
    >
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

        <div className="">
          {/* Personal Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-8 bg-slate-700/30 border-slate-600/30 backdrop-blur-sm hover:bg-slate-700/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  My Journey
                </h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Five years ago, I wrote my first lines of code out of pure
                    curiosity — and that spark quickly grew into a passion for
                    crafting beautiful, intuitive digital experiences. What
                    started as a hobby soon became my career, and I&apos;ve
                    loved every moment of the journey.
                  </p>
                  <p>
                    As a Frontend Developer, I specialize in bringing ideas to
                    life through modern JavaScript frameworks, sleek UI design,
                    and a deep focus on user experience. My goal is simple: to
                    build applications that not only perform flawlessly but also
                    feel effortless and enjoyable to use.
                  </p>
                  <p>
                    Beyond coding, I enjoy staying ahead of the curve with the
                    latest trends in web technologies. For me, development
                    isn&apos;t just about writing code — it&apos;s about
                    creating meaningful, user-first solutions that make an
                    impact.
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
                  {drives.map((drive, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${drive.color}`}
                      ></div>
                      <p>{drive.text}</p>
                    </div>
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
