/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  // Tailwind v4 uses @theme in CSS (index.css) for customization
  // Keep config file minimal
}
