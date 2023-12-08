/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            customGreen: "rgb(12, 122, 104)",
          },
        },
      },
    },
  },
  variants : [],
  plugins: [],
};
