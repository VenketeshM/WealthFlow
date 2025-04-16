"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

type InteractiveCardProps = {
  children: ReactNode
  className?: string
  hoverScale?: number
  tapScale?: number
}

export function InteractiveCard({ children, className, hoverScale = 1.03, tapScale = 0.98 }: InteractiveCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: hoverScale, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" }}
      whileTap={{ scale: tapScale }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
