import type {Meta, StoryObj} from '@storybook/react';

import Banner from './Banner';

const meta = {
    title: 'Banner',
    component: Banner,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: {
        name: 'Acrool React Flip Countdown',
        repositoryUrl: 'https://github.com/acrool/acrool-react-flip-countdown',
    },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};
