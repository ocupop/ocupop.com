'use client';

import { AnimatePresence, motion, cubicBezier  } from "framer-motion";
import { useTransitionContext } from '@/context/TransitionContext';




// easeInCirc
const easing = cubicBezier(0.600, 0.040, 0.980, 0.335)

// customEase
const greenEasing = cubicBezier(0.420, 0.000, 1.000, 1.000)

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
            delay: 0.1,
            duration: 0.8,
            ease: easing
          }}
        >
          <motion.div
            className="absolute right-0 top-0 w-[40vw] h-screen bg-green-500 origin-center-left"
            style={{ originX: 0 }}
            animate={{
              width: ["100vw", "0vw"]
            }}
            transition={{
              duration: 0.9,
              times: [0, 1],
              ease: greenEasing
            }}
          >
          </motion.div>
          <h1 className="text-white text-7xl">ocupop</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
