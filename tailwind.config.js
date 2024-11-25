/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1240px',
        },
      },
      fontSize: {
        h2: [
          '46px',
          {
            lineHeight: '57.5px',
            fontWeight: '500',
          },
        ],
      },
      colors: {
        'regular-black': '#18181B',
        primary: '#3582E2',
      },
      backgroundImage: {
        presentation: "url('/img/presentation.webp')",
        'base-gradient': 'linear-gradient(91.3deg, #1668FF 0%, #9B4FFC 100%)',
        overlay: 'linear-gradient(180deg, rgba(24, 24, 27, 0) 0%, #18181B 133.82%)',
      },
    },
  },
  plugins: [],
}
