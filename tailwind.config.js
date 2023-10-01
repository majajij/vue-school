/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#186F65',
        secondary: '#B5CB99',
        accent: '#FCE09B',
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
