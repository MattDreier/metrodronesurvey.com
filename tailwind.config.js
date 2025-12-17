/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0f3430',
          'teal-light': '#1a4f48',
          'teal-dark': '#0a2320',
          lime: '#e4ea6b',
          'lime-bright': '#fff86b',
          'lime-dark': '#c5cc4e',
        },
        primary: '#0f3430',
        success: '#34A853',
        warning: '#e4ea6b',
        danger: '#EA4335',
        light: {
          background: '#FFFFFF',
          surface: '#F8F9FA',
          text: {
            primary: '#202124',
            secondary: '#5F6368',
          },
        },
        dark: {
          background: '#202124',
          surface: '#303134',
          text: {
            primary: '#E8EAED',
            secondary: '#9AA0A6',
          },
        },
      },
      fontFamily: {
        "display": ["Poppins", "Arial", "sans-serif"],
        "body": ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(15, 52, 48, 0.08)',
        'hover': '0 4px 20px rgba(15, 52, 48, 0.12)',
      }
    },
  },
  plugins: [],
}
