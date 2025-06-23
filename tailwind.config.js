module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bread-primary': '#D4AF37', // Dourado
        'bread-secondary': '#B8860B', // Dourado escuro
        'bread-light': '#FFF8E1', // Fundo claro
        'bread-dark': '#1A1A1A', // Texto escuro
      }
    }
  },
  plugins: [],
}