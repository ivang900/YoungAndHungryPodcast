/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'obsidian': '#050505',
        'acid-green': '#D1FF26',
        'deep-gray': '#121212',
      },
      animation: {
        'slow-pan': 'slow-pan 20s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'slow-pan': {
          '0%, 100%': { transform: 'scale(1.1) translate(0, 0)' },
          '50%': { transform: 'scale(1.2) translate(-2%, -2%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(209, 255, 38, 0.15), 0 0 40px rgba(209, 255, 38, 0.1)',
      },
    },
  },
  plugins: [],
};
