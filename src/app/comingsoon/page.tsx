"use client";

import React, { useEffect, useState } from 'react';
import { Particles } from '@/components/ui/particles';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import './styles.css';

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white p-4 relative overflow-hidden">
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
      <div className="w-full flex-1"></div>
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="mb-8">
          <img 
            src="/logo/vnba-logo.png" 
            alt="Vietnam Basketball Academy Logo" 
            className="h-32 md:h-40 mx-auto mb-6"
          />
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.2]">
            <span 
              className="animate-gradient-custom bg-gradient-to-r from-primary via-accent via-secondary via-black to-primary py-1"
            >
              Coming Soon
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-[#001F5B]/80 mb-10 max-w-2xl mx-auto font-normal leading-relaxed mt-4">
          We are building something amazing. Stay tuned!
        </p>
      </div>
      <div className="w-full flex-1"></div>
      <footer className="w-full text-center z-10 pt-10 pb-4">
        <p className="text-sm font-medium text-[#001F5B]/60">© {new Date().getFullYear()} Vietnam Basketball Academy. All rights reserved.</p>
      </footer>
    </div>
  );
} 