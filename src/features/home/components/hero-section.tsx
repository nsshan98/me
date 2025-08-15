import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Navbar from "@/components/shared/navbar";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm bg-slate-700/50 text-cyan-400 border-cyan-500/20"
            >
              👋 Welcome to my portfolio
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Full Stack Developer
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              I&apos;m <span className="text-cyan-400 font-semibold">Jane Doe</span>,
              a passionate developer who creates
              <span className="text-blue-400 font-semibold">
                {" "}
                beautiful
              </span>{" "}
              and
              <span className="text-purple-400 font-semibold">
                {" "}
                functional
              </span>{" "}
              web experiences
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-cyan-600 hover:bg-cyan-700 text-white border-0"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center gap-6 mb-16">
              <Button
                variant="ghost"
                size="lg"
                className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50"
              >
                <Github className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </div>

            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 mx-auto text-slate-400" />
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>
    </div>
  );
};

export default HeroSection;
