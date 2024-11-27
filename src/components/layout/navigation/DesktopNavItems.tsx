import { useState } from 'react';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import navData from '@/data/nav.json';
import { useTransitionContext } from '../../../context/TransitionContext';
import HamburgerMenu from './HamburgerMenu';


export default function DesktopNavItems() {
  const { startTransition } = useTransitionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colors = ['#FF69B4', '#98FB98', '#FFA500', '#87CEEB'];

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition(href);
  };

  return (
    <>
      <div className="hidden md:flex flex-1 overflow-hidden justify-end">
        <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="fixed top-16 right-0 h-screen sm:bg-transparent sm:h-auto sm:relative sm:top-0"
                >
                  <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 p-8 sm:p-0 relative justify-end">


                      {/* Navigation Items */}
                      {navData.items.map((item, index) => (
                        <motion.li
                          key={`${item.text}-${index}`}
                          className="relative w-[125px] rounded-full"
                        >
                          <Link
                            href={item.link}
                            onClick={(e) => handleNavigation(e, item.link)}
                            className="nav-item"
                            onMouseEnter={() => setHoveredIndex(index)}
                          >
                            {item.text}
                          </Link>
                          {index === hoveredIndex ? (
                          <motion.div
                            className={`w-[125px] h-10 -z-10 absolute top-0.5 rounded-full`}
                            layoutId="underline"
                            style={{ backgroundColor: colors[index] }}
                          />
                          ) : null}
                        </motion.li>
                      ))}



                  </ul>
                </motion.nav>
              )}
        </AnimatePresence>
      </div>

      {/* Menu button */}
      <div className="hidden md:flex relative">
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
