import baseConfig from '../../eslint.config';
import { configs as nxConfigs } from '@nx/eslint-plugin';
import { configs as sbConfigs } from 'eslint-plugin-storybook';
import { Config, defineConfig } from 'eslint/config';

export default defineConfig(
    baseConfig,
    nxConfigs['flat/angular'] as Config,
    nxConfigs['flat/angular-template'] as Config,
    sbConfigs['flat/recommended'] as Config,
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
