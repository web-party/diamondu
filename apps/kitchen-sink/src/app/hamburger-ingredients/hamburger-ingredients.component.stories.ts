import type { Meta, StoryObj } from '@storybook/angular';
import { HamburgerIngredientsComponent } from './hamburger-ingredients.component';

const meta: Meta<HamburgerIngredientsComponent> = {
    component: HamburgerIngredientsComponent,
    title: 'HamburgerIngredientsComponent',
};
export default meta;
type Story = StoryObj<HamburgerIngredientsComponent>;

export const Primary: Story = {
    args: {},
};
