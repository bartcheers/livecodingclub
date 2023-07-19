/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'turquoise-100': '94f0dc',
        'turquoise-200': '82edd6',
        'turquoise-300': '70EBD0',
        'turquoise-400': '53ee8ca',
        'turquoise-500': '#48e5c2',
        'turquoise-600': '#3BE3BE',
        'turquoise-700': '#29E0b9',
        'turquoise-800': '#1fd6ae',
        'turquoise-900': '#1cc4a0',
      },
    },
  },
  plugins: [],
};
