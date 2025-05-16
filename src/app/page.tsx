"use client";

import { AuroraText } from "@/components/ui/aurora-text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold md:text-8xl">
          <span className="text-[#1c1c1c]">Vietnam</span>{" "}
          <AuroraText 
            className="font-bold"
            colors={["#FF6B00", "#004B87", "#FFCC00", "#E05A00"]}
          >
            Basketball
          </AuroraText>
        </h1>
      </div>
    </main>
  );
}
