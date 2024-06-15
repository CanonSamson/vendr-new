/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#42BEED",
          foreground: "",
        },
        gray: {
          DEFAULT: "RB3B3B3",
        },
      },
      aspectRatio: {
        1: "1",
        "16/9": "16 / 9",
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/1": "2 / 1",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    elevation: {
      5: {
        elevation: 5,
      },
      // Add more elevations if needed
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".elevation-5": {
          elevation: 5,
        },
      });
    },
  ],
};
