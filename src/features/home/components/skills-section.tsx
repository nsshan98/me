"use client"

const skillsData = {
  Featured: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js"],
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"],
  Frontend: ["React", "Next.js", "Vue.js", "Svelte", "Tailwind CSS", "Framer Motion", "Material-UI", "Shadcn/ui"],
  Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "Prisma"],
  "Tools & Workflow": ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify"],
  "Cloud & DevOps": ["AWS", "Vercel", "Netlify", "Docker", "CI/CD"],
}

const categoryColors = {
  Featured: {
    gradient: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/25",
    hover: "hover:shadow-purple-500/40 hover:from-purple-400 hover:to-pink-400",
    text: "text-white",
  },
  Languages: {
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/25",
    hover: "hover:shadow-blue-500/40 hover:from-blue-400 hover:to-cyan-400",
    text: "text-white",
  },
  Frontend: {
    gradient: "from-green-500 to-emerald-500",
    shadow: "shadow-green-500/25",
    hover: "hover:shadow-green-500/40 hover:from-green-400 hover:to-emerald-400",
    text: "text-white",
  },
  Backend: {
    gradient: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/25",
    hover: "hover:shadow-orange-500/40 hover:from-orange-400 hover:to-red-400",
    text: "text-white",
  },
  "Tools & Workflow": {
    gradient: "from-indigo-500 to-purple-500",
    shadow: "shadow-indigo-500/25",
    hover: "hover:shadow-indigo-500/40 hover:from-indigo-400 hover:to-purple-400",
    text: "text-white",
  },
  "Cloud & DevOps": {
    gradient: "from-teal-500 to-blue-500",
    shadow: "shadow-teal-500/25",
    hover: "hover:shadow-teal-500/40 hover:from-teal-400 hover:to-blue-400",
    text: "text-white",
  },
}

const skillIcons = {
  React: "⚛️",
  "Next.js": "▲",
  JavaScript: "JS",
  TypeScript: "TS",
  "Tailwind CSS": "🎨",
  "Node.js": "🟢",
  HTML5: "🌐",
  CSS3: "🎨",
  Python: "🐍",
  "Vue.js": "V",
  Svelte: "🔥",
  "Framer Motion": "🎬",
  "Material-UI": "M",
  "Shadcn/ui": "✨",
  Express: "E",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
  Firebase: "🔥",
  Prisma: "P",
  Git: "📝",
  GitHub: "🐙",
  "VS Code": "💻",
  Figma: "🎨",
  Vercel: "▲",
  Netlify: "🌐",
  AWS: "☁️",
  Docker: "🐳",
  "CI/CD": "🔄",
}

export default function SkillsSection() {
  const categories = Object.keys(skillsData)

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black mx-auto px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4 font-mono tracking-wider">
            Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const colors = categoryColors[category as keyof typeof categoryColors]

            return (
              <div key={category} className="space-y-6">
                {/* Category Header */}
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">{category}</h2>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-4">
                  {skillsData[category as keyof typeof skillsData].map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`group relative bg-gradient-to-r ${colors.gradient} rounded-xl px-6 py-3 ${colors.shadow} ${colors.hover} transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer animate-fade-in-up`}
                      style={{
                        animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      {/* Skill Content */}
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <span className="text-lg font-bold">
                          {skillIcons[skill as keyof typeof skillIcons] || "⚡"}
                        </span>

                        {/* Skill Name */}
                        <span className={`${colors.text} font-semibold text-sm md:text-base font-mono tracking-wide`}>
                          {skill}
                        </span>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
