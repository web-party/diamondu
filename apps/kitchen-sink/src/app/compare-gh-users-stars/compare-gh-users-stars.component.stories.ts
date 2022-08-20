import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CompareGhUsersStarsComponent } from './compare-gh-users-stars.component';

export default {
    title: 'CompareGhUsersStarsComponent',
    component: CompareGhUsersStarsComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta<CompareGhUsersStarsComponent>;

const Template: Story<CompareGhUsersStarsComponent> = (
    args: CompareGhUsersStarsComponent
) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
