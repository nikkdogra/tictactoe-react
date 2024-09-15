/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: { 
      container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      poppins: ["Poppins", "Roboto"]
    }
  },
},
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light",
    themes: {
      dark: {
        colors: {
          background: "#121212",
          primary: "#BB86FC",
          secondary: "#03DAC6",
        }
      },
      light: {
        colors: {
          background: "#f8ecd1",
          primary: "#85586f",
          secondary: "#ecd2ca",
        }
      }
    }
  })],
};
