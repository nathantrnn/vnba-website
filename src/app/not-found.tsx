"use client";

import React from 'react';
import Link from 'next/link';
import { Particles } from '@/components/ui/particles';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 relative overflow-hidden">
      <Particles 
        className="absolute inset-0 z-0" 
        quantity={50}
        staticity={50}
        ease={40}
        color="#001F5B"
        size={1}
      />
      
      <div className="text-center max-w-md z-10">
        <h1 className="text-6xl font-bold text-[#001F5B] mb-4">404</h1>
        
        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        
        <h2 className="text-2xl font-bold text-[#001F5B] mb-4">Page Not Found</h2>
        
        <p className="text-[#001F5B]/70 mb-8">
          Sorry, we could not find the page you are looking for. It may have been moved or deleted.
        </p>
        
        <Link href="/" className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
} 