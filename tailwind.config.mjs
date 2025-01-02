/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgreen: "#71AA38",
      },
      height:{
        '128':'1000px'
      },
      inset:{
        '33px':"33px",
        '6px':'6px'
      },
    },
  },
  plugins: [],
};
