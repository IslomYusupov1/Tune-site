/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
        '3xl': "4em",
      },
    },
    extend: {

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1980px',
      },
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
