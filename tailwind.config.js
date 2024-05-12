/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        plusJakarta: ["Plus Jakarta Sans"],
        prata: ["Prata"],
      },
      colors: {
        primary: "#f4f4f4",
        workallgreen: "7d887a",
      },
      spacing: {
        "register-screen": "600px",
      },
    },
  },
  plugins: [],
};
