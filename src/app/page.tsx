import React from "react";
import { defaultLandingContent } from "@/content/landing-content";
import { HeroArc } from "@/components/HeroArc";
import { Navbar } from "@/components/Navbar";
import { NiiomaWordmark } from "@/components/NiiomaWordmark";
import { HeroContent } from "@/components/HeroContent";

export default function Home() {
  // Headless CMS content layer (Plasmic / Contentful / Custom CMS ready)
  const content = defaultLandingContent;

  return (
    <main className="relative w-full min-h-screen bg-[#00142C] overflow-x-hidden flex flex-col justify-between">
      {/* 1. Background Arc (Exact Figma Glowing Blue Arc) */}
      <HeroArc />

      {/* 2. Top Navigation Bar */}
      <Navbar content={content} />

      {/* 3. Central Canvas: Giant Brandmark + Tagline & CTA */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 px-4">
        {/* Giant NIIOMA Typography across the horizontal center */}
        <div className="w-full flex justify-center items-center my-auto py-8 sm:py-12 md:py-16">
          <NiiomaWordmark />
        </div>

        {/* Headline and Action Button */}
        <div className="w-full flex justify-center items-center mt-4 sm:mt-8 md:mt-12">
          <HeroContent content={content} />
        </div>
      </div>
    </main>
  );
}
