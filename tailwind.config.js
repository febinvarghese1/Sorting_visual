/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        primaryColor: '#222831',
        secondaryColor: '#393E46',
        thirdColor:'#00ADB5',
        fourthColor:'#EEEEEE',
      },
      height: {
        'total': '1000px',
      }
    },
  },
  plugins: [],
}