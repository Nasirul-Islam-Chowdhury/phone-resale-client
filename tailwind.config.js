/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#641ae6",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily:{
        primary : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
};
