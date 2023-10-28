import { rootMain } from '../../../.storybook/main';
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    ...rootMain,

    core: { ...rootMain.core, builder: '@storybook/builder-webpack5' },

    stories: [
        ...rootMain.stories,
        '../src/app/**/*.stories.mdx',
        '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-essentials', ...(rootMain.addons || [])],
};

export default config;
