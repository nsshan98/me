"use client"

import Navbar from "@/components/shared/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="min-h-screen relative bg-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-500/15 to-cyan-500/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Navbar />

      <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">

        {/* Decorative dots pattern */}
        <div className="absolute bottom-20 right-20 grid grid-cols-4 gap-2 opacity-30">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          ))}
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-lg">
                <span className="text-2xl">👋</span>
                <span className="text-slate-300">Hey</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">I'm Nazmus Sakib</h1>
                <p className="text-xl lg:text-2xl text-slate-300">
                  I am into{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    Frontend Development
                  </span>
                </p>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                I focus on developing user-friendly web applications that meet the client's requirements, with attention
                to detail, scalability, and performance.
              </p>

              <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full bg-slate-700/50 hover:bg-cyan-600 text-slate-300 hover:text-white p-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-slate-600/50"
              >
                <Link href={'https://www.linkedin.com/in/nsshan98/'} ><Linkedin className="w-4 h-4" /></Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full bg-slate-700/50 hover:bg-cyan-600 text-slate-300 hover:text-white p-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-slate-600/50"
              >
                <Link href={'https://github.com/nsshan98/'} ><Github className="w-4 h-4" /></Link>
              </Button>

            </div>
            </div>

            {/* Right avatar */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-800 to-indigo-900 rounded-full flex items-center justify-center shadow-2xl">
                  <Image
                    src="/me.png"
                    alt="Me"
                    width={300}
                    height={300}
                    className="w-75 h-75 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection