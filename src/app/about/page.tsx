"use client";

import React, { useEffect, useState } from 'react';
import { Particles } from '@/components/ui-magic/particles';
import { getAssetPath } from '@/lib/utils';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Container } from '@/components/ui/Container';
import { AnimatedGradientText } from '@/components/ui-magic/animated-gradient-text';

export default function About() {
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
    <MainLayout>
      {/* Particles Background */}
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
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <Container size="md">
          <div className="text-center relative z-10">
            {/* Logo */}
            <div className="relative h-24 sm:h-32 md:h-40 mx-auto mb-8">
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
            
            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight pb-1">
              <AnimatedGradientText>About Us</AnimatedGradientText>
            </h1>
            
            {/* Intro Text */}
            <div className="text-base sm:text-lg md:text-xl text-[#001F5B]/80 mt-6 font-normal max-w-2xl mx-auto">
              <p>Learn about our mission, vision, and team at Vietnam Basketball Academy.</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Main Content Section */}
      <section className="relative py-12 md:py-16 bg-white/80 backdrop-blur-sm z-10">
        <Container>
          <div className="prose prose-lg max-w-none">
            <h2>Our Story</h2>
            <p>About page content goes here. This is where you would add all your main content about the academy.</p>
            
            <h2>Our Mission</h2>
            <p>The mission of Vietnam Basketball Academy is to develop basketball talent in Vietnam through world-class training and education.</p>
            
            <h2>Our Team</h2>
            <p>Meet the dedicated coaches and staff who make our academy possible.</p>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 