import { Reveal } from '../components/Reveal'

const categories = [
  { title: 'Pre Weddings', subtitle: 'The world spoke about us', cover: '/portfolio/09.png' },
  { title: 'Weddings', subtitle: 'Traditions & emotions', cover: '/portfolio/15.png' },
  { title: 'Fashion', subtitle: 'Editorial frames', cover: '/portfolio/10.png' },
  { title: 'Kids', subtitle: 'Little moments', cover: '/portfolio/05.png' },
  { title: 'Overseas', subtitle: 'Soumya Vish', cover: '/portfolio/02.png' },
  { title: 'Food', subtitle: 'Details & textures', cover: '/portfolio/07.png' },
] as const

export function PhotoGallerySection() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker text-cocoa-200">Photo</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-noir-900/70">
              A curated peek into our worlds—weddings, pre-weddings, fashion, kids, overseas stories,
              and the little details in between.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, idx) => (
            <Reveal key={c.title} delay={0.03 * idx}>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('book-us')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group relative aspect-square overflow-hidden bg-noir-900 ring-1 ring-black/10"
                aria-label={`Open ${c.title}`}
              >
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-900/78 via-noir-900/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left text-sand-50">
                  <div className="font-caps text-xs tracking-[0.26em] text-sand-50">
                    {c.title.toUpperCase()}
                  </div>
                  <div className="mt-2 text-sm text-sand-50/80">{c.subtitle}</div>
                  <div className="mt-4 inline-flex items-center justify-center border border-brass-200/55 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-brass-200/90 transition group-hover:bg-brass-200/10">
                    View
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

