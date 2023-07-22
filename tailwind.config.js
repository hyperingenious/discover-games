/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#0b0b0b6c", // Replace with your desired color value
      },
    },
  },
  plugins: [],
};
