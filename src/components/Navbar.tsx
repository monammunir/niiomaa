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
  onEnterWebsite?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ content, onEnterWebsite }) => {
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
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center items-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
        <nav
          className="pointer-events-auto w-full max-w-[1240px] h-[54px] sm:h-[62px] rounded-[100px] px-4 sm:px-8 flex items-center justify-between border border-white/[0.14] transition-all"
          style={{
            background: "rgba(149, 8, 188, 0.40)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 6px 24px rgba(112, 47, 160, 0.30), inset 0 0 0 1px rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* 1. Left Logo */}
          <div className="flex-shrink-0">
            <NavbarLogo />
          </div>

          {/* 2. Center Nav Items (Desktop) */}
          <div className="hidden xl:flex items-center gap-1.5">
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
                    className={`flex items-center gap-1.5 h-[38px] px-3.5 rounded-[38px] text-[13.5px] font-medium transition-all select-none ${
                      isItemActive
                        ? "bg-[#702FA0]/40 text-white border border-white/10 backdrop-blur-[2px] shadow-sm"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 opacity-80 ${
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
          <div className="flex items-center gap-2.5">
            {/* Sign In Button */}
            <button
              onClick={() => setIsSignInOpen(true)}
              className="h-[38px] px-4 flex items-center justify-center rounded-[38px] text-[13.5px] font-medium text-white border border-white/15 bg-[rgba(112,47,160,0.15)] hover:bg-[rgba(112,47,160,0.35)] backdrop-blur-[2px] transition-all select-none shadow-sm"
            >
              {content.navigation.signIn.label}
            </button>

            {/* Language Selector */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 h-[36px] px-3 rounded-[8px] text-[13px] font-medium text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-[2px] transition select-none"
              >
                <Globe className="w-3.5 h-3.5 text-white/80" />
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
