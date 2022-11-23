/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d8ab06",

          "secondary": "#c9ed15",

          "accent": "#b4f49c",

          "neutral": "#241D26",

          "base-100": "#F6F6F8",

          "info": "#5C90EB",

          "success": "#0B604F",

          "warning": "#F7AF08",

          "error": "#E93559",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}