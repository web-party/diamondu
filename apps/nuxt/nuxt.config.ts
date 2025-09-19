import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    workspaceDir: '../../',
    srcDir: 'src',

    devServer: {
        host: 'localhost',
        port: 4200,
    },

    typescript: {
        typeCheck: true,
        tsConfig: {
            extends: './tsconfig.app.json',
        },
    },

    imports: {
        autoImport: true,
    },

    css: ['~/assets/css/styles.css'],

    vite: {
        plugins: [nxViteTsPaths()],
    },

    compatibilityDate: '2024-08-03',
    modules: ['@nuxt/eslint'],
    eslint: {
        config: {
            stylistic: true,
            // standalone: false,
        }
    },
});
