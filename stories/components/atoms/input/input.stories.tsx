import { Meta } from '@storybook/react';
import FormItem, { FormItemProps } from '../../../../components/atoms/input';

export default {
    title: 'Components/Atoms/Input',
    component: FormItem,
} as Meta

const Template = (args: FormItemProps) => <FormItem {...args} />

export const Default = Template.bind({});

Default.args = {
    title: 'Nama Lengkap',
    placeHolder: 'Insert your full name'
}