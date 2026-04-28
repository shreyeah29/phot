import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FBF7F1',
          100: '#F2E9DD',
          200: '#E7D8C4',
        },
        cocoa: {
          50: '#F5F1EC',
          200: '#CBBBA8',
          500: '#7A6B5B',
        },
        olive: {
          700: '#2A2A1F',
          900: '#191A12',
        },
        noir: {
          700: '#151412',
          900: '#0C0B0A',
        },
        brass: {
          50: '#FFF7E1',
          200: '#EAD39B',
          500: '#C2A35B',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        caps: ['Cinzel', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(194, 163, 91, 0.26), 0 20px 60px rgba(12, 11, 10, 0.22)',
        soft: '0 12px 40px rgba(12, 11, 10, 0.18)',
      },
      backgroundImage: {
        'film-grain':
          'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.12), transparent 35%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 50% 70%, rgba(0,0,0,0.18), transparent 55%)',
      },
      keyframes: {
        floaty: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
}

