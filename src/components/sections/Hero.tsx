"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Particles } from "@/components/ui/particles";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  showParticles?: boolean;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  showParticles = true,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  className,
}: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={cn(
      "relative py-20 md:py-28 overflow-hidden",
      backgroundImage ? "bg-cover bg-center" : "bg-white",
      className
    )} 
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Optional overlay for background images */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      )}

      {/* Optional particles effect */}
      {showParticles && mounted && (
        <Particles 
          className="absolute inset-0 z-0" 
          quantity={80}
          staticity={40}
          ease={35}
          color={backgroundImage ? "#ffffff" : "#001F5B"}
          size={1}
        />
      )}

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {subtitle && (
            <p className={cn(
              "text-lg md:text-xl font-medium mb-3",
              backgroundImage ? "text-white/90" : "text-primary"
            )}>
              {subtitle}
            </p>
          )}
          
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
            backgroundImage ? "text-white" : "text-black"
          )}>
            {title}
          </h1>
          
          {description && (
            <p className={cn(
              "mt-6 text-lg md:text-xl",
              backgroundImage ? "text-white/80" : "text-gray-600"
            )}>
              {description}
            </p>
          )}
          
          {(ctaText || secondaryCtaText) && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {ctaText && ctaLink && (
                <Button size="lg">
                  {ctaText}
                </Button>
              )}
              
              {secondaryCtaText && secondaryCtaLink && (
                <Button variant="outline" size="lg">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
} 