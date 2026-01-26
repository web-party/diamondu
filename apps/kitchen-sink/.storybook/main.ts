// @ts-expect-error -- package (types) cannot be resolved with the current TS config
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    framework: '@storybook/angular',
    addons: ['@chromatic-com/storybook'],
    stories: ['../src/app/**/*.stories.ts'],
};

export default config;
