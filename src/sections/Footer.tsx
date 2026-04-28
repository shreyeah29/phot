import { FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="border-t border-ink-100/60 bg-cream-50">
      <div className="container-pad py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-display text-3xl text-ink-900 tracking-[-0.02em]">
              Harishshankar Photography
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-300">
              Premium wedding photography and cinematic films—crafted with warmth, elegance, and
              honest emotion.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-100/70 bg-cream-50/60 hover:bg-cream-100/70 transition"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="mailto:hello@harishshankarphoto.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-100/70 bg-cream-50/60 hover:bg-cream-100/70 transition"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="glass p-6">
              <div className="text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                Contact
              </div>
              <div className="mt-4 space-y-3 text-sm text-ink-900">
                <div className="flex items-start gap-2">
                  <FiPhone className="mt-0.5 opacity-70" />
                  <span>+91 90000 00000</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiMail className="mt-0.5 opacity-70" />
                  <span>hello@harishshankarphoto.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiMapPin className="mt-0.5 opacity-70" />
                  <span>Chennai • Bangalore • Destination</span>
                </div>
              </div>
            </div>

            <div className="glass p-6">
              <div className="text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                Quick links
              </div>
              <div className="mt-4 grid gap-2 text-sm">
                {[
                  ['About', 'about'],
                  ['Portfolio', 'portfolio'],
                  ['Services', 'services'],
                  ['Testimonials', 'testimonials'],
                  ['Book', 'book'],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() =>
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-left text-ink-900/90 hover:text-ink-900 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink-100/60 pt-6 text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Harishshankar Photography. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Crafted with care</div>
        </div>
      </div>
    </footer>
  )
}

