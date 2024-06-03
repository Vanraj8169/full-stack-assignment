/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        melodyverse: "#4ade80",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
