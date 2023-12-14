import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,js,tsx,jsx,mdx}",
    "./src/components/**/*.{ts,js,tsx,jsx,mdx}",
    "./src/app/**/*.{ts,js,tsx,jsx,mdx}",
    "./src/stories/**/*.{ts,js,tsx,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-mulish"],
        body: ["var(--font-mulish"],
      }
    },
  },
  fontSize: {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    "2xl": "32px",
  },
};
export default config;
