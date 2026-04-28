import { Reveal } from '../components/Reveal'
import { editorialGrid, featuredStories } from '../data/editorial'

export function EditorialHome() {
  return (
    <main id="home">
      <section className="section-pad">
        <div className="container-pad">
          <Reveal>
            <p className="max-w-4xl text-base leading-relaxed text-neutral-700">
              Considered a modern, cinematic wedding photography brand,{' '}
              <span className="font-medium text-neutral-950">Harishshankar Photography</span>{' '}
              documents celebrations with timeless tones and honest emotion—crafted like an
              editorial, felt like a memory.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="photography" className="pb-10 sm:pb-12">
        <div className="container-pad">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {editorialGrid.map((img, idx) => (
              <Reveal key={img.id} delay={0.02 * idx}>
                <div className="group relative overflow-hidden bg-neutral-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="editorial" className="section-pad">
        <div className="container-pad">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs font-medium tracking-[0.22em] uppercase text-neutral-500">
                  Featured
                </div>
                <h2 className="mt-4 headline">Selected weddings</h2>
              </div>
              <button type="button" className="btn-ghost">
                View All
              </button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredStories.map((s, idx) => (
              <Reveal key={s.id} delay={0.04 * idx}>
                <article className="group">
                  <div className="overflow-hidden bg-neutral-100">
                    <img
                      src={s.cover}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 text-xs tracking-[0.12em] text-neutral-500">
                    {s.dateLabel}
                  </div>
                  <div className="mt-2 font-display text-2xl tracking-[-0.02em] text-neutral-950">
                    {s.title}
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    {s.location ? s.location : 'India & Destination'}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

