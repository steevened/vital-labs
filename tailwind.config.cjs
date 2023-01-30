/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'p-primary': '#f5f7fa',
        'p-from': '#eef2f3',
        'p-bw': '#d9e0e3',
        'p-to': '#8e9eab',
      },
    },
  },
  plugins: [require('daisyui')],
};
