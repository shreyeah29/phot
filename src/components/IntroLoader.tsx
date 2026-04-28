import { motion } from 'framer-motion'

export function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-900 text-cream-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      aria-label="Loading"
    >
      <div className="w-full max-w-md px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="font-display text-4xl tracking-[-0.02em]">
            Harishshankar
          </div>
          <div className="mt-1 text-xs tracking-[0.34em] uppercase text-gold-100/80">
            Photography
          </div>
        </motion.div>

        <div className="mt-10 h-[2px] w-full overflow-hidden rounded-full bg-cream-50/15">
          <motion.div
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-blush-200 via-gold-100 to-cream-50"
            initial={{ x: '-60%' }}
            animate={{ x: '140%' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        </div>

        <div className="mt-5 text-sm text-cream-50/70">
          Preparing your love story…
        </div>
      </div>
    </motion.div>
  )
}

