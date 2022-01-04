module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        tprimary:'#2D3132',
        bprimary:'#203B93'
      },
      width:{
        '3/7':'45%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
