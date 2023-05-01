/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'like-anime': '0.7s steps(28) forwards',
      }
    },
  },
  plugins: [],
}

