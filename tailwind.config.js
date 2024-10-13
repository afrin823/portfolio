/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      animation: {
      'pulse-border': 'pulse-border 2s infinite',
    },
    keyframes: {
      'pulse-border': {
        '0%, 100%': { borderColor: 'transparent' },
        '50%': { borderColor: 'rgba(59, 130, 246, 0.5)' }, // blue color
      },
    },},
  },
  plugins: [
    require('daisyui'),
  ],
}

