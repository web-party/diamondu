const { join } = require('path');

/** @type {import('postcss-load-config').Config} */
module.exports = {
    plugins: {
        tailwindcss: {
            config: join(__dirname, 'tailwind.config.cjs'),
        },
        autoprefixer: {},
    },
};
