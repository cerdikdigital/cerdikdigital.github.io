/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#474FA2',
        'primary-dark': '#252B68',
        secondary: '#FFE500',
        'cerdik-red': '#EA4256',
        'cerdik-green': '#38bba2',
        'cerdik-pink': '#f38ba2',
        'cerdik-blue': '#269ed5',
        'cerdik-black': '#333333',
        body: '#212427'
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

