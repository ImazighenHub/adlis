import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Reorder the breakpoints. By reversing the default order of media queries
    screens: {
      '4xl': { max: '1719px' },
      // => @media (max-width: 1719px) { ... }
      '2xl': { max: '1419px' },
      // => @media (max-width: 1419px) { ... }
      xl: { max: '1259px' },
      // => @media (max-width: 1259px) { ... }
      xls: { max: '1179px' },
      // => @media (max-width: 1179px) { ... }
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '480px' },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', ...fontFamily.sans],
        'bebas-neue': ['var(--bebas-neue)'],
        'noto-sans-tifinagh': ['var(--noto-sans-tifinagh)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Custom colors
        purple: {
          100: 'hsl(var(--purple-100))',
          200: 'hsl(var(--purple-200))',
          300: 'hsl(var(--purple-300))',
        },
        yellow: {
          100: 'hsl(var(--yellow-100))',
          200: 'hsl(var(--yellow-200))',
        },
        pink: {
          100: 'hsl(var(--pink-100))',
          200: 'hsl(var(--pink-200))',
        },
        green: {
          100: 'hsl(var(--green-100))',
          200: 'hsl(var(--green-200))',
        },
        neutral: {
          100: 'hsl(var(--neutral-100))',
          200: 'hsl(var(--neutral-200))',
          300: 'hsl(var(--neutral-300))',
          400: 'hsl(var(--neutral-400))',
        },
        white: {
          DEFAULT: 'hsl(var(--white))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        0.25: '0.0625rem',
        0.75: '0.1875rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.75rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        58: '14.5rem',
      },
      fontSize: {
        0: ['0px', '0px'],
        sm: ['0.875rem', '1.3125rem'],
        h1: [
          '3rem',
          {
            lineHeight: '3.5rem',
            fontWeight: '800',
          },
        ],
        h2: [
          '2.25rem',
          {
            lineHeight: '2.875rem',
            fontWeight: '800',
          },
        ],
        h3: [
          '1.875rem',
          {
            lineHeight: '2.375rem',
            fontWeight: '800',
          },
        ],
        h4: [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '800',
          },
        ],
        h5: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '800',
          },
        ],
        h6: [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '800',
          },
        ],
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      boxShadow: {
        'primary-4': '0.25rem 0.25rem 0 #000000',
        'primary-6': '0.375rem 0.375rem 0 #000000',
        'primary-8': '0.5rem 0.5rem 0 #000000',
        'secondary-4': '0.25rem -0.25rem 0 #000000',
        'secondary-6': '0.375rem -0.375rem 0 #000000',
        'secondary-8': '0.5rem -0.5rem 0 #000000',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
