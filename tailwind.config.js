module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    colors: {
      'custom-orange': '#ffcc00'
    },
    container: {
      center: false,  
    }
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... } 

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  variants: {
  },
  plugins: [],
}
