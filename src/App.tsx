import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FloatingBookNow } from './components/FloatingBookNow'
import { IntroLoader } from './components/IntroLoader'
import { MusicToggle } from './components/MusicToggle'
import { Navbar } from './components/Navbar'
import { AboutSection } from './sections/AboutSection'
import { BookingSection } from './sections/BookingSection'
import { Footer } from './sections/Footer'
import { GallerySection } from './sections/GallerySection'
import { Hero } from './sections/Hero'
import { InstagramPreview } from './sections/InstagramPreview'
import { ServicesSection } from './sections/ServicesSection'
import { TestimonialsSection } from './sections/TestimonialsSection'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1200)
    return () => window.clearTimeout(t)
  }, [])

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'services', label: 'Services' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'book', label: 'Book' },
    ],
    [],
  )

  return (
    <div className="min-h-dvh bg-cream-50 text-ink-700">
      <AnimatePresence>{!ready ? <IntroLoader /> : null}</AnimatePresence>

      <Navbar items={navItems} />
      <MusicToggle />
      <FloatingBookNow targetId="book" />

      <main>
        <Hero />
        <AboutSection />
        <GallerySection />
        <ServicesSection />
        <TestimonialsSection />
        <BookingSection />
        <InstagramPreview />
      </main>

      <Footer />
    </div>
  )
}

export default App
