/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        notion: {
          bg: '#0d1117',
          text: '#18181c',
        },
        mint: '#64ffda',
      },
    },
  },
  plugins: [],
};
export default config;
