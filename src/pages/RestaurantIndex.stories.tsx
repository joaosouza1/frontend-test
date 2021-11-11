import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RestaurantIndex } from './RestaurantIndex';

export default {
  title: 'Pages/RestaurantIndex',
  component: RestaurantIndex,
} as ComponentMeta<typeof RestaurantIndex>;

const Template: ComponentStory<typeof RestaurantIndex> = (args) => <RestaurantIndex {...args} />;

export const Default = Template.bind({});
