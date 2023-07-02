/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        relative: true,
        files: ['./public/index.html', './src/**/*.vue']
    },
    prefix: 'tw-',
    theme: {
        extend: {
            colors: {
                purple: {
                    980: '#1e0730'
                },
                red: {
                    980: '#4c0b0b'
                }
            }
        },
    },
    plugins: [],
};
