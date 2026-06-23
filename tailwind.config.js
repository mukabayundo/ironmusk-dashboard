/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A57E8',
          hover: '#2a44c9',
          light: '#ebedfd',
        },
        info: {
          DEFAULT: '#08B1BA',
          hover: '#068e96',
          light: '#e6f7f8',
        },
        pageBg: '#F5F6FA',
        cardBg: '#FFFFFF',
        borderGray: '#E9ECEF',
        textMain: '#232d42',
        textMuted: '#8A92A6',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 10px rgba(0, 0, 0, 0.05)',
        navbar: '0 2px 10px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}

