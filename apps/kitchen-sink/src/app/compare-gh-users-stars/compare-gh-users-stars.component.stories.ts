import type { Meta, StoryObj } from '@storybook/angular';
import { CompareGhUsersStarsComponent } from './compare-gh-users-stars.component';

const meta: Meta<CompareGhUsersStarsComponent> = {
    title: 'compare GH users stars',
    component: CompareGhUsersStarsComponent,
};

export default meta;
type Story =  StoryObj<CompareGhUsersStarsComponent>;

export const Primary: Story = {};
