/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        peace: ["Peace", "sans-serif"],
        passion: ["Passion", "sans-serif"],
        passionBlack: ["PassionBlack", "sans-serif"],
        passionBold: ["PassionBold", "sans-serif"],
      },
    },
  },
  plugins: [[require("daisyui")]],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    prefix: "",
    darkTheme: "luxury",
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
};
