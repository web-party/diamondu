import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AdSkeleton from './AdSkeleton.vue';

const meta: Meta<typeof AdSkeleton> = {
    component: AdSkeleton,
};
export default meta;
type Story = StoryObj<typeof AdSkeleton>;

export const Primary: Story = {};
