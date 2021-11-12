import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CTAButton } from './CTAButton';

export default {
  title: 'Components/CTAButton',
  component: CTAButton,
} as ComponentMeta<typeof CTAButton>;

const Template: ComponentStory<typeof CTAButton> = (args) => <CTAButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  primary: true,
};
