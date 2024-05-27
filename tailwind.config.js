/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1366px",
      xl: "1920px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      colors: {
        "dark-gray": "#363636",
        "dark-blue": "#005396",
      },
    },
  },
  plugins: [],
};
