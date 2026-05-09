import { Reveal } from '../components/Reveal'

export function KnowUsSection() {
  return (
    <section id="know-us" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker text-cocoa-200">Know us</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              Moreeee
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5 text-sm leading-relaxed text-cocoa-500 sm:text-base">
              <p>
                <span className="font-medium text-noir-900">HariShankar Photography</span> is the
                creative brainchild of two Engineers turned Photographers, Harish &amp; Shankar. Two
                childhood friends turned partners in creativity and fun.
              </p>
              <p>
                Harish, like the name suggests, is crazy about perfection to the t and Shankar is a
                giver — giver of creativity and giver of something what people wouldn&apos;t have
                thought to ask for.
              </p>
              <p>
                Harish and Shankar, due to their passion and inquisitiveness about innovative
                photography trends, earned a name in the wedding photography industry. Both adore
                nature and travel and would travel to any heights to get that perfect shot which
                wins hearts and captures the essence of the moment.
              </p>
            </div>

            <div className="mt-10 grid gap-4 border border-cocoa-200/55 bg-sand-50/40 p-6 sm:p-7">
              <div>
                <div className="kicker text-cocoa-200">Why would we be the perfect choice for you?</div>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cocoa-500 sm:text-base">
                  <li>
                    Harish’s inquisitiveness and Shankar’s love for creative drama helps us bring
                    out the best moments.
                  </li>
                  <li>
                    The team at Harishankar always focuses on being a part of your family so no one
                    has to shy away.
                  </li>
                  <li>
                    Being in the industry from last 10+ years, we understand each and every moment
                    of the wedding is important—from the couple to the family’s reactions and the
                    fun involved.
                  </li>
                  <li>
                    Once you finalize Harishankar Photography, we’ll be a part of your family—not
                    outsiders—and we expect the same love and care from your end too.
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="overflow-hidden ring-1 ring-black/10">
              <img
                src="/portfolio/08.png"
                alt="Harish & Shankar — placeholder"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-4 text-xs tracking-[0.22em] uppercase text-cocoa-500">
              (Photo of Harish &amp; Shankar in Kashmir — to be added)
            </div>

            <div className="mt-8 border border-cocoa-200/55 bg-sand-50/40 p-6">
              <div className="kicker text-cocoa-200">Note from Harish &amp; Shankar</div>
              <p className="mt-4 text-sm leading-relaxed text-cocoa-500 sm:text-base">
                (Add a 2‑liner write up here.)
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="grid place-items-center border border-cocoa-200/55 bg-sand-50 p-4 text-xs tracking-[0.22em] uppercase text-cocoa-500">
                  Harish signature + pic
                </div>
                <div className="grid place-items-center border border-cocoa-200/55 bg-sand-50 p-4 text-xs tracking-[0.22em] uppercase text-cocoa-500">
                  Shankar signature + pic
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

