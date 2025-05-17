"use client";

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="mb-8">
          <h1 className="text-6xl font-bold tracking-tight leading-[1.2] text-[#001F5B] mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-[#001F5B]/80 mb-8">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 text-white bg-[#001F5B] rounded-md font-medium hover:bg-[#001F5B]/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 