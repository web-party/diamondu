/// <reference types='vitest' />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
    cacheDir: '../../node_modules/.vite/kitchen-sink',

    plugins: [
        ...angular({
            tsconfig: `${import.meta.dirname}/tsconfig.spec.json`,
        }),
        nxViteTsPaths(),
    ],

    test: {
        reporters: ['default'],
        coverage: {
            reportsDirectory: '../../coverage/apps/kitchen-sink',
            provider: 'v8',
        },
        globals: true,
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        setupFiles: ['src/test-setup.ts'],
    },
});
