import defaultTheme from 'tailwindcss/defaultTheme';
import prose from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Cantarell', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [prose()],
};
