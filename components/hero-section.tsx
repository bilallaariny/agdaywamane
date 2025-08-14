"use client"

import { useLanguage } from "./language-provider"
import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export function HeroSection() {
  const { language, t } = useLanguage()

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 moroccan-pattern">
      <div className="container mx-auto px-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-right" delay={200}>
              <h1 className="text-5xl lg:text-7xl font-bold text-[#202827] leading-tight">{t("hero.title")}</h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={400}>
              <p className="text-xl text-[#8B7355] font-medium">{t("hero.subtitle")}</p>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={600}>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">{t("hero.description")}</p>
            </AnimatedSection>

          </div>

          {/* Hero Image */}
          <AnimatedSection animation="fade-left" delay={400} className="relative">
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#E6DFD9] geometric-shape animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-[#8B7355] rounded-full animate-float animate-delay-400"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-[#E6DFD9] to-[#202827] p-8 rounded-3xl shadow-2xl">
                <img
                  src="/IMG_2400.JPG"
                  alt="Tajine artisanal marocain"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />

                {/* Overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#202827]/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
