"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

type FloatingElementProps = {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  yOffset?: number
}

export function FloatingElement({ children, className, duration = 3, delay = 0, yOffset = 10 }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -yOffset, 0] }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
