import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '3rem',
          md: '4rem',
          lg: '10rem'
        }
      },
      colors: {
        'primary': '#F0A835',
        'dark': '#333539'
      },
      fontFamily: {
        'jakarta': ['var(--font-jakarta), sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
