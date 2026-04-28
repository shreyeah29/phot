import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { cn } from '../lib/utils'

export type NavItem = { id: string; label: string }

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar({ items }: { items: NavItem[] }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const desktopItems = useMemo(() => items.filter((i) => i.id !== 'home'), [items])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition',
        scrolled ? 'bg-cream-50/70 backdrop-blur-md shadow-soft' : 'bg-transparent',
      )}
    >
      <div className="container-pad">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToId('home')}
            className="group flex items-baseline gap-2"
            aria-label="Go to top"
          >
            <span className="font-display text-xl text-ink-900 tracking-[-0.02em]">
              Harishshankar
            </span>
            <span className="text-xs font-medium tracking-[0.24em] text-gold-700/80 uppercase">
              Photography
            </span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {desktopItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className="text-sm text-ink-700/90 hover:text-ink-900 transition"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToId('book')}
              className="btn-ghost"
            >
              Book Your Date
            </button>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-100/70 bg-cream-50/50 backdrop-blur"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden border-t border-ink-100/60 bg-cream-50/85 backdrop-blur"
        >
          <div className="container-pad py-4">
            <div className="flex flex-col gap-2">
              {desktopItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    scrollToId(item.id)
                  }}
                  className="rounded-xl px-3 py-2 text-left text-ink-900 hover:bg-cream-100/60 transition"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                className="btn-primary mt-2"
                onClick={() => {
                  setOpen(false)
                  scrollToId('book')
                }}
              >
                Check Availability
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}

