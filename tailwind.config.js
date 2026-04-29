/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luinese Luxury Palette
        'abyss': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#627d98',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#020617',
        },
        'stone': {
          50: '#faf9f7',
          100: '#f2f0ed',
          200: '#e5e2dc',
          300: '#d6d3cc',
          400: '#c1bcb2',
          500: '#a9a298',
          600: '#8b847a',
          700: '#6d665c',
          800: '#524c42',
          900: '#3e3830',
        },
        'sand': {
          50: '#fdfbf7',
          100: '#faf6f0',
          200: '#f5ede3',
          300: '#f0e3d0',
          400: '#e8d6b5',
          500: '#dec79a',
          600: '#d1b07a',
          700: '#b8945f',
          800: '#95754b',
          900: '#7b5f3f',
        },
        'mist': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Luxury accent colors
        'gold': {
          50: '#fffdf7',
          100: '#fefce8',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#fbbf24',
          600: '#f59e0b',
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
        },
        'lago': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      boxShadow: {
        'luxury-soft': '0 4px 20px rgba(15, 23, 42, 0.08)',
        'luxury-medium': '0 8px 30px rgba(15, 23, 42, 0.12)',
        'luxury-strong': '0 12px 40px rgba(15, 23, 42, 0.16)',
        'luxury-gold': '0 4px 20px rgba(251, 191, 36, 0.15)',
        'luxury-lago': '0 4px 20px rgba(59, 130, 246, 0.15)',
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
        'elegant': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
