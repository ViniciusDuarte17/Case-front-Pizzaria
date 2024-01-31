import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#FFFFFF',
      secondary: '#000000',
      accent: '#B4BCCF4D',
      neutral:'#B4BCCF69',
      info: '#B4BCCF',
      success: '#01C550',
      warning: '#FF9921',
      error: ''
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': '14px',
        'xs2': '16px',
        'sm': '18px',
        'base': '20px',
        'med': '22px',
        'med-lg': '24px',
        'lg': '28px',
        'xl':'32px',
        '2x1': '36px',
        '3x2': '38px',
        '3x3': '45px'
      },
    },
  },
  plugins: [],
  
};
export default config;
