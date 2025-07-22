import nx from '@nx/eslint-plugin';
// import prettier from 'eslint-config-prettier';

export default [
    { ignores: ['**/dist'] },
    ...nx.configs['flat/base'],
    ...nx.configs['flat/javascript'],
    ...nx.configs['flat/typescript'],
    // prettier,
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
        rules: {
            '@nx/enforce-module-boundaries': [
                'error',
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
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
        rules: {},
    },
    {
        files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
        rules: {},
    },
];
