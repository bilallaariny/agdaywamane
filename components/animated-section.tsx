"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-down"
  delay?: number
  className?: string
}

export function AnimatedSection({ children, animation = "fade-up", delay = 0, className = "" }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(`animate-${animation}`)
              entry.target.classList.add("fade-in-view")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [animation, delay])

  return (
    <div ref={ref} className={`fade-element ${className}`}>
      {children}
    </div>
  )
}
