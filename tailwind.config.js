import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#2729ef",
              foreground: "#ebf1ff",
              50: "#ebf1ff",
              100: "#b7c9ff",
              200: "#a1b5ff",
              300: "#8b9eff",
              400: "#6370ff",
              500: "#444afe",
              600: "#2729ef",
              700: "#1212cd",
              800: "#05047e",
              900: "#000033",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#444afe",
              foreground: "#ebf1ff",
              50: "#000033",
              100: "#04046b",
              200: "#0b0ba3",
              300: "#1616c1",
              400: "#2425df",
              500: "#444afe",
              600: "#616fff",
              700: "#8b9eff",
              800: "#bccdff",
              900: "#ebf1ff",
            },
          },
        },
      },
    }),
  ],
};
