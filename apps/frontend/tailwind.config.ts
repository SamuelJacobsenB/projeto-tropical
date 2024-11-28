import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343434",
        secondary: "#e7e6e7",
        custom: {
          yellow: "#f8de7e",
        },
        light: {
          primary: "#484848",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
