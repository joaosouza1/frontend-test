import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RestaurantGridDesktop } from './RestaurantGridDesktop';

import {
  LongName as LongNameCard,
  ShortName as ShortNameCard,
} from './RestaurantCardDesktop.stories'

export default {
  title: 'Components/RestaurantGridDesktop',
  component: RestaurantGridDesktop,
} as ComponentMeta<typeof RestaurantGridDesktop>;

const Template: ComponentStory<typeof RestaurantGridDesktop> = (args) => <RestaurantGridDesktop {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <LongNameCard {...LongNameCard.args} />,
    <ShortNameCard {...ShortNameCard.args} />,
    <LongNameCard {...LongNameCard.args} />,
    <ShortNameCard {...ShortNameCard.args} />,
    <LongNameCard {...LongNameCard.args} />,
    <ShortNameCard {...ShortNameCard.args} />,
    <LongNameCard {...LongNameCard.args} />,
    <LongNameCard {...LongNameCard.args} />,
    <LongNameCard {...LongNameCard.args} />,
    <ShortNameCard {...ShortNameCard.args} />,
    <LongNameCard {...LongNameCard.args} />,
    <LongNameCard {...LongNameCard.args} />,
  ]
}
