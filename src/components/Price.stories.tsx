import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Price } from './Price';

export default {
  title: 'Components/Price',
  component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

export const _1 = Template.bind({});
_1.storyName = "$"
_1.args = {
  dollarSigns: '$',
};

export const _2 = Template.bind({});
_2.storyName = "$$"
_2.args = {
  dollarSigns: '$$',
};

export const _3 = Template.bind({});
_3.storyName = "$$$"
_3.args = {
  dollarSigns: '$$$',
};

export const _4 = Template.bind({});
_4.storyName = "$$$$"
_4.args = {
  dollarSigns: '$$$$',
};
