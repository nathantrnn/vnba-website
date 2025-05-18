"use client";

import { Container } from "../ui/Container";
import { getAssetPath } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 bg-white border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src={getAssetPath("logo/vnba-logo.png")}
              alt="Vietnam Basketball Academy Logo"
              className="h-12 w-auto"
              width="48"
              height="48"
            />
            <span className="ml-2 text-lg font-bold">VNBA</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {/* Navigation links will go here */}
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu button will go here */}
          </div>
        </div>
      </Container>
    </header>
  );
} 