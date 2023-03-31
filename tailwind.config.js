/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9BC6E',
      },
      fontFamily: {
        HG: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
