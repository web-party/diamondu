/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        relative: true,
        files: ['./public/index.html', './src/**/*.vue']
    },
    prefix: 'tw-',
    theme: {
        extend: {},
    },
    plugins: [],
};
