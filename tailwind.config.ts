import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['VAGRoundedBlackSSK', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono]
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin 40s linear infinite reverse'
      },
      screens: {
        xs: '480px'
      },
      colors: {
        seagull: {
          DEFAULT: '#72BDE9',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#DCEFFA',
          300: '#B9DEF4',
          400: '#95CEEF',
          500: '#72BDE9',
          600: '#41A6E1',
          700: '#208CCB',
          800: '#186A9B',
          900: '#11496A',
          950: '#0D3852'
        },
        cerulean: {
          DEFAULT: '#00BBEF',
          50: '#A8ECFF',
          100: '#93E8FF',
          200: '#6ADFFF',
          300: '#42D6FF',
          400: '#19CDFF',
          500: '#00BBEF',
          600: '#008FB7',
          700: '#00637F',
          800: '#003747',
          900: '#000B0F',
          950: '#000000'
        },
        endeavour: {
          DEFAULT: '#00509D',
          50: '#56ACFF',
          100: '#41A2FF',
          200: '#188EFF',
          300: '#007AEF',
          400: '#0065C6',
          500: '#00509D',
          600: '#003365',
          700: '#00172D',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'moon-raker': {
          DEFAULT: '#CBD7F5',
          50: '#FFFFFF',
          100: '#FEFEFF',
          200: '#EDF2FC',
          300: '#DCE4F8',
          400: '#CBD7F5',
          500: '#A0B5ED',
          600: '#7593E5',
          700: '#4B71DC',
          800: '#2751CD',
          900: '#1F3FA2',
          950: '#1B368C'
        },
        mauvelous: {
          DEFAULT: '#F283B4',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEF2F7',
          300: '#FACDE1',
          400: '#F6A8CA',
          500: '#F283B4',
          600: '#ED5095',
          700: '#E71D77',
          800: '#B9135D',
          900: '#860E43',
          950: '#6D0B37'
        },
        'light-orchid': {
          DEFAULT: '#DDA6CC',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F4E1EE',
          400: '#E8C4DD',
          500: '#DDA6CC',
          600: '#CD7DB5',
          700: '#BE559D',
          800: '#9E3C80',
          900: '#762D5F',
          950: '#61254F'
        },
        ebb: {
          DEFAULT: '#EFECEA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#EFECEA',
          600: '#D7CFCA',
          700: '#BEB2AA',
          800: '#A6968A',
          900: '#8D796C',
          950: '#7D6B5F'
        },
        'spring-green': {
          DEFAULT: '#00EF8A',
          50: '#A8FFDA',
          100: '#93FFD1',
          200: '#6AFFC0',
          300: '#42FFAF',
          400: '#19FF9E',
          500: '#00EF8A',
          600: '#00B76A',
          700: '#007F49',
          800: '#004729',
          900: '#000F08',
          950: '#000000'
        }
      }
    }
  },
  plugins: []
} satisfies Config
