import { motion, type MotionProps } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export function Reveal({
  children,
  delay = 0,
  className,
  ...rest
}: PropsWithChildren<
  MotionProps & {
    delay?: number
    className?: string
  }
>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

