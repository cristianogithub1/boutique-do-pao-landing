/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3bc77',
        secondary: '#a0522d',
        accent: '#8b4513'
      }
    },
  },
  plugins: [],
}