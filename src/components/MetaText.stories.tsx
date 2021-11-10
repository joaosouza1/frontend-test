import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MetaText } from './MetaText';

export default {
  title: 'Components/MetaText',
  component: MetaText,
} as ComponentMeta<typeof MetaText>;

const Template: ComponentStory<typeof MetaText> = (args) => <MetaText {...args} />;

export const Cuisine = Template.bind({});
Cuisine.args = {
  children: 'Seafood',
};

export const Price = Template.bind({});
Price.args = {
  children: '$$$$',
};
