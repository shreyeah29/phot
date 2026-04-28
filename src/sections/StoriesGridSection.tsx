import { Reveal } from '../components/Reveal'
import { cn } from '../lib/utils'

type Tile =
  | { kind: 'image'; id: string; src: string; alt: string; className: string }
  | { kind: 'text'; id: string; className: string; title: string; subtitle: string }

const tiles: Tile[] = [
  {
    kind: 'image',
    id: 't-1',
    src: 'https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?auto=format&fit=crop&w=1800&q=85',
    alt: 'Wedding ceremony frame',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    kind: 'image',
    id: 't-2',
    src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1800&q=85',
    alt: 'Bride portrait closeup',
    className: 'sm:col-span-1 sm:row-span-1',
  },
  {
    kind: 'image',
    id: 't-3',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85',
    alt: 'Couple candid moment',
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
    src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1800&q=85',
    alt: 'Couple walking in warm light',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    kind: 'image',
    id: 't-6',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85',
    alt: 'Emotional candid moment',
    className: 'sm:col-span-2 sm:row-span-1',
  },
  {
    kind: 'image',
    id: 't-7',
    src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1800&q=85',
    alt: 'Ring detail',
    className: 'sm:col-span-1 sm:row-span-1',
  },
  {
    kind: 'image',
    id: 't-8',
    src: 'https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?auto=format&fit=crop&w=1800&q=85',
    alt: 'Cinematic wide wedding frame',
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

