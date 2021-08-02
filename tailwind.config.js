const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  //   purge is for removing all the unnecessary css in the library and only import what is required in the mentioned files.
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
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
        'tertiary-200': '#5B8E7D',
        'tertiary-100': '#2C8C99',
        'tertiary-0': '#17494F',
      },
      fontFamily: {
        sans: ['Space Mono', 'Raleway', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // to preserve width and break words with hyphens
            // 'word-break': 'break-word',
            color: theme('colors.tertiary-0'),
            'font-family': 'Space Mono',
            a: {
              color: theme('colors.primary-0'),
              '&:hover': {
                color: theme('colors.tertiary-100'),
              },
              code: { color: theme('colors.primary-0') },
            },
            'h2,h3,h4': {
              color: theme('colors.secondary-0'),
              'font-family': 'BioRhyme',
              'scroll-margin-top': spacing[32],
            },
            'ul > li::before': {
              'background-color': theme('colors.tertiary-0'),
            },
            'ol > li::before': {
              color: theme('colors.tertiary-0'),
            },
            blockquote: {
              'border-color': theme('colors.primary-100'),
            },
            code: {
              color: theme('colors.pink.500'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
