// ./tailwind.config.js

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {
        margin:{
            center: "0 auto",
        },
       colors:{
         primary :"rgb(23 23 23)",
         secondary:"rgb(38 38 38)",
         accent:"rgb(67 56 202)",
         accentDark:"rgb(49 46 129)",
         accentLight:"rgb(99 102 241)"
       },
       boxShadow:{
        inset:"inset 2px 4px 8px 0 rgb(0 0 0 / 0.5)"
       }
       },
     },
     variants: {
       extend: {
       
       },
     },
     plugins: [],
   }