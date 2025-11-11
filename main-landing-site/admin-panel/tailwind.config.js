/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'marlo-dark': '#1A1A1A',
        'marlo-gray': '#999999',
        'marlo-red': '#D20C34',
        'marlo-light-gray': '#333333', 
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poetsen': ['Poetsen One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}