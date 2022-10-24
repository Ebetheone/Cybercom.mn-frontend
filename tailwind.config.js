/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "blue": "#1fb6ff",
      "purple": "#7e5bef",
      "pink": "#ff49db",
      "orange": "#ff7849",
      "green": "#13ce66",
      "yellow": "#ffc82c",
      "gray-dark": "#273444",
      "gray": "#8492a6",
      "gray-light": "#d3dce6",
      "slate-200": "rgb(226 232 240)",
      "white": "rgb(255,255,255)",
      "black": "rgb(34,34,34)",
      "red": "rgb(255, 0, 2)",
      "strong-blue": "rgb(0, 102, 192)",
      "text": "rgb(56,56,56)",
      "little-gray": "rgb(112,112,112)",
      "need": "rgb(186, 230, 252);",
      "blacky": "rgb(17,17,17)",
      "redy":"rgb(245, 108, 115)",
      "sea":"rgb(60,170,247)",
    },
    extend: {
      colors: {
        "primary": "#50d71e",
      },
    },
  },
  plugins: [],
};
