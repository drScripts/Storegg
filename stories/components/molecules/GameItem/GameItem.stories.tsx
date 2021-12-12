import { Meta } from '@storybook/react';
import FeaturedGameItem, { FeaturedGameItemProps } from '../../../../components/molecules/FeaturedGameItem';


export default {
    title: 'Components/Molecules/GameItem',
    component: FeaturedGameItem,
} as Meta

const Template = (args: FeaturedGameItemProps) => <FeaturedGameItem {...args} />

export const Default = Template.bind({})

Default.args = {
    device: 'Mobile',
    name: 'Call of Duty Mobile',
    src: 'Thumbnail-3'
}