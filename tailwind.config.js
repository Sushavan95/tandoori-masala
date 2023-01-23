/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#941C1A',
        secondary: '#A64202',
        dark: '#080808',
        darkShade: '#242424',
        para: '#4B4B4B',
        light: '#FFF8ED',
        borderColor: '#DDD5C9',
        success: '#198754',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#0dcaf0',
        accent: '#FF6400'
      },


      // screens: {
      //   '3xl': '1700px',
      // },
    },

    screens: {
      sm: '576px',

      md: '768px',

      lg: '1024px',

      xl: '1200px',

      '2xl': '1400px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '1.15rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '1.875rem',
        '2xl': '2.5rem',
        // '3xl': '8.75rem',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
