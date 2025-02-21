/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ev-gold': '#c4ad3c',
        'ev-green': '#39bc50',
      },
    },
  },
  plugins: [],
}