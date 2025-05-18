"use client";

import React, { useEffect } from 'react';
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
  withBackground?: boolean;
  backgroundClass?: string;
  withSafePadding?: boolean;
}

export function MainLayout({ 
  children, 
  showHeader = true, 
  showFooter = true,
  className,
  withBackground = false,
  backgroundClass = "bg-white",
  withSafePadding = true,
}: MainLayoutProps) {
  // Optimize font rendering and performance for different devices
  useEffect(() => {
    // Improve iOS font rendering
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      document.documentElement.setAttribute('style', '-webkit-font-smoothing: antialiased');
    }
    
    // Mark page as loaded for transitions
    document.body.classList.add('page-loaded');
    
    // Set viewport height for mobile browsers
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVh();
    window.addEventListener('resize', setVh);
    
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div 
      className={cn(
        "min-h-screen flex flex-col",
        // Use CSS variable for mobile viewport height
        "min-h-[calc(var(--vh,1vh)*100)]",
        withBackground ? backgroundClass : null,
        // Add container spacing system with custom CSS variables
        "container-spacing",
        className
      )}
    >
      {showHeader && <Header />}
      
      <main className="flex-grow w-full">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
} 