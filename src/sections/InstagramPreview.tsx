import { useEffect, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FiInstagram } from 'react-icons/fi'
import { Reveal } from '../components/Reveal'
import { instagramPreview } from '../data/images'

export function InstagramPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const slides = useMemo(() => instagramPreview, [])

  useEffect(() => {
    if (!emblaApi) return
    const t = window.setInterval(() => emblaApi.scrollNext(), 3600)
    return () => window.clearInterval(t)
  }, [emblaApi])

  return (
    <section className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-100/60 bg-cream-50/70 px-4 py-2 text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                Instagram <FiInstagram className="opacity-70" />
              </div>
              <h2 className="mt-6 headline">A preview of the feed</h2>
              <p className="subhead">
                New highlights, candid frames, and cinematic reels—crafted in our signature warm
                tones.
              </p>
            </div>

            <a
              className="btn-ghost inline-flex w-fit"
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Instagram <FiInstagram />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-cream-100/80 bg-cream-100/40 shadow-soft">
            <div className="p-3 sm:p-4" ref={emblaRef}>
              <div className="flex gap-3 sm:gap-4">
                {slides.map((src, i) => (
                  <div key={`${src}-${i}`} className="flex-[0_0_76%] sm:flex-[0_0_42%] lg:flex-[0_0_28%]">
                    <div className="group relative overflow-hidden rounded-2xl">
                      <img
                        src={src}
                        alt="Instagram style preview"
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

