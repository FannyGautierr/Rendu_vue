// ./tailwind.config.js

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {
        margin:{
            center: "0 auto",
        }
       },
     },
     variants: {
       extend: {
       
       },
     },
     plugins: [],
   }