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
          🏀 Dribbling into the digital court... 🏀
          <br />
          <span className="inline-block my-4">✨ Where passion meets precision, and hoops meet hopes ✨</span>
          <br />
          <span className="inline-block mb-4">🔥 Vietnam Basketball Academy is crafting something legendary 🔥</span>
          <br />
          <span className="italic">Bounce back soon for the ultimate basketball experience!</span>
          <br />
          <span className="inline-block mt-6 font-semibold">🏆 Game changing. Court shaking. History making. 🏆</span>
        </p>
      </div>
    </main>
  );
} 