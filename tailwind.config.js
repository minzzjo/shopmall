/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,jsx}", "./src/pages/*.{js,jsx}", "./src/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

