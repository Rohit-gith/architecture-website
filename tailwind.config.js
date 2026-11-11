/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // Content ki max-width 1200px par rok di, taaki bade screen / 125% zoom par page "zoom" na dikhe
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px" },
    },
    extend: {
      colors: {
        ink: "#111111",
        accent: "#a6803f",
        cream: "#f5f4f1",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "dropdown-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Sirf opacity (transform nahi), warna page ke andar fixed elements (lightbox) galat jagah dikhte
        "page-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "dropdown-in": "dropdown-in 0.2s ease-out both",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "page-in": "page-in 0.45s ease-out both",
        "fade-in": "fade-in 0.25s ease-out both",      },
    },
  },
  plugins: [],
};