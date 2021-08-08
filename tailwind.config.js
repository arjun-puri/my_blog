const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  //   purge is for removing all the unnecessary css in the library and only import what is required in the mentioned files.
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  theme: {
    extend: {
      colors: {
        // beige
        paperback: '#f3f3d8',
        // orange
        'primary-100': '#FF6B35',
        'primary-0': '#F72C25',
        // purples
        'secondary-200': '#25bcf0',
        'secondary-100': '#BC9EC1',
        'secondary-0': '#514663',
        // greens (bluish)
        // 'tertiary-200': '#5B8E7D',
        'tertiary-100': '#2C8C99',
        'tertiary-0': '#17494F',
        'dracula-nosferatu': '#282a36',
        'dracula-aro': '#44475a',
        'dracula-cullen': '#f8f8f2',
        'dracula-vonCount': '#6272a4',
        'dracula-vanHelsing': '#8be9fd',
        'dracula-blade': '#50fa7b',
        'dracula-morbius': '#ffb86c',
        'dracula-buffy': '#ff79c6',
        'dracula-dracula': '#bd93f9',
        'dracula-marcelin': '#ff5555',
        'dracula-lincoln': '#f1fa8c',
      },
      fontFamily: {
        sans: ['Space Mono', 'Raleway', ...fontFamily.sans],
      },
      // some of the changes are kept here and some in the global.css
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
