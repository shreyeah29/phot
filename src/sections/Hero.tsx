import { useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { FiArrowDownRight, FiCalendar } from 'react-icons/fi'
import { heroSlides } from '../data/images'
import { cn } from '../lib/utils'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selected, setSelected] = useState(0)

  const slides = useMemo(() => heroSlides, [])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const t = window.setInterval(() => emblaApi.scrollNext(), 5200)
    return () => window.clearInterval(t)
  }, [emblaApi])

  return (
    <section id="home" className="relative min-h-dvh overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((s) => (
              <div key={s.id} className="relative min-w-0 flex-[0_0_100%]">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="h-dvh w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink-900/55 via-ink-900/35 to-cream-50/20" />
                <div className="absolute inset-0 opacity-60 mix-blend-overlay bg-film-grain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="container-pad pt-28 sm:pt-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-cream-100/40 bg-ink-900/25 px-4 py-2 text-xs text-cream-50/90 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-gold-100/90 shadow-[0_0_0_4px_rgba(201,162,39,0.18)]" />
              Premium wedding photography • India & Destination
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-6 font-display text-5xl leading-[0.98] tracking-[-0.03em] text-cream-50 sm:text-6xl lg:text-7xl"
            >
              Capturing Love Stories
              <span className="block text-cream-50/90">That Last Forever</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-cream-50/80 sm:text-lg"
            >
              Warm, emotional, cinematic wedding photography—crafted like a film, felt like a
              memory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => scrollToId('portfolio')}
                className="btn-primary"
              >
                View Portfolio <FiArrowDownRight />
              </button>
              <button
                type="button"
                onClick={() => scrollToId('book')}
                className="btn-ghost text-cream-50 border-cream-100/40 bg-ink-900/20 hover:bg-ink-900/30"
              >
                Book Your Date <FiCalendar />
              </button>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={cn(
                  'h-2.5 rounded-full transition',
                  selected === idx ? 'w-10 bg-gold-100/90' : 'w-2.5 bg-cream-50/40',
                )}
              />
            ))}
          </div>

          <div className="mt-10 pb-10 text-cream-50/70">
            <button
              type="button"
              onClick={() => scrollToId('about')}
              className="inline-flex items-center gap-2 text-sm hover:text-cream-50 transition"
            >
              Scroll to begin <span className="animate-floaty">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

