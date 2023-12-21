/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#880000',
      secondary: '#880800',
      white: '#FFFFFF',
      black: '#000000',
      inherit: 'inherit',
      gray: '#EDEDED'
    },
    extend: {},
  },
  plugins: [],
}