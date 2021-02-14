const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      margin: {
        sm: "24px",
        md: "32px",
      },
      padding: {
        sm: "24px",
        md: "32px",
      },
      colors: {
        bgPrim: "#F8FAFC",
        "geekBlue-50": "#EDF5FF",
        "geekBlue-100": "#D0E2FF",
        "geekBlue-200": "#A6C8FF",
        "geekBlue-300": "#78A9FF",
        "geekBlue-400": "#4589FF",
        "geekBlue-500": "#0F62FE",
        "geekBlue-600": "#0043CE",
        "geekBlue-700": "#002D9C",
        "geekBlue-800": "#001D6C",
        "geekBlue-900": "#001141",
        "gray-50": "#f9fafb",
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-300": "#d1d5db",
        "gray-400": "#9ca3af",
        "gray-500": "#6b7280",
        "gray-700": "#374151",
        "gray-600": "#4b5563",
        "gray-800": "#1f2937",
        "gray-900": "#111827",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
