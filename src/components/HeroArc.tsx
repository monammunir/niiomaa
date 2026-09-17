"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroArc: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Ambient background dark blue base */}
      <div className="absolute inset-0 bg-[#00142C]" />

      {/* Hero Arc Image container matching Figma geometry (1968px x 1303px at top: -112px) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 -top-[60px] md:-top-[112px] w-[150vw] sm:w-[130vw] md:w-[1968px] h-[900px] md:h-[1303px]"
      >
        <Image
          src="/images/hero-arc.png"
          alt="Glowing Blue Arc"
          fill
          priority
          sizes="(max-width: 1920px) 100vw, 1968px"
          className="object-contain object-top opacity-95"
        />
      </motion.div>

      {/* Subtle radial ambient glows to heighten the futuristic atmosphere */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};
