    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        // This tells Tailwind to look at all your HTML and JS files for class names.
        content: [
            "./**/*.html",
            "./**/*.js",
        ],
        // The 'darkMode' setting enables the dark mode based on the 'dark' class.
        darkMode: 'class',
        theme: {
            extend: {},
        },
        plugins: [],
    }
    