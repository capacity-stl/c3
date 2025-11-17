/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './lib/**/*.{html,js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xxs: '0.625rem',
      xs: '0.734rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.047rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2.172rem',
      '4xl': '3rem',
    },
    colors: {
      night: '#002B67',
      'deep-space': '#02214D',
      white: '#FFFFFF',
      black: '#000000',
      earth: {
        50: '#F5FAFF',
        100: '#E6F2FF',
        200: '#80BEFF',
        300: '#007DFF',
        400: '#004B99',
      },
      sun: {
        100: '#FFF5E6',
        200: '#FFCF80',
        300: '#FF9F00',
        400: '#995F00',
      },
      mars: {
        100: '#FFE7ED',
        200: '#FF86A3',
        300: '#FF0E47',
        400: '#A80028',
      },
      meteor: {
        100: '#F0F2F5',
        200: '#DDE2EA',
        300: '#9AA9BF',
        400: '#567095',
      },
      neptune: {
        100: '#E6F7E8',
        200: '#82D68C',
        300: '#05AE19',
        400: '#024A0B',
      },
      nova: {
        100: '#FBECF5',
        200: '#EC9ECE',
        300: '#DA3E9E',
        400: '#961D67',
      },
      mercury: {
        100: '#FFEEE6',
        200: '#FFAC80',
        300: '#FF5900',
        400: '#993500',
      },
      aurora: {
        100: '#EDEFFC',
        200: '#A6B0F2',
        300: '#4D61E6',
        400: '#192DB3',
      },
      transparent: 'transparent',
    },
    extend: {
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '20px',
      },
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        outline: '0 0 0 1px #DDE2EA',
        'outline-focus': '0 0 0 2px #007DFF',
        'outline-error': '0 0 0 2px #FF0E47',
        contact: '0px 0px 3px rgba(2, 33, 77, 0.35);',
        'contact-focus': '0 0 3px #007DFF',
        'contact-error': '0 0 3px #FF0E47',
        small: '0 1px 3px rgba(2, 33, 77, 0.35);',
        medium: '0 2px 8px rgba(2, 33, 77, 0.35);',
        large: '0 2px 30px rgba(2, 33, 77, 0.35);',

        button: '0 1px 3px #02214D40',
        'inline-earth-300': 'inset 0 0 0 1px #007DFF',
        'inline-neptune-300': 'inset 0 0 0 1px #05AE19',
        'inline-mars-300': 'inset 0 0 0 1px #FF0E47',
        'inline-meteor-200': 'inset 0 0 0 1px #DDE2EA',
      },
      transitionTimingFunction: {
        swoosh: 'cubic-bezier(0.05, 0.9, 0.15, 0.95)',
        eager: 'cubic-bezier(0.15, 0.9, 0.3, 1)',
      },
      width: {
        240: '240px',
        320: '320px',
      },
      keyframes: {
        bounceDot: {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
      },
      animation: {
        bounceDot1: 'bounceDot 1.4s infinite ease-in-out',
        bounceDot2: 'bounceDot 1.4s infinite ease-in-out 0.2s',
        bounceDot3: 'bounceDot 1.4s infinite ease-in-out 0.4s',
      },
    },
  },
  safelist: [
    {
      pattern:
        /(\*:)?\b.*?-(night|deep-space|white|earth|sun|mars|meteor|neptune|nova|mercury|aurora)(-[0-9]{3})?\b/,
    },
  ],
}
