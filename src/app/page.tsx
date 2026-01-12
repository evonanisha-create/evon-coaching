import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import Assessment from '@/components/Assessment'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <Assessment />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
