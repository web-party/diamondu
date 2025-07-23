import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MagicText } from './magic-text';

const meta: Meta<MagicText> = {
    title: 'Magic text',
    component: MagicText,
    decorators: [
        applicationConfig({
            // List of providers and environment providers that should be available to the root component and all its children.
            providers: [provideAnimations()],
        }),
    ],
};

export default meta;
type Story = StoryObj<MagicText>;

export const Primary: Story = {};
