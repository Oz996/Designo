/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "2rem",
        lg: "14rem",
      },
    },
    extend: {
      colors: {
        peach: {
          DEFAULT: "#E7816B",
          light: "#FFAD9B",
        },
        black: {
          light: "#1D1C1E",
        },
        grey: {
          DEFAULT: "#333136",
          light: "#F1F3F5",
        },
      },
      backgroundImage: {
        "home-circle-desktop":
          "url('/src/assets/home/desktop/bg-pattern-hero-home.svg')",
        "home-phone-desktop":
          "url('/src/assets/home/desktop/image-hero-phone.png')",
        "call-to-action-circles":
          "url('/src/assets/shared/desktop/bg-pattern-call-to-action.svg')",
        "home-web-design-desktop":
          "url('/src/assets/home/desktop/image-web-design-large.jpg')",
        "home-app-design":
          "url('/src/assets/home/desktop/image-app-design.jpg')",
        "home-graphic-design":
          "url('/src/assets/home/desktop/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
