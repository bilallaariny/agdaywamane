"use client"

import { useLanguage } from "./language-provider"
import { AnimatedSection } from "./animated-section"
import { Shield, Award, Palette } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t("about.authenticity"),
      description: t("about.authenticity.desc"),
      animation: "fade-right" as const,
    },
    {
      icon: Award,
      title: t("about.quality"),
      description: t("about.quality.desc"),
      animation: "fade-up" as const,
    },
    {
      icon: Palette,
      title: t("about.customization"),
      description: t("about.customization.desc"),
      animation: "fade-left" as const,
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-16 max-w-6xl">
        <AnimatedSection animation="fade-down" delay={200}>
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#202827] mb-16">{t("about.title")}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} animation={feature.animation} delay={400 + index * 200}>
              <div className="text-center group">
                {/* Icon container with creative shape */}
                <div className="relative mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-[#E6DFD9] to-[#8B7355] geometric-shape flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-[#202827]" />

                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#202827] rounded-full animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold text-[#202827] mb-4">{feature.title}</h3>

                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16">
          <div className="absolute left-1/4 top-0 w-32 h-1 bg-gradient-to-r from-[#E6DFD9] to-[#8B7355] rounded-full"></div>
          <div className="absolute right-1/4 top-8 w-24 h-1 bg-gradient-to-l from-[#202827] to-[#8B7355] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
