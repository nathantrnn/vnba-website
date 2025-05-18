"use client";

import React, { useEffect, useState } from 'react';
import { Particles } from '@/components/ui/particles';
import { getAssetPath } from '@/lib/utils';
import './styles.css';

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {mounted && (
        <Particles 
          className="absolute inset-0 z-0" 
          quantity={100}
          staticity={30}
          ease={40}
          color="#001F5B"
          size={1}
        />
      )}
      
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-center z-10 relative">
        <div className="relative h-24 sm:h-32 md:h-40 mx-auto mb-5 md:mb-6">
          <img 
            src={getAssetPath("logo/vnba-logo.png")}
            alt="Vietnam Basketball Academy Logo" 
            className="h-full mx-auto"
            style={{maxHeight: "100%", objectFit: "contain"}}
          />
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight whitespace-nowrap">
          <span className="animate-gradient-custom bg-gradient-to-r from-primary via-accent via-secondary via-black to-primary py-1">
            Coming Soon
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-[#001F5B]/80 mt-5 md:mt-6 mx-auto font-normal max-w-xs sm:max-w-md md:max-w-lg leading-relaxed">
          We are building something amazing. Stay tuned!
        </p>
      </div>
      
      <footer className="w-full px-4 sm:px-6 text-center z-10 absolute bottom-5 sm:bottom-6">
        <p className="text-sm font-medium text-[#001F5B]/60">© {new Date().getFullYear()} Vietnam Basketball Academy. All rights reserved.</p>
      </footer>
    </div>
  );
} 