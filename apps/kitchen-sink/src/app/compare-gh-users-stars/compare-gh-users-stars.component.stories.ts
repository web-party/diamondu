import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgChartsModule } from 'ng2-charts';
import { CompareGhUsersStarsComponent } from './compare-gh-users-stars.component';

export default {
    title: 'CompareGhUsersStarsComponent',
    component: CompareGhUsersStarsComponent,
    decorators: [
        moduleMetadata({
            imports: [NgChartsModule],
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
