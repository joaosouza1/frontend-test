import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Price } from './Price';
import { MetaText } from './MetaText';
import { Subheading } from './Subheading';

export default {
  title: 'Components/Price',
  component: Price,
} as ComponentMeta<typeof Price>;

const MetaTextTemplate: ComponentStory<typeof Price> = (args) =>(
  <MetaText>
    <Price {...args} />
  </MetaText>
)

export const MetaTextCheap = MetaTextTemplate.bind({});
MetaTextCheap.storyName = "Meta Text $"
MetaTextCheap.args = {
  dollarSigns: '$',
};

export const MetaTextExpensive = MetaTextTemplate.bind({});
MetaTextExpensive.storyName = "Meta Text $$$$"
MetaTextExpensive.args = {
  dollarSigns: '$$$$',
};

const SubheadingTemplate: ComponentStory<typeof Price> = (args) => (
  <Subheading>
    <Price {...args} />
  </Subheading>
)

export const SubheadingCheap = SubheadingTemplate.bind({});
SubheadingCheap.storyName = "Subheading $"
SubheadingCheap.args = {
  dollarSigns: '$',
};

export const SubheadingExpensive = SubheadingTemplate.bind({});
SubheadingExpensive.storyName = "Subheading $$$$"
SubheadingExpensive.args = {
  dollarSigns: '$$$$',
};
