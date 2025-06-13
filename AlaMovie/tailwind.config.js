/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      width:{
        'reel-width':'50px',
        'movie-width':'80px'
      },
      height:{
        'reel-height':'50px',
        'movie-height':'34px'
      },
      textColor:{
        'navs':'#444444',
        'active':'#C40E61'
      }
    },
  },
  plugins: [],
}

