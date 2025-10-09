import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,js,jsx,css,scss,html}",
    "./pages/**/*.{ts,tsx,js,jsx,css,scss,html}",
    "./components/**/*.{ts,tsx,js,jsx,css,scss,html}",
    "./src/**/*.{ts,tsx,js,jsx,css,scss,html}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        'sidebar-border': 'hsl(var(--sidebar-border))',
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};
export default config;