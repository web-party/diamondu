import type { Meta, StoryObj } from '@storybook/angular';
import { MagicText } from './magic-text';

const meta: Meta<MagicText> = {
    title: 'Magic text',
    component: MagicText,
};

export default meta;
type Story = StoryObj<MagicText>;

export const Primary: Story = {};
