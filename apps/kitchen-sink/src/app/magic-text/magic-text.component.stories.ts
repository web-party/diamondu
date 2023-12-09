import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MagicTextComponent } from './magic-text.component';

const meta: Meta<MagicTextComponent> = {
    title: 'Magic text',
    component: MagicTextComponent,
    decorators: [
        applicationConfig({
            // List of providers and environment providers that should be available to the root component and all its children.
            providers: [provideAnimations()],
        }),
    ],
};

export default meta;
type Story = StoryObj<MagicTextComponent>;

export const Primary: Story = {};
