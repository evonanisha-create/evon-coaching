'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-surface-light">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-16 h-0.5 bg-brand-pink" />
              <span className="text-sm tracking-[0.2em] uppercase text-brand-pink font-medium">
                Career & Leadership Coach
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.05] text-brand-black mb-8 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              You know it's time
              <br />for a change.
              <span className="block mt-2 text-brand-blue">
                Let's figure out what's next.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl text-text-secondary mb-10 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I help high-achieving professionals navigate career transitions—because I've made them myself. From consulting to tech to coaching, I understand what it takes to move toward work that actually fits.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a href="#assessment" className="group btn-accent flex items-center justify-center gap-3">
                Take the Career Clarity Assessment
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#about" className="btn-secondary">
                How I Work
              </a>
            </div>

            {/* Credentials */}
            <div
              className={`mt-16 pt-8 border-t border-black/10 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
                <span>ICF Certified Coach</span>
                <span>•</span>
                <span>200+ Clients Coached</span>
                <span>•</span>
                <span>Former Deloitte & Meta</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`lg:col-span-5 order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative aspect-[3/4]">
                {/* Decorative frames */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-pink pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-brand-blue pointer-events-none" />
                
                {/* Image */}
                <div className="relative w-full h-full bg-surface-dark overflow-hidden">
                  <Image
                    src="/evon-headshot.webp"
                    alt="Evon Davis - Career & Leadership Coach"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating quote card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-2xl max-w-xs border-l-4 border-brand-pink hidden md:block">
                <p className="text-sm text-text-secondary italic leading-relaxed">
                  "Evon helped me see what I couldn't see myself. Three months later, I made a move I'd been avoiding for years."
                </p>
                <p className="text-xs text-text-muted mt-2">— Senior Manager, Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-text-muted uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-text-muted/30 to-transparent" />
      </div>
    </section>
  )
}
