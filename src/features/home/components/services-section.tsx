import { Code2, Palette, Smartphone, Zap, Globe, Layout, CircleCheck,MessagesSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building modern, scalable web applications with React, Next.js, TypeScript, and the latest frontend technologies.",
    features: ["Component Architecture", "State Management", "API Integration"],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Transforming designs into pixel-perfect, interactive user interfaces with attention to detail.",
    features: ["Design Systems", "Figma to Code", "Micro-interactions"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Creating seamless experiences across all devices with mobile-first, responsive design principles.",
    features: ["Mobile-First", "Cross-Browser", "Accessibility"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, SEO, and user experience with modern best practices.",
    features: ["Code Splitting", "SEO Optimization", "Core Web Vitals"],
  },
  {
    icon: Globe,
    title: "Frontend Architecture",
    description: "Designing scalable frontend architectures with modern tooling and development workflows.",
    features: ["Module Bundling", "Build Systems", "CI/CD Setup"],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Creating high-converting landing pages and marketing websites with modern design trends.",
    features: ["Conversion Focused", "A/B Testing", "Analytics Integration"],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-slate-800/50 backdrop-blur-sm" id="services">
            <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frontend Development Services</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Crafting exceptional digital experiences with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-float">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white mb-4 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CircleCheck size={16} className="text-white"/>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:opacity-10 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 ">
          <Link href={`#contact`}>
          <div className="inline-flex bg-gradient-to-r from-cyan-500/10 to-blue-500/10 items-center gap-4 p-6 rounded-2xl shadow-card">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
              <MessagesSquare className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-white">Ready to start your project?</h4>
              <p className="text-white text-sm">Let&apos;s discuss how I can help bring your ideas to life</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
