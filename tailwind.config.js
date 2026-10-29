/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0A2E2A', teal: { DEFAULT: '#14806E', dark: '#0E6354' }, mist: '#E6F4EF', sun: '#FFB020', petal: '#FFE9B8' },
      fontFamily: { display: ['"Young Serif"', 'Georgia', 'serif'], sans: ['Figtree', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
