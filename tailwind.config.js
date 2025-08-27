/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This is the fix: We are no longer scanning .js files.
    "./pages/**/*.{html,njk}",
    "./_includes/**/*.{html,njk}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0f766e', // A deep teal for primary actions
        'secondary': '#06b6d4', // A vibrant cyan for highlights
        'dark-bg': '#0f172a', // Slate 900 for dark background
        'dark-card': '#1e293b', // Slate 800 for dark cards
        'light-text': '#0f172a', // Slate 900 for light mode text
        'dark-text': '#cbd5e1', // Slate 300 for dark mode text
      },
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'], // A fresh, modern font
      }
    },
  },
  plugins: [],
}
