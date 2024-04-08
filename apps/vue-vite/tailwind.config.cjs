const { createGlobPatternsForDependencies } = require('@nx/vue/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(__dirname, 'index.html'),
        join(__dirname, 'src/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    prefix: 'tw-',
    darkMode: 'class',
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
