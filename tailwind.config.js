/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00293d',
        'primary-light': '#1a3e50' // Use as main color for accents
      },
      // fontFamily: {
      //   'sans': ['Inter', 'sans-serif'],
      // },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('flowbite/plugin'), require("daisyui")],
  daisyui: {
    themes: false
  },
}
