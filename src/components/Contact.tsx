'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-brand-black text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-pink/10 to-transparent" />
      </div>

      <div className="container-main relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span
            className={`inline-flex items-center justify-center gap-2 text-sm font-medium text-brand-pink mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-8 h-px bg-brand-pink" />
            Let's Talk
            <span className="w-8 h-px bg-brand-pink" />
          </span>

          <h2
            className={`font-display text-display-md md:text-display-lg mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ready to take the next step?
          </h2>

          <p
            className={`text-xl text-white/70 mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Book a free 30-minute discovery call. We'll talk about where you are, where you want to be, and whether coaching is the right next step for you.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* 
              TODO: Replace with actual Cal.com or Calendly embed/link
              For now, using a placeholder link
            */}
            <a
              href="https://cal.com/evondavis/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-brand-pink text-white hover:bg-white hover:text-brand-black text-lg px-10 py-4"
            >
              Book Your Free Discovery Call
            </a>
          </div>

          {/* What to Expect */}
          <div
            className={`mt-16 pt-10 border-t border-white/10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h3 className="font-display text-lg mb-6">What to expect on the call:</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="p-4 border border-white/10">
                <div className="text-brand-pink font-display text-2xl mb-2">01</div>
                <h4 className="font-medium mb-1">Share your story</h4>
                <p className="text-sm text-white/60">
                  Tell me about where you are and what's on your mind.
                </p>
              </div>
              <div className="p-4 border border-white/10">
                <div className="text-brand-pink font-display text-2xl mb-2">02</div>
                <h4 className="font-medium mb-1">Get initial insights</h4>
                <p className="text-sm text-white/60">
                  I'll reflect back what I'm hearing and share perspective.
                </p>
              </div>
              <div className="p-4 border border-white/10">
                <div className="text-brand-pink font-display text-2xl mb-2">03</div>
                <h4 className="font-medium mb-1">Explore next steps</h4>
                <p className="text-sm text-white/60">
                  We'll discuss if and how coaching might help.
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div
            className={`mt-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-white/50 text-sm">
              Prefer email?{' '}
              <a
                href="mailto:hello@evondavis.com"
                className="text-brand-pink hover:text-white transition-colors"
              >
                hello@evondavis.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
