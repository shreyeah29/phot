import { Reveal } from '../components/Reveal'
import { cn } from '../lib/utils'

type Tile =
  | { kind: 'image'; id: string; src: string; alt: string; className: string }
  | { kind: 'text'; id: string; className: string; title: string; subtitle: string }

const tiles: Tile[] = [
  {
    kind: 'image',
    id: 't-1',
    src: '/portfolio/02.png',
    alt: 'Couple under hanging florals',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    kind: 'image',
    id: 't-2',
    src: '/portfolio/10.png',
    alt: 'Bride portrait indoors',
    className: 'sm:col-span-1 sm:row-span-1',
  },
  {
    kind: 'image',
    id: 't-3',
    src: '/portfolio/04.png',
    alt: 'Couple portrait with petals',
    className: 'sm:col-span-2 sm:row-span-1',
  },
  {
    kind: 'text',
    id: 't-4',
    title: 'Some of the most “ICONIC”',
    subtitle: 'wedding images',
    className: 'sm:col-span-2 sm:row-span-1',
  },
  {
    kind: 'image',
    id: 't-5',
    src: '/portfolio/01.png',
    alt: 'Wedding stage and decor',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    kind: 'image',
    id: 't-6',
    src: '/portfolio/03.png',
    alt: 'Wedding night celebration',
    className: 'sm:col-span-2 sm:row-span-1',
  },
  {
    kind: 'image',
    id: 't-7',
    src: '/portfolio/09.png',
    alt: 'Bride and groom close moment',
    className: 'sm:col-span-1 sm:row-span-1',
  },
  {
    kind: 'image',
    id: 't-8',
    src: '/portfolio/07.png',
    alt: 'Wedding details closeup',
    className: 'sm:col-span-2 sm:row-span-1',
  },
]

export function StoriesGridSection() {
  return (
    <section id="stories" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker text-cocoa-200">Explore our</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              Stories
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-6 sm:auto-rows-[160px] sm:gap-2.5">
          {tiles.map((t, idx) => (
            <Reveal key={t.id} delay={0.02 * idx}>
              {t.kind === 'image' ? (
                <div
                  className={cn(
                    'group relative overflow-hidden bg-noir-900',
                    'border border-cocoa-200/55',
                    t.className,
                  )}
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir-900/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              ) : (
                <div
                  className={cn(
                    'grid place-items-center bg-sand-50',
                    'border border-cocoa-200/55',
                    t.className,
                  )}
                >
                  <div className="px-6 text-center">
                    <div className="font-display text-2xl leading-[1.1] tracking-[-0.02em] text-noir-900 sm:text-3xl">
                      {t.title}
                    </div>
                    <div className="mt-2 font-caps text-sm tracking-[0.18em] uppercase text-cocoa-500">
                      {t.subtitle}
                    </div>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

