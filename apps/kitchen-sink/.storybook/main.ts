import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    framework: '@storybook/angular',
    addons: ['@chromatic-com/storybook'],
    stories: ['../src/app/**/*.stories.ts'],
};

export default config;
