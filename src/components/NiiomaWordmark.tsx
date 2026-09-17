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
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-[1761px] mx-auto select-none pointer-events-none px-4 sm:px-8 ${className}`}
      aria-label="NIIOMA"
    >
      <svg
        viewBox="0 0 1761 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
      >
        {/* Letter N */}
        <g id="letter-N">
          <path
            d="M 0 0 H 44 L 144 72 V 0 H 168 V 112 H 124 L 24 40 V 112 H 0 Z"
            fill="white"
          />
        </g>

        {/* Letter I 1 */}
        <g id="letter-I-1">
          <rect x="370" y="0" width="24" height="112" rx="4" fill="white" />
        </g>

        {/* Letter I 2 */}
        <g id="letter-I-2">
          <rect x="574" y="0" width="24" height="112" rx="4" fill="white" />
        </g>

        {/* Letter O */}
        <g id="letter-O">
          <path
            d="M 808 28 L 836 0 H 948 L 976 28 V 84 L 948 112 H 836 L 808 84 Z M 842 32 H 942 V 80 H 842 Z"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="white"
          />
        </g>

        {/* Letter M */}
        <g id="letter-M">
          <path
            d="M 1180 0 H 1220 L 1287 72 L 1354 0 H 1394 V 112 H 1362 V 46 L 1302 108 H 1272 L 1212 46 V 112 H 1180 Z"
            fill="white"
          />
        </g>

        {/* Letter A */}
        <g id="letter-A">
          <path
            d="M 1593 28 L 1621 0 H 1733 L 1761 28 V 112 H 1729 L 1709 92 H 1645 L 1625 112 H 1593 Z M 1627 28 L 1641 18 H 1713 L 1727 28 V 46 H 1627 Z"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="white"
          />
        </g>
      </svg>
    </motion.div>
  );
};
