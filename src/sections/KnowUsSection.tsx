import { Reveal } from '../components/Reveal'

export function KnowUsSection() {
  return (
    <section id="know-us" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker text-noir-900/70">Know us</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.14em] text-noir-900 sm:text-5xl">
              More
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-noir-900/70">
              Two engineers. Two childhood friends. One obsession: crafting wedding stories that
              feel like cinema and live like memory.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12 overflow-hidden border border-cocoa-200/55 bg-sand-50/55">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(194,163,91,0.18),transparent_35%),radial-gradient(circle_at_85%_40%,rgba(12,11,10,0.10),transparent_45%)]" />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-7">
              <div className="max-w-2xl">
                <div className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-noir-900 sm:text-4xl">
                  Harish &amp; Shankar.
                  <span className="block text-noir-900/85">Engineers turned photographers.</span>
                </div>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-noir-900/75">
                  <p>
                    <span className="font-medium text-noir-900">HariShankar Photography</span> is
                    the creative brainchild of two Engineers turned Photographers, Harish &amp;
                    Shankar—two childhood friends turned partners in creativity and fun.
                  </p>
                  <p>
                    Harish, like the name suggests, is crazy about perfection to the t. Shankar is
                    a giver—giver of creativity and giver of something people wouldn&apos;t have
                    thought to ask for.
                  </p>
                  <p>
                    With a passion for innovative photography trends, we earned a name in the wedding
                    photography industry. We adore nature and travel—and we&apos;ll go to any heights
                    to get that perfect shot that wins hearts and captures the essence of the moment.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="border border-cocoa-200/55 bg-sand-50 px-5 py-4">
                    <div className="font-caps text-xs tracking-[0.24em] text-noir-900/70">
                      Experience
                    </div>
                    <div className="mt-2 font-display text-3xl text-noir-900">10+</div>
                    <div className="mt-1 text-sm text-noir-900/65">Years in weddings</div>
                  </div>
                  <div className="border border-cocoa-200/55 bg-sand-50 px-5 py-4">
                    <div className="font-caps text-xs tracking-[0.24em] text-noir-900/70">
                      Style
                    </div>
                    <div className="mt-2 font-display text-3xl text-noir-900">Candid</div>
                    <div className="mt-1 text-sm text-noir-900/65">Warm, honest, real</div>
                  </div>
                  <div className="border border-cocoa-200/55 bg-sand-50 px-5 py-4">
                    <div className="font-caps text-xs tracking-[0.24em] text-noir-900/70">
                      Approach
                    </div>
                    <div className="mt-2 font-display text-3xl text-noir-900">Family</div>
                    <div className="mt-1 text-sm text-noir-900/65">Blend in, belong</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 border border-cocoa-200/55 bg-sand-50 px-6 py-6 sm:px-7">
                <div className="font-caps text-sm tracking-[0.18em] uppercase text-noir-900">
                  Why would we be the perfect choice for you?
                </div>
                <ul className="mt-5 space-y-3 text-base leading-relaxed text-noir-900/75">
                  {[
                    "Harish’s inquisitiveness and Shankar’s love for creative drama helps us bring out the best moments.",
                    "The team at Harishankar always focuses on being a part of your family so no one has to shy away.",
                    "Being in the industry from last 10+ years, we understand each and every moment of the wedding is important—from the couple to the family’s reactions and the fun involved.",
                    "Once you finalize Harishankar Photography, we’ll be a part of your family—not outsiders—and we expect the same love and care from your end too.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-200" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.05}>
              <div className="sticky top-24 space-y-4">
                <div className="overflow-hidden ring-1 ring-black/10">
                  <img
                    src="/portfolio/08.png"
                    alt="Harish & Shankar — placeholder"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="text-xs tracking-[0.22em] uppercase text-noir-900/55">
                  (Photo of Harish &amp; Shankar in Kashmir — to be added)
                </div>

                <div className="border border-cocoa-200/55 bg-sand-50 px-6 py-6 sm:px-7">
                  <div className="font-caps text-sm tracking-[0.18em] uppercase text-noir-900">
                    Note from Harish &amp; Shankar
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-noir-900/75">
                    (Harish &amp; Shankar will give a 2 liner write up)
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="grid place-items-center border border-cocoa-200/55 bg-sand-50 px-3 py-4 text-[11px] tracking-[0.22em] uppercase text-noir-900/55">
                      Harish signature + pic
                    </div>
                    <div className="grid place-items-center border border-cocoa-200/55 bg-sand-50 px-3 py-4 text-[11px] tracking-[0.22em] uppercase text-noir-900/55">
                      Shankar signature + pic
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={() =>
                    document.getElementById('book-us')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Book Us Now
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

