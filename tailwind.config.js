/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
        lightGray: "#DEDEDE",
        darkBlue: "#20253A",
        skyBlue: "#4AB8FF",
        yellow: "#F9CE23",
        pink: "#FD5181",
        grayBlue: "#74798C",
        lightBlueGray: "#9B9EAC",
        darkGray: "#282D30",
      },
    },
  },
  plugins: [],
};
