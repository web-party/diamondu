import baseConfig from '../../eslint.config';
import nx from '@nx/eslint-plugin';
import storybook from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';
import { ConfigWithExtends } from '@eslint/config-helpers';

export default defineConfig(
    baseConfig,
    nx.configs['flat/angular'] as ConfigWithExtends,
    nx.configs['flat/angular-template'] as ConfigWithExtends,
    storybook.configs['flat/recommended'],
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'd',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'd',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/prefer-signals': 'warn',
            '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'off',
        },
    },
    {
        files: ['**/*.html'],
        rules: {
            '@angular-eslint/template/prefer-control-flow': 'warn',
            '@angular-eslint/template/prefer-at-empty': 'warn',
            '@angular-eslint/template/prefer-self-closing-tags': 'warn',
        },
    },
    {
        files: ['.storybook/main.ts'],
        rules: {
            'storybook/no-uninstalled-addons': [
                'error',
                {
                    packageJsonLocation: '../../package.json',
                },
            ],
        },
    },
);
