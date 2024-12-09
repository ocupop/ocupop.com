import { useState } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';
import navData from '@/data/nav.json';
import { useTransitionContext } from '../../../context/TransitionContext';
import HamburgerMenu from './HamburgerMenu';

export default function MobileNavItems() {
  const { startTransition } = useTransitionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition(href);
    setIsMenuOpen(false); // Close menu after navigation
  };

  // Updated menu overlay animation
  const menuVariants = {
    open: {
      transform: "translateX(0%)",
      transition: {
        duration: 0.4,
        ease: [0.36, 0, 0.66, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      transform: "translateX(100%)",
      transition: {
        duration: 0.4,
        ease: [0.36, 0, 0.66, 1],
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
                className="text-2xl font-medium hover:text-gray-300 transition-colors"
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
          <HamburgerMenu isMenuOpen={isMenuOpen} />
        </button>
      </div>
    </>
  );
}
