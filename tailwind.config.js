/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "6rem",
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
      },
    },
  },
  plugins: [],
};
