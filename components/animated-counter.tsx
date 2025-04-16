"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

type AnimatedCounterProps = {
  from: number
  to: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const count = useMotionValue(from)
  const smoothCount = useSpring(count, { duration: duration * 1000, bounce: 0 })
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      count.set(to)
      setHasAnimated(true)
    }
  }, [isInView, count, to, hasAnimated])

  useEffect(() => {
    const unsubscribe = smoothCount.onChange((latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [smoothCount])

  return (
    <motion.span
      ref={nodeRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </motion.span>
  )
}
