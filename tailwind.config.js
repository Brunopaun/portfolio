/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'orange-8': '#e79574',
      'orange-9': '#e38763',
      'orange-10': '#e07a52',
      'orange-11':'#DD6E42',
      'marfim-5':'#E8DAB2',
      'gray-15': '#4F6D7A',
      'blue-4': '#C0D6DF',
      'platinum-2': '#EAEAEA'
    },
    extend:{
      margin:{
        '120':'120px'
      }
    }
  },
  plugins: [],
}
