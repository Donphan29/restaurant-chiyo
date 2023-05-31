/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: { max: '767px' },
      md: { min: '768px' }
    },
    fontFamily: {
      bebas: ['var(--font-bebas-neue)'],
      roboto: ['var(--font-roboto-mono)'],
      mont_reg: ['var(--font-montserrat-reg)'],
      mont_thin: ['var(--font-montserrat-thin)'],
      source: ['var(--font-source)'],
      open: ['var(--font-open)'],
    }
  },
  plugins: [],
};
