"use client";

import { AuroraText } from "@/components/ui/aurora-text";
import { Particles } from "@/components/magicui/particles";

export default function Home() {
  // VNBA color palette
  const colorPalette = ["#FF6B00", "#004B87", "#FFCC00", "#E05A00"];
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          className="absolute inset-0"
          quantity={100}
          staticity={50}
          ease={50}
          color="#334155"
        />
      </div>
      
      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-6xl font-bold md:text-8xl mb-6">
          <AuroraText 
            className="font-bold tracking-tight"
            colors={colorPalette}
            speed={0.7}
          >
            Coming Soon
          </AuroraText>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8">
          We are building something cool for Vietnamese basketball fans.
          <br />
          Please check back later.
        </p>
      </div>
    </main>
  );
}
