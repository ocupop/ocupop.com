'use client';

import { useEffect, useRef } from "react";

import Lottie from "lottie-react";
import { AnimatePresence, motion, cubicBezier  } from "framer-motion";
import { useTransitionContext } from '@/context/TransitionContext';
import logoAnimation from "./LogoTransition.json";

// customEase
const customEasing = cubicBezier(0.835, 0.070, 0.840, 0.110)

const PageTransition = () => {
  const { isTransitioning } = useTransitionContext();
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        lottieRef?.current?.play();
      }, 975);
    }
  }, [isTransitioning]);

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
            className="absolute right-0 top-0 w-[40vw] h-screen bg-green-500 origin-center-left z-50"
            style={{ originX: 0 }}
            animate={{
              width: ["100vw", "0vw"]
            }}
            transition={{
              duration: 1.25,
              times: [0, 1],
              ease: customEasing
            }}
          >
          </motion.div>
          <Lottie
            lottieRef={lottieRef}
            animationData={logoAnimation}
            loop={false}
            autoplay={false}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
