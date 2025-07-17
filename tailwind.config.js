/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00ff41',
        'terminal-dark': '#0a0a0a',
        'data-blue': '#0066cc',
        'pipeline-orange': '#ff6600',
        'api-purple': '#9933cc',
        'success-green': '#00cc44',
        'warning-yellow': '#ffcc00',
        'error-red': '#ff3333',
        'dark-bg': '#0d1117',
        'card-bg': '#161b22',
        'border-gray': '#30363d',
        'bp-purple': '#4B006E',
        'light-bg': '#ffffff',
        'light-text': '#222222',
        'white': '#ffffff',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'code': ['Fira Code', 'monospace']
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff41' },
          '100%': { boxShadow: '0 0 20px #00ff41, 0 0 30px #00ff41' }
        }
      }
    }
  },
  plugins: [],
} 