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
      height: {
        120: "600px",
        128: "1000px",
      },
      width: {
        128: "650px",
      },
      inset: {
        "33px": "33px",
        "6px": "6px",
      },
      backgroundImage: {
        blackoverlay:
          "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      },
    },
  },
  plugins: [],
};
