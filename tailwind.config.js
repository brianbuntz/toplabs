// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js 13+ app directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      colors: {
        primary: "#6B46C1",
        secondary: "#4299E1",
        background: "#000000",
        text: "#FFFFFF",
        "footer-bg": "var(--footer-bg)",
        gray: {
          ...require("tailwindcss/colors").gray,
          850: "#1a1a1a",
        },
        "primary-new": {
          light: "#3B82F6",
          DEFAULT: "#1D4ED8",
          dark: "#1E40AF",
        },
        "secondary-new": {
          light: "#8B5CF6",
          DEFAULT: "#6D28D9",
          dark: "#5B21B6",
        },
        "green-new": {
          light: "#10B981",
          DEFAULT: "#059669",
          dark: "#047857",
        },
        "background-new": "#121212",
        "text-new": "#E5E7EB",
      },
      height: {
        108: "27rem",
        120: "30rem",
        144: "36rem",
      },
      // Add the new aspects
      aspectRatio: {
        "4/3": "4 / 3",
      },
      transitionProperty: {
        opacity: "opacity",
        transform: "transform",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            a: {
              color: theme("colors.primary"),
              "&:hover": {
                color: theme("colors.secondary"),
              },
            },
            h1: {
              color: theme("colors.text"),
            },
            h2: {
              color: theme("colors.text"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.text"),
            a: {
              color: theme("colors.primary"),
              "&:hover": {
                color: theme("colors.secondary"),
              },
            },
            h1: {
              color: theme("colors.text"),
            },
            h2: {
              color: theme("colors.text"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      opacity: ["group-hover"],
      transform: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
