/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VNBA brand colors
        primary: {
          DEFAULT: '#FF6B00', // Orange
          dark: '#E05A00',
          light: '#FF8A33',
        },
        secondary: {
          DEFAULT: '#004B87', // Blue
          dark: '#003D6E',
          light: '#0066BA',
        },
        accent: {
          DEFAULT: '#FFCC00', // Yellow
          dark: '#E6B800',
          light: '#FFD633',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECF0',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        // Magic UI animations
        'aurora': 'aurora 10s linear infinite',
        'grid': 'grid 15s linear infinite',
        'ripple': 'ripple 3s linear infinite',
        'shimmer-slide': 'shimmer-slide 1.5s infinite',
        'rippling': 'rippling 600ms linear',
        'shimmer': 'shimmer 2s linear infinite',
        'rainbow': 'rainbow 5s linear infinite',
        'shiny-text': 'shiny-text 4s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Magic UI keyframes
        'aurora': {
          from: { backgroundPosition: '0% 0%' },
          to: { backgroundPosition: '200% 0%' },
        },
        'grid': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(var(--cell-size) * 2))' },
        },
        'ripple': {
          '0%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: '0.75' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0' },
        },
        'shimmer-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'rippling': {
          to: { transform: 'scale(4)', opacity: '0' },
        },
        'shimmer': {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'rainbow': {
          '0%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '0 0' },
        },
        'shiny-text': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
} 