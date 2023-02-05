import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MagicTextComponent } from './magic-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
    title: 'MagicTextComponent',
    component: MagicTextComponent,
    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule],
        }),
    ],
} as Meta<MagicTextComponent>;

const Template: Story<MagicTextComponent> = (args: MagicTextComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
