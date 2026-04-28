import { useMemo, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { FiGrid, FiHeart } from 'react-icons/fi'
import { Reveal } from '../components/Reveal'
import { galleryPhotos, type Photo } from '../data/images'
import { cn } from '../lib/utils'

const categories = ['Weddings', 'Pre-Wedding', 'Engagement', 'Candid Moments'] as const
type Category = (typeof categories)[number]

export function GallerySection() {
  const [active, setActive] = useState<Category>('Weddings')
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const filtered = useMemo<Photo[]>(
    () => galleryPhotos.filter((p) => p.category === active),
    [active],
  )

  const slides = useMemo(
    () =>
      filtered.map((p) => ({
        src: p.src,
        alt: p.alt,
      })),
    [filtered],
  )

  return (
    <section id="portfolio" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-100/60 bg-cream-50/60 px-4 py-2 text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                Portfolio <FiGrid className="opacity-70" />
              </div>
              <h2 className="mt-6 headline">Candid. Cinematic. Timeless.</h2>
              <p className="subhead">
                Explore a curated glimpse of celebrations—crafted with warm tones, soft light, and
                honest emotion.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm transition border',
                    active === c
                      ? 'bg-ink-900 text-cream-50 border-ink-900 shadow-soft'
                      : 'bg-cream-50/60 text-ink-900 border-ink-100/70 hover:bg-cream-100/70',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
                className="group relative mb-4 w-full overflow-hidden rounded-2xl border border-cream-100/80 bg-cream-100/40 shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                aria-label={`Open photo: ${p.alt}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition group-hover:opacity-100">
                  <div className="glass px-3 py-2 text-left">
                    <div className="text-xs font-medium tracking-[0.2em] uppercase text-ink-300">
                      {p.category}
                    </div>
                    <div className="mt-1 font-display text-lg text-ink-900">Open</div>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/75 backdrop-blur">
                    <FiHeart className="text-blush-500" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
    </section>
  )
}

