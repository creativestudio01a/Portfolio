import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F5F1",
        ink: "#111315",
        signal: "#1463FF",
        peach: "#EAC8B0",
        olive: "#66735B",
        muted: "#686A6D",
        line: "#D9D6CE"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        "hard-sm": "3px 3px 0 #0F0F0D",
        "hard-md": "7px 7px 0 #0F0F0D"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-30%)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(120%)", opacity: "0" }
        }
      },
      animation: {
        scan: "scan 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
