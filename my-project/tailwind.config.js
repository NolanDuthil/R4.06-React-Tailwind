/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          forground: "hsl(var(--forground)/<alpha-value>)",
          background: "hsl(var(--background)/<alpha-value>)",
          top: "hsl(var(--top-background-pattern)/<alpha-value>)",
          card: "hsl(var(--background-card)/<alpha-value>)",
          hover: "hsl(var(--background-card-hover)/<alpha-value>)",
          text: "hsl(var(--text)/<alpha-value>)",
      },
      backgroundImage: {
          instagram: "var(--instagram)"
      },
    },
  },
  plugins: [],
}
