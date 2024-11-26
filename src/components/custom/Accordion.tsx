'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  label: string;
  description: string;
}

const Accordion = ({ label, description }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        className="w-full px-4 py-3 text-left flex justify-between items-center bg-white hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl font-medium font-sans">{label}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="transform"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 font-serif">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
