import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f7f7ee",
          light: "#e3e3c4",
          border: "#d4d4b9",
        },
        olive: {
          DEFAULT: "#5b6647",
          light: "#9eab87",
          dark: "#535D41",
          gradient: "#667250",
        },
        navy: {
          DEFAULT: "#03364f",
          light: "#05496b",
          dark: "#022B40",
        },
      },
      fontFamily: {
        display: ["var(--font-woodland)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.2" }],
        "display-sm": ["clamp(1.5rem, 4vw, 3rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "section-xl": "clamp(8rem, 15vw, 16rem)",
        "section-l": "clamp(6rem, 12vw, 12rem)",
        "section-m": "clamp(5rem, 10vw, 10rem)",
        "section-s": "clamp(3rem, 8vw, 8rem)",
        "section-xs": "clamp(2rem, 6vw, 6rem)",
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(2rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
