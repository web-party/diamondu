import baseConfig from '../../eslint.config.mjs';
import nx from '@nx/eslint-plugin';
import storybook from 'eslint-plugin-storybook';

export default [
    ...baseConfig,
    ...nx.configs['flat/angular'],
    ...nx.configs['flat/angular-template'],
    ...storybook.configs['flat/recommended'],
    {
        files: ['**/*.ts'],
        rules: {
            indent: ['error', 4],
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
        }
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
        }
    }
];
