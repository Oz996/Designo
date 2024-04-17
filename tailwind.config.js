/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "2rem",
        xl: "14rem",
      },
    },
    extend: {
      colors: {
        peach: {
          DEFAULT: "#E7816B",
          light: "#FFAD9B",
          lighter: "#FDF3F0",
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
        // home section
        "home-circle-desktop":
          "url('/src/assets/home/desktop/bg-pattern-hero-home.svg')",
        "home-phone-desktop":
          "url('/src/assets/home/desktop/image-hero-phone.png')",
        "call-to-action-circles":
          "url('/src/assets/shared/desktop/bg-pattern-call-to-action.svg')",
        "home-web-design-desktop":
          "url('/src/assets/home/desktop/image-web-design-large.jpg')",
        "home-app-design-desktop":
          "url('/src/assets/home/desktop/image-app-design.jpg')",
        "home-graphic-design-desktop":
          "url('/src/assets/home/desktop/image-graphic-design.jpg')",
        "home-web-design-tablet":
          "url('/src/assets/home/tablet/image-web-design.jpg')",
        "home-app-design-tablet":
          "url('/src/assets/home/tablet/image-app-design.jpg')",
        "home-graphic-design-tablet":
          "url('/src/assets/home/tablet/image-graphic-design.jpg')",
        "home-web-design-mobile":
          "url('/src/assets/home/mobile/image-web-design.jpg')",
        "home-app-design-mobile":
          "url('/src/assets/home/mobile/image-app-design.jpg')",
        "home-graphic-design-mobile":
          "url('/src/assets/home/mobile/image-graphic-design.jpg')",
        // shared
        "circle-variant-one":
          "url('/src/assets/shared/desktop/bg-circle-variant-one.svg')",
        "circle-variant-two":
          "url('/src/assets/shared/desktop/bg-circle-variant-two.svg')",
        "circle-variant-three":
          "url('/src/assets/shared/desktop/bg-circle-variant-three.svg')",
        "three-circles":
          "url('/src/assets/shared/desktop/bg-pattern-three-circles.svg')",
        "two-circle":
          "url('/src/assets/shared/desktop/bg-pattern-two-circles.svg')",
        // design pages
        "web-design-bg":
          "url('/src/assets/web-design/desktop/bg-pattern-intro-web.svg')",
        "app-design-bg":
          "url('/src/assets/app-design/desktop/bg-pattern-intro-app.svg')",
        "graphic-design-bg":
          "url('/src/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg')",
        // about - hero
        "about-circle-desktop":
          "url('/src/assets/about/desktop/bg-pattern-hero-about-desktop.svg')",
        "about-circle-mobile":
          "url('/src/assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
        "about-hero-desktop":
          "url('/src/assets/about/desktop/image-about-hero.jpg')",
        "about-hero-tablet":
          "url('/src/assets/about/tablet/image-about-hero.jpg')",
        "about-hero-mobile":
          "url('/src/assets/about/mobile/image-about-hero.jpg')",
        // about - world class
        "about-world-class-desktop":
          "url('/src/assets/about/desktop/image-world-class-talent.jpg')",
        "about-world-class-tablet":
          "url('/src/assets/about/tablet/image-world-class-talent.jpg')",
        "about-world-class-mobile":
          "url('/src/assets/about/mobile/image-world-class-talent.jpg')",
        // about - real deal
        "about-real-deal-desktop":
          "url('/src/assets/about/desktop/image-real-deal.jpg')",
        "about-real-deal-tablet":
          "url('/src/assets/about/tablet/image-real-deal.jpg')",
        "about-real-deal-mobile":
          "url('/src/assets/about/mobile/image-real-deal.jpg')",
        // contact
        "contact-bg-desktop":
          "url('/src/assets/contact/desktop/bg-pattern-hero-desktop.svg')",
        "contact-bg-mobile":
          "url('/src/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')",
      },
      content: {
        "arrow-right": "url('/src/assets/shared/desktop/icon-right-arrow.svg')",
        checkmark: "url('/src/assets/contact/desktop/checkmark.svg')",
        "error-icon": "url('/src/assets/contact/desktop/icon-error.svg')",
      },
    },
  },
  plugins: [],
};
