import baseConfig from '../../eslint.config';
import { configs as vueConfigs } from 'eslint-plugin-vue';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
    globalIgnores([
        '**/vite.config.*.timestamp*',
        '**/vitest.config.*.timestamp*',
    ]),
    baseConfig,
    vueConfigs['flat/recommended'],
    {
        name: 'vue-app/custom',
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': ['error', 4],
            'vue/max-attributes-per-line': 'off',
            'vue/attributes-order': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/multiline-html-element-content-newline': 'off',
            'vue/first-attribute-linebreak': 'off',
        },
    },
);
