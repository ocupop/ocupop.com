import { useState } from 'react';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import navData from '@/data/nav.json';
import { useTransitionContext } from '../../../context/TransitionContext';
import HamburgerMenu from './HamburgerMenu';


export default function MobileNavItems() {
  const { startTransition } = useTransitionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);




  const colors = ['#FF69B4', '#98FB98', '#FFA500', '#87CEEB'];

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition(href);
  };

  const menuOverlay = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }


  return (
    <>
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        custom={'100vh'}
        className='bg-red-500 absolute right-0 top-0  md:hidden'
        // ref={containerRef}
      >
        <motion.div className="background" variants={menuOverlay} />

          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 p-8 sm:p-0 relative justify-end">
              {navData.items.map((item, index) => (
                <motion.li
                  key={`${item.text}-${index}`}
                  className="relative w-[125px] rounded-full"
                >
                  <Link
                    href={item.link}
                    onClick={(e) => handleNavigation(e, item.link)}
                    className="nav-item"
                  >
                    {item.text}
                  </Link>
                  <motion.div
                    className={`w-[125px] h-10 -z-10 absolute top-0.5 rounded-full`}
                  />
                </motion.li>
              ))}
          </ul>

      </motion.div>

      {/* Menu button */}
      <div className="flex md:hidden relative">
          <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log(isMenuOpen);
          }}
          className="z-50 p-2 rounded-md text-gray-900 hover:text-gray-600"
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerMenu isMenuOpen={isMenuOpen} />
        </button>
      </div>
    </>
  );
}
