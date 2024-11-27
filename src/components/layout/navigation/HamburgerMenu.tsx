import { motion } from 'framer-motion';


export default function HamburgerMenu({ isMenuOpen }: { isMenuOpen: boolean }) {

  return (
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
  );
}
