/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Option A palette
        background: '#FFFFFF',
        text: '#1F2937',
        accent: '#0B3D91',
        secondary: '#4B5563',
        'link-hover': '#1E40AF',
      },
      fontFamily: {
        // Name these however you like
        body: ['Inter', 'sans-serif'],
        heading: ['Merriweather', 'serif'],
      },
      spacing: {
        // 8px base scale is already in tailwind; add extras if needed
        7: '1.75rem', // 28px
        9: '2.25rem', // 36px
      },
      borderRadius: {
        lg: '0.375rem', // 6px
      },
    },
  },
  content: [
    './src/app/**/*.{ts,tsx,md,mdx}',
    './src/app/_components/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx,md,mdx}',
  ],
  plugins: [require('daisyui')],
};
