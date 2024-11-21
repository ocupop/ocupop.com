'use client';

import { AnimatePresence, motion, cubicBezier  } from "framer-motion";
import { useTransitionContext } from '@/context/TransitionContext';


// const easing = cubicBezier(0.215, 0.610, 0.355, 1.000)
const easing = cubicBezier(0.600, 0.040, 0.980, 0.335)


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
            delay: 0.25,
            duration: 0.8,
            ease: easing
          }}
        >
          <motion.div
            className="absolute -right-full top-0 w-screen h-screen bg-green-500 origin-center-left"
            style={{ originX: 0 }}
            animate={{
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.4, 1],
              ease: easing
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
