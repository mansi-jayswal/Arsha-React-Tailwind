/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "rgba(40, 58, 90, 0.9)", //dark-blue
        "hero-section": "#37517e", //hero section light blue color
        "secondary-color": "#47b2e4", //bg-secondary-color
        "default-color": "#444444",
        "extra-heading-color": "#696969",
        "section-background": "rgb(243 244 246)",
      },
      fontFamily: {
        default: [
          "OpenSans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Liberation Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        jost: ["Jost", "sans-serif"],
        "jost-bold": ["jost-bold", "sans-serif"],
        poppins: ["poppins", "jost"],
      },
      animation: {
        "bounce-slow": "bounce 8s infinite",
      },
    },
  },
  plugins: [],
};
