// interface Logo {
//   image: string;
//   link: string;
//   alt_text: string;
// }

// interface LogoPileProps {
//   title: string;
//   max_image_width: number;
//   min_image_width: number;
//   logos: Logo[];
// }

// export default function LogoPile({
//   title,
//   max_image_width,
//   min_image_width,
//   logos
// }: LogoPileProps) {
//   return (
//     <div className="logo-pile">
//       {title && <h2>{title}</h2>}
//       <div className="logo-grid">
//         {logos.map((logo, index) => (
//           <a
//             key={index}
//             href={logo.link}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={logo.image}
//               alt={logo.alt_text}
//               style={{
//                 maxWidth: `${max_image_width}px`,
//                 minWidth: `${min_image_width}px`,
//                 width: '100%',
//                 height: 'auto'
//               }}
//             />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }






"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import Image from "@/components/base/Image";

const logos = [
  '/placeholder.svg?height=50&width=200',
  '/placeholder.svg?height=50&width=200',
  '/placeholder.svg?height=50&width=200',
  '/placeholder.svg?height=50&width=200',
  '/placeholder.svg?height=50&width=200',
  '/placeholder.svg?height=50&width=200',
]

export default function LogoPile() {
  const [loopCount, setLoopCount] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    const calculateLoopCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const logoWidth = 200 // width of each logo
        const gap = 32 // gap between logos
        const totalLogoWidth = logos.length * (logoWidth + gap)
        const newLoopCount = Math.ceil((containerWidth * 2) / totalLogoWidth) + 1
        setLoopCount(newLoopCount)
      }
    }

    calculateLoopCount()
    window.addEventListener('resize', calculateLoopCount)
    return () => window.removeEventListener('resize', calculateLoopCount)
  }, [])

  useAnimationFrame(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const logoWidth = 200 // width of each logo
      const gap = 32 // gap between logos
      const totalWidth = logos.length * (logoWidth + gap)

      setScrollX((prevScrollX) => {
        const newScrollX = prevScrollX - 1
        return newScrollX <= -totalWidth ? 0 : newScrollX
      })
    }
  })

  return (
      <div ref={containerRef} className="relative overflow-x-hidden">
        <motion.div
          className="flex gap-8"
          style={{ x: scrollX }}
        >
          {Array(loopCount).fill(logos).flat().map((logo, index) => (
            // <Image
            //   key={index}
            //   image={logo}
            //   alt_text={`Logo ${index + 1}`}
            //   className="object-contain"
            //   width={200}
            //   height={50}
            // />
            <Image key={index} max_width={100} image="/assets/_home/header-wordmark.svg" alt="Ocupop"/>

          ))}
        </motion.div>
      </div>
  )
}

