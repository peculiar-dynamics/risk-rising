const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        handwritten: [
          `"Qwitcher Grypen"`,
          "cursive",
          ...defaultTheme.fontFamily.serif,
        ],
        title: ["Almarai", "sans-serif", ...defaultTheme.fontFamily.sans],
        subtitle: ["Montserrat", "sans-serif", ...defaultTheme.fontFamily.sans],
        sans: ["Hind", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        onSurface: "rgb(var(--onSurfaceTW)/<alpha-value>)",
        primary: {
          0: "#000000",
          50: "#00131D",
          100: "#001E2C",
          150: "#00293B",
          200: "#003549",
          250: "#004059",
          300: "#004C69",
          350: "#005979",
          400: "#00668A",
          500: "#0080AD",
          600: "#009BD1",
          700: "#3CB6EE",
          800: "#7BD0FF",
          900: "#C4E7FF",
          950: "#E3F3FF",
          980: "#F5FAFF",
          990: "#FBFCFF",
          1000: "#FFFFFF",
        },
        secondary: {
          0: "#000000",
          50: "#01131D",
          100: "#0A1E28",
          150: "#152833",
          200: "#20333E",
          250: "#2B3E49",
          300: "#374955",
          350: "#425561",
          400: "#4E616D",
          500: "#677A86",
          600: "#8093A0",
          700: "#9AAEBC",
          800: "#B5C9D7",
          900: "#D1E5F4",
          950: "#E3F3FF",
          980: "#F5FAFF",
          990: "#FBFCFF",
          1000: "#FFFFFF",
        },
        tertiary: {
          0: "#000000",
          50: "#260700",
          100: "#380D00",
          150: "#491400",
          200: "#5B1B00",
          250: "#6D2200",
          300: "#812900",
          350: "#943100",
          400: "#A83900",
          500: "#CC4F18",
          600: "#EE6730",
          700: "#FF8C5F",
          800: "#FFB59A",
          900: "#FFDBCF",
          950: "#FFEDE7",
          980: "#FFF8F6",
          990: "#FFFBFF",
          1000: "#FFFFFF",
        },
        neutral: {
          0: "#000000",
          50: "#0E1112",
          100: "#191C1D",
          150: "#232627",
          200: "#2E3132",
          250: "#393C3D",
          300: "#444748",
          350: "#505354",
          400: "#5C5F60",
          500: "#757779",
          600: "#8E9192",
          700: "#A9ABAD",
          800: "#C4C7C8",
          900: "#E1E3E4",
          950: "#EFF1F2",
          980: "#F8FAFB",
          990: "#FBFCFD",
          1000: "#FFFFFF",
        },
        "neutral-variant": {
          0: "#000000",
          50: "#0A1215",
          100: "#151D20",
          150: "#1F272A",
          200: "#2A3235",
          250: "#353D40",
          300: "#40484C",
          350: "#4C5458",
          400: "#576064",
          500: "#70787C",
          600: "#8A9296",
          700: "#A4ACB1",
          800: "#C0C8CC",
          900: "#DCE4E8",
          950: "#EAF2F7",
          980: "#F3FAFF",
          990: "#FAFDFF",
          1000: "#FFFFFF",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  darkMode: ["class", ".darkmode"],
};
