"use client";

import React, { useEffect, useState } from 'react';
import { Particles } from '@/components/ui/particles';

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 relative overflow-hidden">
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
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="mb-16">
          <img 
            src="/logo/vnba-logo.png" 
            alt="Vietnam Basketball Academy Logo" 
            className="h-32 md:h-48 mx-auto mb-10"
          />
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-gray-800 pb-4 leading-[1.2]">
            Coming Soon
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-[#001F5B]/80 mb-16 max-w-2xl mx-auto font-normal leading-relaxed">
          We are building something great. Stay tuned!
        </p>
        <div className="text-[#001F5B]/60 mt-16">
          <p className="text-sm font-medium">© {new Date().getFullYear()} Vietnam Basketball Academy. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
} 