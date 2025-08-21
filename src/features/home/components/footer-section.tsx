"use client";
import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Coffee } from "lucide-react";

const FooterSection = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-4">
        {/* Newsletter Section */}
        <div className="py-8 border-t border-slate-700/50">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-2">
              Stay Updated
            </h4>
            <p className="text-slate-300 mb-6">
              Subscribe to get notified about new articles, projects, and
              updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
              <Button className="px-6 bg-cyan-600 hover:bg-cyan-700 text-white transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© 2025 Nazmus Sakib. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
             <span>and lots of</span>
              <Coffee className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for freelance work</span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-2 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-400 transition-all duration-300 hover:scale-110"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="sr-only">Back to top</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
