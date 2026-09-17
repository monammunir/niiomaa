"use client";

import React from "react";
import { motion } from "framer-motion";

interface NiiomaWordmarkProps {
  className?: string;
}

export const NiiomaWordmark: React.FC<NiiomaWordmarkProps> = ({
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-[1761px] mx-auto select-none pointer-events-none flex items-center justify-center ${className}`}
      aria-label="NIIOMA"
    >
      <img
        src="/niioma_wordmark.svg"
        alt="NIIOMA"
        className="w-full h-auto max-h-[112px] object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
      />
    </motion.div>
  );
};
