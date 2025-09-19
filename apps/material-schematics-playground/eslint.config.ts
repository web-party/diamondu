import baseConfig from '../../eslint.config';
import nx from '@nx/eslint-plugin';
import { defineConfig } from 'eslint/config';
import { ConfigWithExtends } from '@eslint/config-helpers';

export default defineConfig(
    baseConfig,
    nx.configs['flat/angular'] as ConfigWithExtends,
    nx.configs['flat/angular-template'] as ConfigWithExtends,
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/prefer-standalone': 'off',
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'sch',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'sch',
                    style: 'kebab-case',
                },
            ],
        },
    }
);
