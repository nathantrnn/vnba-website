"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedGradientText } from "@/components/ui-magic/animated-gradient-text";

export function FeaturedPrograms() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <AnimatedGradientText>Our Programs</AnimatedGradientText>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive basketball training for all ages and skill levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program cards would go here */}
          {/* This is just a placeholder card */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Youth Academy</h3>
              <p className="text-gray-600 mb-4">
                Our foundational program for young players aged 7-14
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">View All Programs</Button>
        </div>
      </Container>
    </section>
  );
} 