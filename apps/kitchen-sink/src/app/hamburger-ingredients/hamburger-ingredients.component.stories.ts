import type { Meta, StoryObj } from '@storybook/angular';
import { HamburgerIngredients } from './hamburger-ingredients.component';

const meta: Meta<HamburgerIngredients> = {
    component: HamburgerIngredients,
    title: 'HamburgerIngredientsComponent',
};
export default meta;
type Story = StoryObj<HamburgerIngredients>;

export const Primary: Story = {
    args: {},
};
