'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import navData from '@/data/nav.json';
import { useTransitionContext } from '../../../context/TransitionContext';

export default function Navigation() {
  const { startTransition } = useTransitionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Only update visibility if scroll difference is more than 10px
      if (Math.abs(currentScrollPos - prevScrollPos) > 10) {
        setIsVisible(!isScrollingDown);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const colors = ['#FF69B4', '#98FB98', '#FFA500', '#87CEEB'];

  // useEffect(() => {
  //   // Check if this is a new navigation or page load
  //   const isNewNavigation = !document.referrer.includes(window.location.hostname);

  //   if (isNewNavigation) {
  //     setIsMenuOpen(true);

  //     // Wait a bit for the menu to slide in before starting pill animation
  //     setTimeout(() => {
  //       let i = 0;
  //       const interval = setInterval(() => {
  //         setHoveredIndex(i);
  //         i = (i + 1) % navData.items.length;
  //         if (i === 0) {
  //           clearInterval(interval);
  //           setHoveredIndex(null);
  //         }
  //       }, 500);
  //     }, 500); // Delay to allow menu to slide in
  //   }
  // }, []);

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition(href);
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      id="primary-nav"
      animate={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none"
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={(e) => handleNavigation(e, '/')}>
            <Image
              src={navData.logo}
              alt="Ocupop Logo"
              width={48}
              height={48}
              priority
            />
          </Link>
          {/* Menu button */}

          <div className="flex flex-1 overflow-hidden justify-end">
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="fixed top-16 right-0 h-screen bg-white sm:bg-transparent sm:h-auto sm:relative sm:top-0"
                >
                  <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 p-8 sm:p-0 relative justify-end">
                    <motion.li
                      layoutId="bubble"
                      className="absolute -z-10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      animate={{
                        backgroundColor: hoveredIndex !== null ? colors[hoveredIndex % colors.length] : "white",
                        x: hoveredIndex !== null ? `${hoveredIndex * -100}px` : "0",
                        opacity: hoveredIndex !== null ? 1 : 0
                      }}
                      style={{
                        width: "100px",
                        height: "100%",
                        position: "absolute",
                        top: 0
                      }}
                    />

                    {/* Navigation Items */}
                    {navData.items.map((item, index) => (
                      <motion.div
                        key={`${item.text}-${index}`}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className="relative w-[100px]"
                      >
                        <Link
                          href={item.link}
                          onClick={(e) => handleNavigation(e, item.link)}
                          className="nav-item "
                        >
                          {item.text}
                        </Link>
                      </motion.div>
                    ))}


                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>

          </div>


          <div className="relative ">
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 p-2 rounded-md text-gray-900 hover:text-gray-600"
          >
            <span className="sr-only">Toggle menu</span>
            <motion.svg
              className="h-6 w-6 scale-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Circle */}
              <circle cx="12" cy="12" r="10" strokeWidth={1.5} stroke='#353535' />

              {/* Top line */}
              <motion.line
                x1="8" y1="10"
                x2="16" y2="10"
                strokeWidth={1.5}
                strokeLinecap="square"
                animate={{
                  x1: isMenuOpen ? 8 : 8,
                  y1: isMenuOpen ? 8 : 10,
                  x2: isMenuOpen ? 16 : 16,
                  y2: isMenuOpen ? 16 : 10
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Bottom line */}
              <motion.line
                x1="8" y1="14"
                x2="16" y2="14"
                strokeWidth={1.5}
                strokeLinecap="square"
                animate={{
                  x1: isMenuOpen ? 8 : 8,
                  y1: isMenuOpen ? 16 : 14,
                  x2: isMenuOpen ? 16 : 16,
                  y2: isMenuOpen ? 8 : 14
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}