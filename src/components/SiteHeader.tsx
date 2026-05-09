import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

type NavLink = { label: string; href: string }

const primary: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Know us Moreeee', href: '#know-us' },
  { label: 'Photo Gallery', href: '#gallery' },
  { label: 'Stories', href: '#stories' },
  { label: 'Who Said What', href: '#testimonials' },
  { label: 'Careers', href: '#careers' },
  { label: 'Book Us Now', href: '#book-us' },
]

const more: NavLink[] = [
  { label: 'Careers', href: '#careers' },
  { label: 'Travel', href: '#travel' },
  { label: 'Backyard', href: '#backyard' },
  { label: 'Get In Touch', href: '#contact' },
]

function scrollToHash(href: string) {
  const id = href.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 bg-sand-50/75 backdrop-blur">
        <div className="container-pad">
          <div className="flex h-16 items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToHash('#home')}
              className="text-left"
              aria-label="Harishshankar Photography"
            >
              <div className="font-display text-xl tracking-[-0.02em] text-noir-900">
                Harishshankar Photography
              </div>
            </button>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              {primary.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  onClick={() => scrollToHash(l.href)}
                  className="text-noir-900 hover:opacity-70 transition"
                >
                  {l.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="text-noir-900 hover:opacity-70 transition"
              >
                More
              </button>
            </nav>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden rounded-full border border-cocoa-200/60 px-4 py-2 text-sm hover:bg-sand-100 transition"
              aria-label="Open menu"
            >
              Open Menu
            </button>
          </div>
        </div>
        <div className="hairline" />
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[100] bg-sand-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container-pad">
              <div className="flex h-16 items-center justify-between">
                <div className="font-display text-xl tracking-[-0.02em] text-noir-900">
                  Harishshankar Photography
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-cocoa-200/60 px-4 py-2 text-sm hover:bg-sand-100 transition"
                  aria-label="Close menu"
                >
                  <FiX />
                  Close Menu
                </button>
              </div>
              <div className="hairline" />

              <div className="grid gap-10 py-10 md:grid-cols-2">
                <div>
                  <div className="text-xs font-medium tracking-[0.22em] uppercase text-cocoa-500">
                    Menu
                  </div>
                  <div className="mt-5 grid gap-3">
                    {primary.map((l) => (
                      <button
                        key={l.label}
                        type="button"
                        onClick={() => {
                          setOpen(false)
                          scrollToHash(l.href)
                        }}
                        className="text-left font-display text-3xl tracking-[-0.02em] text-noir-900 hover:opacity-70 transition"
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium tracking-[0.22em] uppercase text-cocoa-500">
                    More
                  </div>
                  <div className="mt-5 grid gap-2">
                    {more.map((l) => (
                      <button
                        key={l.label}
                        type="button"
                        onClick={() => {
                          setOpen(false)
                          scrollToHash(l.href)
                        }}
                        className="text-left text-lg text-noir-900 hover:opacity-70 transition"
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-10 text-sm text-cocoa-500">
                    Chennai • Bangalore • Destination
                    <div className="mt-2">hello@harishshankarphoto.com</div>
                    <div className="mt-1">+91 90000 00000</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

