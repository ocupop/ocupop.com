import { useState, useEffect } from 'react';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import navData from '@/data/nav.json';
import { useTransitionContext } from '../../../context/TransitionContext';
import HamburgerMenu from './HamburgerMenu';
import { usePathname } from 'next/navigation';
import { useDarkSection } from '@/context/DarkSectionContext';


export default function DesktopNavItems() {
  const { startTransition } = useTransitionContext();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { isOverDarkSection } = useDarkSection();

  // Add trailing slash to pathname for comparison
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const initialIndex = navData.items.findIndex(item => item.link === normalizedPath);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(initialIndex >= 0 ? initialIndex : null);
  const [activeIndex, setActiveIndex] = useState<number | null>(initialIndex >= 0 ? initialIndex : null);

  const colors = ['#FF6978', '#DBFE87', '#F8A94B', '#74D1D6'];

  useEffect(() => {
    const currentIndex = navData.items.findIndex(item => item.link === normalizedPath);
    setActiveIndex(currentIndex >= 0 ? currentIndex : null);
    setHoveredIndex(currentIndex >= 0 ? currentIndex : null);
  }, [pathname]);

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition(href);
  };

  const handleMouseLeave = () => {
    // Reset to active index instead of null
    setHoveredIndex(activeIndex);
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
                  <motion.ul
                    className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 p-8 sm:p-0 relative justify-end ${
                      isOverDarkSection ? 'text-white' : 'text-gray-900'
                    }`}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {navData.items.map((item, index) => (
                      <motion.li
                        key={`${item.text}-${index}`}
                        className="relative w-[125px] rounded-full"
                      >
                        <Link
                          href={item.link}
                          onClick={(e) => handleNavigation(e, item.link)}
                          className={`nav-item ${isOverDarkSection ? '!text-white debug-dark' : 'text-gray-900 debug-light'}`}
                          onMouseEnter={() => setHoveredIndex(index)}
                          aria-current={pathname === item.link ? 'page' : undefined}
                        >
                          {item.text}
                        </Link>
                        {(hoveredIndex === index || pathname === item.link) && (
                          <motion.div
                            className={`w-[125px] h-10 -z-10 absolute top-0.5 rounded-full`}
                            layoutId="underline"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ backgroundColor: colors[index] }}
                          />
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>
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
