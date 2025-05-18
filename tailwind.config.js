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
        // Brand Colors
        primary: {
          DEFAULT: '#FF6A00',
          light: '#FF8A33',
          dark: '#E05F00',
          50: '#FFF4ED',
          100: '#FFE9DB',
          200: '#FFD4B7',
          300: '#FFBF93',
          400: '#FFA970',
          500: '#FF6A00',
          600: '#E05F00',
          700: '#B84D00',
          800: '#8F3C00',
          900: '#662B00',
          950: '#331500',
        },
        secondary: {
          DEFAULT: '#0A5CAA',
          light: '#1A74C9',
          dark: '#084A88',
          50: '#EDF5FD',
          100: '#DAEAFB',
          200: '#B5D6F7',
          300: '#91C2F2',
          400: '#6CAEEE',
          500: '#479AEA',
          600: '#226BC9',
          700: '#0A5CAA',
          800: '#084A88',
          900: '#063866',
          950: '#032644',
        },
        accent: {
          DEFAULT: '#FFD700',
          light: '#FFDF33',
          dark: '#E6C200',
          50: '#FFFCE6',
          100: '#FFF9CC',
          200: '#FFF399',
          300: '#FFEC66',
          400: '#FFE333',
          500: '#FFD700',
          600: '#E6C200',
          700: '#B39700',
          800: '#806C00',
          900: '#4C4000',
          950: '#262000',
        },
        
        // Semantic Colors
        success: {
          DEFAULT: '#28A745',
          light: '#48C664',
          dark: '#1E8035',
          50: '#EEFBF2',
          100: '#DDF8E5',
          200: '#BCF0CB',
          300: '#9AE9B2',
          400: '#78E198',
          500: '#48C764',
          600: '#28A745',
          700: '#1E8035',
          800: '#145925',
          900: '#0A3315',
          950: '#05190A',
        },
        error: {
          DEFAULT: '#DC3545',
          light: '#E45C69',
          dark: '#BD2130',
          50: '#FCF0F1',
          100: '#F9E0E3',
          200: '#F4C2C7',
          300: '#EEA3AB',
          400: '#E9858F',
          500: '#E45C69',
          600: '#DC3545',
          700: '#BD2130',
          800: '#981B27',
          900: '#73151E',
          950: '#3C0B0F',
        },
        warning: {
          DEFAULT: '#FF6A00',
          light: '#FF8A33',
          dark: '#E05F00',
          50: '#FFF4ED',
          100: '#FFE9DB',
          200: '#FFD4B7',
          300: '#FFBF93',
          400: '#FFA970',
          500: '#FF6A00',
          600: '#E05F00',
          700: '#B84D00',
          800: '#8F3C00', 
          900: '#662B00',
          950: '#331500',
        },
        
        // Neutral Colors
        gray: {
          DEFAULT: '#A4A7AA',
          '50': '#F9F9FA',
          '100': '#F8F9FA',
          '200': '#E9ECEF',
          '300': '#DEE2E6',
          '400': '#CED4DA',
          '500': '#A4A7AA',
          '600': '#7D8082',
          '700': '#5A5C5E',
          '800': '#343A40',
          '900': '#212529',
          '950': '#121416',
        },
        black: '#171717',
        white: '#FFFFFF',
        
        // UI Colors
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F8F9FA',
          surface: '#FFFFFF',
          muted: '#F8F9FA',
          card: '#FFFFFF',
        },
        foreground: {
          DEFAULT: '#171717', 
          muted: '#5A5C5E',
          subtle: '#7D8082',
        },
        border: {
          DEFAULT: '#DEE2E6',
          light: '#E9ECEF',
          dark: '#CED4DA',
        },
        input: {
          DEFAULT: '#E9ECEF',
          focus: '#DEE2E6',
          disabled: '#F8F9FA',
        },
        ring: {
          DEFAULT: '#FF8A33',
          focus: 'rgba(255, 138, 51, 0.5)',
        },
        muted: {
          DEFAULT: '#A4A7AA',
          foreground: '#5A5C5E',
        },
        
        // Interaction States
        hover: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.06)',
          primary: 'rgba(255, 106, 0, 0.1)',
          secondary: 'rgba(10, 92, 170, 0.1)',
          accent: 'rgba(255, 215, 0, 0.1)',
        },
        focus: {
          ring: 'rgba(255, 138, 51, 0.5)',
        },
        disabled: {
          background: '#F8F9FA',
          foreground: '#CED4DA',
          border: '#E9ECEF',
        },
        
        // Component States
        'button-hover': '#FF8A33',
        'button-active': '#E05F00',
        'button-disabled': '#CED4DA',
        'input-hover': '#E9ECEF',
        'input-focus': '#DEE2E6',
        'input-disabled': '#F8F9FA',
        'link-hover': '#FF8A33',
        'link-active': '#E05F00',
        'link-visited': '#084A88',
      },
      
      // Typography - using a single font family
      fontFamily: {
        sans: ['var(--font-poppins)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      
      // Animation utilities
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'gradient': 'gradient-move 10s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-left': 'slide-left 0.5s ease-out',
        'slide-right': 'slide-right 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'bounce-light': 'bounce 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-subtle': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      
      // Spacing System - mobile-first approach
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
        '4xs': '0.125rem',  // 2px
        '3xs': '0.25rem',   // 4px
        '2xs': '0.375rem',  // 6px
        'xs': '0.5rem',     // 8px
        'sm': '0.75rem',    // 12px
        'md': '1rem',       // 16px
        'lg': '1.25rem',    // 20px
        'xl': '1.5rem',     // 24px
        '2xl': '2rem',      // 32px
        '3xl': '2.5rem',    // 40px
        '4xl': '3rem',      // 48px
        '5xl': '4rem',      // 64px
        '6xl': '5rem',      // 80px
        '7xl': '6rem',      // 96px
      },
      margin: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      maxWidth: {
        'xs': '20rem',    // 320px
        'sm': '30rem',    // 480px
        'md': '40rem',    // 640px
        'lg': '50rem',    // 800px
        'xl': '60rem',    // 960px
        '2xl': '70rem',   // 1120px
        '3xl': '80rem',   // 1280px
        '4xl': '90rem',   // 1440px
        '5xl': '100rem',  // 1600px
        '6xl': '120rem',  // 1920px
      },
      
      // Shape System
      borderRadius: {
        '4xs': '0.125rem',  // 2px
        '3xs': '0.25rem',   // 4px
        '2xs': '0.375rem',  // 6px
        'xs': '0.5rem',     // 8px
        'sm': '0.75rem',    // 12px
        'md': '1rem',       // 16px
        'lg': '1.25rem',    // 20px
        'xl': '1.5rem',     // 24px
        '2xl': '2rem',      // 32px
        'full': '9999px',   // Circle
      },
      
      // Elevation System
      boxShadow: {
        'soft-xs': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'soft-sm': '0 1px 3px rgba(0, 0, 0, 0.06)',
        'soft': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 3px 6px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 5px 12px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 8px 16px rgba(0, 0, 0, 0.14)',
        'soft-2xl': '0 12px 24px rgba(0, 0, 0, 0.16)',
        'soft-3xl': '0 16px 32px rgba(0, 0, 0, 0.18)',
        'inner-sm': 'inset 0 1px 2px rgba(0, 0, 0, 0.06)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.08)',
        'glow-primary': '0 0 12px rgba(255, 106, 0, 0.6)',
        'glow-secondary': '0 0 12px rgba(10, 92, 170, 0.6)',
        'glow-accent': '0 0 12px rgba(255, 215, 0, 0.6)',
      },
      
      // Component Sizing
      width: {
        'icon-sm': '1rem',
        'icon': '1.5rem',
        'icon-lg': '2rem',
        'icon-xl': '3rem',
        'button-mobile': '100%',
        'button-desktop': 'auto',
      },
      height: {
        'icon-sm': '1rem',
        'icon': '1.5rem',
        'icon-lg': '2rem',
        'icon-xl': '3rem',
        'button-sm': '2rem',
        'button': '2.5rem',
        'button-lg': '3rem',
        'input': '2.5rem',
        'input-lg': '3rem',
        'header': '4rem',
        'header-mobile': '3.5rem',
      },
      minHeight: {
        'screen-mobile': '100svh',
        'screen-desktop': '100vh',
      },
      
      // Layout System
      zIndex: {
        'toast': '1000',
        'modal': '900',
        'drawer': '800',
        'overlay': '700',
        'dropdown': '600',
        'fixed': '500',
        'sticky': '400',
        'above': '10',
        'base': '0',
        'below': '-1',
      },
      
      // Performance-oriented animations
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
        'slower': '800ms',
        'slowest': '1000ms',
      },
      transitionTimingFunction: {
        'ease-in-circ': 'cubic-bezier(0.55, 0, 1, 0.45)',
        'ease-out-circ': 'cubic-bezier(0, 0.55, 0.45, 1)',
        'ease-in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
      },
    },
    
    // Responsive breakpoints - mobile-first
    screens: {
      'xs': '375px',   // Small mobile devices
      'sm': '640px',   // Large mobile/Small tablet
      'md': '768px',   // Tablets
      'lg': '1024px',  // Small desktops/Large tablets
      'xl': '1280px',  // Desktops
      '2xl': '1536px', // Large desktops
    },
  },
  
  // Accessibility variants
  variants: {
    extend: {
      ringOpacity: ['focus-visible'],
      ringWidth: ['focus-visible'],
      outline: ['focus-visible'],
      scale: ['group-hover', 'hover', 'focus', 'active'],
      opacity: ['disabled', 'group-hover', 'hover'],
      backgroundColor: ['disabled', 'hover', 'active', 'odd', 'even'],
      textColor: ['disabled', 'group-hover', 'hover', 'active'],
      translate: ['group-hover', 'hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
      cursor: ['disabled'],
    },
  },
  
  // Plugins
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-safe-area'),
  ],
} 