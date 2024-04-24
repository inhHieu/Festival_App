/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: '14',
      base: '16',
      xl: '18',
      '2xl': '20',
      '3xl': '22',
      '4xl': '24',
      '5xl': '30',
    },
    extend: {
      colors: {
        "hard-blue": "#0832DE",
        "sea-blue": "#2bb7e1",
        "light-blue": "#add9e7",
        "white-blue": "#effcf8",
        "white-purple": "#ced6f8",
        "light-gray": "#f1f1f1",
        "hard-gray": "#343434",
        "def-gray": "#d9d9d9",
        "def-red": "#fb1f1f",
        "def-light-red": "#fc8585",
        "def-black": "#1f1f1f",
      },
    },
  },
  plugins: [],
};
