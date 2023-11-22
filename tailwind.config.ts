import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        ms: ["Mantou Sans", "system-ui", "Segoe UI"],

      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',

        'primary': '#334155',
        'secondary': "#64748B",
        pink: {
          150: "#D4009B",

        },
        gray: {
          50: "#F3F4F4",
          150: "#E9ECEF",
        },

      },
      borderRadius: {
        'btn': '500px',
      },
      fontSize: {
        s28: '1.75rem'
      },
      lineHeight: {
        'lh150': '150%',
      }
    },
  },
  plugins: [],

}
export default config
