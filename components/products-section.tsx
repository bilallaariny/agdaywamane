"use client"

import { useLanguage } from "./language-provider"
import { AnimatedSection } from "./animated-section"
import { Sparkles } from "lucide-react"

export function ProductsSection() {
  const { t } = useLanguage()

  const products = [
    {
      name: "Tajine Berbère Standard",
      price: "45 €",
      image: "/IMG_2384.JPG",
      features: ["Diamètre 30 cm", "4 personnes", "Motifs berbères"],
      category: "classic",
      badge: "Populaire",
      rating: 4.8,
      size: "large",
    },
    {
      name: "Tajine Familial",
      price: "60 €",
      image: "/IMG_2389.JPG",
      features: ["Diamètre 40 cm", "6-8 personnes", "Compatible four"],
      category: "classic",
      badge: "Artisanal",
      rating: 4.9,
      size: "extra-large",
    },
    {
      name: "Tajine Nomade",
      price: "35 €",
      image: "/IMG_2392.JPG",
      features: ["Diamètre 25 cm", "Portable", "Couleurs vives"],
      category: "modern",
      badge: "Nouveau",
      rating: 4.7,
      size: "medium",
    },
    {
      name: "Tajine Royal",
      price: "85 €",
      image: "/IMG_2393.JPG",
      features: ["Édition limitée", "Fait main", "Motifs royaux"],
      category: "premium",
      badge: "Exclusif",
      rating: 5.0,
      size: "large",
    },
    {
      name: "Tajine Moderne",
      price: "55 €",
      image: "/IMG_2394.JPG",
      features: ["Design contemporain", "5 personnes", "Couleurs modernes"],
      category: "modern",
      badge: "Tendance",
      rating: 4.6,
      size: "medium",
    },
   
  ]

  const getImageHeight = (size: string) => {
    switch (size) {
      case "small":
        return "h-64"
      case "medium":
        return "h-72"
      case "large":
        return "h-80"
      case "extra-large":
        return "h-96"
      default:
        return "h-80"
    }
  }

  const getColumnSpan = (size: string, index: number) => {
    switch (size) {
      case "extra-large":
        return "md:col-span-2 lg:col-span-2"
      case "large":
        return "md:col-span-1 lg:col-span-1"
      case "medium":
        return "md:col-span-1 lg:col-span-1"
      case "small":
        return "md:col-span-1 lg:col-span-1"
      default:
        return "md:col-span-1 lg:col-span-1"
    }
  }

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-br from-[#E6DFD9]/20 via-white to-[#E6DFD9]/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 w-16 h-16 bg-[#202827]/5 geometric-shape animate-float"></div>
        <div
          className="absolute top-32 right-10 w-12 h-12 bg-[#E6DFD9]/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-10 h-10 bg-[#202827]/10 rotate-45 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-16 max-w-6xl relative z-10">
        <AnimatedSection animation="fade-down" delay={200}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#202827]"></div>
              <Sparkles className="w-6 h-6 text-[#202827]" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#202827]"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#202827] mb-4 relative">
              {t("products.title")}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#E6DFD9] rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#202827] rounded-full opacity-20"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t("products.description")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {products.map((product, index) => (
            <AnimatedSection
              key={product.name}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={400 + index * 200}
              className={getColumnSpan(product.size, index)}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className={`relative ${getImageHeight(product.size)} overflow-hidden`}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
