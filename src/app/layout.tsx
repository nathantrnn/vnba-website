import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Vietnam Basketball Academy Official Website",
  description: "The official website of Vietnam Basketball Academy (VNBA) - Vietnam's leading youth basketball training academy",
  icons: {
    icon: '/favicon.ico',
  }
};

// Optimized for iPhone 14 Pro Max (430 × 932) and iPad Air (820 × 1180)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
    <html lang="en" className={`light ${poppins.variable}`} style={{ colorScheme: 'light' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Force light mode */}
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className="font-sans antialiased bg-white text-black"
        style={{ 
          backgroundColor: '#ffffff',
          fontFamily: 'var(--font-poppins), system-ui, sans-serif'
        }}
      >
        <div className="mx-auto max-w-screen-2xl">
          {children}
        </div>
      </body>
    </html>
  );
}
