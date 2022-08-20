import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MagicTextComponent } from './magic-text.component';

export default {
    title: 'MagicTextComponent',
    component: MagicTextComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta<MagicTextComponent>;

const Template: Story<MagicTextComponent> = (args: MagicTextComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
