"use client";

import { motion } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-12 h-12 rounded-full border border-gray-200 hover:border-gray-400 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <motion.span
        className="block w-6 h-[2px] bg-[#1d1d1d] rounded-full origin-center"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 4 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      
      {/* Middle line */}
      <motion.span
        className="block w-6 h-[2px] bg-[#1d1d1d] rounded-full"
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      
      {/* Bottom line */}
      <motion.span
        className="block w-6 h-[2px] bg-[#1d1d1d] rounded-full origin-center"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -4 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.button>
  );
}
