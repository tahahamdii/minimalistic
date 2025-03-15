"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import cursor from '../../data/cursor.png';
export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 50 })
  const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 50 })
  const ringXSpring = useSpring(ringX, { stiffness: 300, damping: 40 })
  const ringYSpring = useSpring(ringY, { stiffness: 300, damping: 40 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16) // Center the image (assuming 32x32px image)
      cursorY.set(e.clientY - 16) // Center the image
      ringX.set(e.clientX - 20)
      ringY.set(e.clientY - 20)
    }

    const handleHover = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.closest("[data-cursor-hover]"))
      ) {
        ringRef.current!.style.transform = "scale(1.5)"
        ringRef.current!.style.opacity = "1"
      }
    }

    const handleHoverOut = () => {
      ringRef.current!.style.transform = "scale(1)"
      ringRef.current!.style.opacity = "0.6"
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleHover)
    window.addEventListener("mouseout", handleHoverOut)
    document.body.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleHover)
      window.removeEventListener("mouseout", handleHoverOut)
      document.body.style.cursor = "auto"
    }
  }, [cursorX, cursorY, ringX, ringY])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="w-8 h-8 relative">
          <Image
            src={cursor} // Place your cursor image in the public folder
            alt="Cursor"
            fill
            sizes="32px"
            priority
          />
        </div>
      </motion.div>
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 pointer-events-none z-[9998] transition-all duration-200"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          borderColor: "rgba(0, 0, 0, 0.6)",
          opacity: 0.6,
        }}
      />
    </>
  )
}