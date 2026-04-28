import { motion, useScroll, useTransform } from 'framer-motion'
import { FiCalendar } from 'react-icons/fi'

export function FloatingBookNow({ targetId }: { targetId: string }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [24, 0])
  const opacity = useTransform(scrollY, [0, 240], [0, 1])

  return (
    <motion.button
      type="button"
      style={{ y, opacity }}
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-40 rounded-full bg-ink-900 px-5 py-3 text-cream-50 shadow-glow hover:-translate-y-0.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
      aria-label="Book now"
    >
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <FiCalendar />
        Book Now
      </span>
    </motion.button>
  )
}

