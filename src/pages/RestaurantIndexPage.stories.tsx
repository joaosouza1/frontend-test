import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RestaurantIndexPage } from './RestaurantIndexPage';

export default {
  title: 'Pages/RestaurantIndexPage',
  component: RestaurantIndexPage,
} as ComponentMeta<typeof RestaurantIndexPage>;

const Template: ComponentStory<typeof RestaurantIndexPage> = (args) => <RestaurantIndexPage {...args} />;

export const Default = Template.bind({});
