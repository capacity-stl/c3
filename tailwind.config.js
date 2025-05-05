/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    // Disable preflight to avoid conflicts with web interface css resets
    preflight: false,
  },
  content: [
    './lib/**/*.{html,js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '0.714rem',
      sm: '0.839rem',
      base: '1rem',
      lg: '1.196rem',
      xl: '1.429rem',
      '2xl': '1.714rem',
      '3xl': '2.482rem',
      '4xl': '3rem',
    },
    colors: {
      night: '#002B67',
      'deep-space': '#02214D',
      white: '#FFFFFF',
      earth: {
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
      boxShadow: {
        outline: '0 0 0 1px #DDE2EA',
        'outline-focus': '0 0 0 2px #007DFF',
        'outline-error': '0 0 0 2px #FF0E47',
        contact: '0px 0px 3px rgba(2, 33, 77, 0.35);',
        'contact-focus': '0 0 3px #007DFF',
        'contact-error': '0 0 3px #FF0E47',
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
