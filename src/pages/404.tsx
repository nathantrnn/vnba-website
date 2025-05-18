import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Return Home
      </Link>
    </div>
  );
} 