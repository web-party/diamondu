import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
    addons: ['@chromatic-com/storybook'],

    framework: {
        name: '@storybook/vue3-vite',
        options: {
            builder: {
                viteConfigPath: 'vite.config.mts',
            },
        },
    },
};

export default config;
