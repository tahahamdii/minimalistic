"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image" // Assuming you're using Next.js since you used "use client"

export default function AnimatedNavbar() {
    const [animationComplete, setAnimationComplete] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    const positions = Array.from({ length:9 }, (_, i) => (i + 1) * 9.5)

    return (
        <div className="fixed top-0 left-0 w-full z-50 md:block hidden">
            <div className="relative w-full overflow-visible pointer-events-none py-0">
                {positions.map((position, index) => (
                    <ImageLamp 
                        key={index} 
                        position={position} 
                        delay={index * 0.1} 
                        isRamadan={index % 2 === 0} // Alternates between ramadan.png and moon.png
                    />
                ))}
            </div>
        </div>
    )
}

function ImageLamp({ position, delay, isRamadan }: { position: number; delay: number; isRamadan: boolean }) {
    return (
        <motion.div
            className="absolute top-0 transform -translate-x-1/2"
            style={{ left: `${position}%`, zIndex: 10 }}
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 40,
                delay: delay,
            }}
        >
            {/* Rope */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-purple-300/50 to-cyan-600/50 mx-auto" />

            {/* Image container with animation */}
            <motion.div
                className="relative w-8 h-8"
                animate={{ 
                    rotate: [0, 8, 0, -8, 0],
                    y: [0, -4, 0, 2, 0]
                }}
                transition={{ 
                    duration: 3 + Math.random(),
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY 
                }}
            >
                <Image
                    src={isRamadan ? "/ramadan.png" : "/moon.png"}
                    alt={isRamadan ? "Ramadan Lamp" : "Moon"}
                    width={32}  // Matches the w-8 (8 * 4 = 32px)
                    height={32} // Matches the h-8 (8 * 4 = 32px)
                    className="object-contain drop-shadow-[0_0_10px_rgba(147,197,253,0.3)]"
                />
            </motion.div>
        </motion.div>
    )
}