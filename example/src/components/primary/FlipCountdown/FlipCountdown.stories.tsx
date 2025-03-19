import FlipCountdown from '@acrool/react-flip-countdown';
import type {Meta, StoryObj} from '@storybook/react';

import Loader from '../../atoms/Loader';



const meta = {
    title: 'Primary/FlipCountdown',
    component: FlipCountdown,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'Custom skeleton by component'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        message: 'loading...'
    },
} satisfies Meta<typeof FlipCountdown>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
    args: {},
};

