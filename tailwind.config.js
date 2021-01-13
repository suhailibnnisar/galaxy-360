module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        sm: "24px",
        md: "32px",
      },
      padding: {
        sm: "24px",
        md: "32px",
      },
      colors: {
        bgPrim: "#ECECEC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
