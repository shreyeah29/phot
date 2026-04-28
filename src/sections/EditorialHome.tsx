import { Reveal } from '../components/Reveal'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useMemo, useState } from 'react'
import { StoriesGridSection } from './StoriesGridSection'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function EditorialHome() {
  const slides = useMemo(
    () => [
      {
        id: 'h-1',
        src: '/portfolio/12.png',
        alt: 'Wedding rituals overhead frame',
      },
      {
        id: 'h-2',
        src: '/portfolio/13.png',
        alt: 'Wedding couple under floral decor',
      },
      {
        id: 'h-3',
        src: '/portfolio/14.png',
        alt: 'Couple seated during ceremony',
      },
      {
        id: 'h-4',
        src: '/portfolio/15.png',
        alt: 'Bride and groom during varmala',
      },
      {
        id: 'h-5',
        src: '/portfolio/16.png',
        alt: 'Couple celebration portrait',
      },
    ],
    [],
  )

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
      <section className="relative">
        <div className="container-pad">
          <div className="relative overflow-hidden bg-noir-900">
            <div ref={emblaRef}>
              <div className="flex">
                {slides.map((s) => (
                  <div key={s.id} className="min-w-0 flex-[0_0_100%]">
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="h-[76vh] min-h-[520px] w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <Reveal>
                <div className="max-w-3xl text-white">
                  <div className="kicker text-white/80">
                    Harishshankar Photography
                  </div>
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

            <div className="absolute bottom-4 right-4 hidden items-center gap-2 sm:flex">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Go to hero image ${idx + 1}`}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={
                    selected === idx
                      ? 'h-1.5 w-10 bg-brass-200/90'
                      : 'h-1.5 w-3 bg-white/35'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <StoriesGridSection />

      <section className="relative overflow-hidden bg-olive-900">
        <div className="absolute inset-0 opacity-45 mix-blend-overlay bg-film-grain" />
        <div className="container-pad py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center text-sand-50">
              <div className="kicker">Memorable Moments</div>
              <h2 className="mt-4 font-caps text-3xl tracking-[0.14em] sm:text-4xl">
                A calm, cinematic approach to your story.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sand-50/75 sm:text-base">
                From the quiet glance to the wild celebration—each frame is composed with warmth,
                soft contrast, and timeless tones.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

