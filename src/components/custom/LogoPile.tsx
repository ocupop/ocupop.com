"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from "@/components/base/Image"

const logos = [
  '/assets/_home/partner_logos/logo-1.svg',
  '/assets/_home/partner_logos/logo-2.svg',
  '/assets/_home/partner_logos/logo-3.svg',
  '/assets/_home/partner_logos/logo-4.svg',
  '/assets/_home/partner_logos/logo-5.svg',
  '/assets/_home/partner_logos/logo-6.svg',
  '/assets/_home/partner_logos/logo-7.svg',
  '/assets/_home/partner_logos/logo-8.svg',
];

export default function LogoPile() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex relative h-[100px] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
        <motion.div
          className="flex gap-8 shrink-0 h-full lg:gap-16"
          animate={{ translateX: '-50%' }}
          transition={{
            duration: 60,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {/* duplicate the logos to create an infiniteloop */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={`logo-${index}`} className="h-full flex items-center">
              <Image
                max_width={100}
                image={logo}
                alt="Ocupop"
                className="shrink-0 max-h-16"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

