import { Reveal } from '../components/Reveal'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useMemo, useState } from 'react'
import { KnowUsSection } from './KnowUsSection'
import { PhotoGallerySection } from './PhotoGallerySection'
import { StoriesListSection } from './StoriesListSection'
import { WhoSaidWhatSection } from './WhoSaidWhatSection'
import { CareersSection } from './CareersSection'
import { heroSlides } from '../data/portfolio'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function EditorialHome() {
  const slides = useMemo(() => [...heroSlides], [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selected, setSelected] = useState(0)

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
    const t = window.setInterval(() => emblaApi.scrollNext(), 4200)
    return () => window.clearInterval(t)
  }, [emblaApi])

  return (
    <main id="home">
      <section className="relative h-[calc(100dvh-4rem)] min-h-[640px]">
        <div className="relative h-full w-full overflow-hidden bg-noir-900">
          <div ref={emblaRef} className="h-full">
            <div className="flex h-full">
              {slides.map((s, idx) => (
                <div key={s.id} className="min-w-0 flex-[0_0_100%]">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="h-full w-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={idx === 0 ? 'high' : 'auto'}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/12 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
            <div className="container-pad">
              <Reveal>
                <div className="max-w-3xl text-white">
                  <div className="kicker text-noir-900">Harishshankar Photography</div>
                  <h1 className="mt-4 font-caps text-4xl leading-[1.02] tracking-[0.08em] sm:text-6xl">
                    Capturing love stories with restraint, warmth, and cinema.
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                    Editorial composition. Honest emotion. Timeless delivery—crafted for couples
                    who want their memories to feel like a film still.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => scrollToId('portfolio')}
                      className="btn-primary"
                    >
                      View Photography
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToId('contact')}
                      className="btn-ghost border-white/40 bg-white/10 text-white hover:bg-white/15"
                    >
                      Book Your Date
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 hidden items-center gap-2 sm:flex">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to hero image ${idx + 1}`}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={
                  selected === idx ? 'h-1.5 w-10 bg-brass-200/90' : 'h-1.5 w-3 bg-white/35'
                }
              />
            ))}
          </div>
        </div>
      </section>

      <KnowUsSection />
      <PhotoGallerySection />
      <StoriesListSection />
      <WhoSaidWhatSection />
      <CareersSection />
    </main>
  )
}

