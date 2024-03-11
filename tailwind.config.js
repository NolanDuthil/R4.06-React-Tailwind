/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        forground: "hsl(var(--forground)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
        bgCard: "hsl(var(--bg-card)/<alpha-value>)",
        bgIcon: "hsl(var(--bg-icon)/<alpha-value>)",
        bgAgeCard: "hsl(var(--bg-age-card)/<alpha-value>)",
        bgSelectCat: "hsl(var(--bg-select-cat)/<alpha-value>)",
        bgCard: "hsl(var(--bg-card)/<alpha-value>)",
        bgCard: "hsl(var(--bg-card)/<alpha-value>)",
        bgCard: "hsl(var(--bg-card)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
