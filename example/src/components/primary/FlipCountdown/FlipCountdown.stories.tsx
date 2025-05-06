import FlipCountdown from '@acrool/react-flip-countdown';
import {Flex} from '@acrool/react-grid';
import {useArgs} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import dayjs from 'dayjs';
import {useEffect} from 'react';

import {format} from '../../../config';



const meta = {
    title: 'Primary/FlipCountdown',
    component: FlipCountdown,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'Countdown timer with flipping animation'
            },
        },
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof FlipCountdown>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Running: Story = {
    args: {
        endTime: dayjs().add(12, 'hours').format(format.dateTime),
    },
    render: (args) => {
        return (
            <Flex style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                <FlipCountdown {...args} />
                <strong style={{color: 'gray'}}>endTime : current time plus 12 hours.</strong>
            </Flex>
        );
    },
};

export const NearEnd: Story = {
    args: {
        endTime: dayjs().add(10, 'second').format(format.dateTime),
    },
    render: (args) => {
        return (
            <Flex style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                <FlipCountdown {...args} />
                <strong style={{color: 'gray'}}>endTime : current time plus 10 seconds.</strong>
            </Flex>
        );
    },
};

export const End: Story = {
    args: {
        endTime: '2000-01-01 12:00:00',
    },
    render: (args) => {
        return (
            <Flex style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                <FlipCountdown {...args} />
                <strong style={{color: 'gray'}}>endTime : time in the past.</strong>
            </Flex>
        );
    },
};

export const HoursOverThreeDigits: Story = {
    args: {
        endTime: dayjs().add(100, 'hours').add(3, 'seconds').format(format.dateTime),
    },
    render: (args) => {
        return (
            <Flex style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                <FlipCountdown {...args} />
                <strong style={{color: 'gray'}}>endTime : current time plus 100 hours and 3 seconds.</strong>
            </Flex>
        );
    },
};

export const ChangTime: Story = {
    args: {
        endTime: dayjs().add(2, 'hours').add(0, 'minutes').add(2, 'seconds').format(format.dateTime),
    },
    render: (args) => {
        const [{endTime}, updateArgs] = useArgs();

        useEffect(() => {
            const timeout = setTimeout(() => {
                const newTime = dayjs().add(5, 'hours').add(5, 'minutes').add(2, 'seconds').format(format.dateTime);
                updateArgs({endTime: newTime});

            }, 5000);

            return () => clearTimeout(timeout);

        }, []);

        return (
            <Flex style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                <FlipCountdown {...args} />
                <strong style={{color: 'gray'}}>endTime :<br />
                    Start by current time plus 2 hours and 2 seconds.<br />
                    After 5 seconds.<br />
                    Change to the current time plus 5 hours, 5 minutes and 2 seconds.</strong>
            </Flex>
        );
    },
};
