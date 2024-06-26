import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        azul: "#003366",
        "azul-hover": "#0055a5",
        azulClaro: "#66CCFF",
        cinza: "#F5F5F5",
        verde: "#00776B",
        "verde-hover": "#009586",
        laranja: "#FFA500",
        preto: "#333333",
      },
    },
  },
  plugins: [],
  fontSize: {
    "text-xs": "0.625px",
  },
};
export default config;
