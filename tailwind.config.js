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
        primary: {
          DEFAULT: '#FF6A00',
          light: '#FF8A33',
          dark: '#E05F00',
        },
        secondary: {
          DEFAULT: '#0A5CAA',
          light: '#1A74C9',
          dark: '#084A88',
        },
        accent: {
          DEFAULT: '#FFD700',
          light: '#FFDF33',
          dark: '#E6C200',
        },
        success: {
          DEFAULT: '#28A745',
          light: '#48C664',
          dark: '#1E8035',
        },
        error: {
          DEFAULT: '#DC3545',
          light: '#E45C69',
          dark: '#BD2130',
        },
        warning: {
          DEFAULT: '#FF6A00',
          light: '#FF8A33',
          dark: '#E05F00',
        },
        gray: {
          DEFAULT: '#A4A7AA',
          '100': '#F8F9FA',
          '200': '#E9ECEF',
          '300': '#DEE2E6',
          '400': '#CED4DA',
          '500': '#A4A7AA',
          '600': '#7D8082',
          '700': '#5A5C5E',
          '800': '#343A40',
          '900': '#212529',
        },
        black: '#171717',
        white: '#FFFFFF',
        background: '#FFFFFF',
        foreground: '#171717',
        border: '#DEE2E6',
        input: '#E9ECEF',
        ring: '#FF8A33',
        muted: '#A4A7AA',
        'muted-foreground': '#5A5C5E',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        poppins: ['var(--font-poppins)'],
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'gradient': 'gradient-move 10s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'gradient': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
        'gradient-move': {
          '0%': { 'background-position': '0% center' },
          '50%': { 'background-position': '100% center' },
          '100%': { 'background-position': '0% center' },
        },
      },
    },
  },
  plugins: [],
} 