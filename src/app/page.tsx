import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import Assessment from '@/components/Assessment'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

// SEO: StructuredData provides JSON-LD schema for rich results
// SEO: FAQ section added for featured snippets and AI Overviews
// SEO: Semantic HTML — <main> wraps content, <header>/<footer> outside

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <Assessment />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
