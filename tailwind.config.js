import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FFFBF5', 100: '#FBF4EA' },
        beige: { 50: '#FAF2EA', 100: '#F1E5D7', 200: '#E8D5BF' },
        blush: { 50: '#FFF5F7', 100: '#FBE6EA', 200: '#F5C9D3', 500: '#D9859A' },
        gold: { 50: '#FFF9E6', 100: '#FDECC3', 500: '#C9A227', 700: '#8D6B13' },
        ink: { 50: '#F6F3F1', 100: '#E7E0DB', 300: '#8A7E78', 700: '#2A2423', 900: '#120F10' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(201, 162, 39, 0.25), 0 20px 60px rgba(18, 15, 16, 0.18)',
        soft: '0 12px 40px rgba(18, 15, 16, 0.12)',
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

