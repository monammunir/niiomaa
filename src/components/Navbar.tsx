"use client";

import React, { useState } from "react";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { LandingContent } from "@/content/landing-content";
import { NavbarLogo } from "./NavbarLogo";
import { DropdownMenu } from "./DropdownMenu";
import { MobileMenu } from "./MobileMenu";
import { SignInModal } from "./SignInModal";

interface NavbarProps {
  content: LandingContent;
}

export const Navbar: React.FC<NavbarProps> = ({ content }) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    content.navigation.languages.current
  );

  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center items-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
        <nav
          className="pointer-events-auto w-full max-w-[1432px] h-[72px] sm:h-[80px] rounded-full px-5 sm:px-10 flex items-center justify-between border-2 border-white/[0.12] shadow-[0_8px_32px_rgba(112,47,160,0.25)] transition-all"
          style={{
            background: "rgba(149, 8, 188, 0.45)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* 1. Left Logo */}
          <div className="flex-shrink-0">
            <NavbarLogo />
          </div>

          {/* 2. Center Nav Items (Desktop) */}
          <div className="hidden xl:flex items-center gap-1 sm:gap-2">
            {content.navigation.items.map((item, idx) => {
              const isItemActive = item.isActive;
              const isMenuOpen = activeDropdown === idx;

              return (
                <div key={idx} className="relative">
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        toggleDropdown(idx);
                      }
                    }}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 select-none ${
                      isItemActive
                        ? "bg-[#702FA0]/40 text-white border border-white/10 shadow-sm"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 opacity-80 ${
                          isMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.children && (
                    <DropdownMenu
                      isOpen={isMenuOpen}
                      onClose={() => setActiveDropdown(null)}
                      items={item.children}
                      align={idx < 2 ? "left" : "center"}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* 3. Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sign In Button */}
            <button
              onClick={() => setIsSignInOpen(true)}
              className="px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold text-white border border-white/15 bg-[#702FA0]/10 hover:bg-[#702FA0]/30 transition-all select-none shadow-sm"
            >
              {content.navigation.signIn.label}
            </button>

            {/* Language Selector */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition select-none"
              >
                <Globe className="w-4 h-4 text-white/80" />
                <span>{selectedLang}</span>
              </button>

              <DropdownMenu
                isOpen={isLangOpen}
                onClose={() => setIsLangOpen(false)}
                align="right"
                width="w-40"
                items={content.navigation.languages.options.map((lang) => ({
                  title: lang,
                  href: "#",
                }))}
              />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 xl:hidden transition"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        content={content}
        onOpenSignIn={() => setIsSignInOpen(true)}
      />

      {/* Sign In Modal */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </>
  );
};
