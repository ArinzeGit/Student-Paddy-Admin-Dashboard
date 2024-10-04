import type { Config } from "tailwindcss";
import {PluginAPI}  from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['Roboto', 'Montserrat', 'sans-serif'],
      },
      screens: {
        laptop: '1200px',
        screen1: '1500px',
        screen2: '1660px',
        screen3: '1760px',
        screen4: '1900px',
      },
      letterSpacing:{
        '1': '0.01em',
      }
    },
  },
  plugins: [function ({ addUtilities }:PluginAPI) {
    addUtilities({
      '.no-scrollbar': {
        /* Hide scrollbar for WebKit browsers */
        '-webkit-overflow-scrolling': 'touch',
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
      },
      '.no-scrollbar::-webkit-scrollbar': {
        display: 'none', /* Safari and Chrome */
      },
    });
  },],
};
export default config;
