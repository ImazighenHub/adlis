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
    extend: {
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', ...fontFamily.sans],
        'bebas-neue': ['var(--bebas-neue)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // custom colors
        purple: {
          100: 'var(--purple-100)',
          200: 'var(--purple-200)',
          300: 'var(--purple-300)',
        },
        yellow: {
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)',
        },
        pink: {
          100: 'var(--pink-100)',
          200: 'var(--pink-200)',
        },
        green: {
          100: 'var(--green-100)',
          200: 'var(--green-200)',
        },
        neutral: {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
        },
        white: {
          DEFAULT: 'var(--white)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
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
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
