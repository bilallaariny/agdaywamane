"use client"

import { useLanguage } from "./language-provider"
import { AnimatedSection } from "./animated-section"
import { Palette, Hammer, Flame, CheckCircle, Mountain } from "lucide-react"
import Image from "next/image"

export function ProcessSection() {
  const { language } = useLanguage()

  const steps = [
    {
      icon: Mountain,
      title: language === "ar" ? "اختيار المواد" : "Sélection des Matériaux",
      description:
        language === "ar"
          ? "نستخدم طين حراري عالي الجودة من المغرب، طبيعي وبدون إضافات كيميائية"
          : "Argile réfractaire de haute qualité, sourcée localement au Maroc, naturelle et sans additifs chimiques",
      duration:language  === "ar" ? " يوم واحد" : "1 jour",
      image: "/1-material-selection.JPG" // Added leading slash for public folder
    },
    {
      icon: Hammer,
      title: language === "ar" ? "التشكيل" : "Modelage",
      description:
        language === "ar"
          ? "تشكيل يدوي على عجلة الفخار لضمان التوزيع المتجانس للحرارة"
          : "Façonnage à la main sur tour de potier pour une répartition uniforme de la chaleur",
      duration:language  === "ar" ?  " 30-45 دقيقة" :"30-45 min",
      image: "/2-shaping.JPG"
    },
    {
      icon: Palette,
      title: language === "ar" ? "الزخرفة" : "Décoration",
      description:
        language === "ar"
          ? "رسم الزخارف البربرية بأصباغ طبيعية من أكاسيد معدنية"
          : "Peinture des motifs berbères avec des pigments naturels à base d'oxydes minéraux",
      duration:language  === "ar" ? "ساعتين": "2 heures",
      image: "/3-decoration.JPG"
    },
    {
      icon: Flame,
      title: language === "ar" ? "الحرق" : "Cuisson",
      description:
        language === "ar"
          ? "حرق في فرن خشبي تقليدي على درجة 30-40°م لمدة 8-12 ساعة"
          : "Cuisson dans un four à bois traditionnel à 30-40°C pendant 8-12 heures",
      duration:language  === "ar" ?"8-12 ساعات": "8-12 heures",
      image: "/4-firing.JPG"
    },
  ]

  return (
    <section id="process" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-16 max-w-6xl">
        <AnimatedSection animation="fade-down" delay={200}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#202827] mb-4">
            {language === "ar" ? "رحلة التصنيع" : "Parcours de Fabrication"}
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto px-4">
            {language === "ar"
              ? "عملية حرفية تضمن طواجن وظيفية وجمالية، جاهزة لتجميل أطباقك أو ديكورك"
              : "Un processus artisanal qui garantit des tajines fonctionnels et esthétiques, prêts à sublimer vos plats ou votre décoration"}
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#E6DFD9] via-[#8B7355] to-[#202827] rounded-full hidden lg:block"></div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.title}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={300 + index * 200}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content - order changes on mobile to be more readable */}
                  <div className="flex-1 w-full lg:max-w-md order-2 lg:order-1">
                    <div
                      className={`bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-[#E6DFD9] text-center lg:text-left`}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#E6DFD9] to-[#8B7355] rounded-full flex items-center justify-center">
                          <step.icon className="w-6 h-6 md:w-8 md:h-8 text-[#202827]" />
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-[#202827] mb-3">{step.title}</h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                      <div className="inline-flex items-center px-4 py-2 bg-[#202827] text-white rounded-full text-sm font-medium">
                        {language === "ar" ? "المدة: " : "Durée: "}
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Step number - centered on mobile */}
                  <div className="relative z-10 order-1 lg:order-2">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#202827] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 border-4 border-[#E6DFD9] rounded-full animate-pulse"></div>
                  </div>

                  {/* Visual element - full width on mobile */}
                  <div className="flex-1 w-full lg:max-w-md order-3">
                    <div className="relative aspect-video rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0} // Only prioritize first image
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#202827]/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Summary */}
        <AnimatedSection animation="fade-up" delay={1000}>
          <div className="mt-12 md:mt-20 text-center bg-gradient-to-r from-[#E6DFD9] to-[#8B7355]/30 rounded-2xl md:rounded-3xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#202827] mb-3 md:mb-4">
              {language === "ar" ? "المدة الإجمالية: 4-7 أيام" : "Durée totale : 4-7 jours par tajine"}
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              {language === "ar"
                ? "حسب الحجم والتعقيد - التزام بالمسؤولية البيئية: إعادة تدوير بقايا الطين"
                : "selon la taille et la complexité - Engagement éco-responsable : recyclage des restes d'argile"}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}