/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A98B9',
        secondary: '#FFF1DC',
        accent: '#E8D5C4',
        // Add more custom colors here
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      textColor: ['even', 'odd'],
      // Add more properties if needed
    },
  },
}
