'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';

import { useTransitionContext } from '../../../context/TransitionContext';
import DesktopNavItems from './DesktopNavItems';
import MobileNavItems from './MobileNavItems';
import Logo from './Logo';


export default function Navigation() {
  const { startTransition } = useTransitionContext();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Only update visibility if scroll difference is more than 10px
      if (Math.abs(currentScrollPos - prevScrollPos) > 5) {
        setIsVisible(!isScrollingDown);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

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
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center gap-4 h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={(e) => handleNavigation(e, '/')}>
            <Logo />
          </Link>
          <DesktopNavItems />
          <MobileNavItems />



        </div>
      </div>
    </motion.nav>
  );
}