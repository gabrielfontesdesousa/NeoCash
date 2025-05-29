// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}', // ← ESSENCIAL
      './pages/**/*.{js,ts,jsx,tsx}',      // se ainda usar /pages
    ],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['var(--font-montserrat)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
