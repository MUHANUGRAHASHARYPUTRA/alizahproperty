
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C5A059',
        cream: '#F9F7F2',
        beige: '#E8E2D6',
        charcoal: '#1A1A1A',
      },
    },
  },
  plugins: [],
}
