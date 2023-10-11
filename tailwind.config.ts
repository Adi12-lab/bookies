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
          DEFAULT: '24px',
          md: '40px',
          lg: '60px'
        }
      },
      colors: {
        'primary': '#0D45E1',
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
