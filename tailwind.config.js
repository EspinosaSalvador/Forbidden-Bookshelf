/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/html/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
// tailwind.config.js

module.exports = {
  // ...
  plugins: [
    require("@fortawesome/fontawesome-free"),
    // ...
  ],
  // ...
};
