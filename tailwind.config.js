/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        '0': '#0f6abe',
        '100': '#16abff',
      }
    },
  },
  plugins: [],
}

