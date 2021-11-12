import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RestaurantGrid } from './RestaurantGrid';

import {
  LongName as LongNameCard,
  ShortName as ShortNameCard,
} from './RestaurantCardDesktop.stories'

export default {
  title: 'Components/RestaurantGrid',
  component: RestaurantGrid,
} as ComponentMeta<typeof RestaurantGrid>;

const Template: ComponentStory<typeof RestaurantGrid> = (args) => <RestaurantGrid {...args} />;

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
