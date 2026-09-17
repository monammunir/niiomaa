import React from "react";

interface NavbarLogoProps {
  className?: string;
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none group ${className}`}>
      {/* Winged Falcon Chevron Icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white transition-transform duration-300 group-hover:scale-105"
      >
        <path
          d="M4 6C9 13 14 20 16 27C18 20 23 13 28 6C23 11 18 17 16 20C14 17 9 11 4 6Z"
          fill="currentColor"
        />
      </svg>

      {/* NIIOMA Brand Text */}
      <span className="text-white font-bold tracking-[0.2em] text-[20px] font-sans">
        NIIOMA
      </span>
    </div>
  );
};
