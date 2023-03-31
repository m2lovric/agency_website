/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        HG: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
