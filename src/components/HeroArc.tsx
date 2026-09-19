"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const HeroArc: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-[#000B1A]">
      {/* 1. Deep space background */}
      <div className="absolute inset-0 bg-[#000B1A]" />

      {/* 2. Upgraded Animated Hero Arc Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/upgraded_poster.webp"
          preload="auto"
          className="w-full h-full object-cover object-[center_28%]"
        >
          <source src="/upgraded.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* 3. Smooth bottom blend into deep space #000B1A */}
      <div className="absolute bottom-0 left-0 right-0 h-[28vh] bg-gradient-to-t from-[#000B1A] via-[#000B1A]/80 to-transparent pointer-events-none" />

      {/* 4. Seamless lateral edge fades for ultrawide viewports */}
      <div className="absolute inset-y-0 left-0 w-[3vw] bg-gradient-to-r from-[#000B1A] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[3vw] bg-gradient-to-l from-[#000B1A] to-transparent pointer-events-none" />
    </div>
  );
};
export default HeroArc;
