"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";

const FooterSection = () => {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Email", icon: Mail, url: "mailto:jane@example.com" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

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
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Jane Doe</h3>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                >
                  Web Developer
                </Badge>
                <p className="text-slate-300 leading-relaxed max-w-md">
                  Passionate about creating beautiful, functional, and
                  user-friendly web experiences. Always learning, always
                  building, always improving.
                </p>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    className="p-3 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-400 transition-all duration-300 hover:scale-110"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-slate-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3 text-slate-400">
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a
                    href="mailto:jane@example.com"
                    className="hover:text-cyan-300 transition-colors duration-300"
                  >
                    jane@example.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>Lorem University</p>
                </div>
                <div>
                  <p className="font-medium text-white">Availability</p>
                  <Badge
                    variant="outline"
                    className="text-xs mt-1 border-green-500/50 text-green-400"
                  >
                    Open to opportunities
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <span>© 2024 Jane Doe. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee.</span>
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
