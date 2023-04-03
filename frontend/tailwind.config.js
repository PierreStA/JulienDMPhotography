/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        dark :"#1f2937",
      },
    },
  },
  plugins: [
      // require('@tailwindcss/aspect-ratio'),
  ],
}
