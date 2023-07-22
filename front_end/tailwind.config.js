/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // "main-blue":"#001e3c",
        "main-blue":"#070707",
        // "secondary-blue":"#071a2e",
        "secondary-blue":"#1b1b1b",
        // "light-darker":"#0679f5",
        "light-darker":"#5e5968",
        "transparent-blue":"#5595d5",
        "main-lightMode" : "#c8d4e1",
        "secondary-lightMode":"#cbcbcb",
        "lightMode-light-darker":"#efecec",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
  plugins: [],
}