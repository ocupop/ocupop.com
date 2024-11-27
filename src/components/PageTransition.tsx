'use client';

import Image from 'next/image';
import { AnimatePresence, motion, cubicBezier  } from "framer-motion";
import { useTransitionContext } from '@/context/TransitionContext';
import navData from '@/data/nav.json';

// customEase
const customEasing = cubicBezier(0.835, 0.070, 0.840, 0.110)

const PageTransition = () => {
  const { isTransitioning } = useTransitionContext();

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#1d1d1d] z-[60] pointer-events-none flex items-center justify-center"
          variants={{
            hidden: { x: '-100%' },
            visible: { x: '0%' },
            exit: { x: '100%' }
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            delay: 0,
            duration: 1,
            ease: customEasing
            // ease: easing
          }}
        >
          <motion.div
            className="absolute right-0 top-0 w-[40vw] h-screen bg-green-500 origin-center-left"
            style={{ originX: 0 }}
            animate={{
              width: ["100vw", "0vw"]
            }}
            transition={{
              duration: 1.25,
              times: [0, 1],
              ease: customEasing
              // ease: greenEasing
            }}
          >
          </motion.div>
          {/* <h1 className="text-white text-7xl">ocupop</h1> */}
          <Image
              src={navData.logo}
              alt="Ocupop Logo"
              width={175}
              height={175}
              priority
            />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
