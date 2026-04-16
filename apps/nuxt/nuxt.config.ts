import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/test-utils/module'],

    css: ['~/assets/css/styles.css'],
    srcDir: 'src',
    workspaceDir: '../../',
    serverDir: 'src/server',

    devServer: {
        host: 'localhost',
        port: 4200,
    },

    compatibilityDate: '2024-08-03',

    vite: {
        plugins: [nxViteTsPaths()],
    },

    typescript: {
        typeCheck: true,
        tsConfig: {
            // might not be needed
            extends: '../../../tsconfig.base.json',
        },
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                severity: 'warn',
                jsx: false,
                // braceStyle: '1tbs',
            },
            // standalone: false,
        },
    },
});
