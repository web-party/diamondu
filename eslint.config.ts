import nx from '@nx/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import type { ConfigWithExtends } from '@eslint/config-helpers';

export default defineConfig(
    globalIgnores(['**/dist']),
    nx.configs['flat/base'],
    // these type assertions are workarounds until the upstream fixes it
    nx.configs['flat/javascript'] as ConfigWithExtends,
    nx.configs['flat/typescript'] as ConfigWithExtends,
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
        extends: [
            stylistic.configs.customize({
                indent: 4,
                semi: true,
                jsx: false,
                braceStyle: '1tbs',
                severity: 'warn',
            })
        ],
        ignores: ['**/eslint.config.ts'],
        rules: {
            '@stylistic/max-statements-per-line': ['warn', { max: 2 }],
            '@stylistic/arrow-parens': ['warn', 'as-needed'],
            '@stylistic/space-infix-ops': ['warn', { ignoreTypes: true }],
            '@stylistic/member-delimiter-style': [
                'warn',
                {
                    multiline: { delimiter: 'comma', requireLast: false },
                    singleline: { delimiter: 'comma', requireLast: false },
                    overrides: {
                        interface: {
                            multiline: { delimiter: 'semi', requireLast: false }
                        }
                    }
                }
            ],
            '@nx/enforce-module-boundaries': [
                'warn',
                {
                    enforceBuildableLibDependency: true,
                    allow: [],
                    depConstraints: [
                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                    ],
                },
            ],
        },
    },
);
