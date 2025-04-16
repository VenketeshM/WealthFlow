"use client"

import React from "react"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type StaggeredChildrenProps = {
  children: ReactNode
  className?: string
  childClassName?: string
  staggerDelay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export function StaggeredChildren({
  children,
  className,
  childClassName,
  staggerDelay = 0.1,
  duration = 0.5,
  direction = "up",
  distance = 30,
}: StaggeredChildrenProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return { y: distance }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  }

  // Clone children and wrap each in a motion.div
  const animatedChildren = React.Children.map(children, (child) => {
    return (
      <motion.div variants={itemVariants} className={childClassName}>
        {child}
      </motion.div>
    )
  })

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {animatedChildren}
    </motion.div>
  )
}
