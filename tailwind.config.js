/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FFD1DC',
        'brand-lavender': '#E6E6FA',
        'brand-cream': '#FFFDD0',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'handwriting': ['Caveat', 'cursive'], // We can use Caveat or similar from Google Fonts
      }
    },
  },
  plugins: [],
}
