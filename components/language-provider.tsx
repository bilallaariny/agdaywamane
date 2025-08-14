"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.products": "Nos Créations",
    "nav.process": "Fabrication",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Tajines d'Artisanat",
    "hero.subtitle": "Votre destination pour des tajines authentiques et artisanaux",
    "hero.description":
      "Nous sommes une équipe passionnée par la tradition culinaire marocaine, dédiée à la création de tajines de qualité supérieure.",
    "hero.cta": "Découvrir nos créations",

    // About
    "about.title": "Pourquoi nous choisir ?",
    "about.authenticity": "Authenticité",
    "about.authenticity.desc": "Respect des techniques traditionnelles marocaines",
    "about.quality": "Qualité",
    "about.quality.desc": "Matériaux naturels, résistants à la chaleur, sans produits chimiques",
    "about.customization": "Personnalisation",
    "about.customization.desc": "Designs sur mesure pour répondre à vos envies",

    // Products
    "products.title": "Nos Collections",
    "products.description":"Découvrez nos créations authentiques, alliant tradition millénaire et design contemporain",
    "products.classic": "Collection Classique",
    "products.modern": "Collection Moderne",
    "products.price": "Prix",

    // Footer
    "footer.contact": "Contactez-nous",
    "footer.follow": "Suivez-nous",
    "footer.rights": "Tous droits réservés",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.products": "منتجاتنا",
    "nav.process": "التصنيع",
    "nav.contact": "اتصل بنا",

    // Hero
    "hero.title": "طاجين الحرف اليدوية",
    "hero.subtitle": "وجهتك للطواجن الأصيلة والحرفية",
    "hero.description": "نحن فريق شغوف بالتقاليد الطبخية المغربية، مكرس لإنتاج طواجن عالية الجودة.",
    "hero.cta": "اكتشف إبداعاتنا",

    // About
    "about.title": "لماذا تختارنا؟",
    "about.authenticity": "الأصالة",
    "about.authenticity.desc": "احترام التقنيات التقليدية المغربية",
    "about.quality": "الجودة",
    "about.quality.desc": "مواد طبيعية، مقاومة للحرارة، بدون مواد كيميائية",
    "about.customization": "التخصيص",
    "about.customization.desc": "تصاميم مخصصة لتلبية رغباتك",

    // Products
    "products.title": "مجموعاتنا",
    "products.description":"اكتشفوا إبداعاتنا الأصيلة التي تجمع بين التراث الألفي والتصميم المعاصر",
    "products.classic": "المجموعة الكلاسيكية",
    "products.modern": "المجموعة العصرية",
    "products.price": "السعر",

    // Footer
    "footer.contact": "اتصل بنا",
    "footer.follow": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["fr"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "rtl font-serif" : "font-sans"}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
