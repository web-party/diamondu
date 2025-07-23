import type { Meta, StoryObj } from '@storybook/angular';
import { CompareGhUsersStars } from './compare-gh-users-stars';

const meta: Meta<CompareGhUsersStars> = {
    title: 'compare GH users stars',
    component: CompareGhUsersStars,
};

export default meta;
type Story =  StoryObj<CompareGhUsersStars>;

export const Primary: Story = {};
