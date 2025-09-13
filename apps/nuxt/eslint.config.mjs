import withNuxt from './.nuxt/eslint.config.mjs'
// import baseConfig from '../../eslint.config.mjs';

export default withNuxt(
    {
        files: ['**/*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': ['warn', 4],
            'vue/max-attributes-per-line': 'off',
        },
    },
)/* .prepend(baseConfig) */;
