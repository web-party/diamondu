import nx from '@nx/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import { ConfigWithExtends } from '@eslint/config-helpers';

export default defineConfig(
    globalIgnores(['**/dist']),
    nx.configs['flat/base'],
    // these type assertions are workarounds until the upstream fixes it
    nx.configs['flat/javascript'] as ConfigWithExtends,
    nx.configs['flat/typescript'] as ConfigWithExtends,
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
        ignores: ['**/eslint.config.ts'],
        rules: {
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
