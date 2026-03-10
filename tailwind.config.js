module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'canvas': '#0D0F12',
        'cream': '#EDE8DC',
        'cream-muted': '#A89F8C',
        'warm-cream': '#F5F0E8',
        'navy': '#0a1628',
        'slate-light': '#F8FAFC',
        brand: {
          DEFAULT: '#07689f',
          dark: '#055580',
          light: '#e8f4fb',
        },
        accent: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
          light: '#fef3c7',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'stagger': 'stagger 0.1s',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
