/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9BC6E',
        secondary: '#DFA762',
        'soft-brown': '#C59E6F',
        'soft-gray': 'C8C8C8',
      },
      fontFamily: {
        HG: ['Hanken Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/Wave.svg')",
      },
      container: {
        padding: {
          '2xl': '4rem',
        },
      },
      spacing: {
        '30p': '31%',
      },
    },
  },
  plugins: [],
};
