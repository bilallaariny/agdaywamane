"use client"

import { useLanguage } from "./language-provider"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer id="contact" className="bg-[#202827] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
             <img src="9_AGDAY WAMANE_Export_blanc_horiz.png" alt="" className="w-32 h-7"/>
            </div>
            <p className="text-[#E6DFD9] leading-relaxed">
              {language === "ar"
                ? "شغف بالتقاليد الطبخية المغربية وإنتاج طواجن عالية الجودة"
                : "Passion pour la tradition culinaire marocaine et la création de tajines de qualité supérieure"}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E6DFD9]">{t("footer.contact")}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8B7355]" />
                <span>contact@tajines-artisanat.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8B7355]" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#8B7355]" />
                <span>{language === "ar" ? "المغرب,شيشاوة" : "Chichaoua, Maroc"}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E6DFD9]">{t("footer.follow")}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#E6DFD9] hover:text-[#202827] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#E6DFD9] hover:text-[#202827] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#E6DFD9] hover:text-[#202827] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Testimonials */}
            <div className="bg-[#8B7355]/20 p-4 rounded-2xl">
              <p className="text-sm italic text-[#E6DFD9] mb-2">
                {language === "ar"
                  ? '"طاجين رائع يطبخ بشكل مثالي!"'
                  : '"Un tajine magnifique qui cuit à la perfection !"'}
              </p>
              <p className="text-xs text-gray-400">{language === "ar" ? "- مريم د.، باريس" : "- Marie D., Paris"}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8B7355] mt-12 pt-8 text-center">
          <p className="text-[#E6DFD9]">© 2024 Tajines d'Artisanat. {t("footer.rights")}.</p>
        </div>
      </div>
    </footer>
  )
}
