import { motion } from 'framer-motion';
import { useDarkSection } from '@/context/DarkSectionContext';

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  isLight?: boolean;
}

export default function HamburgerMenu({ isMenuOpen, isLight }: HamburgerMenuProps) {

  const { isOverDarkSection } = useDarkSection();
  const stroke = isLight || isOverDarkSection ? '#FFFFFF' : '#000000';

  return (
    <motion.svg
      className="w-6 h-6 hamburger"
      fill="none"
      viewBox="0 0 24 24"
      stroke={stroke}
    >
      {/* Circle */}
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={1.5}
        stroke={stroke}
        className="hamburger"
      />

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
  );
}
