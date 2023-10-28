import type { StorybookConfig } from '@storybook/angular';

export const rootMain: StorybookConfig = {
    stories: [],
    framework: {
        name: '@storybook/angular',
        options: { enableIvy: false }
    },
    docs: {
        autodocs: true
    }
};
