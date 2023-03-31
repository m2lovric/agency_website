/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#F9BC6E',
    },
    extend: {
      fontFamily: {
        HG: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
