import { useState } from 'react';
import Link from 'next/link'
import { motion, cubicBezier  } from "framer-motion";
import navData from '@/data/nav.json';
import { useTransitionContext } from '../../../context/TransitionContext';
import HamburgerMenu from './HamburgerMenu';


export default function MobileNavItems() {
  const { startTransition } = useTransitionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const customEasing = cubicBezier(0.835, 0.070, 0.840, 0.110)


  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition(href);
    setIsMenuOpen(false);
  };

  const menuVariants = {
    open: {
      clipPath: `circle(${2000}px at calc(100% - 40px) 40px)`,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: customEasing,
        // ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: customEasing,
        // ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  return (
    <>
      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`
          fixed inset-0 bg-black/90 backdrop-blur-sm md:hidden
          flex items-center justify-center
          pointer-events-${isMenuOpen ? 'auto' : 'none'}
        `}
      >
        <motion.ul
          className="flex flex-col items-center space-y-8 text-white"
        >
          {navData.items.map((item, index) => (
            <motion.li
              key={`${item.text}-${index}`}
              variants={itemVariants}
              className="relative"
            >
              <Link
                href={item.link}
                onClick={(e) => handleNavigation(e, item.link)}
                className="text-2xl font-sans hover:text-gray-300 transition-colors"
              >
                {item.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Menu button */}
      <div className="flex md:hidden relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 p-2 rounded-md text-gray-900 hover:text-gray-600"
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerMenu isMenuOpen={isMenuOpen} isLight={isMenuOpen} />
        </button>
      </div>
    </>
  );
}
