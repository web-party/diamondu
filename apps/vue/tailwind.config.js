/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
    content: [join(__dirname, 'public/index.html'), join(__dirname, 'src/**/*.vue')],
    theme: {
        extend: {},
    },
    plugins: [],
}
