import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'About': { 'max': '950px' },
        'eight': { 'max': '800px' },
        'sixmit': { 'max': '640px' },
        'sixet': { 'max': '604px' },
        'footer': { 'max': '509px' },
        'home': { 'max': '500px' },
        'mini3': { 'max': '478px' },
        'menek': { 'max': '448px' },
        'menek2': { 'max': '367px' },
        'mini2': { 'max': '330px' },
        'mini': { 'max': '300px' }
      },
      fontSize: {
        '70': '70px',
        '60': '60px',
        '40': '40px',
        '30': '30px',
        '25': '25px',
        '20': '20px',
        '18': '18px',
        '16': '16px',
        '15': '15px',
        '12': '12px',
        '10': '10px',
        '5': '5px',
      },
      fontFamily: {
        'jet': 'Jetbrains Mono'
      },
      width: {
        "400":"400px",
        '392': '392px',
        'tre': '300px',
        'doshMed': '240px',
        'dosh': '200px',
        '100': '100px',
        '90': '90px',
      },
      height: {
        'All': '100vh',
        'tre': '300px',
        'dosh': '200px',
        'cin': '100px'
      },
      colors: {
        'blackGray': "#272a30",
        'Bg2': '#32363D',
        'Gr': '#969696',
        'sta': '#C3CBD3',
        'Orang': '#C96718',
        'Msyel': '#FFB82B',
        'Msyel2':'#F1BF51',
        "goldlow":"#949494"
      },
      borderRadius: {
        '50': '50%',
        '40': '40px',
        '30': '30px',
        '20': '20px',
        '10': '10px',
      },
      boxShadow: {
        'den': '-24px 0px, 24px 0px',
      },
      keyframes: {
        'rote': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
      , animation: {
        'rote': 'rote 2s linear infinite'
      },
    },
  },
  plugins: [],
};
export default config;
