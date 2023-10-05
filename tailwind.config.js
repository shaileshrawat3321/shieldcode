/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryBg: "#F9F3CC",
        secondaryBg: "#4F709C",
        primartText: "#26577C",
        secondaryText: "#213555",
        extraBg: "#6499E9",
        extraText: "#B4B4B3"
      }
    },
  },
  plugins: [],
}