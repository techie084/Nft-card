/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      // primary
      Blue: "hsl(215, 51%, 70%)",
      cyan: "hsl(228, 45%, 44%)",
      sky: {
        400:"#22d3ee",
      },
      // neutral
      darkBlueBg: "hsl(217, 54%, 11%)",
      DarkBlue: "hsl(216, 50%, 16%)",
      Darkblue: "hsl(215, 32%, 27%)",
      White: "hsl(0, 0%, 100%)",
      gray: "#6b7280",
    },
    extend: {},
  },
  plugins: [],
}
