// eslint-disable-next-line @nx/enforce-module-boundaries
import { rootMain } from '../../../.storybook/main';
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    ...rootMain,

    core: { ...rootMain.core, builder: '@storybook/builder-webpack5' },

    stories: ['../src/app/**/*.stories.ts'],
    addons: ['@storybook/addon-essentials', ...(rootMain.addons || [])],
};

export default config;
