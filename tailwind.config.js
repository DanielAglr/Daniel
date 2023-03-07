/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#181620',
        'primary-light': '#1d1b27',
        'accent': '#907ee7',
        'contrast': '#e3e9ff',
        'contrast-dark': '#99a1b8'
      }
    },
  },
  plugins: [],
}