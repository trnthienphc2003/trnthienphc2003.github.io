/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,md,mdx}',
    './src/components/**/*.{ts,tsx,md,mdx}',
  ],
  plugins: [require('daisyui')],
};
