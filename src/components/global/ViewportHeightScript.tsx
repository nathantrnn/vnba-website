"use client";

import { useEffect } from 'react';

export default function ViewportHeightScript() {
  useEffect(() => {
    // Set CSS variable for viewport height to handle mobile browsers' address bar
    function setViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Set initially and on resize
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    // Force iOS font rendering consistency
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      document.documentElement.style.setProperty('-webkit-font-smoothing', 'antialiased');
    }
    
    // Cleanup
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);
  
  // This component doesn't render anything
  return null;
} 