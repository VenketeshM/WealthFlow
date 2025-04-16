"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  speed?: number
  width?: number
  height?: number
}

export function ParallaxImage({ src, alt, className, speed = 0.3, width, height }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const { top } = ref.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate how far the element is from the viewport center
      const elementCenter = top + ref.current.offsetHeight / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = elementCenter - viewportCenter

      // Apply parallax effect
      setOffset(distanceFromCenter * speed)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width || 1000}
          height={height || 1000}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
