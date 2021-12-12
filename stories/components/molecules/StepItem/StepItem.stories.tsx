import { Meta } from '@storybook/react';
import StepItem, { StepProps } from '../../../../components/molecules/StepItem';

export default {
    title: 'Components/Molecules/StepItem',
    component: StepItem
} as Meta

const Template = (args: StepProps) => <StepItem {...args} />

export const Default = Template.bind({})

Default.args = {
    step: 'step1',
    title: '1. Start',
    desc: 'Pilih salah satu game yang ingin kamu top up'
}