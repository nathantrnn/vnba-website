import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBasePath() {
  // For static sites, we need to check if we're in production or development
  if (typeof window !== 'undefined') {
    // Client-side code - detect from hostname if needed
    return window.location.pathname.startsWith('/vnba-website') ? '/vnba-website' : '';
  }
  // Server-side rendering or static generation
  return process.env.NODE_ENV === 'production' ? '/vnba-website' : '';
}

export function getAssetPath(path: string) {
  const basePath = getBasePath();
  // Remove leading slash if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
} 