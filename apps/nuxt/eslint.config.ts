import withNuxt from './.nuxt/eslint.config.mjs';
// import baseConfig from '../../eslint.config';

export default withNuxt(
    {
        files: ['**/*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': ['warn', 4],
            'vue/max-attributes-per-line': 'off',
        },
    },
); /* .prepend(baseConfig) */ // would probably require https://eslint.nuxt.com/packages/module#custom-config-presets
