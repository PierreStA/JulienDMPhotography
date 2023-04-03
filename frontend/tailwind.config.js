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
        sea : " linear-gradient(to bottom, #3f73c2, #325aa4, #254287, #172b6a, #06164f);"
      },
       backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #90cdf4, #4299e1, #2c5282, #000000)',
      }
    },
  },
  plugins: [
      // require('@tailwindcss/aspect-ratio'),
  ],
}
