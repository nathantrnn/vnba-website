"use client";

import React, { useEffect, useState } from 'react';
import { Particles } from '@/components/ui/particles';
import { getAssetPath } from '@/lib/utils';

export default function Programs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Performance optimization - defer non-critical operations
    const timer = setTimeout(() => {
      setMounted(true);
      
      // Font loading for iOS
      document.body.style.fontFamily = 'var(--font-poppins), -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", Arial, sans-serif';
      document.body.classList.add('page-loaded');
      
      // Improve iOS font rendering
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.documentElement.setAttribute('style', '-webkit-font-smoothing: antialiased');
      }
    }, 100); // Small delay to allow initial render
    
    return () => clearTimeout(timer);
  }, []);

  // Preload critical image
  useEffect(() => {
    const img = new Image();
    img.src = getAssetPath("logo/vnba-logo.png");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {mounted && (
        <Particles 
          className="absolute inset-0 z-0" 
          quantity={80}
          staticity={40}
          ease={35}
          color="#001F5B"
          size={1}
        />
      )}
      
      <div className="w-full px-6 sm:px-10 md:px-12 max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-center z-10 relative">
        <div className="relative h-24 sm:h-32 md:h-40 mx-auto mb-5 md:mb-6">
          <img 
            src={getAssetPath("logo/vnba-logo.png")}
            alt="Vietnam Basketball Academy Logo" 
            className="h-full mx-auto"
            style={{
              maxHeight: "100%", 
              objectFit: "contain",
              height: "auto",
              width: "auto",
              maxWidth: "100%"
            }}
            width="160"
            height="160"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight pb-1" style={{ fontFamily: "var(--font-poppins), -apple-system, BlinkMacSystemFont, system-ui, sans-serif" }}>
          <span className="animate-gradient-custom bg-gradient-to-r from-primary via-accent via-secondary via-black to-primary py-1">
            Programs
          </span>
        </h1>
        
        <div className="text-base sm:text-lg md:text-xl text-[#001F5B]/80 mt-3 sm:mt-4 mx-auto font-normal">
          <p>Programs page content.</p>
        </div>
      </div>
      
      <footer className="w-full px-6 sm:px-10 text-center z-10 absolute bottom-5 sm:bottom-6">
        <p className="text-sm font-medium text-[#001F5B]/60">
          © 2025 Vietnam Basketball Academy.
          <br />
          All rights reserved.
        </p>
      </footer>
    </div>
  );
} 