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
        primary: "f4f4f4",
        "w-green": "7d887a",
        "w-grey": "383838",
        "w-button": "ebeff6",
      },
      spacing: {
        "register-screen": "600px",
      },
      boxShadow: {
        around: "0 0 10px 3px rgba(0, 0, 0, 0.08)",
      },
    },
    keyframes: {
      "scale-up": {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(1.05)" },
      },
      "translate-up": {
        "0%": { transform: "translateX(0)", opacity: "1" },
        "50%": { opacity: "0" },
        "100%": { transform: "translateX(-20%)", opacity: "0" },
      },
      "translate-down": {
        "0%": { transform: "translateX(20%)", opacity: "0" },

        "50%": { opacity: "1" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },
    animation: {
      "scale-up": "scale-up 0.1s ease-in-out forwards",
      "translate-up": "translate-up 0.5s ease-in-out",
      "translate-down": "translate-down 0.5s ease-in-out",
    },
  },
  plugins: [],
};
