/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assests/hero/hero-bg.svg')",
        AboutLeft:"url('./src/assests/about/about-left-shape.svg')",
        AboutRight:"url('./src/assests/about/about-right-shape.svg')",
        DotsLeft:"url('./src/assests/about/left-dots.svg')",
        DotsRight:"url('./src/assests/about/right-dots.svg')",
        footerTexture: "url('/img/footer-texture.png')",


      },
      colors: {
        main: "#5864FF",
        primary: "#fff",
        secondary: "#162447",
        paragraph: "#5B657E",
        overlay: "#EEEFFF",
        background:"rgba(88, 100, 255, 0.1)",
        iconBg:"rgba(255, 255, 255, 0.13)"
        
      },
    },
    fontFamily:{
      Roboto:['Roboto', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
};
