/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryBg: "#2D5C7F",
        secondaryBg: "#FF8F56",
        primartText: "#FFF1A8",
        secondaryText: "#984A59"
      }
    },
  },
  plugins: [],
}