"use client"

import { useLanguage } from "./language-provider"
import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const { language, t } = useLanguage()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/single-tajine-background.jpg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#202827]/60 to-[#E6DFD9]/40"></div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center space-y-12 py-24">
          {/* Decorative Divider */}
          <AnimatedSection animation="fade-down" delay={200}>
            <div className="flex justify-center">
              <div className="w-40 h-1 bg-[#8B7355] rounded-full mb-6 relative">
                <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 w-10 h-10 bg-[#E6DFD9]/80 rounded-full animate-float-slow"></div>
                <div className="absolute -top-6 right-1/4 transform translate-x-1/2 w-8 h-8 bg-[#202827]/50 geometric-shape animate-float-slow animate-delay-400"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection animation="fade-up" delay={400}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#202827] leading-tight tracking-tight drop-shadow-lg">
              {t("hero.title")}
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-2xl md:text-3xl text-[#8B7355] font-semibold italic drop-shadow-md">
              {t("hero.subtitle")}
            </p>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection animation="fade-up" delay={800}>
            <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed max-w-xl mx-auto drop-shadow-sm">
              {t("hero.description")}
            </p>
          </AnimatedSection>

          {/* Call to Action */}
         
        </div>
      </div>
    </section>
  )
}