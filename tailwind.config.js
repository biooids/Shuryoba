/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {},
    extend: {
      colors: { "background-color": "#083344", "text-color": "#06b6d4 " },
    },
  },
  plugins: [daisyui],
};
