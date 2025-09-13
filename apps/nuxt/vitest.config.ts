import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/nuxt',
    plugins: [vue(), nxViteTsPaths()],
    test: {
        globals: true,
        cacheDir: '../../node_modules/.vitest',
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

        reporters: ['default'],
        coverage: {
            reportsDirectory: '../../coverage/nuxt',
            provider: 'v8',
        },
    },
});
