/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "24": "24px",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(10px)' },
          // '25%': { transform: 'rotateY(4deg)' },
          '50%': { transform: 'translateY(-10px)' },
          // '75%': { transform: 'rotate(12deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
