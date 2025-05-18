import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ViewportHeightScript from "@/components/global/ViewportHeightScript";

// Optimize font loading with preload and display swap
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Vietnam Basketball Academy Official Website",
  description: "The official website of Vietnam Basketball Academy (VNBA) - Vietnam's leading youth basketball training academy",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: "basketball, vietnam basketball, youth basketball, training, academy, sports, coaching",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vnba.com/',
    title: 'Vietnam Basketball Academy Official Website',
    description: "Vietnam's leading youth basketball training academy",
    siteName: 'Vietnam Basketball Academy',
    images: [
      {
        url: '/logo/vnba-logo.png',
        width: 800,
        height: 600,
        alt: 'Vietnam Basketball Academy',
      },
    ],
  },
};

// Mobile-first viewport optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`light ${poppins.variable}`} 
      style={{ colorScheme: 'light' }}
      data-theme="light"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Force light mode */}
        <meta name="color-scheme" content="light" />
        
        {/* Performance optimizations for font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Accessibility */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen"
        style={{ 
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          fontFamily: 'var(--font-sans)',
          textRendering: 'optimizeSpeed',
        }}
      >
        {/* Client component to handle viewport height calculations */}
        <ViewportHeightScript />
        
        <div className="flex-grow">
          <div className="mx-auto max-w-screen-2xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
