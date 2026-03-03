'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
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
      id="about"
      aria-label="About Evon Davis, career transition coach"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-16 h-0.5 bg-brand-pink" />
            <span className="text-sm tracking-[0.2em] uppercase text-brand-pink font-medium">
              About
            </span>
          </div>

          <h2
            className={`font-display text-display-md md:text-display-lg text-brand-black transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            I've made the career pivots
            <br />
            <span className="bg-brand-pink text-white px-3 py-1 inline-block leading-[1.2] mt-1">I now help others navigate.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Story */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="space-y-6 text-text-secondary">
              <p className="text-lg leading-relaxed">
                When the pandemic slowed everything down, I finally had space to look around and reflect. I was approaching another performance review and realized I was working hard to progress in a career I could do but didn't care much about. I wanted to change that.
              </p>
              <p className="text-lg leading-relaxed">
                I'd spent years in strategy consulting at Deloitte and BTS, then made the leap to tech at Meta. Same strategy skills, completely different contexts. But I kept coming back to the same question: what if I could take everything I'd learned and apply it in a way that actually aligned to my values?
              </p>
              <p className="text-lg leading-relaxed">
                I anguished over that choice for not days or months, but years. Eventually I realized I needed to face the "what if." I didn't want regrets or resentments, so I knew giving coaching a real try was the way to go.
              </p>
              <p className="text-lg leading-relaxed">
                When I finally left Meta to coach full-time, I was relieved and excited to try something completely different than anything I'd done before. I knew that at the very least it would be an interesting story, but more likely that I'd learn a lot in the process.
              </p>
              <p className="text-lg leading-relaxed">
                Now I've worked with over 200 clients, from individual contributors to executives, across industries from tech to healthcare to financial services. The biggest difference in my day-to-day? The personal agency and flexibility. I no longer feel like I'm pouring from an empty cup.
              </p>
            </div>

            {/* Philosophy Quote */}
            <blockquote
              className={`mt-10 pl-6 border-l-4 border-brand-pink text-xl italic text-text-secondary transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              "You are capable of figuring out what works for you."
            </blockquote>
          </div>

          {/* Right Column - Credentials & Background */}
          <div>
            {/* Credentials */}
            <div
              className={`mb-12 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h3 className="text-sm tracking-[0.2em] uppercase text-text-muted mb-6">
                Credentials
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'ICF ACC', description: 'International Coaching Federation', color: 'bg-brand-pink' },
                  { label: 'CPC, IPEC', description: 'Certified Professional Coach', color: 'bg-brand-blue' },
                  { label: '200+ Clients', description: 'Across Industries & Levels', color: 'bg-brand-black' },
                ].map((cred, index) => (
                  <div
                    key={cred.label}
                    className="flex items-start gap-4 p-5 bg-surface-light"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${cred.color}`} />
                    <div>
                      <p className="font-medium text-brand-black">{cred.label}</p>
                      <p className="text-sm text-text-muted">{cred.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div
              className={`mb-12 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h3 className="text-sm tracking-[0.2em] uppercase text-text-muted mb-6">
                Career Path
              </h3>
              <div className="relative pl-8 border-l-2 border-surface-dark space-y-8">
                {[
                  { company: 'Coaching', role: 'Career & Leadership Coach', period: '2022–Present', color: 'bg-brand-pink' },
                  { company: 'Meta', role: 'Strategy & Operations', period: '2018–2022', color: 'bg-brand-blue' },
                  { company: 'BTS & Deloitte', role: 'Strategy Consultant', period: '2012–2018', color: 'bg-brand-black' },
                ].map((job) => (
                  <div key={job.company} className="relative">
                    <div className={`absolute -left-[25px] w-3 h-3 rounded-full border-4 border-white ${job.color}`} />
                    <p className="font-medium text-brand-black">{job.company}</p>
                    <p className="text-sm text-text-secondary">{job.role}</p>
                    <p className="text-xs text-text-muted mt-1">{job.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h3 className="text-sm tracking-[0.2em] uppercase text-text-muted mb-4">
                Client Industries
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Technology', 'Healthcare', 'Financial Services', 'CPG', 'Retail', 'Pharma', 'Professional Services'].map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 bg-brand-black text-white text-xs"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
